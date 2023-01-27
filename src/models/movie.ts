import mongoose, { Schema, Model, Document } from "mongoose";
import { IGenre } from "./genre";

export interface IMovie extends Document {
  title: string;
  description: string;
  coverImage: string;
  genres: IGenre[];
}

const movieSchema: Schema<IMovie> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true },
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
});

export const MovieModel: Model<IMovie> = mongoose.model<IMovie>(
  "Movie",
  movieSchema
);
