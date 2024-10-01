import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./features/countries/slice";
import capitalsReducer from "./features/capitals/slice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    capitals: capitalsReducer,
  },
});
