import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const analyzeResume = async (resumeText, jobDescription) => {
  try {
    const prompt = `
You are an expert ATS (Applicant Tracking System) and HR consultant.

Analyze the following resume against the given job description.

Return ONLY valid JSON.

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

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.2,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const text = completion.choices[0].message.content;

    const cleaned = text
      .replace(/^```json/i, "")
      .replace(/^```/, "")
      .replace(/```$/, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (err) {
    console.error("Groq Error:", err);
    throw err;
  }
};

export default analyzeResume;