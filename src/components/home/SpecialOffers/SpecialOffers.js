import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { useSelector } from "react-redux";

const SpecialOffers = () => {
  const { products } = useSelector((state) => state.allProducts);
  const specialOffer = products?.filter((product) => product.off > 1);
  // console.log("specialOffer", specialOffer);
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {specialOffer?.slice(0, 8).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
