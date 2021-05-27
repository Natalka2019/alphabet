export   const getDayMonth = (date: any) => {
  const newDate = new Date(date);
  return newDate.toLocaleString("en-UK", {
    day: "numeric",
    month: "long",
  });
};