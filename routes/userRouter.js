import { Router } from "express";
const router = Router();

import { getCurrentUser } from "../controllers/userControllers.js";

router.get("/current-user", getCurrentUser);

export default router;
