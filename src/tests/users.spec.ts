import { expect } from "chai";
import { IUser, UserModel } from "../models/user";
import connectDB from "../config/db";
import * as userService from "../services/userService";

import {
  TEST_EMAIL,
  TEST_PASSWORD,
  TEST_NAME,
  TEST_REGISTER_USER,
} from "../utils/static";

beforeEach(async () => {
  connectDB();

  const checkUser = await UserModel.findOne({
    email: TEST_REGISTER_USER.email,
  });
  if (checkUser) {
    UserModel.deleteOne({ email: TEST_REGISTER_USER.email });
  }

  UserModel.create({
    name: TEST_NAME,
    email: TEST_EMAIL,
    password: TEST_PASSWORD,
  });
});

afterEach(() => {
  UserModel.deleteOne({ email: TEST_EMAIL });
  UserModel.deleteOne({ email: TEST_REGISTER_USER.email });
});

describe("User Model Test", () => {
  it("Should be a valid login", async () => {
    const testUser = {
      email: TEST_EMAIL,
      password: TEST_PASSWORD,
    };
    try {
      const response = await userService.login(testUser as IUser);
      expect(response).to.have.property("user");
      expect(response).to.have.property("token");
      expect(response.user).to.have.property("email");
    } catch (err) {
      console.error(err);
    }
  });

  it("Should be a valid register", async () => {
    try {
      const response = await userService.register(TEST_REGISTER_USER as IUser);
      expect(response).to.have.property("newUser");
      expect(response).to.have.property("token");
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  });
});
