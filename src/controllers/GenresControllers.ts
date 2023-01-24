import { Request, Response } from "express";
import * as genreService from "../services/genreService";
import { getErrorMessage } from "../utils/error";

export const getAll = async (req: Request, res: Response) => {
  try {
    const foundGenres = await genreService.getAll();
    res.status(200).send(foundGenres);
  } catch (err) {
    return res.status(500).send(getErrorMessage(err));
  }
};
