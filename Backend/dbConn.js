const { MongoClient } = require('mongodb');

let db; 
const url = 'mongodb://alumni:alumni@ac-plr61ft-shard-00-00.wqjmazy.mongodb.net:27017,ac-plr61ft-shard-00-01.wqjmazy.mongodb.net:27017,ac-plr61ft-shard-00-02.wqjmazy.mongodb.net:27017/?replicaSet=atlas-73oxf6-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

const dbName = 'test';

// Function to connect to MongoDB
async function dbconnect() {
    try {
        const client = await MongoClient.connect(url);
        console.log('Connected to MongoDB');
        db = client.db(dbName);
         // Set the reference to the database
    } catch (err) {
        console.error('Connection error:', err);
        throw new Error('Internal Server Error. Please try again later.'); // Throw an error to be handled by the caller
    }
}

// Function to fetch data from a collection based on a query
async function getdata(collname, query) {
    try {
        const output = await db.collection(collname).find(query).toArray();
        return output
    } catch (err) {
        console.error('Error fetching data:', err);
        throw new Error('Error fetching data from the database.');
    }
}

// Function to find a single record in a collection based on a query
// async function record(collname, query) {
//     try {
//         const output = await db.collection(collname).find(query);
//         if (!output) {
//             throw new Error('User not found. Please provide valid details.');
//         }
//         return collname;
//     } catch (err) {
//         console.error('Error finding record:', err);
//         throw new Error('User not found. Please provide valid details.');
//     }
// }

async function record(collname, query) {
    try {
        const output = await db.collection(collname).findOne(query); // Use findOne to get a single document
        if (!output) {
            throw new Error('User not found. Please provide valid details.');
        }
        return output; // Return the retrieved document
    } catch (err) {
        console.error('Error finding record:', err);
        throw new Error('User not found. Please provide valid details.');
    }
}


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

// Function to create a new collection
async function createCollection(collname, options = {}) {
    try {
        await db.createCollection(collname, options);
    } catch (err) {
        console.error('Error creating collection:', err);
        throw new Error('Failed to create collection. Please try again.');
    }
}

module.exports = {
    dbconnect,
    getdata,
    record,
    insertdata,
    updateRecord,
    createCollection
};