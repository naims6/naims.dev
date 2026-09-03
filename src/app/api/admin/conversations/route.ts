import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Conversation from "@/lib/models/Conversation";

export async function GET() {
  try {
    await dbConnect();
    const conversations = await Conversation.find({}, { sessionId: 1, updatedAt: 1, 'messages': { $slice: 1 } })
      .sort({ updatedAt: -1 });

    return NextResponse.json(conversations);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("GET /api/admin/conversations error:", error);
    return NextResponse.json(
      { error: "Failed to fetch conversations" },
      { status: 500 }
    );
  }
}
