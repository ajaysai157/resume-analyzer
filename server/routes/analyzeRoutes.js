import express from 'express';
const router = express.Router();
import checkAuth from '../middleware/auth.js';
import upload from '../middleware/upload.js';
import analyzeController from '../controllers/analyzeController.js';

router.post('/', checkAuth, upload, analyzeController.analyzeText);

export default router;