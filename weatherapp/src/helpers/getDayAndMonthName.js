const getDayAndMonthName = (dateString) => {
  const dateObject = new Date(dateString);

  const date = dateObject.getDate();
  const dayName = dateObject.toLocaleString("default", { weekday: "long" });
  const monthName = dateObject.toLocaleString("default", { month: "long" });
  return `${dayName}, ${date} ${monthName}`;
};

export default getDayAndMonthName;
