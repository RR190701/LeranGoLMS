//A private route that will be only
const express = require('express');
const router =  express.Router();
const { protect } = require('../middlewares/auth');
var multer = require('multer');
const { UploadFiles } = require('../controllers/uploadfile');
// const upload = multer({ dest: './public/data/uploads/' });

router.route("/uploadFile").post(protect, UploadFiles);
module.exports = router;