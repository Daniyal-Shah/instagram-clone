import { UsersModel } from "../models/users/user.model.js";

export const seeding = async () => {
  console.log("Seeding");
  let user = {
    username: "daniyal-shah",
    email: "daniyal.shah@venturedive.com",
    password: "daniyal12345",
    firstName: "Daniyal",
    lastName: "Shah",
  };

  try {
    await UsersModel.create(user);
  } catch (error) {
    console.log(error);
  }
};
