import { createSlice } from "@reduxjs/toolkit";
import { getWeatherDetails } from "./weather.actions";

const initialState = {
  weatherDetails: {},
  isLoading: false,
  isError: false,
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getWeatherDetails.pending, (state, actions) => {
          state.isLoading = true;
        })
        .addCase(getWeatherDetails.fulfilled, (state, actions) => {
          state.isLoading = false;
          state.weatherDetails = actions.payload;
        })
        .addCase(getWeatherDetails.rejected, (state, actions) => {
          state.isError = true;
        });
    },
  });

export default weatherSlice.reducer
