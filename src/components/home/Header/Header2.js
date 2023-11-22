import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogOutMutation } from "../../../redux/api/userApiSlice";
import { logOutUser } from "../../../redux/slice/authSlice";
import { toast } from "react-toastify";

const Header2 = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [logOut, { isLoadding }] = useLogOutMutation();
  console.log("userInfo", userInfo);
  const dispatch = useDispatch();
  //handel logout user
  const handelLogoutUser = async () => {
    try {
      const res = await logOut();
      if (res.error) {
        toast.error(res?.error?.data?.message || res.error);
      }
      dispatch(logOutUser());
      toast.success("Logout user successfully");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <NavLink
                  to="/"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/company" class="text-gray-900 dark:text-white hover:underline">
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" class="text-gray-900 dark:text-white hover:underline">
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink to="features" class="text-gray-900 dark:text-white hover:underline">
                  Features
                </NavLink>
              </li>

              {!userInfo?.email ? (
                <>
                  <li>
                    <NavLink to="/signin" class="text-gray-900 dark:text-white hover:underline">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li
                    onClick={() => handelLogoutUser()}
                    class="text-gray-900 dark:text-white hover:underline cursor-pointer"
                  >
                    LogOut
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header2;
