import { Schema, model, models } from "mongoose";

const UsersBlogSchema = new Schema(
  {
    email: { type: String, require: true, unique:true },
    verified: { type: Boolean, require: false }
  },
  {
    timestamps: true,
  }
);

export const UsersBlog =
  models.UsersBlog || model("UsersBlog", UsersBlogSchema);
