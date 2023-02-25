import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const MenuCategory = db.define(
  "category_menu",
  {
    name: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default MenuCategory;

// (async () => {
//   await db.sync();
// })();
