import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "@/lib/ai/knowledgeBase";

interface ChatMessage {
  role: "user" | "model" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      return NextResponse.json(
        {
          error: "API key is missing.",
          reply:
            "⚠️ **API Key missing**: Please set your `GEMINI_API_KEY` in the `.env` file to enable AI answers.",
        },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { message, history = [] }: { message: string; history?: ChatMessage[] } = body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message content is required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    const modelName = process.env.GEMINI_MODEL || "models/gemini-3.6-flash";

    // Format previous messages for Gemini API
    const formattedHistory = (history || [])
      .slice(-8) // Keep recent 8 turns for fast context processing
      .map((msg) => ({
        role: msg.role === "assistant" || msg.role === "model" ? "model" : "user",
        parts: [{ text: msg.content }],
      }));

    const contents = [
      ...formattedHistory,
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    // Use Streaming API for instant token-by-token response
    const responseStream = await ai.models.generateContentStream({
      model: modelName,
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            const text = chunk.text;
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (err) {
          console.error("Stream processing error:", err);
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("POST /api/chat error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
