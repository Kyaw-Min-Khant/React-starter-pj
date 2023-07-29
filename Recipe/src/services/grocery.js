import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const groceryApi = createApi({
  reducerPath: "groceryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://spoonacular.com" }),
  tagTypes: ["groceryApi"],
  endpoints: (builder) => ({
    Meal: builder.query({
      query: () =>
        "/recipes/complexSearch?apiKey=761f50bddbe64bbc83d66e32d693427d&query=steak&number=20",
      method: "GET",
      providesTags: ["groceryApi"],
    }),
  }),
});

export const { useMealQuery } = groceryApi;
