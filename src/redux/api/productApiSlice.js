import { apiSlice } from "./apiSlice";

const PRODUCT_URL = "/api/products";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allProduct: builder.query({
      query: (data2) => ({
        url: `${PRODUCT_URL}`,
      }),
    }),
  }),
});

export const { useAllProductQuery } = productApiSlice;
