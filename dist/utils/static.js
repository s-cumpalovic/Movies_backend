"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOVIE_SEEDER_ERROR = exports.MOVIE_SEEDER_SUCCESS = exports.GENRE_SEEDER_ERROR = exports.GENRE_SEEDER_SUCCESS = exports.MOVIE_NOT_FOUND = exports.REGISTRATION_SUCCESS = exports.EMAIL_DOESNT_EXIST = exports.EMAIL_EXISTS = exports.INVALID_EMAIL = exports.WRONG_PASSWORD = exports.SHORT_PASSWORD = exports.SHORT_NAME = exports.corsOptions = void 0;
exports.corsOptions = {
    origin: process.env.DB_ORIGIN || "*",
    credentials: true,
    preflightContinue: true,
};
// User
exports.SHORT_NAME = "Name should contain atleast 3 characters";
exports.SHORT_PASSWORD = "Password must have atleast 8 characters";
exports.WRONG_PASSWORD = "Wrong password";
exports.INVALID_EMAIL = "Please enter a valid email";
exports.EMAIL_EXISTS = "User with this email already exists, please try another email";
exports.EMAIL_DOESNT_EXIST = "User with this email does not exist";
exports.REGISTRATION_SUCCESS = "User registered succesfully";
// Movies
exports.MOVIE_NOT_FOUND = "The request movie not found!";
// Seeders
exports.GENRE_SEEDER_SUCCESS = "Successfully seeded genres into the database";
exports.GENRE_SEEDER_ERROR = "Failed seeding genres into the database";
exports.MOVIE_SEEDER_SUCCESS = "Successfully seeded movies into the database";
exports.MOVIE_SEEDER_ERROR = "Failed seeding movies into the database";
