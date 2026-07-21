import pdfParser from "../utils/pdfParser.js";
import analyzeResume from "../utils/groqClient.js";
import Analysis from "../models/Analysis.js";

const analyzeText = async (req, res) => {
    try {
        // Get uploaded file
        const file = req.file;

        // Validate PDF
        if (!file) {
            return res.status(400).json({
                success: false,
                message: "No PDF file uploaded",
            });
        }

        // Allow only PDF files
        if (file.mimetype !== "application/pdf") {
            return res.status(400).json({
                success: false,
                message: "Only PDF files are allowed",
            });
        }

        // Get Job Description
        const { jobDescription } = req.body;

        if (!jobDescription || jobDescription.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Job description is required",
            });
        }

        // Extract Resume Text
        const resumeText = await pdfParser(file.buffer);

        // Analyze using Groq
        const analysis = await analyzeResume(
            resumeText,
            jobDescription
        );

        // Save Analysis
        const savedAnalysis = await Analysis.create({
            user: req.user.id,
            resumeText,
            jobDescription,
            atsScore: analysis.atsScore,
            matchedKeywords: analysis.matchedKeywords || [],
            missingKeywords: analysis.missingKeywords || [],
            strengths: analysis.strengths || [],
            improvements: analysis.improvements || [],
            overallFeedback: analysis.overallFeedback || "",
        });

        return res.status(201).json({
            success: true,
            message: "Resume analyzed successfully",
            analysis: savedAnalysis,
        });

    } catch (error) {
        console.error("Analyze Controller Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Failed to analyze resume",
        });
    }
};

export default {
    analyzeText,
};