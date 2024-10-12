// Router

import { createBrowserRouter } from "react-router-dom";
import BlogFeed from "../screens/BlogFeed";
import PostPage from "../screens/PostPage";
import UserProfile from "../screens/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogFeed />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
  {
    path: "/profile",
    element: <UserProfile />
  }
]);

export default router;
