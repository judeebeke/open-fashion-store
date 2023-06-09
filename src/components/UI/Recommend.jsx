import { useEffect, useState } from "react";
import axios from "axios";

import { PropTypes } from "prop-types";
import { json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import ProductInfo from "./ProductInfo";

const Recommend = () => {
  const [currentData, setCurrentData] = useState([]);
  let dispatch = useDispatch();
  let currentMenu = useSelector((state) => state.ui.currentMenu);
  let randomNumber = useSelector((state) => state.ui.myRand);

  const getImageHandler = (image, id) => {
    dispatch(uiActions.getSelectedProductImage({ image: image, id: id }));
    dispatch(uiActions.getRandomNumber());
  };

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
      } catch (error) {
        throw json({ message: null }, { status: 500, statusText: error });
      }
    };
    recommendLoader();
  }, [currentMenu, randomNumber]);

  return (
    <>
      <h2 className="text-center text-2xl">You May Also Like</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {currentData.map((item) => {
          return (
            <ProductInfo
              key={item.defaultArticle.code}
              itemCode={item.defaultArticle.code}
              itemImage={item.defaultArticle.images[0].url}
              itemName={item.defaultArticle.name}
              itemPrice={item.defaultArticle.whitePrice.formattedValue}
              getImageCodeHandler={getImageHandler}
            />
          );
        })}
      </section>
    </>
  );
};

Recommend.propTypes = {
  suggestedData: PropTypes.array,
};

export default Recommend;
