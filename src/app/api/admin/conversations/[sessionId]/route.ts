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
      return NextResponse.json({ error: "Conversation not found" }, { status: 404 });
    }

    return NextResponse.json(conversation);
  } catch (error: any) {
    console.error("GET /api/admin/conversations/[sessionId] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch conversation details" },
      { status: 500 }
    );
  }
}
