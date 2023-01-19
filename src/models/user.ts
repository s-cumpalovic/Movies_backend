import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { EMAIL_EXISTS } from '../utils/static';

//  Interface

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

//  Schema

const UserSchema: mongoose.Schema<IUser> = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.index({ email: 1 }, { unique: true });

//  Before saving the new user, checking the password hash, and if email is unique

UserSchema.pre("save", async function (next) {
  const user = this;

  //  Password

  const saltRounds = 8;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, saltRounds);
  }

  //  Email

  if (user.isModified("email")) {
    const emailExist = await UserModel.findOne({ email: user.email });
    if (emailExist) {
      return next(new Error(EMAIL_EXISTS));
    }
  }
});

//  Model export

export const UserModel = mongoose.model<IUser>("User", UserSchema);
