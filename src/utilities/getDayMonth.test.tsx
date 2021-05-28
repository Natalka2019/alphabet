export const dayMonthFunc = require("./getDayMonth");

test("the first test", () => {
  expect(dayMonthFunc.getDayMonth("2019-09-19T09:34:32.083Z")).toBe(
    "September 19"
  );
});
