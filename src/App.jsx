import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";

// import Blog, {loader as blogLoader} from "./components/Blog/Blog";

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
          path: "/blog",
          element: (
            <Suspense fallback={console.log("Loading...")}>
              <Blog />
            </Suspense>
          ),
          loader: (meta) =>
            import("./components/Blog/blogPostLoader").then((module) =>
              module.loader(meta)
            ),
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
