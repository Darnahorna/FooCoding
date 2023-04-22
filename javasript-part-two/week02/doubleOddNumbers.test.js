const doubleOddNumbers = require("./doubleOddNumbers");

test("double odd numbers in array", () => {
  expect(doubleOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([
    2, 6, 10, 14, 18,
  ]);
});
