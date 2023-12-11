import mongoose, { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema(
    {
      user: { type: mongoose.Types.ObjectId, ref: 'UsersBlog', required: true },
      article: { type: Schema.Types.ObjectId, required: true },
      stars:{ type: Number, require: true },
      title:{ type: String, require: true },
      content:{ type: String, require: true },
    },
    {
      timestamps: true,
    }
  );
  
  export const Review = models.Review || model("Review", ReviewSchema);
