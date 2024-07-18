import express from "express";
import { login, logout, signup, update } from "../controllers/auth.controllers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup )

router.post("/login", login)

router.post("/logout", logout)

router.post("/update", protectRoute, update)

export default router