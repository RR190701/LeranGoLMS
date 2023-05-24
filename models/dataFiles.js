const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({

    fileName: {
        type: String,
        required:[true, "Please provide a file"],   
        unique:true

    },
    courseId :{
        type:String,
        required:[true, "Please provide a course ID"],  
    }
    

});

const UploadFile = mongoose.model("UploadFile", fileSchema); 

module.exports = UploadFile;