const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

//DECALRE APP 

const app = express();
app.use(express.json());
app.use(cors());

// CONNECT TO MONGODB
let db; 
const url = 'mongodb://localhost:27017/';
const dbName ='event-sathyabama'; 


// Function to connect to MongoDB
async function dbconnect() {
    try {
        const client = await MongoClient.connect(url).then(
            console.log("MONGODB IS CONNECTED")
        );
        
        db = client.db(dbName);
        console.log(dbName);
    } catch (err) {
        console.error('Connection error:', err);
        throw new Error('Internal Server Error. Please try again later.'); // Throw an error to be handled by the caller
    }

}


app.post('/validate', async (req, res) => {
  const { userType, regNo, password } = req.body;
  

  try {
      // Check if all fields are provided
    if (!userType || !regNo || !password) {
        return res.status(400).json({ message: "ALL FIELDS ARE REQUIRED" });
    }

      // Fetch user based on userType
    if (userType === 'student') {
        user = await db.collection('student').findOne({ regNo}); // Corrected to db.collection
    } else if (userType === 'club-admin') {
        user = await db.collection('club-admin').findOne({ regNo }); // Corrected to db.collection
    } else if (userType === 'staff') {
        user = await db.collection('staff').findOne({ regNo }); // Corrected to db.collection
    } else {
        return res.status(400).json({ message: "INVALID USERTYPE!!" });
    }
    console.log(user);
      
      // If user is not found
    if (!user) {
        return res.status(401).json({ message: 'INVALID CREDENTIALS!!' });
    }
     

      // You may want to include password checking logic here if needed
    res.status(200).json({ message: 'LOGIN SUCCESSFUL!!' });
    console.log(res.status);
  } catch (error) {
      console.log('error', error);
      res.status(500).json({ message: 'INTERNAL SERVER ERROR', error: error.message });
  }
});



// Start the server
app.listen(8000, async(err) => {
  if (err) throw err;
  await dbconnect();
  console.log("hello");
  console.log('Server started on port 8000');
});
