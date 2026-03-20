const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema(
    {
        title:String,
        catageory:String,
        mini_discrption:String,
        tool_used:String
    }
)

module.exports = mongoose.model("Mywork",projectSchema)