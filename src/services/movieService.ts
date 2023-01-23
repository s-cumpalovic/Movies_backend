import { MovieModel } from "../models/movie";
import { IMovies } from "../types/types";
import { MOVIE_NOT_FOUND } from "../utils/static";

export async function getMovies() {
  try {
    const movies = await MovieModel.find();
    return movies;
  } catch (err) {
    throw err;
  }
}

export async function getSingleMovie(movieId: string) {
  try {
    const movie = await MovieModel.findById(movieId);
    if (!movie) {
      throw new Error(MOVIE_NOT_FOUND);
    }
    return movie;
  } catch (err) {
    throw err;
  }
}

export async function createMovie(movie: IMovies) {
  try {
    const newMovie = new MovieModel(movie);
    await newMovie.save();
    return newMovie;
  } catch (err) {
    throw err;
  }
}

export async function updateMovie(movieId: string, newMovie: IMovies) {
  try {
    const editedMovie = MovieModel.findByIdAndUpdate(movieId, newMovie, {
      new: true,
    });
    if (!editedMovie) {
      throw new Error(MOVIE_NOT_FOUND);
    }
    return editedMovie;
  } catch (err) {
    throw err;
  }
}

export async function deleteMovie(movieId: string) {
  try {
    const deletedMovie = MovieModel.findByIdAndDelete(movieId);
    if (!deletedMovie) {
      throw new Error(MOVIE_NOT_FOUND);
    }
    return deletedMovie;
  } catch (err) {
    throw err;
  }
}
