const AssignCourse = require("./../models/assignCourse")
const Course = require('../models/courses');
const User = require('../models/user');
const ErrorResponse = require('./../utils/errorResponse');
exports.getAllUser = async(req, res, next) => {
    let users =[];
    try{
    users = await User.find({'role': {$ne : "Admin"}}).select("username");

    }
    catch(error){
              //sending error
      next(error);
    }

    res.status(200).json({
        success:true,
        res:users
    })
}
exports.assignCourse = async (req, res, next) => {
    const { userId, courseId , user_courseId,courseName} = req.body;


    if (!userId||!courseId||!user_courseId||!courseName) {
      //sending error
     return next(new ErrorResponse("please provide an (courseId/ userId/user_courseId/courseName)", 400));
    }


  
    try {

      const singleCourseRelation = await AssignCourse.findOne({ user_courseId });
      if (singleCourseRelation) {
        //sending error
        return next(
          new ErrorResponse("Course already assigned", 401)
        );
      }

      const courseRelation = await AssignCourse.create({
        userId,
        courseId,
        user_courseId,
        courseName
       
      });
  
     res.status(200).json({
        success:true,
        res:courseRelation
     })
  
    } catch (error) {
      //sending error
      next(error);
    }
}

