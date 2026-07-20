import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini Client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Select Gemini Model
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

/**
 * Analyze Resume against Job Description
 * @param {string} resumeText
 * @param {string} jobDescription
 * @returns {Object} Analysis Object
 */

const analyzeResume = async (resumeText, jobDescription) => {
  try {
    // Prompt for Gemini
    const prompt = `
You are an expert ATS (Applicant Tracking System) and HR consultant.

Analyze the following resume against the given job description.

Return ONLY valid JSON.

Do NOT return markdown.
Do NOT return explanations.
Do NOT return extra text.

Return exactly in this format:

{
  "atsScore": 0,
  "matchedKeywords": [],
  "missingKeywords": [],
  "strengths": [],
  "improvements": [],
  "overallFeedback": ""
}

Resume:
${resumeText}

Job Description:
${jobDescription}
`;

    // Generate AI Response
    const result = await model.generateContent(prompt);

    // Get Text Response
    const text = result.response.text();

    // Remove markdown if Gemini returns ```json ... ```
    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Convert JSON string → JavaScript Object
    const analysis = JSON.parse(cleanedText);

    return analysis;
  } catch (error) {
    console.error("Gemini Error:", error.message);
    throw new Error("Failed to analyze resume");
  }
};

export default analyzeResume;