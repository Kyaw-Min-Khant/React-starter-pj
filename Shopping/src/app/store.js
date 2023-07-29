import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/products";
import { counterSlice } from "../features/CounterSlice";

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    [productsApi.reducerPath]: productsApi.reducer
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});