import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import products from "../../../staticData/products";

const SpecialOffers = () => {
  const specialOffers = products.slice(10, 20);
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {specialOffers.map((product) => (
          <Product product={product} badge={true} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
