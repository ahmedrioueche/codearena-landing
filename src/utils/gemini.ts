import { chatBotStartPrompt } from "@/constants/chat";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY: string | undefined = process.env.NEXT_PUBLIC_GEMINI_KEY;
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;
const model = genAI?.getGenerativeModel({ model: "gemini-1.5-flash" });

export const geminiGetAnswer = async (prompt: string) => {
  try {
    const result = await model?.generateContent(prompt);
    return result?.response.text();
  } catch (e) {
    console.log("Could not get Gemini Answer", e);
  }
};

export const getGeminiReply = async (input: string) => {
  const prompt = chatBotStartPrompt + "//Chat starts now//: " + input;
  try {
    const response = await geminiGetAnswer(prompt);
    return response;
  } catch (e) {
    console.log("Could not get Gemini Reply", e);
  }
};
