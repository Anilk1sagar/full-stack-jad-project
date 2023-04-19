import { Ipost } from "../interfaces/post.interface";
import { buildApiUrl } from "../utils/helpers";

class PostService {
  fetchAllPosts(): Promise<Ipost[]> {
    return fetch(buildApiUrl("/posts")).then((res) => res.json());
  }

  createPost(payload: Ipost): Promise<Ipost> {
    return fetch(buildApiUrl("/posts"), {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
}

const postService = new PostService();
export default postService;
