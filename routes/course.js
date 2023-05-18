//A private route that will be only
const express = require('express');
const router =  express.Router();
const { protect } = require('../middlewares/auth');
const { getAllCourse, AddCourse, getUsersAllCourse, getSingleCourse } = require('../controllers/course');
const { route } = require('./auth');

router.route("/getAllCourses").get(protect, getAllCourse);
router.route("/addCourses").post(protect,AddCourse);
router.route("/getUsersAllCourses/:username").get(protect, getUsersAllCourse);
router.route("/getSingleCourse/:courseId/:username").get(protect, getSingleCourse);
module.exports = router;