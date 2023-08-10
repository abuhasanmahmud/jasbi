import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { bestSellerData } from "../../../staticData/data";
const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {bestSellerData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
