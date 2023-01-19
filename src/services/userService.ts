import { DocumentDefinition } from "mongoose";
import { UserModel, IUser } from "../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { EMAIL_DOESNT_EXIST, WRONG_PASSWORD } from "../utils/static";

const SECRET_KEY = process.env.SECRET_KEY || "dba582594411671429b";

//  Registration funcionallity

export async function register(user: DocumentDefinition<IUser>) {
  try {
    return await UserModel.create(user);
  } catch (err) {
    throw err;
  }
}

//  Login funcionallity

export async function login(user: DocumentDefinition<IUser>) {
  try {
    const foundUser = await UserModel.findOne({
      email: user.email,
    });
    if (!foundUser) {
      throw new Error(EMAIL_DOESNT_EXIST);
    }

    const isMatch = bcrypt.compareSync(user.password, foundUser.password);
    if (isMatch) {
      const token = jwt.sign(
        { _id: foundUser._id, email: foundUser.email },
        SECRET_KEY,
        {
          expiresIn: "2 days",
        }
      );

      return { user, token };
    } else {
      throw new Error(WRONG_PASSWORD);
    }
  } catch (err) {
    throw err;
  }
}
