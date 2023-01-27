import { ICorsOptions } from "../types/types";

export const corsOptions: ICorsOptions = {
  origin: process.env.DB_ORIGIN || "*",
  credentials: true,
  preflightContinue: true,
};

// User
export const SHORT_NAME: string = "Name should contain atleast 3 characters";
export const SHORT_PASSWORD: string = "Password must have atleast 8 characters";
export const WRONG_PASSWORD: string = "Wrong password";
export const INVALID_EMAIL: string = "Please enter a valid email";
export const EMAIL_EXISTS: string =
  "User with this email already exists, please try another email";
export const EMAIL_DOESNT_EXIST: string = "User with this email does not exist";
export const REGISTRATION_SUCCESS: string = "User registered succesfully";

// Movies
export const MOVIE_NOT_FOUND: string = "The request movie not found!";

// Seeders
export const GENRE_SEEDER_SUCCESS: string =
  "Successfully seeded genres into the database";
export const GENRE_SEEDER_ERROR: string =
  "Failed seeding genres into the database";
export const MOVIE_SEEDER_SUCCESS: string =
  "Successfully seeded movies into the database";
export const MOVIE_SEEDER_ERROR: string =
  "Failed seeding movies into the database";
