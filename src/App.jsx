import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/Homepage";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import BlogRootElement from "./components/Blog/BlogRootElement";
import Loader from "./components/UI/Loader";

import { loader as postLoader } from "./components/Blog/PostLoader";
import { loader as homepageLoader } from "./components/HomepageSections/HomeLoader";

import CartRoot from "./components/Cart/CartRoot";

const Checkout = lazy(() => import("./components/Cart/Checkout"));
const Blog = lazy(() => import("./components/Blog/Blog"));
const Post = lazy(() => import("./components/Blog/Post"));

const ProductRoot = lazy(() => import("./components/Products/ProductRoot"));
const ProductDetails = lazy(() =>
  import("./components/Products/ProductDetails")
);
const AboutUs = lazy(() => import("./components/AboutUs"));
const Products = lazy(() => import("./components/Products/Products"));
const ProductPage = lazy(() => import("./components/Products/ProuductPage"));

const productLoader = (meta) =>
  import("./components/Products/ProductLoader").then((module) =>
    module.productLoader(meta)
  );
const productsCategoryLoader = (meta) =>
  import("./components/Products/ProductCategoryLoader").then((module) =>
    module.loader(meta)
  );
const productDetailsLoader = (meta) =>
  import("./components/Products/ProductDetailsLoader").then((module) =>
    module.loader(meta)
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
              element: (
                <Suspense fallback={<Loader />}>
                  <Post />
                </Suspense>
              ),
              loader: postLoader,
            },
          ],
        },

        {
          path: "product",
          element: <ProductRoot />,

          id: "prod-data",
          loader: productLoader,
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<Loader />}>
                  <ProductPage />
                </Suspense>
              ),
            },

            {
              path: "/product/:prodid",
              element: (
                <Suspense fallback={<Loader />}>
                  <Products />
                </Suspense>
              ),
              loader: productsCategoryLoader,
            },
            {
              path: "/product/productdetails/:id",
              element: (
                <Suspense fallback={<Loader />}>
                  <ProductDetails />
                </Suspense>
              ),
              loader: productDetailsLoader,
            },
          ],
        },

        {
          path: "checkout",
          element: <CartRoot />,
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<Loader />}>
                  <Checkout />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<Loader />}>
              <AboutUs />
            </Suspense>
          ),
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
