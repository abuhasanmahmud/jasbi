import React, { useEffect } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import products2 from "../../../staticData/products";
import { useDispatch, useSelector } from "react-redux";
import { useAllProductQuery } from "../../../redux/api/productApiSlice";
import { getAllProduct } from "../../../redux/slice/productSlice";
import Loader from "./../../Loader/Loader";

const BestSellers = () => {
  // const bestSellingProduct = products2.slice(0, 6);
  const dispatch = useDispatch();
  const { data } = useAllProductQuery();
  const { products, loadding } = useSelector((state) => state.allProducts);
  // console.log("products", products, loadding);
  useEffect(() => {
    dispatch(getAllProduct(data));
  }, [data, dispatch]);

  const bestSellingProduct = products?.filter((product) => product.numOfReviews > 120);
  // console.log("besselling product", bestSellingProduct);

  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      {loadding ? (
        <Loader />
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
          {bestSellingProduct?.slice(0, 8).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BestSellers;
