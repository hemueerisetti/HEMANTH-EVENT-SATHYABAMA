const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { getdata, dbconnect, record, insertdata, getPosts, updateRecord } = require('./dbConn');
const path = require('path');
const multer = require('multer');

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Multer middleware for handling multipart/form-data (file upload)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); // Define the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original filename
  }
});

const upload = multer({ storage: storage });

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.get('/', (req, res) => {
  res.send('Backend is working!!');
});

// // Route for user login
// app.post('/login', async (req, res) => {
//   const { userType, regNo, password } = req.body;

//   try {
//     let user;

//     // Check usertype and find user in the appropriate collection
//     if (userType === 'student') {
//       user = await record('Student', { regNo });
//     } else if (userType === 'staff') {
//       user = await record('Staff', { regNo });
//     } else {
//       return res.status(400).json({ error: 'Invalid usertype' });
//     }

//     if (!user || user.password !== password) {
//       return res.status(401).json({ error: 'Invalid username or password' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ regNo, userType }, 'your-secret-key', { expiresIn: '1h' });

//     res.json({ token });
//   } catch (error) {
//     console.error('Error while logging in:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

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

// Route for saving event data including image upload
app.post('/event', upload.single('eventimage'), async (req, res) => {
  try {
    // Extract data from the request body
    const { fullname, email, phone, eventname, eventdate, eventtime, eventvenue, eventcapacity } = req.body;
    
    // Construct the path to the uploaded image
    const eventimage = req.file.path.replace('public', ''); // Remove 'public/' from the path

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

    // Call insertdata function to insert event data into the database
    await insertdata('events', eventData);

    res.json({ message: 'Event registered successfully' });
  } catch (error) {
    console.error('Error while registering event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(8000, (err) => {
  if (err) throw err;
  dbconnect();
  console.log('Server started on port 8000');
});