// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AliceCarousel from "react-alice-carousel";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import "react-alice-carousel/lib/alice-carousel.css";
import { uiActions } from "../../store/ui-slice";

const SemiDiamond = ({ isActive }) => (
  <span
    className={`semi-diamond ${isActive ? "bg-secondary" : "bg-bgcolor"} ${
      isActive ? "active" : ""
    }`}
    style={{
      width: "8px",
      height: "8px",
      transform: "rotate(45deg)",
      display: "inline-block",
      margin: "0 5px",
    }}
  />
);

const Carousel = (props) => {
  let { productData, letDots } = props;
  let dispatch = useDispatch();

  const getImageHandler = (image, id) => {
    dispatch(uiActions.getSelectedProductImage({ image: image, id: id }));
  };

  const responsive = {
    0: { items: 1, itemsFit: "cover" },
    568: { items: 2, itemsFit: "cover" },
    1024: { items: 3, itemsFit: "cover" },
  };

  const products = productData.map((item) => {
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
  });

  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={products}
        renderDotsItem={letDots ? SemiDiamond : ""}
        responsive={responsive}
        infinite
        disableButtonsControls
        controlsStrategy="alternate"
      />
    </div>
  );
};

SemiDiamond.propTypes = {
  isActive: PropTypes.string,
};

Carousel.propTypes = {
  productData: PropTypes.array.isRequired,
  letDots: PropTypes.bool,
};

export default Carousel;
