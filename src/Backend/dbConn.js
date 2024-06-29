const { MongoClient} = require('mongodb');

let db; 
const url = 'mongodb://username:YZyh79RS1IHvcywl@sis-event-cluster-shard-00-00.k2v9b.mongodb.net:27017,sis-event-cluster-shard-00-01.k2v9b.mongodb.net:27017,sis-event-cluster-shard-00-02.k2v9b.mongodb.net:27017/lCse-User-Details?replicaSet=atlas-7mh5z3-shard-0&ssl=true&authSource=admin';

const dbName = 'User';

// Function to connect to MongoDB
async function dbconnect() {
    try {
        const client = await MongoClient.connect(url);
        console.log('Connected to MongoDB');
        db = client.db(dbName); // Set the reference to the database
    } catch (err) {
        console.error('Connection error:', err);
        throw new Error('Internal Server Error. Please try again later.'); // Throw an error to be handled by the caller
    }
}


// Function to fetch data from a collection based on a query
// async function getdata(collname, query) {
//     try {
//         const output = await db.collection(collname).find(query).toArray();
//         return output
//     } catch (err) {
//         console.error('Error fetching data:', err);
//         throw new Error('Error fetching data from the database.');
//     }
// }

// async function getPosts(collname) {
//     try {
//         const output = await db.collection(collname).find().sort({ createdAt: -1 }).limit(10).toArray();
//         return output
        
//     } catch (err) {
//         console.error('Error fetching data:', err);
//         throw new Error('Error fetching data from the database.');
//     }
// }


// // Function to find a single record in a collection based on a query
// async function record(collname, query) {
//     try {
//         const output = await db.collection(collname).findOne(query);
//         if (!output) {
//             throw new Error('User not found. Please provide valid details.');
//         }
//         return output;
//     } catch (err) {
//         console.error('Error finding record:', err);
//         throw new Error('User not found. Please provide valid details.');
//     }
// }

// Function to insert data into a collection
async function insertdata(colname, data) {
    try {
        const output = await db.collection(colname).insertOne(data);
        return 'Successfully registered.';
    } catch (err) {
        console.error('Error inserting data:', err);
        throw new Error('Registration failed. Please try again.');
    }
}

// Function to update a record in the database
async function updateRecord(collname, filter, update) {
    try {
        const result = await db.collection(collname).updateOne(filter, { $set: update });
        if (result.modifiedCount === 0) {
            throw new Error('No changes detected or user not found.');
        }
        return 'User details updated successfully.';
    } catch (err) {
        console.error('Error updating record:', err);
        throw new Error('User details update failed. Please try again.');
    }
}


module.exports = {
    dbconnect,
    getdata,
    record,
    insertdata,
    getPosts,
    updateRecord
};