import { GenreModel } from "../models/genre";

export async function getAll() {
  try {
    const genres = await GenreModel.find();
    return genres;
  } catch (err) {
    throw err;
  }
}

