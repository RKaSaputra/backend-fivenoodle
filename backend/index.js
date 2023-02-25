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
app.use(UserRoute);
app.use(AuthRoute);

// store.sync();
=======
import MenuRoute from "./routes/MenuRoute.js";
import MenuCategoryRoute from "./routes/MenuCategoryRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(MenuRoute);
app.use(MenuCategoryRoute);
>>>>>>> prabu

app.listen(5000, () => console.log("Server up and Running"));
