import {Router} from "express";
// import {getAdmin} from "../controllers/admin.controller.js"
import { authCallback } from "../controllers/auth.controller.js";

const router=Router();
router.post("/callback",authCallback);

export default router;