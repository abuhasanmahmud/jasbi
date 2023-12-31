import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { useSelector } from "react-redux";
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id} className="w-full">
            <Product product={item} key={item._id} />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage, shortSelected }) => {
  const { products } = useSelector((state) => state.allProducts);
  console.log("products", products, shortSelected);
  let sv = shortSelected?.toString().replaceAll(" ", "").toLowerCase();
  console.log("sv", sv);
  let products2 = [...products];
  products2.sort((a, b) => a.name - b.name);

  if (shortSelected) {
    if (sv === "a_zorder") {
      products2?.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (sv === "z_aorder") {
      products2?.sort((a, b) => (b.name > a.name ? 1 : -1));
    } else if (sv === "low_highprice") {
      products2?.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if ((sv = "high_lowprice")) {
      products2?.sort((a, b) => (b.price > a.price ? 1 : -1));
    }
  }

  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products2?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Products from {itemStart === 0 ? 1 : itemStart} to {endOffset} of {products.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
