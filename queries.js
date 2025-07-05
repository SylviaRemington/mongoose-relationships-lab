// MONGOOSE RELATIONSHIPS LAB - taken from a zip Tristan created specifically for 
// this lesson since GA didn't have a lesson created for it.

// Go through TODO sections and implement lesson functions.


const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Movie = require("./models/movie.js");
const Genre = require("./models/genre.js");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    await runQueries();
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

connect();

/*----------------------------- Query Functions -----------------------------*/

// TODO: Implement this function to create a new genre
const createGenre = async () => {
  try {
    // Your code here
    // Hint: Use Genre.create() with a name property
  } catch (error) {
    console.log(error);
  }
};

// TODO: Implement this function to create a new movie and link it to a genre
const createMovie = async () => {
  try {
    // Your code here
    // Hint:
    // 1. Create the movie first using Movie.create()
    // 2. Then update the genre using Genre.findByIdAndUpdate()
    // 3. Use $push to add the movie's _id to the genre's movies array
  } catch (error) {
    console.log(error);
  }
};

// TODO: Implement this function to find all movies in a specific genre
const findMovies = async () => {
  try {
    // Your code here
    // Hint: Use Movie.find() with a genre filter
    // You'll need a valid genre ObjectId to test this
  } catch (error) {
    console.log(error);
  }
};

// TODO: Implement this function to find a genre and populate its movies
const findMoviesByGenre = async () => {
  try {
    // Your code here
    // Hint:
    // 1. Use Genre.findById()
    // 2. Chain .populate('movies') to get the full movie documents
    // You'll need a valid genre ObjectId to test this
  } catch (error) {
    console.log(error);
  }
};

/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log("Queries running.");

  // Uncomment these one at a time to test your implementations
  // await createGenre();
  // await createMovie();
  // await findMovies();
  // await findMoviesByGenre();
};
