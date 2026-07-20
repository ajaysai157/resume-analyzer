import cors from 'cors';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import historyRoutes from "./routes/historyRoutes.js";
const app=express();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/analyze', analyzeRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/analyze", analyzeRoutes);
app.use("/api/history", historyRoutes);
app.get('/',(req,res)=>{
    res.status(200).json({
    message: "AI Resume Analyzer API Running"
});
}
);

export default app;