import express from "express";
import historyController from "../controllers/historyController.js";
import checkAuth from "../middleware/auth.js";

const router = express.Router();

// Get all history
router.get(
    "/",
    checkAuth,
    historyController.getHistory
);

// Get one analysis
router.get(
    "/:id",
    checkAuth,
    historyController.getHistoryById
);

// Delete analysis
router.delete(
    "/:id",
    checkAuth,
    historyController.deleteHistory
);

export default router;