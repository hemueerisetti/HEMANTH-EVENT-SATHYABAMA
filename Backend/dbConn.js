const { MongoClient } = require('mongodb');

let db; 
// const dbName = 'event-sathyabama';
const url = 'mongodb://alumni:alumni@ac-plr61ft-shard-00-00.wqjmazy.mongodb.net:27017,ac-plr61ft-shard-00-01.wqjmazy.mongodb.net:27017,ac-plr61ft-shard-00-02.wqjmazy.mongodb.net:27017/event-sathyabama?ssl=true&replicaSet=atlas-73oxf6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0 ';



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
async function getDb(){
    if(!db){
        throw new Error("DATABASE IS NOT CONNECTED.{CHECK dbconnect()}");
    }
    return db
}   
module.exports={
    dbconnect,
    getDb
};