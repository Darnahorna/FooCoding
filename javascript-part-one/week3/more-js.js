function sumThree(a, b, c) {
  return a + b + c;
}
sumThree(2, 5, 6);

function carColor(color) {
  return `a ${color} car`;
}
carColor("blue");

const person = {
  name: "Daria",
  surname: "Nahorna",
  age: 23,
  birth: "17/05/1999",
  location: "Lund",
  status: "active",
};

function displayPerson(obj) {
  return obj;
}
displayPerson(person);

function vehicleType(color, typeCode) {
  if (typeCode === 1) {
    return `a ${color} car`;
  } else if (typeCode === 2) {
    return `a ${color} bike`;
  }
  return `your color is ${color}`;
}

vehicleType("green", 2);
vehicleType("pink", 1);
vehicleType("magenta", 3);

console.log(3 ? "yes" : "no");
