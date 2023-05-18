const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    courseName: {
        type: String,
        required:[true, "Please provide a courseName"],   
        unique:true

    },
    courseInfo: {
        type:String,
        required:[true, "Please provide a courseInfo"],
        select:false,
    },
    

});

const Course = mongoose.model("Course", courseSchema); 

module.exports = Course;