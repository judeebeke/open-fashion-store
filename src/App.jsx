import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import BlogRootElement from "./components/Blog/BlogRootElement";
import Post from "./components/Blog/Post";
import { loader as postLoader } from "./components/Blog/PostLoader";
import Loader from "./components/UI/Loader";
import ProductRoot from "./components/Products/ProductRoot";
import ProductPage from "./components/Products/ProuductPage";
import Products from "./components/Products/Products";

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
            <Suspense fallback={<Loader />}>
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
              path: "/blog/:blogid",
              element: <Post />,
              loader: postLoader,
            },
          ],
        },
        {
          path: "product",
          element: <ProductRoot />,
          children: [
            { index: true, element: <ProductPage /> },
            { path: "/product/:prodid", element: <Products /> },
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
