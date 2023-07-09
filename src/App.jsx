import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/Homepage";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import BlogRootElement from "./components/Blog/BlogRootElement";
import Post from "./components/Blog/Post";
import Loader from "./components/UI/Loader";
import ProductPage from "./components/Products/ProuductPage";
import Products from "./components/Products/Products";

import { loader as postLoader } from "./components/Blog/PostLoader";
import { loader as productsLoader } from "./components/Products/productCategoryLoader";
import { loader as homepageLoader } from "./components/HomepageSections/HomeLoader";

import CartRoot from "./components/Cart/CartRoot";
import Checkout from "./components/Cart/Checkout";

const Blog = lazy(() => import("./components/Blog/Blog"));
const ProductRoot = lazy(() => import("./components/Products/ProductRoot"));
const ProductDetails = lazy(() =>
  import("./components/Products/ProductDetails")
);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      id: "for-you",
      loader: homepageLoader,
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
              {" "}
              <BlogRootElement />{" "}
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
          element: (
            <Suspense fallback={<Loader />}>
              <ProductRoot />
            </Suspense>
          ),
          id: "prod-data",
          loader: (meta) =>
            import("./components/Products/ProductLoader").then((module) =>
              module.productLoader(meta)
            ),
          children: [
            {
              index: true,
              element: <ProductPage />,
            },

            {
              path: "/product/:prodid",
              element: <Products />,
              loader: productsLoader,
            },

            {
              path: "/product/productdetails/:id",
              element: (
                <Suspense fallback={<Loader />}>
                  <ProductDetails />
                </Suspense>
              ),
              loader: (meta) =>
                import("./components/Products/ProductDetailsLoader").then(
                  (module) => module.loader(meta)
                ),
            },
          ],
        },

        {
          path: "checkout",
          element: <CartRoot />,
          children: [
            {
              index: true,
              element: <Checkout />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      {" "}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
