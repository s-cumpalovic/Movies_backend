import mongoose from "mongoose";
import { config } from "dotenv";

//  Database connection

config();
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/movies";

mongoose.set("strictQuery", true);
mongoose.connect(DB_URL, () => {
  console.log("Connected to MongoDB");
});
