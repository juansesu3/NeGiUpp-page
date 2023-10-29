import mongoose, { Schema, model, models } from "mongoose";

const CommentSchema = new Schema({
  article: { type: mongoose.Types.ObjectId, ref: "Article" },
  author: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Comment = models.Comment || model("Comment", CommentSchema);
