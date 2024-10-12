// Router

import { createBrowserRouter } from "react-router-dom";
import BlogFeed from "../screens/BlogFeed";
import PostPage from "../screens/PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogFeed />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
]);

export default router;
