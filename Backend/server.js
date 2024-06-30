const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { getdata, dbconnect, record, insertdata, updateRecord, createCollection } = require('./dbConn');
const path = require('path');
const multer = require('multer');

const sec = "874b8y76r2u";

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Multer middleware for handling multipart/form-data (file upload)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads/')); // Adjust the path to the correct folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original filename
  }
});

const upload = multer({ storage: storage });

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Define schema for student data
const StudentSchema = new mongoose.Schema({
  regNo: String,
  name: String,
  email: String,
  section: String
}, { strict: false }); // Adding strict: false allows additional fields

// Routes
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Route for user login
app.post('/login', async (req, res) => {
  const { userType, regNo, password } = req.body;

  try {
    let user;

    // Check usertype and find user in the appropriate collection
    if (userType === 'student') {
      user = await record('Student', {"regNo": regNo} );
    } else if (userType === 'club-admin') {
      user = await record('clubadmin', {"regNo": regNo});
    } else {
      return res.status(400).json({ error: 'Invalid usertype' });
    }

    if (!user || user.password !== password) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Extract user details for the token payload
    const { Name, email, section } = user;

    const token = jwt.sign({ regNo,Name, email, section}, sec, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error while logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for fetching event details
app.get('/events', async (req, res) => {
  try {
    // Call the function to fetch data from the events collection
    const events = await getdata('events', {});

    // Send the retrieved events as a response
    res.json(events);
  } catch (error) {
    console.error('Error while fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/event', upload.single('eventimage'), async (req, res) => {
  try {
    // Extract data from the request body
    const { fullname, email, phone, eventname, eventdate, eventtime, eventvenue, eventcapacity } = req.body;
    
    // Construct the path to the uploaded image
    const eventimage = `\\uploads\\${req.file.filename}`; // Create the path in the desired format

    // Data object to insert into the database
    const eventData = {
      fullname,
      email,
      phone,
      eventname,
      eventdate,
      eventtime,
      eventvenue,
      eventcapacity,
      eventimage
    };

    // Insert event data into the 'events' collection
    await insertdata('events', eventData);

    // Create a new collection dynamically with the eventname
    const StudentModel = mongoose.model(eventname, StudentSchema);

    // Convert eventname to lowercase and replace spaces with underscores
    eventname_col = eventname.toLowerCase().replace(/\s+/g, '_');

    // Create a new collection dynamically with the eventname
    await createCollection(eventname_col);

    res.json({ message: 'Event registered successfully' });
  } catch (error) {
    console.error('Error while registering event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to check if the student has applied for any events
app.post('/check-application', async (req, res) => {
  const { regNo } = req.body;
  const appliedEvents = [];

  try {
    const events = await getdata('events', {});

    for (const event of events) {
      // Convert eventname to lowercase and replace spaces with underscores
      const eventCollectionName = event.eventname.toLowerCase().replace(/\s+/g, '_');
      // Ensure the correct model is used
      const EventCollection = mongoose.model(eventCollectionName, StudentSchema);

      // Check if the student has applied for the event
      const studentsApplied = await getdata(eventCollectionName, { regNo });
      if (studentsApplied.length > 0) {
        appliedEvents.push(event.eventname);
      }
    }

    res.json(appliedEvents);
  } catch (error) {
    console.error('Error while checking applications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Route to handle the application to an event
app.post('/event-apply/:eventname', async (req, res) => {
  const { eventname } = req.params;
  const { regNo } = req.body;

  try {
    // Convert eventname to lowercase and replace spaces with underscores
    const eventCollectionName = eventname.toLowerCase().replace(/\s+/g, '_');

    // Check if the event exists
    const event = await getdata('events', { eventname: eventname });
    if (!event.length) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Check if the student is already applied to the event
    const studentsApplied = await getdata(eventCollectionName, { regNo });
    if (studentsApplied.length > 0) {
      return res.status(400).json({ error: 'You have already applied for this event' });
    }

    // Find student data
    const studentData = await record('Student', { regNo });

    // Extract only required fields: regNo, name, email, section
    const applicationData = {
      regNo: studentData.regNo,
      Name: studentData.Name,
      email: studentData.email,
      section: studentData.section
    };

    // Insert student data into the event's collection
    await insertdata(eventCollectionName, applicationData);

    res.json({ message: 'Applied successfully' });
  } catch (error) {
    console.error('Error while applying for the event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




// Start the server
app.listen(8000, (err) => {
  if (err) throw err;
  dbconnect();
  console.log('Server started on port 8000');
});
