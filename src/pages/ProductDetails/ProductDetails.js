import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";
// import products from "../../staticData/products";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.allProducts);
  // console.log("id", id);
  const product = products.find((product) => product._id == id);
  // console.log("product", product);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation="" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full">
            <ProductsOnSale />
          </div>
          <div className=" xl:col-span-2">
            <img className="w-full h-full object-cover" src={product?.img} alt="" />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <ProductInfo key={product._id} productInfo={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
