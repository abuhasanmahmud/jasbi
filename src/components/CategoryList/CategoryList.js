import React from "react";
// import { categoriesData } from '../../staticData/data';
import { categoriesData } from "./../../staticData/data";
import Heading from "../home/Products/Heading";
import Category from "../../pages/Category/Category";
import { Link } from "react-router-dom";

const CategoryList = () => {
  //   console.log("categorylist", categoriesData);
  return (
    <div className="my-10">
      <Heading heading="Our Category" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 xl:grid-cols-4 gap-10">
        {categoriesData?.map((category) => (
          <Link to="/shop">
            <div className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden shadow-sm">
              <h5 className={`text-[18px] leading-[1.3]`}>{category.title}</h5>
              <img src={category.image_Url} className="w-[120px] object-cover" alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
