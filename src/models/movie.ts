import mongoose from "mongoose";

//  Interface

export interface IMovie extends mongoose.Document {
  title: String;
  description: String;
  coverImage: String;
  genre: String;
}

const MovieSchema: mongoose.Schema<IMovie> = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true },
  genre: { type: String, required: true },
});

export const MovieModel = mongoose.model<IMovie>("Movie", MovieSchema);
