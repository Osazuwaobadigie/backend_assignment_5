import mongoose from "mongoose";

// Schema
const articleSchema = mongoose.Schema({
  data: {
    id: "string",
    title: "string",
    body: "string",
  },
  user: {
    
    id: "string",
    name: "string",
    email: "string",
   
  },
});

// Model
const Article = mongoose.model("Article", articleSchema, {
  timestamps: true,
});
export default Article;
