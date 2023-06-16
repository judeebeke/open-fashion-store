import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import BlogRootElement from "./components/Blog/BlogRootElement";
import Post from "./components/Blog/Post";
import { loader as postLoader } from "./components/Blog/PostLoader";

const Blog = lazy(() => import("./components/Blog/Blog"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "blog",
          element: (
            <Suspense fallback={console.log("Loading...")}>
              <BlogRootElement />
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: <Blog />,
              loader: (meta) =>
                import("./components/Blog/blogPostLoader").then((module) =>
                  module.loader(meta)
                ),
            },
            {
              path: ":blogid",
              element: <Post />,
              loader: postLoader,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
