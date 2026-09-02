import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || "";

export const ai = new GoogleGenAI({ apiKey });
export const DEFAULT_GEMINI_MODEL =
  process.env.GEMINI_MODEL || "models/gemini-3.5-flash-lite";
