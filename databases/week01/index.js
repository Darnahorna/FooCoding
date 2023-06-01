const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "darnahorna",
  password: "qwerty",
  database: "hr",
});

const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
  const CREATE_SCHEMA = `
   CREATE SCHEMA hr;`;
  const USE_SCHEMA = `USE hr;`;
  const CREATE_EMPLOYEE_TABLE = `
  CREATE TABLE ee.employee (
  id_employee INT NOT NULL,
  name VARCHAR(45) NOT NULL,
  surname VARCHAR(45) NOT NULL,
  personal_number VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_employee),
  UNIQUE INDEX id_employee_UNIQUE (id_employee ASC) VISIBLE);  
  `;
  const CREATE_LOCATIONS_TABLE = `
  CREATE TABLE ee.location (
  id_location INT NOT NULL,
  city VARCHAR(45) NOT NULL,
  country VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_location)); 
  `;
  const employees = [
    {
      id: 1,
      name: "Ben",
      surname: "Hannes",
      personalNumber: "199904052345",
    },
    {
      id: 2,
      name: "Benita",
      surname: "Ratkowski",
      personalNumber: "200002012340",
    },
    {
      id: 4,
      name: "Johan",
      surname: "Moberg",
      personalNumber: "196706071209",
    },
    {
      id: 5,
      name: "Sofie",
      surname: "Moller",
      personalNumber: "199506072341",
    },
    {
      id: 6,
      name: "Sofie",
      surname: "Gronaz",
      personalNumber: "198702091092",
    },
    {
      id: 7,
      name: "Luka",
      surname: "Kvitton",
      personalNumber: "199804057759",
    },
    {
      id: 8,
      name: "Victoria",
      surname: "Nahorna",
      personalNumber: "199805177448",
    },
    {
      id: 9,
      name: "Emil",
      surname: "Thorsson",
      personalNumber: "198910012033",
    },
    {
      id: 10,
      name: "Daria",
      surname: "Stinberg",
      personalNumber: "200112130987",
    },
  ];

  const locations = [
    {
      id: 1,
      city: "Paris",
      country: "France",
    },
    {
      id: 2,
      city: "Kyiv",
      country: "Ukraine",
    },
    {
      id: 3,
      city: "Lund",
      country: "Sweden",
    },
    {
      id: 4,
      city: "Chernihiv",
      country: "Ukarine",
    },
    {
      id: 5,
      city: "Malmo",
      country: "Sweden",
    },
    {
      id: 6,
      city: "Chicago",
      country: "USA",
    },
  ];

  connection.connect();

  try {
    await execQuery(CREATE_SCHEMA);
    await execQuery(USE_SCHEMA);
    await execQuery(CREATE_EMPLOYEE_TABLE);
    await execQuery(CREATE_LOCATIONS_TABLE);
    employees.forEach(async (employee) => {
      await execQuery(
        `INSERT INTO employee VALUES ('${employee.id}', '${employee.name}', '${employee.surname}', '${employee.personalNumber}');`
      );
    });
    locations.forEach(async (location) => {
      await execQuery(
        `INSERT INTO location (id_location, city, country) VALUES ('${location.id}', '${location.city}', '${location.country}');`
      );
    });
  } catch (error) {
    console.error(error);
  }

  connection.end();
}

seedDatabase();
