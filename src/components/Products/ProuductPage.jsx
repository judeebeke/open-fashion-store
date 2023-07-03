// import SectionTitle from "../UI/SectionTitle";

import { Link } from "react-router-dom";
import { productsForYou } from "../../store/localdata";
import ScrollToTop from "../Utils/ScrollToTop";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const ProductPage = () => {
  const dispatch = useDispatch();

  const getImageHandler = (image, id) => {
    dispatch(uiActions.getSelectedProductImage({ image: image, id: id }));
  };

  return (
    <section className="mt-24 grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-4 md:gap-2 lg:gap-5 place-items-center">
      <ScrollToTop />
      {productsForYou.map((item) => {
        return (
          <figure
            key={item.id}
            className={`flex flex-col justify-center items-center text-center pt-9`}
          >
            <img src={item.image} className="object-contain" alt={item.title} />
            <Link
              to={`/product/productdetails/${item.id}`}
              className={`flex flex-col justify-center items-center text-center`}
              onClick={() => {
                getImageHandler(item.image, item.id);
              }}
            >
              <h5 className="w-4/6 text-body text-xl pt-1">{item.title}</h5>
              <p className="text-primary text-2xl">&#x24;{item.price}</p>
            </Link>
          </figure>
        );
      })}
    </section>
  );
};

export default ProductPage;
