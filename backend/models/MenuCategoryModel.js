import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const MenuCategory = db.define(
  "category",
  {
    name: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default MenuCategory;

(async () => {
  await db.sync();
})();
