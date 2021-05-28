export const sortLastNameFunc = require("./sortByLastName");

test("first test", () => {
  expect(
    sortLastNameFunc.sortByLastName(
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
  ).toBe(1);
});

test("second test", () => {
  expect(
    sortLastNameFunc.sortByLastName(
      {
        id: "5e00928d43fcdd11688a6afd",
        firstName: "Moody",
        lastName: "Gordon",
        dob: "2019-11-09T20:20:43.744Z",
      },
      {
        id: "5e00928d2100f7134cdea429",
        firstName: "Dunn",
        lastName: "Tillman",
        dob: "2019-03-14T09:42:59.251Z",
      }
    )
  ).toBe(-1);
});
test("third test", () => {
  expect(
    sortLastNameFunc.sortByLastName(
      {
        id: "5e00928ddf538987d6d2fa63",
        firstName: "Beach",
        lastName: "Pate",
        dob: "2019-02-24T06:56:59.249Z",
      },
      {
        id: "5e00928d4c85d6c526a29ec9",
        firstName: "Christi",
        lastName: "Pate",
        dob: "2019-02-28T03:30:47.194Z",
      }
    )
  ).toBe(0);
});
