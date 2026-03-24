const mongoose = require("mongoose")

const toolkitSchema = new mongoose.Schema(
    {
        category:String,
        skills:{
            name:String,
            level:String
        }
      
    }
)

module.exports = mongoose.model("Mytoolkit",toolkitSchema)