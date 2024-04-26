import { configureStore } from "@reduxjs/toolkit";
import { weatherReducers } from "./weather";

export const store = configureStore({
    reducer: weatherReducers
});
