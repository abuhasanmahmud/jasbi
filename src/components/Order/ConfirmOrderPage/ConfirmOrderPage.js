import React, { useEffect } from "react";
import orderImg from "../../../assets/images/confirmOrder.png";
import { useAllOrderQuery } from "../../../redux/api/orderApiSlice";
import { useDispatch } from "react-redux";
import { getAllorder } from "../../../redux/slice/orderSlice";
const ConfirmOrderPage = () => {
  const dispatch = useDispatch();
  const { data } = useAllOrderQuery();
  useEffect(() => {
    dispatch(getAllorder(data));
  }, [dispatch, data]);

  console.log("order", data);
  return (
    <>
      <div>
        <div>
          <img src={orderImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default ConfirmOrderPage;
