const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const CodeLabSchema = new mongoose.Schema({

    codeLabId: {
        type: String,
        required:[true, "Please provide a courseRoomId"],   
        select:false,    
        unique:true,
        timestamp:true

    },
    courseName: {
        type: String,
        required:[true, "Please provide a courseName"],   
        select:false

    },
    courseId: {
        type: String,
        required:[true, "Please provide a courseId"],   
        select:false,

    },
    date:{
   type:Date
    },
    startTime:{
        type:String,
        required:[true,"Please enter start time"]
    },
    endTime:{
        type:String,
        required:[true,"Please enter end time"]
    },
    

});

const CodeLab = mongoose.model("CodeLab", CodeLabSchema); 

module.exports = CodeLab;