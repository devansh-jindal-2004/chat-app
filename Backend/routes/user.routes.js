import express from "express"
import { getUsersForSidebar } from "../controllers/user.controllers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router()

router.get("/", protectRoute, getUsersForSidebar)

export default router;