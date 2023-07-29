import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const mealApi = createApi({
  reducerPath: "mealApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spoonacular.com" }),
  tagTypes: ["mealApi"],
  endpoints: (builder) => ({
    randomRecipe: builder.mutation({
      query: (recipeData) => ({
        url: `/recipes/complexSearch?apiKey=761f50bddbe64bbc83d66e32d693427d&query=${recipeData}&number=30`,
        method: "GET",
        body: recipeData,
      }),
      invalidatesTags: ["mealApi"],
    }),
    idByIngredient: builder.query({
      randomRecipe: builder.query({
        query: (id) =>
          `/recipes/${id}/ingredientWidget.json?apiKey=761f50bddbe64bbc83d66e32d693427d`,
      }),
      method: "GET",
      providesTags: ["mealApi"],
    }),
    idByEquipment: builder.query({
      query: (id) =>
        `/recipes/${id}/equipmentWidget.json?apiKey=761f50bddbe64bbc83d66e32d693427d`,
      method: "GET",
      providesTags: ["mealApi"],
    }),
    idBySteps: builder.query({
      query: (id) =>
        `/recipes/${id}/analyzedInstructions?apiKey=761f50bddbe64bbc83d66e32d693427d`,
      method: "GET",
      providesTags: ["mealApi"],
    }),
  }),
});
export const {
  useRandomRecipeMutation,
  useIdByIngredientQuery,
  useIdByEquipmentQuery,
  useIdByStepsQuery,
} = mealApi;
