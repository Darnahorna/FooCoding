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
function vehicleType(color, typeCode) {
  if (typeCode === 1) {
    return `${color} car`;
  } else if (typeCode === 2) {
    return `${color} bike`;
  }
  return `vehicle is ${color}`;
}

function vehicle(color, codeType, age) {
  let type = vehicleType(color, codeType);
  if (age > 0) {
    return `a used ${type}`;
  } else {
    return `a new ${type}`;
  }
}

vehicle("blue", 1, 2);
vehicle("green", 2, 2);
vehicle("red", 2, 0);
vehicle("red", 4, 0);

const vehicles = ["motorbike", "caravan", "bike", "motorbike", "scooter"];

console.log(vehicles);
console.log(vehicles[2]);

function vehicleTypeRefactor(color, typeCode) {
  return `${color} ${vehicles[typeCode - 1]}`;
}

function vehicleVersion1(color, codeType, age) {
  let type = vehicleTypeRefactor(color, codeType);
  if (age > 0) {
    return `a used ${type}`;
  } else {
    return `a new ${type}`;
  }
}
vehicleVersion1("magenta", 5, 1);

function vehiclesAdvertisement(arr) {
  let actionCall = "Amazing Joe's Garage, we service ";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      actionCall += ` ${arr[i]}`;
    } else {
      actionCall += ` ${arr[i]},`;
    }
  }

  return actionCall;
}

vehiclesAdvertisement(vehicles);
vehicles.push("truck");

vehiclesAdvertisement(vehicles);

const teachers = {
  Tommy: "HTML/CSS",
  Seif: "Javascript2",
  Sahin: "Javascipt1",
  Kennedy: "Javascript3",
};

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = x;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log(o1 == o2);
console.log(o1 === o2);
console.log(o3 == o2);
console.log(o3 == o1);

let bar = 42;
let a = typeof typeof bar;
conslole.log(a);
