import express from "express";
import cors from "cors";
import BlogRoute from "./routes/BlogRoute.js";
import BlogCategoryRoute from "./routes/BlogCategoryRoute.js";
const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(BlogCategoryRoute);
app.use(BlogRoute);

app.listen(5000, () => console.log("Server up and Running"));
