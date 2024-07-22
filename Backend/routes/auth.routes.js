import express from "express";
import { login, logout, signup, theme, update, updatePic } from "../controllers/auth.controllers.js";
import protectRoute from "../middleware/protectRoute.js";
import multer from "multer";
import {storage} from "../middleware/cloudConfig.js"

const upload = multer({storage})

const router = express.Router();

router.post("/signup", signup )

router.post("/login", login)

router.post("/logout", logout)

router.post("/update", protectRoute, update)

router.post("/update/profilePic", protectRoute, upload.single("image"), updatePic)

router.post("/update/theme", protectRoute, theme)

export default router