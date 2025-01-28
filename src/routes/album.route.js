import {Router} from "express";
import { authCallback } from "../controllers/auth.controller.js";
import { getAllAlbums,getAlbumById } from "../controllers/album.controller.js";

const router=Router();

router.get("/",getAllAlbums);
router.get("/:albumId",getAlbumById);

export default router;