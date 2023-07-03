import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { json } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Recommend = () => {
  const [currentData, setCurrentData] = useState([]);
  let dispatch = useDispatch();

  const getImageHandler = (image, id) => {
    dispatch(uiActions.getSelectedProductImage({ image: image, id: id }));
  };

  useEffect(() => {
    let currentCate = localStorage.getItem("product-category");
    const recommendLoader = async () => {
      let apikey = import.meta.env.VITE_API_KEY_OPEN_FASHION;
      let apihost = import.meta.env.VITE_API_HOST;

      const randomNumber = Math.floor(Math.random() * 6);

      const options = {
        method: "GET",
        url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
        params: {
          country: "us",
          lang: "en",
          currentpage: `${randomNumber}`,
          pagesize: "6",
          categories: `${currentCate}`,
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
        console.error(error);
        throw json({ message: null }, { status: 500, statusText: error });
      }
    };
    recommendLoader();
  }, []);

  return (
    <>
      <h2 className="text-center text-2xl">You May Also Like</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {currentData.map((item) => {
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
    </>
  );
};

Recommend.propTypes = {
  suggestedData: PropTypes.array,
};

export default Recommend;
