// Router

import { createBrowserRouter } from "react-router-dom";
import BlogFeed from "../screens/BlogFeed";


const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogFeed />,
  },
]);

export default router;