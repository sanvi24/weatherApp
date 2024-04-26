import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeatherDetails } from "../weather";
import { Search } from "../assests";

const SearchByCity = () => {
const dispatch = useDispatch()
  const [input, setInput] = useState("");

  useEffect(() => {
    if(input.trim() !== ""){
        const queryParams = input.trim()
        dispatch(getWeatherDetails(queryParams))
    }
  }, [input])
  return (
    <div className="flex items-center justify-center p-4 sm:p-16">
      <div className="flex sm:w-2/4 h-10  w-full sm:h-16 p-1 sm:p-4  bg-[#444444] rounded-full gap-2 ">
        <div className="sm:px-4 pl-4 py-2 sm:py-0">
          <img src={Search} alt="search" className="w-5 h-5 sm:w-8 sm:h-8" />
        </div>
        <input
          type="text"
          placeholder="Search for your preffred city..."
          onChange={(e) => setInput(e.target.value)}
          className="w-full sm:w-96 sm:h-7 bg-[#444444] outline-none sm:mb-4 text-start rounded-full px-2"
        />
      </div>
    </div>
  );
};

export default SearchByCity;
