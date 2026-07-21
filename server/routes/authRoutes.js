import express from "express";
import checkAuth from "../middleware/auth.js";
import authController from "../controllers/authController.js";

const router = express.Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/profile", checkAuth, authController.getUserProfile);

export default router;