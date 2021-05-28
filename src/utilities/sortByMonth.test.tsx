export const sortMonthFunc = require("./sortByMonth");

test("first test", () => {
  expect(
    sortMonthFunc.sortByMonth(
      {
        id: "5e00928df892b0c84c82db9d",
        firstName: "Dorsey",
        lastName: "Meadows",
        dob: "2019-09-19T09:34:32.083Z",
      },
      {
        id: "5e00928d91e7feaa9872ec08",
        firstName: "Yang",
        lastName: "Carson",
        dob: "2019-02-26T16:52:36.244Z",
      }
    )
  ).toBe(-5);
});

test("second test", () => {
  expect(
    sortMonthFunc.sortByMonth(
      {
        id: "5e00928d2420d4add85928f0",
        firstName: "Marian",
        lastName: "Peterson",
        dob: "2019-03-11T02:43:46.921Z",
      },
      {
        id: "5e00928d394916ce202181cf",
        firstName: "Sara",
        lastName: "Carver",
        dob: "2019-07-18T07:45:17.738Z",
      }
    )
  ).toBe(8);
});
