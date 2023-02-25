import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const MenuCategory = db.define(
  "menu_categories",
  {
    name: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default MenuCategory;
