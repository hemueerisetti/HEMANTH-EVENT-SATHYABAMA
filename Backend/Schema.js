const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    Name: String,
    Email:String,
    Event_Name:String,
    Event_Date:Date,
    Event_Time:String,
    Event_Venue:String,
    Event_Capacity:String,
    Image: String,

})

const Event_Schema =mongoose.model("Event_Card",UserSchema)

module.exports=Event_Schema;