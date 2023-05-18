const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const AssignCourseSchema = new mongoose.Schema({

    userId: {
        type: String,
        required:[true, "Please provide a userId"],   
        select:false

    },
    courseId: {
        type:String,
        required:[true, "Please provide a courseId"],
        select:false,
    },
    courseName: {
        type: String,
        required:[true, "Please provide a courseName"],   
        select:false,

    },
    user_courseId: {
        type:String,
        required:[true, "Please provide a user_courseID"],
        select:false,
    },
    

});

const AssignCourse = mongoose.model("AssignCourse", AssignCourseSchema); 

module.exports = AssignCourse;