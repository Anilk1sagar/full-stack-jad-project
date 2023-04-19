import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import CreatePostPage from "./pages/create-post";
import PostsPage from "./pages/posts";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Navigate to="/posts" replace /> },
    { path: "/posts", element: <PostsPage /> },
    { path: "/create-post", element: <CreatePostPage /> },
  ]);

  return routes;
};

export default AppRoutes;
