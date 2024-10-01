import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "./thunks";
import { SLICE_COUNTRIES_NAME } from "../../../constants/constants";

const initialState = {
  countriesList: [],
  isLoading: false,
  isError: false,
};

const countriesSlice = createSlice({
  name: SLICE_COUNTRIES_NAME,
  initialState,
  reducers: {
    removeCountry: (state, action) => {
      state.countriesList = state.countriesList.filter(
        (country) => country.name.official !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.countriesList = payload;
      })
      .addCase(fetchCountries.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.countriesList = [];
        state.isError = payload;
      });
  },
});

export const { removeCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
