// import SectionTitle from "../UI/SectionTitle";
import { useEffect } from "react";

import { useRouteLoaderData } from "react-router-dom";
import ScrollToTop from "../Utils/ScrollToTop";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import ProductInfo from "../UI/ProductInfo";
import { sendSelectedImage } from "../../store/ui-actions";
import useImageResizer from "../Utils/useImageResizer";

const ProductPage = () => {
  const productData = useRouteLoaderData("prod-data");
  const dispatch = useDispatch();
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

  return (
    <section className="mt-24 px-6 grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 md:gap-2 lg:gap-5 place-items-center">
      <ScrollToTop />
      {compressedProductData.map((item) => (
        <ProductInfo
          key={item.defaultArticle.code}
          itemCode={item.defaultArticle.code}
          itemImage={item.defaultArticle.images[0].url}
          itemImageBlob={item.compressedImage}
          itemName={item.defaultArticle.name}
          itemPrice={item.defaultArticle.whitePrice.formattedValue}
          getImageCodeHandler={getImageHandler}
        />
      ))}
    </section>
  );
};

export default ProductPage;
