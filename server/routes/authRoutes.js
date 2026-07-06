import authController from '../controllers/authController.js';
import express from 'express';
const router=express.Router();
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/profile', checkAuth, authController.getUserProfile);
export default router;