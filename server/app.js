import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";
import analyzeRoutes from "./routes/analyzeRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 AI Resume Analyzer Backend Running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/analyze", analyzeRoutes);
app.use("/api/history", historyRoutes);

export default app;