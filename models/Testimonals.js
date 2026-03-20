const mongoose = require("mongoose");

const goodwordsSchema = new mongoose.Schema({
title:String,
description:String,
img:String,
name:String
})

module.exports = mongoose.model("Testimonals",goodwordsSchema)