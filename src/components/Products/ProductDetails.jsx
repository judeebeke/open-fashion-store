import { Fragment, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { flexCenter } from "../../style";
import { AiFillHeart, AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Recommend from "../UI/Recommend";
import { allProducts } from "../../store/localdata";
import { json } from "react-router-dom";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";

const ProductDetails = () => {
  const [colore, setColore] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const { id } = useParams();
  let currentSubCate = localStorage.getItem("product-subcategory");
  let currentCate = localStorage.getItem("product-category");

  let productItems = allProducts.find((item) =>
    currentCate.includes(item.collection)
  );

  let valuedItem = productItems.category.find(
    (item) => item.subcategory === currentSubCate
  );

  let selectedItem = valuedItem.products.find((item) => {
    return item.version === id;
  });

  let unSelectedItem = valuedItem.products.filter((item) => {
    return item.version !== id;
  });

  let useUnSelected = unSelectedItem.slice(3, 7);

  const loader = useCallback(async () => {
    const storageRef = ref(
      storage,
      `${currentCate}/${currentSubCate}/${selectedItem.description}.png`
    );

    try {
      const url = await getDownloadURL(storageRef);
      setCurrentImage(url);
    } catch (error) {
      throw json(
        { message: null },
        { status: 500, statusText: "Could not get requested post!" }
      );
    }
  }, [currentSubCate, currentCate, selectedItem.description]);

  useEffect(() => {
    loader();
  }, [loader]);

  return (
    <Fragment>
      <main className="mt-20 flex flex-col">
        <img
          src={currentImage}
          className="mx-auto w-full h-auto lg:w-1/3 object-cover px-5"
          alt="PRODUCT ONE DISPLAY"
        />
        <span className="px-5 py-5 flex flex-col gap-y-2 lg:text-center">
          <h3 className="text-xl">{selectedItem.title}</h3>
          <p className="text-base">{selectedItem.description}</p>
          <p className="text-base text-secondary">${selectedItem.price}</p>
        </span>
        <button
          className={`mx-auto w-full md:w-3/5 mb-5 md:h-10 bg-title text-offwhite text-center ${flexCenter} cursor-default gap-x-3 py-3 px-3`}
        >
          <Link
            to="/"
            className={`flex justify-center items-center gap-x-3 px-3`}
          >
            <AiOutlinePlus /> ADD TO CART
          </Link>
          {!colore ? (
            <i
              className="z-20"
              onClick={() => {
                setColore((prev) => !prev);
              }}
            >
              <AiOutlineHeart />
            </i>
          ) : (
            <i
              className="z-20"
              onClick={() => {
                setColore((prev) => !prev);
              }}
            >
              <AiFillHeart className="text-secondary" />
            </i>
          )}
        </button>
        <div className="flex flex-col px-5 gap-y-5 gap-x-10 lg:mx-auto md:flex-row lg:gap-y-0 lg:gap-x-14 lg:w-2/4">
          <div className="flex flex-col mx-auto">
            <h4 className="text-lg mb-2">Materials</h4>
            <p className="flex flex-wrap text-base leading-8">
              {selectedItem.material}
            </p>
          </div>
          <div className="flex flex-col mx-auto">
            <h4 className="text-lg  mb-2">Care</h4>
            <p className="flex flex-wrap text-base leading-8">
              {selectedItem.care}
            </p>
            <ul className="flex flex-col gap-y-2 mt-3 text-base ">
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
      <h2 className="text-center text-2xl">You May Also Like</h2>
      <Recommend suggestedData={useUnSelected} />
    </Fragment>
  );
};

export default ProductDetails;
