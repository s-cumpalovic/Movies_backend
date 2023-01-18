import mongoose from "mongoose";

//  Database connection

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/movies' ;

export default function connectDB() {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(DB_URL, () => {
      console.log("Connected to MongoDB");
    });
  } catch (err) {
    throw err;
  }
}
