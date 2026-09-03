import { Schema, model, models } from "mongoose";

const messageSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["user", "ai", "system", "model", "assistant"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { _id: false, timestamps: true },
);

const conversationSchema = new Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    messages: [messageSchema],
  },
  { timestamps: true },
);

const Conversation =
  models.Conversation || model("Conversation", conversationSchema);

export default Conversation;
