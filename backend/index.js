import express from "express";
import cors from "cors";
import MenuRoute from "./routes/MenuRoute.js";
import MenuCategoryRoute from "./routes/MenuCategoryRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(MenuRoute);
app.use(MenuCategoryRoute);

app.listen(5000, () => console.log("Server up and Running"));
