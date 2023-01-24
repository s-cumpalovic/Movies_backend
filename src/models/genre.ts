import mongoose from "mongoose";

export interface IGenre extends mongoose.Document {
  name: String;
}

const GenreSchema: mongoose.Schema<IGenre> = new mongoose.Schema({
  name: { type: String, required: true },
});

export const GenreModel = mongoose.model<IGenre>("Genre", GenreSchema);
