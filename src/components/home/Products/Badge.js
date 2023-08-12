import React from "react";

const Badge = ({ product }) => {
  // console.log("productin band", product);
  return (
    <div className="bg-primeColor w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
      {product.off > 20 ? <p> {product.off} % off</p> : <> New </>}
    </div>
  );
};

export default Badge;
