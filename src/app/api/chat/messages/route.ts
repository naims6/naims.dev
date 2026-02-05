import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Message from "@/lib/models/Message";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    await dbConnect();

    // If email is provided, fetch messages for that user (both client and admin replies)
    // If no email (admin view), we might want to fetch all or grouped by user
    // For now, let's just fetch by email for the client side
    if (!email) {
      // Admin might call this without email to see all messages (simplified)
      const messages = await Message.find().sort({ timestamp: 1 });
      return NextResponse.json(messages);
    }

    const messages = await Message.find({ senderEmail: email }).sort({
      timestamp: 1,
    });
    return NextResponse.json(messages);
  } catch (error: any) {
    console.error("GET Chat Messages Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { senderName, senderEmail, content, isAdmin } = body;

    if (!senderName || !senderEmail || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await dbConnect();

    const newMessage = await Message.create({
      senderName,
      senderEmail,
      content,
      isAdmin: isAdmin || false,
    });

    return NextResponse.json(newMessage);
  } catch (error: any) {
    console.error("POST Chat Messages Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
