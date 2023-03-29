let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
//Mauro's favorite animal 'turtle'
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

//Jim's favorite animal 'meerkat'
favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);

let newArray = favoriteAnimals;
console.log("New array is", newArray);
console.log("The array has a length of:", newArray.length);

// Jason does not like 'giraffe',
newArray.filter((animal) => animal !== "giraffe");
console.log(newArray);

let meerkatPosition = newArray.indexOf("meerkat");

console.log("The item you are looking for is at index:", meerkatPosition);
