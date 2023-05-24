const UploadFile = require('../models/dataFiles')
const ErrorResponse = require('./../utils/errorResponse')
exports.UploadFiles = async(req, res, next) => {
    const filename = Date.now() + "_" + req.files.myFile.name;
    const file = req.files.myFile;
    let uploadPath = __dirname + "/../public/images/" + filename;
    console.log(filename);
    file.mv(uploadPath, (err) => {
      if (err) {
        return res.send(err);
      }
    });

    const { courseId} = req.body;

    if (!courseId || !file) {
      //sending error
     return next(new ErrorResponse("please provide an (courseId/file)", 400));
    }
  
    try {
      const course = await UploadFile.create({
     fileName: filename,
     courseId
       
      });
  
      res.status(200).json({
        success: true,
        message:"File Uploaded successfully"
      });
  
    } catch (error) {
      //sending error
      next(error);
    }

}

exports.getCourseAllFile = async (req, res, next) => {
  const courseId = req.params.courseId;
   let files =[];
  
    try{
        files = await UploadFile.find({courseId}).select("fileName").select("courseId");

      
      }
      catch(error){
                //sending error
        next(error);
      }



    res.status(200).json({
        success:true,
        res:files
    })
}


exports.getAllFiles = async(req, res, next) => {

  let files =[];
  try{
  files = await UploadFile.find();

  }
  catch(error){
            //sending error
    next(error);
  }

  res.status(200).json({
      success:true,
      res:files
  })

}