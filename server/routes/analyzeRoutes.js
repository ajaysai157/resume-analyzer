import express from 'express';
const router=express.Router();
import upload from '../middleware/upload.js';
import analyzeController from '../controllers/analyzeController.js';
router.post('/', upload, analyzeController.analyzeText);

export default router;