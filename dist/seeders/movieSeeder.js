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
const faker_1 = require("@faker-js/faker");
const movie_1 = require("../models/movie");
const genre_1 = require("../models/genre");
const seederData_1 = require("./seederData");
const static_1 = require("../utils/static");
const createMovies = (movieCount) => __awaiter(void 0, void 0, void 0, function* () {
    const genres = yield genre_1.GenreModel.find();
    let imagesArray = [];
    for (let x = 0; x < movieCount; x++) {
        imagesArray.push(`https://picsum.photos/200/300?random=${x}`);
    }
    let movies = [];
    for (let i = 0; i < movieCount; i++) {
        const randomGenres = faker_1.faker.helpers.arrayElements(genres);
        let genresIds = [];
        randomGenres.map((genre) => genresIds.push(genre._id));
        const movie = {
            title: faker_1.faker.helpers.arrayElement(seederData_1.movieTitles),
            description: faker_1.faker.random.words(100),
            coverImage: faker_1.faker.helpers.arrayElement(imagesArray),
            genres: genresIds,
        };
        movies.push(movie);
    }
    try {
        yield movie_1.MovieModel.insertMany(movies);
        console.log(static_1.MOVIE_SEEDER_SUCCESS);
    }
    catch (err) {
        console.error(`${static_1.MOVIE_SEEDER_ERROR} -> ${err}`);
    }
});
createMovies(100);
