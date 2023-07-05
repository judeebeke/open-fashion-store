import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { flexCenter } from "../../style";
import { Link, useLoaderData } from "react-router-dom";

import { AiFillHeart, AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import Recommend from "../UI/Recommend";
import ScrollToTop from "../Utils/ScrollToTop";
import { cartActions } from "../../store/cart-slice";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const productImage = useSelector((state) => state.ui.currentProductImage);

  const cartItems = useSelector((state) => state.cart.items);
  const productDetails = useLoaderData();

  const toggleToFavouriteHandler = (
    currentName,
    currentimage,
    currentCode,
    currentPrice,
    sampleName
  ) => {
    dispatch(
      cartActions.toggleToFavourite({
        id: currentCode,
        title: currentName,
        image: currentimage,
        price: currentPrice,
        sampName: sampleName,
      })
    );
  };

  const addToCartHandler = (
    currentName,
    currentimage,
    currentCode,
    currentPrice,
    sampleName
  ) => {
    dispatch(
      cartActions.addProductToCart({
        id: currentCode,
        title: currentName,
        image: currentimage,
        price: currentPrice,
        sampName: sampleName,
      })
    );
  };

  const currentProduct = cartItems.filter((item) => {
    return item.id === productDetails.code;
  });

  let onCart = "";
  let onLiked = "";
  if (currentProduct[0] === undefined) {
    onCart = false;
    onLiked = false;
  } else {
    onCart = currentProduct[0].onCart;
    onLiked = currentProduct[0].liked;
  }

  return (
    <Fragment>
      <ScrollToTop />
      <main className="mt-20 flex flex-col">
        <img
          src={productImage}
          className="mx-auto w-full h-auto lg:w-1/3 object-cover px-5"
          alt={productDetails.name}
        />
        <span className="px-5 py-5 flex flex-col gap-y-2 lg:text-center">
          <h3 className="text-xl">{productDetails.name}</h3>
          <p className="text-base">{productDetails.description}</p>
          <p className="text-base text-secondary">
            ${" "}
            {`${productDetails.whitePrice.price} ${productDetails.whitePrice.currency}`}
          </p>
        </span>
        <button
          className={`mx-auto w-full md:w-3/5 mb-5 md:h-10 bg-title text-offwhite text-center ${flexCenter} cursor-default gap-x-3 py-3 px-3`}
        >
          {!onCart ? (
            <span
              className={`flex justify-center items-center gap-x-3 px-3`}
              onClick={() => {
                addToCartHandler(
                  productDetails.name,
                  productImage,
                  productDetails.code,
                  productDetails.whitePrice.price,
                  productDetails.sapProductName
                );
              }}
            >
              <AiOutlinePlus /> ADD TO CART
            </span>
          ) : (
            <Link
              to={"/cart"}
              className={`flex justify-center items-center gap-x-3 px-3`}
            >
              GO TO CART
            </Link>
          )}

          {!onLiked ? (
            <i
              className="z-20"
              onClick={() => {
                toggleToFavouriteHandler(
                  productDetails.name,
                  productImage,
                  productDetails.code,
                  productDetails.whitePrice.price,
                  productDetails.sapProductName
                );
              }}
            >
              <AiOutlineHeart />
            </i>
          ) : (
            <i
              className="z-20"
              onClick={() => {
                toggleToFavouriteHandler(
                  productDetails.name,
                  productImage,
                  productDetails.code,
                  productDetails.whitePrice.price,
                  productDetails.sapProductName
                );
              }}
            >
              <AiFillHeart className="text-secondary" />
            </i>
          )}
        </button>
        <div className="flex flex-col px-5 gap-y-5 gap-x-10 lg:mx-auto md:flex-row lg:gap-y-0 lg:gap-x-14 lg:w-2/4">
          <div className="flex flex-col">
            <h4 className="text-lg mb-2">Materials Details</h4>
            <p className="flex flex-wrap text-base leading-8">
              {productDetails.materialDetails[0].description}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg  mb-2">Import Info</h4>
            <p className="flex flex-wrap text-base leading-8">
              {productDetails.importedBy}
            </p>
            <ul className="flex flex-col gap-y-2 mt-3 text-base ">
              <li>
                <span>Year Of Production: </span>
                {productDetails.yearOfProduction}
              </li>
              <li>Do not use Bleach</li>
              <li>Iron at a maximum of 110ºC/230ºF</li>
            </ul>
          </div>
        </div>
        <div className="px-5 my-5 lg:flex lg:justify-center flex-col lg:items-center lg:text-center">
          <h5 className="text-lg  mb-2">Delivery</h5>
          <p className="flex flex-col lg:justify-center text-base">
            <span className="text-lg leading-8">Free Flat Rate Shipping</span>
            Estimated to be delivered 12/06/23 - 19/06/23
          </p>
        </div>
      </main>
      <Recommend />
    </Fragment>
  );
};

export default ProductDetails;
