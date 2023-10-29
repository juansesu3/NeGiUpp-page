import mongoose, { Schema, model, models } from "mongoose";

const ArticleSchema = new Schema(
  {
    title: { type: String, require: true },
    summary: { type: String, require: true },
    content: { type: String, require: true },
    author: { type: String, require: true },
    imgAuthor: { type: String, require: true },
    images: [{ type: [String], require: true }],
    articleCat: { type: mongoose.Types.ObjectId, ref: "CategoryArticle" },
    topics: { type: Object },
    sharesCount: { type: Number, default: 0 }, // Nuevo campo para conteo de compartidos
    commentsCount: { type: Number, default: 0 }, // Nuevo campo para conteo de comentarios
    totalScore: { type: Number, default: 0 }, // Nuevo campo para la puntuación total
    totalVotes: { type: Number, default: 0 }, // Nuevo campo para el número total de votos
  },
  {
    timestamps: true,
  }
);

export const Article = models.Article || model("Article", ArticleSchema);
