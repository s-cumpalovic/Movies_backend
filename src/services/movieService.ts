import { MovieModel } from "../models/movie";
import { IMovies } from "../types/types";
import { MOVIE_NOT_FOUND } from "../utils/static";
import mongoose from "mongoose";

export async function getMovies(
  page = 1,
  limit = 10,
  searchTerm = "",
  genreId = ""
) {
  try {
    const skip = (page - 1) * limit;
    const count = await MovieModel.find({
      title: { $regex: searchTerm },
      ...(genreId ? { genres: genreId } : {}),
    }).count();

    const movies = await MovieModel.find({
      title: { $regex: searchTerm },
      ...(genreId ? { genres: genreId } : {}),
    })
      .skip(skip)
      .limit(limit)
      .populate("genres");
    return { data: movies, count };
  } catch (err) {
    throw err;
  }
}

export async function getSingleMovie(movieId: string) {
  try {
    const movie = await MovieModel.findById(movieId).populate("genres");
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
