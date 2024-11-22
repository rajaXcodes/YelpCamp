const express = require('express');
const Campground = require("../models/campground");
const catchAsync = require('../utilitis/catchAsync');
const {isLoggedin,isAuthor,ValidateCampground} = require('../middleware')
const router = express.Router();
const campground = require('../controllers/campground');
const multer  = require('multer')
const {storage} = require('../cloudinary/index');
const upload = multer({ storage});



router.route("/")
              .get(catchAsync(campground.index))
              .post(isLoggedin, upload.array('image'),ValidateCampground, catchAsync(campground.createCampground))
  
router.get("/new",isLoggedin,campground.renderNewCampForm);


router.route('/:id')
              .get(catchAsync(campground.showCampground))
              .put(isLoggedin,isAuthor,upload.array('image'),ValidateCampground,catchAsync(campground.updateCampground))
              .delete(isLoggedin,isAuthor,catchAsync(campground.deleteCampground))


router.get('/:id/edit',isLoggedin,isAuthor, catchAsync(campground.renderEditForm));


module.exports = router;