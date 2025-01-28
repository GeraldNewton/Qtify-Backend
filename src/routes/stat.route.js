import {Router} from "express";
import { authCallback } from "../controllers/auth.controller.js";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";
import { getStats } from "../controllers/stat.controller.js";

const router=Router();
router.get("/callback",protectRoute,requireAdmin,getStats);

export default router;