import React from "react";
import { GoTriangleDown } from "react-icons/go";

const ProductBanner = ({ itemsPerPageFromBanner, setShortSelected }) => {
  return (
    <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
      <div className="flex items-center gap-2 text-base text-[#767676] ">
        <label className="block">Sort by:</label>
        <select
          onChange={(e) => setShortSelected(e.target.value)}
          id="countries"
          className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
        >
          <option value="A_Z Order">A_Z Order</option>
          <option value="Z_A Order">Z_A Order</option>
          <option value="Low_High Price">Low_High Price</option>
          <option value="High_Low Price">High_Low Price</option>
        </select>
        <span className="absolute text-sm right-2 md:right-4 top-2.5">
          <GoTriangleDown />
        </span>
      </div>
      <div className="flex items-center gap-2 text-[#767676] relative">
        <label className="block">Show:</label>
        <select
          onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
          id="countries"
          className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
          <option value="48">48</option>
        </select>
        <span className="absolute text-sm right-3 top-2.5">
          <GoTriangleDown />
        </span>
      </div>
    </div>
  );
};

export default ProductBanner;
