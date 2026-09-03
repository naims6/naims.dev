import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Conversation from "@/lib/models/Conversation";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const sessionId = (await params).sessionId;
    await dbConnect();
    
    const conversation = await Conversation.findOne({ sessionId });
    
    if (!conversation) {
      return NextResponse.json({ messages: [] });
    }

    return NextResponse.json({ messages: conversation.messages });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("GET /api/chat/[sessionId] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch conversation details" },
      { status: 500 }
    );
  }
}
