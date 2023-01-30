export interface ICorsOptions {
  origin: string;
  credentials: boolean;
  preflightContinue: boolean;
}

export interface IMovies {
  title: string;
  description: string;
  coverImage: string;
  genres: IGenreType[];
}

export interface IGenreType {
  _id?: String;
  name?: String;
}

export interface IUserType {
  name?: String;
  email: String;
  password: String;
}
