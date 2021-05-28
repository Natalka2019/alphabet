export const yearFunc = require("./getYear");

test("the first test", () => {
  expect(yearFunc.getYear("2019-02-01T12:53:04.951Z")).toBe("2019");
});
