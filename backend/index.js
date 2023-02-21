import express from "express";
import cors from "cors";
import FileUpload from "express-fileupload";
// import UserRoute from "./routes/UserRoute.js";
import BlogRoute from "./routes/BlogRoute.js";
import BlogCategoryRoute from "./routes/BlogCategoryRoute.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
// app.use(UserRoute);
app.use(BlogCategoryRoute);
app.use(BlogRoute);

app.listen(5000, () => console.log("Server up and Running"));
