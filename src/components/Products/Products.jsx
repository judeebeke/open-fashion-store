import { useState, useEffect, useCallback } from "react";
import { useLoaderData, json, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import ScrollToTop from "../Utils/ScrollToTop";
import ProductInfo from "../UI/ProductInfo";
import MiniLoader from "../UI/MiniLoader";
import { sendSelectedImage } from "../../store/ui-actions";
import useImageResizer from "../Utils/useImageResizer";

const ITEMS_PER_PAGE = 8; // Number of items to display per page

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { prodid } = useParams();
  const productData = useLoaderData();
  const dispatch = useDispatch();
  const { compressedProductData, imagesCompressor: productImagesCompressor } =
    useImageResizer();

  const getImageHandler = (image, id) => {
    dispatch(uiActions.getSelectedProductImage({ image: image, id: id }));
    dispatch(sendSelectedImage({ image: image, id: id }));
  };

  const makePostRequest = useCallback(
    async (data) => {
      try {
        const options = {
          method: "put",
          url: `https://open-fashion-55eda-default-rtdb.firebaseio.com/products/${prodid}.json`,
          data: JSON.stringify(data),
        };
        const response = await axios.request(options);
        return response;
      } catch (error) {
        throw json(
          { message: null },
          { status: 500, statusText: error.message }
        );
      }
    },
    [prodid]
  );

  useEffect(() => {
    makePostRequest(productData);
  }, [productData, makePostRequest]);

  useEffect(() => {
    if (productData.length > 0) {
      productImagesCompressor(productData);
    }
  }, [productData, productImagesCompressor]);

  localStorage.setItem("product-subcategory", prodid);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const pageCount = Math.ceil(productData.length / ITEMS_PER_PAGE);

  const currentItems = compressedProductData.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="mt-20">
      <ScrollToTop />
      <ul className="grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-4 md:gap-2 lg:gap-5 place-items-center">
        {currentItems.map((item) => (
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
      </ul>
      {/* Render the pagination component */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page"}
        pageLinkClassName={"page-link"}
        previousClassName={"previous"}
        nextClassName={"next"}
        disabledClassName={"disabled"}
        breakClassName={"break"}
      />
      <MiniLoader />
    </div>
  );
};

export default Products;
