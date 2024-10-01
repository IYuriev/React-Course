import { createSlice } from "@reduxjs/toolkit";
import { CAPITAL_DEFAULT_VALUE } from "../../../constants/constants";
import { SLICE_CAPITALS_NAME } from "../../../constants/constants";

const initialState = {
  capital: CAPITAL_DEFAULT_VALUE.capital,
  translation: CAPITAL_DEFAULT_VALUE.translation,
};

const capitalsSlice = createSlice({
  name: SLICE_CAPITALS_NAME,
  initialState,
  reducers: {
    setCapital: (state, { payload }) => {
      state.capital = payload;
    },
    setTranslation: (state, { payload }) => {
      state.translation = payload;
    },
  },
});

export const { setCapital, setTranslation } = capitalsSlice.actions;
export default capitalsSlice.reducer;
