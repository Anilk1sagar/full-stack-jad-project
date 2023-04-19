import React, { useEffect, useState } from "react";
import { Ipost } from "../../interfaces/post.interface";
import PostService from "../../services/post.service";

interface Posts {
  data: Ipost[];
  loading: boolean;
  error: any;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Posts>({
    data: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    setPosts((prevValue) => ({ ...prevValue, loading: true }));

    PostService.fetchAllPosts()
      .then((resp) => {
        setPosts({ data: resp, loading: false, error: null });
      })
      .catch((err) => {
        setPosts({ data: [], loading: false, error: err });
      });
  }, []);

  if (posts.loading) {
    return <div>Loading posts...</div>;
  }

  if (posts.error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <ul>
        {posts.data.map((post: any) => (
          <li>
            <h5>{post.title}</h5>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
