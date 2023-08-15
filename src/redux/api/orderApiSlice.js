import { apiSlice } from "./apiSlice";

const ORDER_URL = "/api/orders";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allOrder: builder.query({
      query: (data) => ({
        url: `${ORDER_URL}`,
      }),
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/new`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAllOrderQuery, useCreateOrderMutation } = orderApiSlice;
