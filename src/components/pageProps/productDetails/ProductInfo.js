import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slice/cartSlice";

const ProductInfo = ({ productInfo }) => {
  // console.log("productinfo", productInfo);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo?.name}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Brand:</span> {productInfo.brand}
      </p>
      <button
        onClick={() => dispatch(addToCart(productInfo))}
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring collection, Streetwear, Women
        Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
