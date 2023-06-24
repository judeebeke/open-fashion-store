import { useState } from "react";
import ReactPaginate from "react-paginate";

const ITEMS_PER_PAGE = 10; // Number of items to display per page

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22",
    "Item 23",
    "Item 24",
    "Item 25",
    "Item 26",
    "Item 27",
    "Item 28",
    "Item 29",
    "Item 30",
  ];

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  // Calculate the total number of pages based on the number of items
  const pageCount = Math.ceil(items.length / ITEMS_PER_PAGE);

  // Get the current page items based on the current page index and number of items per page
  const currentItems = items.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div>
      {/* Render your current page items */}
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
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
      />
    </div>
  );
};

export default Products;
