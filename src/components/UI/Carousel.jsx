// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AliceCarousel from "react-alice-carousel";
import { PropTypes } from "prop-types";

import "react-alice-carousel/lib/alice-carousel.css";
import { uiActions } from "../../store/ui-slice";
import ProductInfo from "./ProductInfo";
import { sendSelectedImage } from "../../store/ui-actions";
import { useEffect } from "react";
import useImageResizer from "../Utils/useImageResizer";

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
  const { compressedProductData, imagesCompressor: productImagesCompressor } =
    useImageResizer();
  const getImageHandler = (image, id) => {
    dispatch(uiActions.getSelectedProductImage({ image: image, id: id }));
    dispatch(sendSelectedImage({ image: image, id: id }));
  };

  useEffect(() => {
    if (productData.length > 0) {
      productImagesCompressor(productData);
    }
  }, [productData, productImagesCompressor]);

  const responsive = {
    0: { items: 1, itemsFit: "cover" },
    568: { items: 2, itemsFit: "cover" },
    1024: { items: 3, itemsFit: "cover" },
  };

  const products = compressedProductData.map((item) => {
    return (
      <ProductInfo
        key={item.defaultArticle.code}
        itemCode={item.defaultArticle.code}
        itemImage={item.compressedImage}
        itemName={item.defaultArticle.name}
        itemPrice={item.defaultArticle.whitePrice.formattedValue}
        getImageCodeHandler={getImageHandler}
      />
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
