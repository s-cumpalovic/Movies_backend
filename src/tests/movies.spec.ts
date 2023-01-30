import { expect } from "chai";
import { MovieModel, IMovie } from "../models/movie";

import {
  TEST_TITLE,
  TEST_DESCRIPTION,
  TEST_IMAGE,
  MOVIE_VALIDATION_ERROR,
} from "../utils/static";

describe("Movie Model Test", () => {
  it("Should be a valid model", async () => {
    const movie: IMovie = new MovieModel({
      title: TEST_TITLE,
      description: TEST_DESCRIPTION,
      coverImage: TEST_IMAGE,
      genres: [],
    });
    try {
      await movie.validate();
      expect(movie.title).to.equal(TEST_TITLE);
      expect(movie.description).to.equal(TEST_DESCRIPTION);
      expect(movie.coverImage).to.equal(TEST_IMAGE);
      expect(movie.genres).to.have.lengthOf(0);
    } catch (err) {
      expect(err).to.not.exist;
    }
  });

  it("Should throw an error if the required fields are missing", async () => {
    //  Missing title

    const movieWithoutTitle: IMovie = new MovieModel({
      description: TEST_DESCRIPTION,
      coverImage: TEST_IMAGE,
      genres: [],
    });
    try {
      await movieWithoutTitle.validate();
    } catch (err) {
      expect((err as Error).message).to.include(MOVIE_VALIDATION_ERROR);
    }

    //  Missing description

    const movieWithoutDescription: IMovie = new MovieModel({
      title: TEST_TITLE,
      coverImage: TEST_IMAGE,
      genres: [],
    });
    try {
      await movieWithoutDescription.validate();
    } catch (err) {
      expect((err as Error).message).to.include(MOVIE_VALIDATION_ERROR);
    }

    //  Missing image

    const movieWithoutImage: IMovie = new MovieModel({
      title: TEST_TITLE,
      description: TEST_DESCRIPTION,
      genres: [],
    });
    try {
      await movieWithoutImage.validate();
    } catch (err) {
      expect((err as Error).message).to.include(MOVIE_VALIDATION_ERROR);
    }

    //  Missing genres

    const movieWithoutGenres: IMovie = new MovieModel({
      title: TEST_TITLE,
      description: TEST_DESCRIPTION,
      coverImage: TEST_IMAGE,
    });
    try {
      await movieWithoutGenres.validate();
    } catch (err) {
      expect((err as Error).message).to.include(MOVIE_VALIDATION_ERROR);
    }
  });
});
