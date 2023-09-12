import { Schema, model, models } from "mongoose";

const MessageAssistantSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);

export const MessageAssistant =
  models.MessageAssistant || model("MessageAssistant", MessageAssistantSchema);
