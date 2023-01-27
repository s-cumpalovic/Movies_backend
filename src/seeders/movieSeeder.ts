import { faker } from "@faker-js/faker";

import { MovieModel } from "../models/movie";
import { IMovies } from "../types/types";
import { GenreModel } from "../models/genre";
import { movieTitles } from "./seederData";
import { MOVIE_SEEDER_ERROR, MOVIE_SEEDER_SUCCESS } from "../utils/static";
import connectDB from "../config/db";

(async (movieCount = 100) => {
  try {
    connectDB();
    const genres = await GenreModel.find();
    let imagesArray = [];
    for (let x = 0; x < movieCount; x++) {
      imagesArray.push(`https://picsum.photos/200/300?random=${x}`);
    }

    let movies: IMovies[] = [];
    for (let i = 0; i < movieCount; i++) {
      const randomGenres = faker.helpers.arrayElements(genres);
      let genresIds: any[] = [];
      randomGenres.map((genre) => genresIds.push(genre._id));

      const movie: IMovies = {
        title: faker.helpers.arrayElement(movieTitles),
        description: faker.random.words(100),
        coverImage: faker.helpers.arrayElement(imagesArray),
        genres: genresIds,
      };

      movies.push(movie);
    }
    await MovieModel.deleteMany({});
    await MovieModel.insertMany(movies);
    console.log(MOVIE_SEEDER_SUCCESS);
  } catch (err) {
    console.error(`${MOVIE_SEEDER_ERROR} -> ${err}`);
  }
})();
