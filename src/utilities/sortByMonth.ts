const currentMonth = new Date().getMonth();

export const sortByMonth = (a: any, b: any) => {
  let date1 = new Date(a.dob);
  let date2 = new Date(b.dob);

  let n1 = date1.getMonth();
  let n2 = date2.getMonth();
  if (n1 < currentMonth) {
    n1 = n1 + 12;
  }
  if (n2 < currentMonth) {
    n2 = n2 + 12;
  }
  return n1 - n2;
};
