import { NextResponse } from "next/server";
import { ai, DEFAULT_GEMINI_MODEL } from "@/lib/ai/geminiClient";
import { SYSTEM_PROMPT } from "@/lib/ai/knowledgeBase";

interface ChatMessage {
  role: "user" | "model" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, history = [] }: { message: string; history?: ChatMessage[] } = body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message content is required" },
        { status: 400 }
      );
    }

    // Clean history: remove initial welcome message & ensure valid user -> model alternation
    const validHistoryMessages = (history || []).filter(
      (m) => m.content && m.content !== "welcome-msg" && !m.content.startsWith("Hi! 👋 I'm **Naim AI**")
    );

    // Format for Gemini API: map roles to 'user' or 'model'
    const formattedHistory: { role: "user" | "model"; parts: { text: string }[] }[] = [];

    for (const msg of validHistoryMessages) {
      const mappedRole = msg.role === "assistant" || msg.role === "model" ? "model" : "user";
      
      // Ensure history starts with 'user'
      if (formattedHistory.length === 0 && mappedRole !== "user") {
        continue;
      }

      // Avoid consecutive duplicate roles for clean Gemini context
      const lastMsg = formattedHistory[formattedHistory.length - 1];
      if (lastMsg && lastMsg.role === mappedRole) {
        lastMsg.parts[0].text += `\n${msg.content}`;
      } else {
        formattedHistory.push({
          role: mappedRole,
          parts: [{ text: msg.content }],
        });
      }
    }

    // Ensure the last message in history before current user message is 'model' (or history ends cleanly)
    if (formattedHistory.length > 0 && formattedHistory[formattedHistory.length - 1].role === "user") {
      formattedHistory.pop();
    }

    // Keep recent 6 turns for optimal speed & low latency
    const recentHistory = formattedHistory.slice(-6);

    const contents = [
      ...recentHistory,
      {
        role: "user" as const,
        parts: [{ text: message }],
      },
    ];

    // Ultra-clean request using pre-initialized global ai instance
    const response = await ai.models.generateContent({
      model: DEFAULT_GEMINI_MODEL,
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.1,      // Near-deterministic: minimizes hallucination for a portfolio FAQ bot
        maxOutputTokens: 350,  // Hard cap: enforces short answers even if prompt instruction is ignored
      },
    });

    const reply = response.text || "I'm sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("POST /api/chat error:", error);
    return NextResponse.json(
      { error: "Failed to generate AI response", details: error.message },
      { status: 500 }
    );
  }
}
