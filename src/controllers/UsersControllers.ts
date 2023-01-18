import { Request, Response } from "express";
import { getErrorMessage } from "../utils/error";
import * as userServices from "../services/userService";

export const loginOne = async (req: Request, res: Response) => {
  try {
    const foundUser = await userServices.login(req.body);
    res.status(200).send(foundUser);
  } catch (err) {
    return res.status(500).send(getErrorMessage(err));
  }
};

export const registerOne = async (req: Request, res: Response) => {
  try {
    await userServices.register(req.body);
    res.status(200).send("Registration successful!");
  } catch (err) {
    return res.status(500).send(getErrorMessage(err));
  }
};
