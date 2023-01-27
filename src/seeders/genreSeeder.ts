import { GenreModel } from "../models/genre";
import connectDB from "../config/db";
import { GENRE_SEEDER_ERROR, GENRE_SEEDER_SUCCESS } from "../utils/static";
(async () => {
  try {
    connectDB();
    const genreNames = [
      "Action",
      "Comedy",
      "Drama",
      "Fantasy",
      "Animated",
      "Documentary",
      "Thriller",
      "Horror",
    ];
    await GenreModel.deleteMany({});
    await GenreModel.insertMany(genreNames.map((genre) => ({ name: genre })));
    console.log(GENRE_SEEDER_SUCCESS);
  } catch (err) {
    console.error(`${GENRE_SEEDER_ERROR} -> ${err}`);
  }
})();
