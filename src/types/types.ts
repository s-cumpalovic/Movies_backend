export interface ICorsOptions {
  origin: string;
  credentials: boolean;
  preflightContinue: boolean;
}

export interface IMovies {
  title: string,
  description: string,
  coverImage: string,
  genre: string,
}