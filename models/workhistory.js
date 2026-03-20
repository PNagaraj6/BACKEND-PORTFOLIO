const mongoose = require("mongoose")

const historySchema = new mongoose.Schema({
    time_period:String,
    Role:String,
    experience:String,
    about_role:String
})

module.exports = mongoose.model("Workhistory",historySchema)