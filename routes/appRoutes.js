import { Router } from "express";
const router = Router();

import { handleRecording } from "../controllers/appControllers.js";

router.post("/record", handleRecording)

export default router;