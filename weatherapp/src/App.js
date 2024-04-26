import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLatAndLong } from "./helpers/getLatAndLong";
import { getWeatherDetails } from "./weather";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="bg-[#1E1E1E] min-w-sm min-h-screen">
      <Dashboard />
    </div>
  )
}

export default App;
