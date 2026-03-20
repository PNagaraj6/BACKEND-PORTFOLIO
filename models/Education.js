const mongoose = require("mongoose")

const educationSchema = new mongoose.Schema({
    year:Number,
    qualification:String,
    institute:String,
    mini_para:String

}) 
 
module.exports = mongoose.model("Education",educationSchema)