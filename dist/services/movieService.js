"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.createMovie = exports.getSingleMovie = exports.getMovies = void 0;
const movie_1 = require("../models/movie");
const static_1 = require("../utils/static");
function getMovies(page = 1, limit = 10, searchTerm = "") {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const skip = (page - 1) * limit;
            const count = yield movie_1.MovieModel.find({
                title: { $regex: searchTerm },
            }).count();
            const movies = yield movie_1.MovieModel.find({
                title: { $regex: searchTerm },
            })
                .skip(skip)
                .limit(limit);
            console.log(count);
            return { data: movies, count };
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getMovies = getMovies;
function getSingleMovie(movieId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const movie = yield movie_1.MovieModel.findById(movieId);
            if (!movie) {
                throw new Error(static_1.MOVIE_NOT_FOUND);
            }
            return movie;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getSingleMovie = getSingleMovie;
function createMovie(movie) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newMovie = new movie_1.MovieModel(movie);
            yield newMovie.save();
            return newMovie;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.createMovie = createMovie;
function updateMovie(movieId, newMovie) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const editedMovie = movie_1.MovieModel.findByIdAndUpdate(movieId, newMovie, {
                new: true,
            });
            if (!editedMovie) {
                throw new Error(static_1.MOVIE_NOT_FOUND);
            }
            return editedMovie;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.updateMovie = updateMovie;
function deleteMovie(movieId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedMovie = movie_1.MovieModel.findByIdAndDelete(movieId);
            if (!deletedMovie) {
                throw new Error(static_1.MOVIE_NOT_FOUND);
            }
            return deletedMovie;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.deleteMovie = deleteMovie;
