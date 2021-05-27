export  const getYear = (date: any) => {
  const newDate = new Date(date);
  return newDate.toLocaleString("en-UK", {
    year: "numeric",
  });
};