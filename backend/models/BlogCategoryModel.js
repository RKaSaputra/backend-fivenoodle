import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

<<<<<<< HEAD:backend/models/UserModel.js
const Users = db.define(
  "users",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 15],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
=======
const BlogCategory = db.define(
  "blog_categories",
  {
    Nama: DataTypes.STRING,
>>>>>>> Alphard:backend/models/BlogCategoryModel.js
  },
  {
    freezeTableName: true,
  }
);

<<<<<<< HEAD:backend/models/UserModel.js
export default Users;
=======
export default BlogCategory;

// (async () => {
//   await db.sync();
// })();
>>>>>>> Alphard:backend/models/BlogCategoryModel.js
