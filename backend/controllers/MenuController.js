import Menus from "../models/MenuModel.js";

export const getMenus = async (req, res) => {
  try {
    const response = await Menus.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
