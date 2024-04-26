import React from "react";
import { Humidity, UV, WindSpeed, Pressure } from "../assests";

const DisplayWeatherDetails = ({ weatherDetails }) => {
  const { temp_c, condition, humidity, wind_kph, uv, pressure_mb } =
    weatherDetails?.current || {};
  const { text, icon } = condition;

  return (
    <div className="flex flex-col sm:flex-row h-full sm:h-56 rounded-lg p-4 shadow-2xl bg-[#444444] gap-8">
      <div className="text-start text-4xl pt-4 pl-4">
        <h3 className="font-extrabold">{temp_c}°C</h3>
        <h3 className="text-xs">
          Feels like {weatherDetails?.current?.feelslike_c || ""}°C
        </h3>
      </div>
      <div className="px-4">
        <img src={icon} alt={text} className="w-28 h-28" />
        <h1 className="text-center text-3xl font-bold">{text} </h1>
      </div>
      <div className="flex-col pt-4 sm:pt-0 px-2">
        <div className="flex gap-8">
          <div className="text-center">
            <img src={Humidity} alt="humidity" className="w-8 h-8" />
            <div>{humidity}%</div>
            <h2 className="text-xs">Humidity</h2>
          </div>
          <div>
            <img src={WindSpeed} alt="wind" className="w-8 h-8" />
            <h3 className="text-xs">{wind_kph} km/h</h3>
            <h4 className="text-xs">Wind Speed</h4>
          </div>
        </div>
        <div className="flex py-8">
          <div>
            <img src={Pressure} alt="pressure" className="w-8 h-8" />
            <div className="text-xs">{pressure_mb}MB</div>
            <h3 className="text-xs">Pressure</h3>
          </div>
          <div className="px-8">
            <img src={UV} alt="UV" className="w-8 h-8" />
            <div className="text-xs pt-1 px-3">{uv}</div>
            <h3 className="text-xs pt-1 px-2">UV</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayWeatherDetails;
