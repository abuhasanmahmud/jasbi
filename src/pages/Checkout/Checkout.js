import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, totalAmount, totalQuantity } = useSelector((state) => state.cart);
  const shipping = 20;
  const GrandTotal = shipping + totalAmount;
  return (
    <>
      <div class="py-12 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div class="flex flex-col justify-start items-start w-full space-y-9">
          <div class="flex justify-start flex-col items-start space-y-2">
            <p class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">
              Checkout
            </p>
            <p class="text-base leading-normal sm:leading-4 text-gray-600 dark:text-white">
              Home <span> > </span> Checkout
            </p>
          </div>

          <div class="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
              <form id="payment-form" method="POST" action="">
                <section>
                  <h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2 mb-8">
                    Shipping & Billing Information
                  </h2>
                  <fieldset class="mb-3 bg-white  rounded text-gray-600">
                    <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span class="text-right px-2">Name</span>
                      <input
                        name="name"
                        class="focus:outline-none px-3"
                        placeholder="Try Odinsson"
                        required=""
                      />
                    </label>
                    <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span class="text-right px-2">Email</span>
                      <input
                        name="email"
                        type="email"
                        class="focus:outline-none px-3"
                        placeholder="try@example.com"
                        required=""
                      />
                    </label>
                    <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span class="text-right px-2">Phone</span>
                      <input
                        name="Phone"
                        class="focus:outline-none px-3"
                        placeholder="10 Street XYZ 654"
                      />
                    </label>
                    <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span class="text-right px-2">Address</span>
                      <input
                        name="address"
                        class="focus:outline-none px-3"
                        placeholder="10 Street XYZ 654"
                      />
                    </label>
                  </fieldset>
                </section>
              </form>
              <div className="mt-8">
                <div className="mb-3">
                  <input id="card" type="radio" className="hover:cursor-pointer" name="payment" />
                  <label
                    for="card"
                    class="mx-2 text-xl font-bold leading-4 text-gray-800 dark:text-gray-50] hover:cursor-pointer"
                  >
                    Card details
                  </label>
                </div>
                <div class="mt-2 flex-col">
                  <div>
                    <input
                      class="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      name=""
                      id=""
                      placeholder="0000 1234 6549 15151"
                    />
                  </div>
                  <div class="flex-row flex">
                    <input
                      class="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      name=""
                      id=""
                      placeholder="MM/YY"
                    />
                    <input
                      class="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      name=""
                      id=""
                      placeholder="CVC"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <input id="cash" type="radio" className="hover:cursor-pointer " name="payment" />
                  <label
                    for="cash"
                    class="mx-2 text-xl font-bold leading-4 text-gray-800 dark:text-gray-50 hover:cursor-pointer"
                  >
                    Cash On delivery
                  </label>
                  <p className="mt-2 ml-3">Pay with cash when your order is delivered.</p>
                </div>
              </div>
            </div>

            <div class="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-6 sm:py-0 xl:py-10 px-10">
              <div className="py-4">
                {/* <ProductsOnSale /> */}
                <h1 class="pb-8 border-b-2 text-xl font-bold text-gray-600 px-8">Order Summary</h1>
                <ul class="py-6 border-b space-y-6 px-8 h-48 scroll-smooth  overflow-y-scroll	">
                  {cartItems?.map((item) => (
                    <li key={item._id} class="grid grid-cols-6 gap-2 border-b-1">
                      <div class="col-span-1 self-center">
                        <img src={item?.img} alt="Product" class="rounded w-full" />
                      </div>
                      <div class="flex flex-col col-span-3 pt-2">
                        <span class="text-gray-600 text-md font-semi-bold">{item?.name}</span>
                        <span class="text-gray-400 text-sm inline-block pt-2">{item?.brand}</span>
                      </div>
                      <div class="col-span-2 pt-3">
                        <div class="flex items-center space-x-2 text-sm justify-between">
                          <span class="text-gray-400">
                            {item?.quantity} x {item?.price}
                          </span>
                          <span class="font-semibold inline-block">${item?.totalPrice}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div class="px-8 border-b">
                  <div class="flex justify-between py-4 text-gray-600">
                    <span className="font-semibold">Subtotal</span>
                    <span class="font-semibold ">${totalAmount}</span>
                  </div>
                  <div class="flex justify-between py-4 text-gray-600">
                    <span className="font-semibold">Shipping</span>
                    <span class="font-semibold ">${shipping}</span>
                  </div>
                  <div class="flex justify-between py-4 text-gray-600">
                    <span className="font-semibold">Discount</span>
                    <span class="font-semibold ">-</span>
                  </div>
                </div>
                <div class="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                  <span>Total</span>
                  <span>${GrandTotal}</span>
                </div>
                <button class="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                  <div>
                    <Link to="/confirm-order">
                      <p class="text-base leading-4 py">Place Order </p>
                    </Link>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
