const express = require('express');
const ExpressError = require("./utilitis/ExpressError");
const Review = require("./models/review");
const Campground = require("./models/campground");
const {reviewSchema,campgroundSchema} = require("./schemas")

module.exports.isLoggedin = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        req.flash('error','You must be signed in');
        return res.redirect('/login');
      }
    
    next();
}

module.exports.ValidateCampground = (req,res,next)=>{
  const {error} = campgroundSchema.validate(req.body);
  if(error){
    const msg = error.details.map(e => e.message).join(',');
    throw new ExpressError(msg,404);
  }else{
    next();
  }
}

module.exports.isAuthor = async (req,res,next)=>{
  const {id} = req.params;
  const campground = await Campground.findById(id);
  if(!campground.author.equals(req.user._id)){
    req.flash('error',"You do not have access to this campground");
    return res.redirect(`/campgrounds/${id}`);
  }
  next();
}

module.exports.storeReturnTo = (req,res,next)=>{
  if(req.session.returnTo){
    res.locals.returnTo = req.session.returnTo;
  }
  next();
}
module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
      const msg = error.details.map(el => el.message).join(',')
      throw new ExpressError(msg, 400)
  } else {
      next();
  }
}

module.exports.isReviewAuthor = async (req,res,next)=>{
  const {id,reviewId} = req.params;
  const review = await Review.findById(reviewId);
  if(!review.author.equals(req.user._id)){
    req.flash('error',"You do not have access to this review");
    return res.redirect(`/campgrounds/${id}`);
  }
  next();
}