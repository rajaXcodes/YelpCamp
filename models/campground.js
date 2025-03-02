var mongoose = require("mongoose");
const { campgroundSchema } = require("../schemas");
const Review = require("./review");
const User = require('./user');
const { string } = require("joi");
const { coordinates } = require("@maptiler/client");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: String,
  filename: String
})

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

const opts = {toJSON : {virtuals : true}}

const CampgroundSchema = new Schema({
  title: String,
  price: Number,
  images: [ImageSchema],
  geometry: {
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
},
  description: String,
  location: String,
  author:{
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
},opts);

//creating virtaul schema for the maptiler to display data as it needed a particular format
CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
  return `
      <h6><a href = "/campgrounds/${this._id}" >${this.title}</a></h6>
      <strong>${this.location}</strong>
      <p>${this.description.substring(0,60)}...</p>
      `;
});

// middle ware if the whole campground is deleted so all reviews should be deleted
//campground method for delete(findOneAndDelete) should be same as here
// app.delete('/campgrounds/:id',catchAsync(async(req,res)=>{
//     const {id} = req.params;
//     await Campground.findByIdAndDelete(id);   //like this ----->|||||
//     res.redirect('/campgrounds');
// }))

CampgroundSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Review.deleteMany({ _id: { $in: doc.reviews } });
  }
});

module.exports = mongoose.model("Campground", CampgroundSchema);
