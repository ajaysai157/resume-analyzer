import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const key = process.env.GEMINI_API_KEY;

try {
  const genAI = new GoogleGenerativeAI(key);
  // Try gemini-2.0-flash
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
  const result = await model.generateContent('Reply with only: WORKING');
  console.log('gemini-2.0-flash works:', result.response.text());
} catch (e) {
  console.error('gemini-2.0-flash Error:', e.message);

  try {
    const genAI2 = new GoogleGenerativeAI(key);
    // Try gemini-pro
    const model2 = genAI2.getGenerativeModel({ model: 'gemini-pro' });
    const result2 = await model2.generateContent('Reply with only: WORKING');
    console.log('gemini-pro works:', result2.response.text());
  } catch (e2) {
    console.error('gemini-pro Error:', e2.message);
  }
}
