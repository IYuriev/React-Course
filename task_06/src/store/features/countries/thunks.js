import { createAsyncThunk } from "@reduxjs/toolkit";
import { service } from "../../../service/service";
import { SLICE_COUNTRIES_NAME } from "../../../constants/constants";

export const fetchCountries = createAsyncThunk(
  `${SLICE_COUNTRIES_NAME}/fetchCountries`,
  async () => {
    const response = await service.get();
    console.log(response);
    return response;
  }
);
