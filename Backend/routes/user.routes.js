import express from "express"
import { getUsersForSidebar, getUsersForSearch } from "../controllers/user.controllers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router()

router.get("/", protectRoute, getUsersForSidebar)
router.get("/search/:name", protectRoute, getUsersForSearch)

export default router;