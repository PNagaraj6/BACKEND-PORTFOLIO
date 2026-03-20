const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    date:String,
    category:String,
    title:String,
    description:String

})

module.exports = mongoose.model("Blog",blogSchema)