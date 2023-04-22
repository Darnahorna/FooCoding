const computeEarnings = require("./maartjesWork");

const wednesday = [
  {
    name: "Solve 10 tasks on freeCodeCamp",
    duration: 200,
  },
];

const thursday = [
  {
    name: "Some more web development",
    duration: 200,
  },
];

const tasks = wednesday.concat(thursday);

test("combine tasks for two days into one array", () => {
  expect(computeEarnings(tasks, 20)).toBe("€133.33");
});
