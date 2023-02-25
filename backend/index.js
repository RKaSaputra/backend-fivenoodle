// import express from "express";
// import cors from "cors";
// import UserRoute from "./routes/UserRoute.js";
// import MenuRoute from "./routes/MenuRoute.js";
// import MenuCategoryRoute from "./routes/MenuCategoryRoute.js";

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(UserRoute);
// app.use(MenuRoute);
// app.use(MenuCategoryRoute);

// app.listen(5000, () => console.log("Server up and Running"));

import express from "express";
import cors from "cors";
<<<<<<< HEAD
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import dotenv from "dotenv";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();

=======
import FileUpload from "express-fileupload";
// import UserRoute from "./routes/UserRoute.js";
import BlogRoute from "./routes/BlogRoute.js";
import BlogCategoryRoute from "./routes/BlogCategoryRoute.js";
>>>>>>> Alphard
const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});
// (async () => {
//   await db.sync();
// })();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
<<<<<<< HEAD
app.use(UserRoute);
app.use(AuthRoute);

// store.sync();
=======
app.use(FileUpload());
app.use(express.static("public"));
// app.use(UserRoute);
app.use(BlogCategoryRoute);
app.use(BlogRoute);
>>>>>>> Alphard

app.listen(process.env.APP_PORT, () => console.log("Server up and Running"));
