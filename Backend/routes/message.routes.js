import express from "express"
import { getmessage, sendMessage } from "../controllers/message.controllers.js";
import protectRoute from "../middleware/protectRoute.js"

const router = express.Router();

router.post("/send/:id", protectRoute ,sendMessage)
router.get("/:id", protectRoute ,getmessage)

export default router