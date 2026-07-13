import pdfParser from "../utils/pdfParser.js";

const analyzeText = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }

        const resumeText = await pdfParser(file.buffer);

        return res.status(200).json({
            success: true,
            resumeText,
        });

    } catch (error) {
        console.error("Analyze Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Failed to extract resume text",
        });
    }
};

export default {
    analyzeText,
};