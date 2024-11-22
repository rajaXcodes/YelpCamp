const express = require('express');
const router = express.Router({ mergeParams: true });

const Campground = require('../models/campground');
const Review = require('../models/review');

const { reviewSchema} = require('../schemas.js');

const catchAsync = require('../utilitis/catchAsync');
const ExpressError = require("../utilitis/ExpressError");

const {validateReview,isLoggedin, isReviewAuthor} = require("../middleware.js");
const reviews = require('../controllers/review.js');


router.post('/', validateReview ,isLoggedin, catchAsync(reviews.makeReview))

router.delete('/:reviewId',isLoggedin,isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;