import { Schema, model, models } from "mongoose";

const UsersBlogSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export const UsersBlog =
  models.UsersBlog || model("UsersBlog", UsersBlogSchema);
