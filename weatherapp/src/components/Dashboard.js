import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLatAndLong } from "../helpers";
import DisplayTime from "./DisplayTime";
import DisplayWeatherDetails from "./DisplayWeatherDetails";
import { SearchByCity } from "./SearchByCity";
import { getWeatherDetails } from "../weather";

const Dashboard = () => {
  const dispatch = useDispatch();
  const weatherDetails = useSelector((state) => state.weatherDetails);
  const [error, setError] = useState();

  useEffect(() => {
    const getCurrentPosition = async () => {
      try {
        const { latitude, longitude } = await getLatAndLong();
        if (latitude && longitude) {
          const queryParams = `${latitude}, ${longitude}`;
          dispatch(getWeatherDetails(queryParams));
        }
      } catch (error) {
        setError(error);
      }
    };
    getCurrentPosition();
  }, []);

  return (
    <div className=" text-white w-full h-full">
      <div className="flex items-center justify-start">
        <div className="flex-1">
          <SearchByCity weatherDetails={weatherDetails} />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 my-5 sm:mt-10">
        <DisplayTime weatherDetails={weatherDetails} />
        <DisplayWeatherDetails weatherDetails={weatherDetails} />
      </div>
    </div>
  );
}

export default Dashboard;
