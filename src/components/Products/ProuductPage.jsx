// import SectionTitle from "../UI/SectionTitle";

import { Link, useRouteLoaderData } from "react-router-dom";
import ScrollToTop from "../Utils/ScrollToTop";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const ProductPage = () => {
  const productData = useRouteLoaderData("prod-data");
  const dispatch = useDispatch();

  const getImageHandler = (image, id) => {
    dispatch(uiActions.getSelectedProductImage({ image: image, id: id }));
  };

  return (
    <section className="mt-24 px-6 grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 md:gap-2 lg:gap-5 place-items-center">
      <ScrollToTop />
      {productData.map((item) => {
        return (
          <figure
            key={item.defaultArticle.code}
            className={`flex flex-col justify-center items-center text-center pt-9`}
          >
            <img
              src={item.defaultArticle.images[0].url}
              className="object-contain"
              alt={item.defaultArticle.name}
            />

            <Link
              to={`/product/productdetails/${item.defaultArticle.code}`}
              className={`flex flex-col justify-center items-center text-center`}
              onClick={() => {
                getImageHandler(
                  item.defaultArticle.images[0].url,
                  item.defaultArticle.code
                );
              }}
            >
              <h5 className="w-4/6 text-body text-lg pt-1">
                {item.defaultArticle.name}
              </h5>
              <p className="text-primary text-xl">
                {item.defaultArticle.whitePrice.formattedValue}
              </p>
            </Link>
          </figure>
        );
      })}
    </section>
  );
};

export default ProductPage;
