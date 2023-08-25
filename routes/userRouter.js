import { Router } from "express";
const router = Router();

import { getCurrentUser, uploadScreenRecording } from "../controllers/userControllers.js";

router.get("/current-user", getCurrentUser);
router.post("/submit/screenRecording", uploadScreenRecording)

export default router;
