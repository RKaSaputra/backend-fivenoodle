import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import MenuRoute from "./routes/MenuRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(MenuRoute);

app.listen(5000, () => console.log("Server up and Running"));
