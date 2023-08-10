import React from "react";
// import { SplOfferData } from "../../../constants";
import products from "./../../../staticData/products";
import { Link } from "react-router-dom";

const ProductsOnSale = () => {
  const SplOfferData = products?.slice(0, 10);
  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Products on sale
      </h3>
      <div className="flex flex-col gap-2 h-96 overflow-auto ">
        {SplOfferData.map((item) => (
          <Link to={`/product/${item._id}`}>
            <div
              key={item._id}
              className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
            >
              <div>
                <img className="w-24" src={item.img} alt={item.img} />
              </div>
              <div className="flex flex-col gap-2 font-titleFont">
                <p className="text-base font-medium">{item.name}</p>
                <p className="text-sm font-semibold">${item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
