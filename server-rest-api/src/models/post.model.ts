import mongoose from "mongoose";

export interface IPostDocument extends mongoose.Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    content: { type: String, require: true },
  },
  { timestamps: true }
);

const Post = mongoose.model<IPostDocument>("Post", PostSchema);
export default Post;
