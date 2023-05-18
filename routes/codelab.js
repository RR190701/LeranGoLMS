//A private route that will be only
const express = require('express');
const router =  express.Router();
const { protect } = require('../middlewares/auth');
const { getAllCodeLabs, createCodeLab } = require('../controllers/codelab');

router.route("/getAllCodeLabs/:courseId").get(protect, getAllCodeLabs);
router.route("/addCodeLab").post(protect, createCodeLab);
module.exports = router;