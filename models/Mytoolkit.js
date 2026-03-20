const mongoose = require("mongoose")

const toolkitSchema = new mongoose.Schema(
    {
        category:String,
        Skills:{
            name:String,
            level:String
        }
      
    }
)

module.exports = mongoose.model("Mytoolkit",toolkitSchema)