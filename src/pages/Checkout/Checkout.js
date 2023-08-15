import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAllOrderQuery, useCreateOrderMutation } from "../../redux/api/orderApiSlice";
import { getAllorder } from "../../redux/slice/orderSlice";
import { toast } from "react-toastify";
import { resetCart } from "../../redux/slice/cartSlice";

const Checkout = () => {
  const [cardPayment, setCardPayment] = useState(false);
  console.log("cardpayment", cardPayment);
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);
  const { cartItems, totalAmount, totalQuantity } = useSelector((state) => state.cart);
  const shipping = 20;
  const GrandTotal = shipping + totalAmount;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const dispatch = useDispatch();

  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const { userInfo } = useSelector((state) => state.user);

  const handelShippingInfo = async (shippingData) => {
    // console.log("data", data);
    const orderData = {
      user: userInfo?._id,
      cart: [...cartItems],
      shippingInfo: {
        name: shippingData.name,
        email: shippingData.email,
        address: shippingData.address,
        contact: shippingData.phone,
      },
      paymentMethod: shippingData.payment,
      subTotal: totalAmount,
      total: GrandTotal,
      status: "Pending",
    };
    // console.log("order data", orderData);

    try {
      const res = await createOrder({ ...orderData });
      // console.log("res", res);
      if (res.data) {
        toast.success("Your order is successfully confirm");
        navigate("/confirm-order");
        dispatch(resetCart());
      }
    } catch (error) {
      console.log("error in checkout", error);
    }
  };
  useAllOrderQuery();
  return (
    <>
      <div className="py-12 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex justify-start flex-col items-start space-y-2">
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">
              Checkout
            </p>
            <p className="text-base leading-normal sm:leading-4 text-gray-600 dark:text-white">
              Home <span> > </span> Checkout
            </p>
          </div>

          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
              <form onSubmit={handleSubmit(handelShippingInfo)} key={1}>
                <section>
                  <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2 mb-8">
                    Shipping & Billing Information
                  </h2>
                  <fieldset className="mb-3 bg-white  rounded text-gray-600">
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Name</span>
                      <input
                        name="name"
                        type="text"
                        className="focus:outline-none px-3"
                        placeholder="your name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "name Required !!!",
                          },
                        })}
                      />

                      {errors?.name?.type === "required" && (
                        <span className="label-text-alt text-red-500 font-bold">
                          {errors?.name?.message}
                        </span>
                      )}
                    </label>

                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Email</span>
                      <input
                        type="email"
                        className="focus:outline-none px-3"
                        placeholder="your email"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "email Required !!!",
                          },
                        })}
                      />
                      {errors?.email?.type === "required" && (
                        <span className="label-text-alt text-red-500 font-bold">
                          {errors?.email?.message}
                        </span>
                      )}
                    </label>
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Phone</span>
                      <input
                        type="text"
                        className="focus:outline-none px-3"
                        placeholder="your phone"
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "phone Required !!!",
                          },
                        })}
                      />
                      {errors?.phone?.type === "required" && (
                        <span className="label-text-alt text-red-500 font-bold">
                          {errors?.phone?.message}
                        </span>
                      )}
                    </label>
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Address</span>
                      <input
                        type="text"
                        className="focus:outline-none px-3"
                        placeholder="your address"
                        {...register("address", {
                          required: {
                            value: true,
                            message: "address Required !!!",
                          },
                        })}
                      />
                      {errors?.address?.type === "required" && (
                        <span className="label-text-alt text-red-500 font-bold">
                          {errors?.address?.message}
                        </span>
                      )}
                    </label>
                  </fieldset>
                </section>
                <div className="mt-8">
                  <div className="mb-3">
                    <input
                      onClick={() => setCardPayment(true)}
                      id="card"
                      type="radio"
                      className="hover:cursor-pointer"
                      name="payment"
                      value="card"
                      {...register("payment")}
                    />
                    <label
                      htmlFor="card"
                      className="mx-2 text-xl font-bold leading-4 text-gray-800 dark:text-gray-50] hover:cursor-pointer"
                    >
                      Payment By Card
                    </label>
                  </div>
                  {cardPayment && (
                    <div className="mt-2 flex-col">
                      <div>
                        <input
                          className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                          type="email"
                          name=""
                          id=""
                          placeholder="0000 1234 6549 15151"
                        />
                      </div>
                      <div className="flex-row flex">
                        <input
                          className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                          type="email"
                          name=""
                          id=""
                          placeholder="MM/YY"
                        />
                        <input
                          className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                          type="email"
                          name=""
                          id=""
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                  )}
                  <div className="mt-10">
                    <input
                      onClick={() => setCardPayment(false)}
                      id="cash"
                      type="radio"
                      className="hover:cursor-pointer "
                      name="payment"
                      value="cash"
                      {...register("payment")}
                    />
                    <label
                      htmlFor="cash"
                      className="mx-2 text-xl font-bold leading-4 text-gray-800 dark:text-gray-50 hover:cursor-pointer"
                    >
                      Cash On delivery
                    </label>
                    <p className="mt-2 ml-3">Pay with cash when your order is delivered.</p>
                  </div>
                </div>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
                >
                  <div>
                    <p className="text-base leading-4 py">Place Order </p>
                  </div>
                </button>
              </form>
            </div>

            <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-6 sm:py-0 xl:py-10 px-10">
              <div className="py-4">
                {/* <ProductsOnSale /> */}
                <h1 className="pb-8 border-b-2 text-xl font-bold text-gray-600 px-8">Order Summary</h1>
                <ul className="py-6 border-b space-y-6 px-8 h-48 scroll-smooth  overflow-y-scroll	">
                  {cartItems?.map((item) => (
                    <li key={item._id} className="grid grid-cols-6 gap-2 border-b-1">
                      <div className="col-span-1 self-center">
                        <img src={item?.img} alt="Product" className="rounded w-full" />
                      </div>
                      <div className="flex flex-col col-span-3 pt-2">
                        <span className="text-gray-600 text-md font-semi-bold">{item?.name}</span>
                        <span className="text-gray-400 text-sm inline-block pt-2">{item?.brand}</span>
                      </div>
                      <div className="col-span-2 pt-3">
                        <div className="flex items-center space-x-2 text-sm justify-between">
                          <span className="text-gray-400">
                            {item?.quantity} x {item?.price}
                          </span>
                          <span className="font-semibold inline-block">${item?.totalPrice}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="px-8 border-b">
                  <div className="flex justify-between py-4 text-gray-600">
                    <span className="font-semibold">Subtotal</span>
                    <span className="font-semibold ">${totalAmount}</span>
                  </div>
                  <div className="flex justify-between py-4 text-gray-600">
                    <span className="font-semibold">Shipping</span>
                    <span className="font-semibold ">${shipping}</span>
                  </div>
                  <div className="flex justify-between py-4 text-gray-600">
                    <span className="font-semibold">Discount</span>
                    <span className="font-semibold ">-</span>
                  </div>
                </div>
                <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                  <span>Total</span>
                  <span>${GrandTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
