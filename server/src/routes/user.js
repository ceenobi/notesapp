import express from "express";
import { signup, login, getAuthUser } from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyAuth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/", verifyToken, getAuthUser);

export default router;
