import { Request, Response } from "express";
import { getErrorMessage } from "../utils/error";
import * as movieServices from "../services/movieService";

export const getAll = async (req: Request, res: Response) => {
  try {
    const foundMovies = await movieServices.getMovies();
    res.status(200).send(foundMovies);
  } catch (err) {
    return res.status(500).send(getErrorMessage(err));
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const foundMovie = await movieServices.getSingleMovie(req.params.id);
    res.status(200).send(foundMovie);
  } catch (err) {
    return res.status(404).send(getErrorMessage(err));
  }
};

export const createOne = async (req: Request, res: Response) => {
  try {
    const createdMovie = await movieServices.createMovie(req.body);
    res.status(201).send(createdMovie);
  } catch (err) {
    return res.status(422).send(getErrorMessage(err));
  }
};

export const updateOne = async (req: Request, res: Response) => {
  try {
    const updatedMovie = await movieServices.updateMovie(
      req.params.id,
      req.body
    );
    res.status(200).send(updatedMovie);
  } catch (err) {
    return res.status(500).send(getErrorMessage(err));
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const deletedMovie = await movieServices.deleteMovie(req.params.id);
    res.status(200).send(deletedMovie);
  } catch (err) {
    res.status(500).send(getErrorMessage(err));
  }
};
