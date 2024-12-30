const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const multer = require('multer');
const path = require('path');

// Declare the app
const app = express();
app.use(cors());

// MongoDB connection setup
let db;
const url = 'mongodb://localhost:27017/';
const dbName = 'sathyabama_Event';

async function dbconnect() {
  try {
    const client = await MongoClient.connect(url);
    console.log("MONGODB IS CONNECTED");
    db = client.db(dbName);
  } catch (err) {
    console.error('Connection error:', err);
    throw new Error('Internal Server Error. Please try again later.');
  }
}

// Multer storage setup for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Storage/Event_Image'); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// API Endpoint for validating users
app.post('/validate', async (req, res) => {
  const { userType, regNo, password } = req.body;

  console.log("User Validation Request Body:", req.body);

  try {
    if (!userType || !regNo || !password) {
      return res.status(400).json({ message: "ALL FIELDS ARE REQUIRED" });
    }

    let user;
    if (userType === 'student') {
      user = await db.collection('student').findOne({ userType, regNo, password });
    } else if (userType === 'club-admin') {
      user = await db.collection('club-admin').findOne({ userType, regNo, password });
    } else if (userType === 'staff') {
      user = await db.collection('staff').findOne({ userType, regNo, password });
    } else {
      return res.status(400).json({ message: "INVALID USERTYPE!!" });
    }

    console.log("User Found:", user);

    if (!user) {
      return res.status(401).json({ message: 'INVALID CREDENTIALS!!' });
    }

    res.status(200).json({ message: 'LOGIN SUCCESSFUL!!' });
  } catch (error) {
    console.error('Error during user validation:', error);
    res.status(500).json({ message: 'INTERNAL SERVER ERROR', error: error.message });
  }
});

// API Endpoint for event registration
app.post("/events", upload.single("eventimage"), async (req, res) => {
  try {
    const {
      fullname,
      email,
      phone,
      eventname,
      eventdate,
      eventtime,
      eventvenue,
      eventcapacity,
    } = req.body;

    console.log("Event Registration Request Body:", req.body);

    const imagePath = req.file ? req.file.path : null; // Save the image path if uploaded

    if (!eventname) {
      return res.status(400).json({ message: "Event Name is required." });
    }

    // Create dynamic collection name from eventname
    const collectionName = eventname.replace(/\s+/g, "_").toLowerCase();
    const dynamicCollection = db.collection(collectionName);

    // Insert event data into dynamic collection
    const eventData = {
      fullname,
      email,
      phone,
      eventname,
      eventdate,
      eventtime,
      eventvenue,
      eventcapacity,
      imagePath,
      createdAt: new Date(),
    };

    console.log("Event Data to Insert:", eventData);

    await dynamicCollection.insertOne(eventData);

    res.status(201).json({ message: "Event registered successfully!" });
  } catch (err) {
    console.error("Error registering event:", err);
    res.status(500).json({ message: "Failed to register the event. Please try again." });
  }
});

// Start server and connect to the database
app.listen(8000, async (err) => {
  if (err) throw err;
  await dbconnect();
  console.log('Server started on port 8000');
});
