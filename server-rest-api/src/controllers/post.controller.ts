import { Request, Response, NextFunction } from "express";
import Post from "../models/post.model";

export const createPostHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;

    const post = await Post.create(body);

    return res.status(200).send(post);
  } catch (err) {
    console.error(err);
    return res.status(400).send("Something went wrong!");
  }
};

export const getAllPostsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await Post.find();
    return res.status(200).send(posts);
  } catch (err) {
    console.error(err);
    return res.status(400).send("Something went wrong!");
  }
};
