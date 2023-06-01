"use strict";

const monday = [
  {
    name: "Write a summary HTML/CSS",
    duration: 180,
  },
  {
    name: "Some web development",
    duration: 120,
  },
  {
    name: "Fix homework for class10",
    duration: 20,
  },
  {
    name: "Talk to a lot of people",
    duration: 1.0,
  },
];

const tuesday = [
  {
    name: "Keep writing summary",
    duration: 1.0,
  },
  {
    name: "Some more web development",
    duration: 180,
  },
  {
    name: "Staring out the window",
    duration: 10,
  },
  {
    name: "Talk to a lot of people",
    duration: 1.0,
  },
  {
    name: "Look at application assignments new students",
    duration: 40,
  },
];

const maartjesHourlyRate = 20;
const maartjesTasks = monday.concat(tuesday);

function computeEarnings(tasks, hourlyRate) {
  const tasksToHours = tasks.map((task) => {
    const container = {};
    container.name = task.name;
    container.duration = task.duration / 60;
    return container;
  });

  const longTasks = tasksToHours.filter((task) => task.duration >= 3);

  const multipliedDuration = longTasks.reduce((accumulator, task) => {
    return accumulator + task.duration * hourlyRate;
  }, 0);
  return `€${multipliedDuration.toFixed(2)}`;
}

module.exports = computeEarnings;
