import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_Key = process.env.REACT_APP_API_KEY;

export const getWeatherDetails = createAsyncThunk(
  "get-weather-details",
  async (queryParams) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${queryParams}&aqi=no`);
    return response.data
  }
);
