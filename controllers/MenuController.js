import Menus from "../models/MenuModel.js";

export const getMenus = async (req, res) => {
  try {
    const response = await Menus.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMenusById = async (req, res) => {
  try {
    const response = await Menus.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createMenus = async (req, res) => {
  try {
    await Menus.create(req.body);
    res.status(201).json({ msg: "Menu Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMenus = async (req, res) => {
  try {
    await Menus.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Menu Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMenus = async (req, res) => {
  try {
    await Menus.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Menu Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
