import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000`,
  }),
  tagTypes: ["productsApi"],
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: (name) => "/products",
      providesTags: [`productsApi`],
    }),
    getOneItem: builder.query({
      query: (id) => `products/${id}`,
      providesTags: [`productsApi`],
    }),
    addProduct: builder.mutation({
      query: (build) => ({
        url: "/products",
        method: "POST",
        body: build,
      }),
      invalidatesTags: ["productsApi"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["productsApi"],
    }),
    updateProduct: builder.mutation({
      query: (newData) => ({
        url: `/products/${newData?.id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags:["productsApi"]
    }),
  }),
});
export const {
  useAddProductMutation,
  useGetProductByNameQuery,
  useGetOneItemQuery,
  useDeleteProductMutation,
  useUpdateProductMutation
} = productsApi;
