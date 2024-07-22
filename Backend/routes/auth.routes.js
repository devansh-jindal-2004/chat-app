import express from "express";
import { login, logout, signup, update, updatePic } from "../controllers/auth.controllers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup )

router.post("/login", login)

router.post("/logout", logout)

router.post("/update", protectRoute, update)

router.post("/update/profilePic", protectRoute, upload.single("image"), updatePic)

export default router