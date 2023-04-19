import { Ipost } from "../interfaces/post.interface";

class PostService {
  fetchAllPosts(): Promise<Ipost[]> {
    return fetch("http://localhost:3001/api/posts").then((res) => res.json());
  }

  createPost(payload: Ipost): Promise<Ipost> {
    return fetch("http://localhost:3001/api/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
}

const postService = new PostService();

export default postService;
