export  const getYear = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleString("en-UK", {
    year: "numeric",
  });
};