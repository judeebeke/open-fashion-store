import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ScrollToTop from "../Utils/ScrollToTop";
import { allProducts } from "../../store/localdata";

const ITEMS_PER_PAGE = 6; // Number of items to display per page

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const imageData = useLoaderData();
  const { prodid } = useParams();

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  let currentCate = localStorage.getItem("product-category");

  let productItems = allProducts.find((item) =>
    currentCate.includes(item.collection)
  );

  let valuedItem = productItems.category.find(
    (item) => item.subcategory === prodid
  );

  const pageCount = Math.ceil(valuedItem.products.length / ITEMS_PER_PAGE);

  const currentItems = valuedItem.products.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="mt-20">
      <ScrollToTop />;
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
        {currentItems.map((item) => (
          <figure
            key={item.version}
            className={`flex flex-col justify-center items-center text-center pt-9`}
          >
            {imageData.map((image) => {
              if (image.imageName.includes(item.description)) {
                return (
                  <img
                    key={image.imageUrl}
                    src={image.imageUrl}
                    className="object-contain"
                    alt={item.title}
                  />
                );
              }
            })}
            <h5 className="w-4/6 text-body text-xl pt-1">{item.title}</h5>
            <p className="text-primary text-2xl">&#x24;{item.price}</p>
          </figure>
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
    </div>
  );
};

export default Products;
