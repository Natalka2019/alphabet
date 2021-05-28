export  const getDayMonth = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleString("en-UK", {
    day: "numeric",
    month: "long",
  });
};