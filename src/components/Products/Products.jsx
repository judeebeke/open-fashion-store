import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ScrollToTop from "../Utils/ScrollToTop";
import { allProducts } from "../../store/localdata";

const ITEMS_PER_PAGE = 6; // Number of items to display per page

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const imageData = useLoaderData();
  const { prodid } = useParams();

  localStorage.setItem("product-subcategory", prodid);

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
      <ScrollToTop />
      <ul className="grid grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-4 md:gap-2 lg:gap-5 place-items-center">
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
            <Link
              to={`/product/productdetails/${item.version}`}
              className={`flex flex-col justify-center items-center text-center`}
            >
              <h5 className="w-4/6 text-body text-lg pt-1">{item.title}</h5>
              <p className="text-primary text-xl">&#x24;{item.price}</p>
            </Link>
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

// function getNextThreeDays() {
//   const today = new Date();
//   const dates = [];

//   for (let i = 0; i < 3; i++) {
//     const nextDay = new Date(today);
//     nextDay.setDate(today.getDate() + i + 1);
//     const formattedDate = formatDate(nextDay);
//     dates.push(formattedDate);
//   }

//   const startDate = formatDate(today);
//   const endDate = formatDate(dates[2]);
//   return `${startDate} - ${endDate}`;
// }

// function formatDate(date) {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// const nextThreeDays = getNextThreeDays();
// console.log(nextThreeDays);
