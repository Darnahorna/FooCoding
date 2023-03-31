"use strict";

const booksIds = [
  "toKillMockingbird",
  "book1974",
  "catcherInRye",
  "prideAndPrejudice",
  "animalFarm",
  "braveNewWorld",
  "theGreatGatsby",
  "theHobbit",
  "lordOfTheFlies",
  "oneHundredYears",
];

const booksObj = {
  toKillMockingbird: {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    language: "English",
    img: "images/71FxgtFKcQL.webp",
  },
  book1974: {
    name: "1974",
    author: "George Orwell",
    language: "English",
    img: "images/71kxa1-0mfL.webp",
  },
  catcherInRye: {
    name: "The Catcher in the Rye",
    author: "Jerome David Salinger",
    language: "English",
    img: "images/61fgOuZfBGL.webp",
  },
  prideAndPrejudice: {
    name: "Pride and Prejudice",
    author: "Jane Austen",
    language: "English",
    img: "images/91HqOO4DmRL._AC_UF1000_1000_QL80_.webp",
  },
  animalFarm: {
    name: "Animal Farm",
    author: "George Orwell",
    language: "English",
    img: "images/61nb5YGnMXL.webp",
  },
  braveNewWorld: {
    name: "Brave New World",
    author: "Aldous Huxley",
    language: "English",
    img: "images/51pcVzgJiXL.webp",
  },
  theGreatGatsby: {
    name: "The Great Gatsby",
    author: "Francis Scott Key Fitzgerald",
    language: "English",
    img: "images/71AeXTp-mQL._AC_UF1000_1000_QL80_.webp",
  },
  theHobbit: {
    name: "The Hobbit",
    author: "John Ronald Reuel Tolkien",
    language: "English",
    img: "images/710-HcoP38L._AC_UF1000_1000_QL80_.webp",
  },
  lordOfTheFlies: {
    name: "Lord of the Flies",
    author: "William Golding",
    language: "English",
    img: "images/81WUAoL-wFL._AC_UF1000_1000_QL80_.webp",
  },
  oneHundredYears: {
    name: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    language: "Spanish",
    img: "images/81MI6-TpYkL._AC_UF1000_1000_QL80_.webp",
  },
};

const root = document.querySelector(".root");
const ul = document.createElement("ul");
root.appendChild(ul);

for (let i = 0; i < booksIds.length; i++) {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const small = document.createElement("small");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");

  let field = booksIds[i];

  h2.innerHTML = booksObj[`${field}`].name;
  small.innerHTML = booksObj[`${field}`].language;
  h3.innerHTML = booksObj[`${field}`].author;
  const alt = document.createAttribute("alt");
  const src = document.createAttribute("src");
  alt.value = booksObj[`${field}`].name;
  src.value = booksObj[`${field}`].img;
  img.setAttributeNode(alt);
  img.setAttributeNode(src);

  li.appendChild(img);
  li.appendChild(h2);
  li.appendChild(small);
  li.append(h3);
  ul.appendChild(li);
}
