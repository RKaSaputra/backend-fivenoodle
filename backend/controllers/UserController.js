import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    request.status(200).json(response);
  } catch {
    console.log(error.message);
  }
};
