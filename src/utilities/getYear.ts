export  const getYear = (date: Date) => {
  const newDate = new Date(date);
  return newDate.toLocaleString("en-UK", {
    year: "numeric",
  });
};