import React, { useEffect, useState } from "react";
import { useAllOrderQuery } from "../../redux/api/orderApiSlice";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [orders, setAllorder] = useState([]);
  const { userInfo } = useSelector((state) => state.user);

  const { data } = useAllOrderQuery();
  console.log("data", data);
  return (
    <div>
      User Profile
      <p>{process.env.REACT_APP_BACKEND_API}</p>
    </div>
  );
};

export default UserProfile;
