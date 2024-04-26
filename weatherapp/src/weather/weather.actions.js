import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_Key = "8ce92f359b824c568e5124952242404";

export const getWeatherDetails = createAsyncThunk(
  "get-weather-details",
  async (queryParams) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${queryParams}&aqi=no`);
    return response.data
  }
);
