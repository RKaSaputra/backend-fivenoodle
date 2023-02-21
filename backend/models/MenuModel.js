import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Menus = db.define(
  "menu",
  {
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    nutriScore: DataTypes.INTEGER,
    img: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Menus;

(async () => {
  await db.sync();
})();
