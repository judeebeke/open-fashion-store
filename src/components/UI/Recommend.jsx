import { useEffect, useState } from "react";
import axios from "axios";
import useImageResizer from "../Utils/useImageResizer";

import { PropTypes } from "prop-types";
import { json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import ProductInfo from "./ProductInfo";
import MiniLoader from "./MiniLoader";

const Recommend = () => {
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let dispatch = useDispatch();
  let currentMenu = useSelector((state) => state.ui.currentMenu);
  let randomNumber = useSelector((state) => state.ui.myRand);

  const getImageHandler = (image, id) => {
    dispatch(uiActions.getSelectedProductImage({ image: image, id: id }));
    dispatch(uiActions.getRandomNumber());
  };

  const { compressedProductData, imagesCompressor: productImagesCompressor } =
    useImageResizer();

  useEffect(() => {
    const recommendLoader = async () => {
      let apikey = import.meta.env.VITE_API_KEY_OPEN_FASHION;
      let apihost = import.meta.env.VITE_API_HOST;

      const options = {
        method: "GET",
        url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
        params: {
          country: "us",
          lang: "en",
          currentpage: `${randomNumber}`,
          pagesize: "6",
          categories: `${currentMenu}`,
        },
        headers: {
          "X-RapidAPI-Key": apikey,
          "X-RapidAPI-Host": apihost,
        },
      };

      try {
        const response = await axios.request(options);

        setCurrentData(response.data.results) || null;
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw json({ message: null }, { status: 500, statusText: error });
      }
    };
    const timeout = setTimeout(() => {
      recommendLoader();
    }, 30);

    return () => clearTimeout(timeout);
  }, [currentMenu, randomNumber]);

  useEffect(() => {
    if (currentData.length > 0) {
      productImagesCompressor(currentData);
    }
  }, [currentData, productImagesCompressor]);

  return (
    <>
      <h2 className="text-center text-2xl">You May Also Like</h2>
      {isLoading ? (
        <MiniLoader />
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {compressedProductData.map((item) => {
            return (
              <ProductInfo
                key={item.defaultArticle.code}
                itemCode={item.defaultArticle.code}
                itemImage={item.defaultArticle.images[0].url}
                itemImageBlob={item.compressedImage}
                itemName={item.defaultArticle.name}
                itemPrice={item.defaultArticle.whitePrice.formattedValue}
                getImageCodeHandler={getImageHandler}
              />
            );
          })}
        </section>
      )}
    </>
  );
};

Recommend.propTypes = {
  suggestedData: PropTypes.array,
};

export default Recommend;
