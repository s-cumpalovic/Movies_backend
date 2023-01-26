import jwt from "jsonwebtoken";
import { IUser } from "../models/user";
import { DocumentDefinition } from "mongoose";
const SECRET_KEY = process.env.SECRET_KEY || "dba582594411671429b";

export const signAuthToken = (user: DocumentDefinition<IUser>) => {
  return jwt.sign({ _id: user._id, email: user.email, name: user.name }, SECRET_KEY, {
    expiresIn: "5 minutes",
  });
};
