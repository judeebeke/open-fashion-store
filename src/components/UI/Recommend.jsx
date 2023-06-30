import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { json } from "react-router-dom";

const Recommend = () => {
  const [currentData, setCurrentData] = useState([]);

  const [image, setImage] = useState("");

  useEffect(() => {
    localStorage.setItem("current-details", image);
  }, [image]);

  let currentCate = localStorage.getItem("product-category");

  const recommendLoader = useCallback(async () => {
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
        "X-RapidAPI-Key": "02daad24c6mshdc1059575436c38p19c2a4jsn0b42e276ebd1",
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);

      setCurrentData(response.data.results) || null;
    } catch (error) {
      console.error(error);
      throw json({ message: null }, { status: 500, statusText: error });
    }
  }, [currentCate]);

  useEffect(() => {
    recommendLoader();
  }, [recommendLoader]);

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
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
                setImage(item.defaultArticle.images[0].url);
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

Recommend.propTypes = {
  suggestedData: PropTypes.array,
};

export default Recommend;
