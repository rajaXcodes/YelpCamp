const express = require("express");
const path = require("path");
const app = express();
const Campground = require("../models/campground.js");
const cities = require("./cities");
const { descriptors, places } = require("./seedHelpers");
const dbURL = process.env.db_URL;
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/yelp-camp');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Database connected!! ");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 200; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price50 = Math.floor(Math.random() * 30) + 10;
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      price: `${price50}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      geometry: {
        type: 'Point',
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude
        ]
      },
      author: "6687e595e5e65bd301d6c4e2",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A error minima minus accusamus, obcaecati maxime asperiores nesciunt corrupti ipsum vero repellendus incidunt odit? Delectus voluptas reprehenderit earum aut aperiam sequi!',
      images: [
        {
          url: 'https://res.cloudinary.com/druqrgjyf/image/upload/v1720951651/YelpCamp/zhr94549yhhcw0czt3cl.jpg',
          filename: 'YelpCamp/zhr94549yhhcw0czt3cl',
        },
        {
          url: 'https://res.cloudinary.com/druqrgjyf/image/upload/v1720952595/YelpCamp/bpnqg1tuiff3frqzscsa.jpg',
          filename: 'YelpCamp/bpnqg1tuiff3frqzscsa',
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
