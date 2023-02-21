import express from "express";
import { getMenus } from "../controllers/MenuController.js";

const router = express.Router();

router.get("/menu", getMenus);

export default router;
