// get the client
const mysql = require("mysql2");
const prompt = require("prompt-sync")();

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "darnahorna",
  password: "qwerty",
  database: "new_world",
});

function executeRequest(userRequest, mySqlRequest, callback) {
  const request = prompt(userRequest);

  connection.prepare(mySqlRequest, (err, statement) => {
    console.log(statement);
    statement.execute([request], callback);
    statement.close();
  });
}
function executeRequest2(userRequest, mySqlRequest, callback) {
  const request = prompt(userRequest);
  connection.prepare(mySqlRequest, (err, statement) => {
    statement.execute([request, request, request], callback);
    statement.close();
  });
}

function display(err, results) {
  if (results) {
    console.log(results);
  } else {
    console.log("An error occurred:", err);
  }
}

function main() {
  console.log(
    "\f SELECT OPTION: \n\f 1.Capital of the country. \n 2.Spoken languages in the region. \n 3.Number of cities with spoken language in. \n 4.Number of languages on the continents. \n 5.Countries with the same official languages.\n 6.Countries on the same continent.\f"
  );
  let command = prompt("WRITE AN OPTION: ");

  switch (command) {
    case "1":
      executeRequest(
        "Capital of which COUNTRY would you like to find out: ",
        "SELECT city.Name FROM country INNER JOIN city ON country.Capital=city.ID WHERE country.Name = ?",
        display
      );
      break;

    case "2":
      executeRequest(
        "Languages of which REGION would you like to find out: ",
        "SELECT  cl.Language FROM country INNER JOIN countrylanguage cl ON country.Code=cl.CountryCode WHERE country.Region = ? group by cl.Language",
        display
      );
      break;
    case "3":
      executeRequest(
        "Amount of cities of what LANGUAGE would you like to find out: ",
        "SELECT count(city.Name) as amount FROM city INNER JOIN country ON country.Code = city.CountryCode inner JOIN countrylanguage cl ON country.Code=cl.CountryCode WHERE cl.Language = ? order by cl.Language ASC;",
        display
      );
      break;

    case "4":
      executeRequest(
        "press ENTER ",
        "SELECT country.Continent, count(cl.Language) as Languages FROM country INNER JOIN countrylanguage cl ON country.Code=cl.CountryCode group by country.Continent;",
        display
      );
      break;
    case "5":
      executeRequest2(
        "Same official languages with which COUNTRY would you like to find out: ",
        'SELECT IFNULL((SELECT GROUP_CONCAT(country.Name SEPARATOR ", ")  FROM country INNER JOIN countrylanguage cl ON country.Code=cl.CountryCode WHERE cl.Language IN (SELECT  cl.Language FROM country INNER JOIN countrylanguage cl ON country.Code=cl.CountryCode WHERE country.Name = ? AND cl.IsOfficial=true) AND cl.IsOfficial=true AND country.Name <>? AND country.Continent = (SELECT country.Continent FROM country WHERE country.Name = ?)),"FALSE") AS result;',
        display
      );
      break;

    default:
      console.log(`Sorry, we are out of ${command}.`);
  }
}

main();
