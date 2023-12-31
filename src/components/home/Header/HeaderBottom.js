import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import products from "../../../staticData/products";
import { useLogOutMutation } from "../../../redux/api/userApiSlice";
import { logOutUser } from "../../../redux/slice/authSlice";
import { toast } from "react-toastify";

const HeaderBottom = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShowUser(true);
      } else {
        setShowUser(false);
      }
    });
  }, [showUser, ref]);

  const [logOut, { isLoadding }] = useLogOutMutation();
  const { userInfo } = useSelector((state) => state.user);

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

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const { products } = useSelector((state) => state.allProducts);

  useEffect(() => {
    const filtered = products?.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  // console.log("filteredProducts", filteredProducts);

  const handelCategoryAndUserMenu = () => {
    setShow(true);
    setShowUser(false);
  };
  const handelCategoryAndUserMenu2 = () => {
    setShow(false);
    setShowUser(true);
  };

  const [ct, setCt] = useState("");

  // console.log("show", show, "show User", showUser);
  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div className="flex h-14 cursor-pointer items-center gap-2 text-primeColor">
            <p className="text-[14px] font-normal">Shop by Category</p>
          </div>
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />
            {filteredProducts?.length > 0 && searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <Link key={item._id} to={`/product/${item._id}`}>
                      <div
                        key={item._id}
                        className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                      >
                        <img className="w-24" src={item.img} alt="productImg" />
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-lg">{item.name}</p>
                          <p className="text-xs">{item.des}</p>
                          <p className="text-sm">
                            Price: <span className="text-primeColor font-semibold">${item.price}</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div onClick={() => setShowUser(!showUser)} ref={ref} className="flex">
              {userInfo?.email ? (
                <>
                  {userInfo?.name}
                  {/* <img className="w-15 rounded-full h-10" src={userInfo?.img?.url} alt="" />{" "} */}
                </>
              ) : (
                <>
                  <FaUser />
                </>
              )}
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
              >
                {!userInfo?.email ? (
                  <>
                    {" "}
                    <Link to="/signin">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Login
                      </li>
                    </Link>
                    <Link to="/signup">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Sign Up
                      </li>
                    </Link>
                  </>
                ) : (
                  <>
                    <li
                      onClick={() => handelLogoutUser()}
                      className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                    >
                      LogOut
                    </li>

                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Profile
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Others
                    </li>
                  </>
                )}
              </motion.ul>
            )}
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart />
                <span className="absolute font-titleFont top-2 right-3 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                  {totalQuantity}
                </span>
              </div>
            </Link>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
