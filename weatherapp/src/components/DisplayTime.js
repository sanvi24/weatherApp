import React from "react";
import { getDayAndMonthName } from "../helpers";

const DisplayTime = ({ weatherDetails }) => {
  const { localtime, name } = weatherDetails?.location || {};
  const [dateString, timeString] = localtime ? localtime.split(" ") : [];
  const formattedDate = getDayAndMonthName(dateString);
  return (
    <div className="max-w-96 h-56 rounded-lg p-4 shadow-2xl bg-[#444444]">
      <div className="text-4xl font-extrabold text-center pt-5">{name}</div>
      <div className="text-4xl font-extrabold text-center pt-10">
        {timeString}
      </div>
      <div className="text-md text-center p-2">{formattedDate}</div>
    </div>
  );
};

export default DisplayTime;
