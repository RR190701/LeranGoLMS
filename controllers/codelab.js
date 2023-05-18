const CodeLab = require("./../models/codelabs")
const User = require('../models/user');
const ErrorResponse = require('./../utils/errorResponse');
exports.getAllCodeLabs = async(req, res, next) => {
    const courseId = req.params.courseId;
    if (!courseId) {
        //sending error
       return next(new ErrorResponse("no courseId provided)", 400));
      }
  
    let codeLabs = [];
    try{
    codeLabs = await CodeLab.find({courseId}).select("codeLabId").select("courseName").select("startTime").select("endTime")
    .select("courseId");

    }
    catch(error){
              //sending error
      next(error);
    }

    res.status(200).json({
        success:true,
        res:codeLabs
    })
}
exports.createCodeLab = async (req, res, next) => {
    const { codeLabId, startTime , endTime,courseName, courseId} = req.body;


    if (!codeLabId||!startTime||!endTime||!courseName||!courseId) {
      //sending error
     return next(new ErrorResponse("please provide an (startTime/ codeLabId/endTime/courseName/courseId)", 400));
    }

  
    try {
      const codeLab = await CodeLab.create({
        codeLabId,
        startTime,
        endTime,
        courseName,
        courseId
      });
  
     res.status(200).json({
        success:true,
        res:codeLab
     })
  
    } catch (error) {
      //sending error
      next(error);
    }
}

