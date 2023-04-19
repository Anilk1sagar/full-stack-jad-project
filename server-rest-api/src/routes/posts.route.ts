import express from "express";
import { createPostHandler, getAllPostsHandler } from "../controllers/post.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { createPostSchema } from "../schema/post.schema";

const router = express.Router();

// Create Post
router.post("/", validateRequest(createPostSchema), createPostHandler);

// Get All Posts
router.get("/", getAllPostsHandler);

export default router;
