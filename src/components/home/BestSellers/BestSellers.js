import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import products from "../../../staticData/products";

const BestSellers = () => {
  const bestSellingProduct = products.slice(0, 6);

  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {bestSellingProduct.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
