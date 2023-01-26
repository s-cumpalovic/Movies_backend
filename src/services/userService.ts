import { DocumentDefinition } from "mongoose";
import { UserModel, IUser } from "../models/user";
import bcrypt from "bcrypt";
import { EMAIL_DOESNT_EXIST, WRONG_PASSWORD } from "../utils/static";
import { signAuthToken } from "../utils/helperFunctions";

//  Registration funcionallity

export async function register(user: DocumentDefinition<IUser>) {
  try {
    const newUser = await UserModel.create(user);
    if (newUser) {
      const token = signAuthToken(newUser);
      return { newUser, token };
    }
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
      const token = signAuthToken(foundUser);

      return { user, token };
    } else {
      throw new Error(WRONG_PASSWORD);
    }
  } catch (err) {
    throw err;
  }
}
