let express=require('express')
const mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors=require('cors')
let jwt = require('jsonwebtoken');
let{getdata,dbconnect,record,insertdata,getPosts,updateRecord}=require('./dbConn');
const path = require('path');
const multer = require('multer');

// Define a schema
const Schema = mongoose.Schema;
const EventSchema = new Schema({
  fullname: String,
  email: String,
  phone: String,
  eventname: String,
  eventdate: Date,
  eventtime: String,
  eventvenue: String,
  eventcapacity: Number,
  eventimage: String // You might want to store the path to the image in the database
});

const studentSchema = new Schema({
  username: String,
  password: String
});

const staffSchema = new Schema({
  username: String,
  password: String
});

// Define models
const StudentModel = mongoose.model('Student', studentSchema);
const StaffModel = mongoose.model('Staff', staffSchema);
const EventModel = mongoose.model('Event', EventSchema);

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Multer middleware for handling multipart/form-data (file upload)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define the destination folder for uploaded files
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
  res.send('Hello World!');
});

// Route for user login
app.post('/login', async (req, res) => {
  const { userType, regNo, password } = req.body;

  try {
    let user;

    // Check usertype and find user in the appropriate collection
    if (userType === 'student') {
      user = await record('Student', { regNo }); // Assuming 'username' is the field for student's username
    } else if (userType === 'staff') {
      user = await record('Staff', { regNo }); // Assuming 'username' is the field for staff's username
    } else {
      return res.status(400).json({ error: 'Invalid usertype' });
    }

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ regNo, userType }, 'your-secret-key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error while logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/eventcard', async (req, res) => {
  try {
    const events = await EventModel.find({});
    res.json(events);
  } catch (error) {
    console.error('Error while fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to handle event registration form submission
app.post('/event', upload.single('eventimage'), async (req, res) => {
  try {
    const { fullname, email, phone, eventname, eventdate, eventtime, eventvenue, eventcapacity } = req.body;
    const eventimage = req.file.path; // Get the path to the uploaded image

    // Create a new event document
    const newEvent = new EventModel({
      fullname,
      email,
      phone,
      eventname,
      eventdate,
      eventtime,
      eventvenue,
      eventcapacity,
      eventimage
    });

    // Save the event document to the database
    await newEvent.save();

    res.status(201).json({ message: 'Event registered successfully' });
  } catch (error) {
    console.error('Error while registering event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen('8000',(err)=>{
  if(err) throw err;
  dbconnect()
  console.log('server started')
})