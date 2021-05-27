export   const getDayMonth = (date: Date) => {
  const newDate = new Date(date);
  return newDate.toLocaleString("en-UK", {
    day: "numeric",
    month: "long",
  });
};