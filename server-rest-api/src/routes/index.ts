import express, { Router } from "express";
import postsRoute from "./posts.route";

const router = express.Router();

interface Route {
  path: string;
  route: Router;
}

// Routes here
const routes: Route[] = [{ path: "/posts", route: postsRoute }];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
