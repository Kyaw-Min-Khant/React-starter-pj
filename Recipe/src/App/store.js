import { configureStore } from "@reduxjs/toolkit";
import { mealApi } from "../services/mealApi";
import { groceryApi } from "../services/grocery";
export const store = configureStore({
  reducer: {
    [mealApi.reducerPath]: mealApi.reducer,
    [groceryApi.reducerPath]: groceryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealApi.middleware, groceryApi.middleware),
});
