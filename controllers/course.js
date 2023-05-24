const AssignCourse = require('../models/assignCourse');
const Course = require('../models/courses');
const User = require('../models/user');
const ErrorResponse = require('./../utils/errorResponse');
exports.AddCourse = async(req, res, next) => {
    const { courseInfo, courseName} = req.body;


    if (!courseInfo||!courseName) {
      //sending error
     return next(new ErrorResponse("please provide an (courseName/courseInfo)", 400));
    }
  
    try {
      const course = await Course.create({
        courseName,
        courseInfo,
       
      });
  
      res.status(200).json({
        success: true,
        message:"Course added successfully"
      });
  
    } catch (error) {
      //sending error
      next(error);
    }
}
exports.getSingleCourse = async(req, res, next) => {

  const courseId = req.params.courseId;
  const username = req.params.username;
  let role;
  try{
    
    try{
      const user = await User.findOne({ username }).select("role").select("username");
  
      if (!user) {
        //sending error
        return next(
          new ErrorResponse("invalid username", 401)
        );
      }

       role = user.role;
    }
    catch(error){
      next(error);
    }
    console.log(courseId)
    const course = await Course.findOne({_id:courseId}).select("courseName").select("courseInfo");
     res.status(200).json({
      success:true,
      res:course,
      role
     })

  }
  catch(error){
    next(error);
  }

}
exports.getUsersAllCourse = async (req, res, next) => {
  const username = req.params.username;
   let courses =[];
   let user;
   try{

    user = await User.findOne({ username }).select("password").select("username").select("role");
  
    if (!user) {
      //sending error
      return next(
        new ErrorResponse("invalid username", 401)
      );
    }
  console.log(user._id)
    try{
      if(user.role != "Admin"){
        courses = await AssignCourse.find({userId:user._id}).select("courseName").select("courseId")

      }
      else{
        courses = await Course.find();

      }
  
      }
      catch(error){
                //sending error
        next(error);
      }

    
   }
   catch(error){
     next(error);
   }


    res.status(200).json({
        success:true,
        role:user.role,
        res:courses
    })
}



exports.getAllCourse = async (req, res, next) => {
  let courses =[];
   try{
   courses = await Course.find();

   }
   catch(error){
             //sending error
     next(error);
   }

   res.status(200).json({
       success:true,
       res:courses
   })
}