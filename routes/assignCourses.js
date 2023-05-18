//A private route that will be only
const express = require('express');
const router =  express.Router();
const { protect } = require('../middlewares/auth');
const { getAllUser, assignCourse } = require('../controllers/assignCourse');

router.route("/getAllUsers").get(protect, getAllUser);
router.route("/assign").post(protect,assignCourse);
module.exports = router;