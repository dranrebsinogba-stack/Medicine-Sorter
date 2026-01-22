
import { GoogleGenAI } from "@google/genai";

export const getHealthAdvice = async (query: string) => {
  if (!process.env.API_KEY) {
    return "API Key not configured. Please use a local environment with an API Key.";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "You are a friendly health assistant integrated into a medication tracking app. Provide concise, helpful health advice. Always include a disclaimer that you are an AI and the user should consult a medical professional for critical health decisions.",
      },
    });
    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};
