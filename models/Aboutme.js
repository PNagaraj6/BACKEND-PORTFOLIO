const mongoose = require("mongoose")

const aboutSchema = new mongoose.Schema (
{
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    para:{
        type:String,
        required:true
    },
    projects:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    certificates_won:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Aboutme", aboutSchema);