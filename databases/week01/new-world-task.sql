#What are the names of countries with population greater than 8 million
SELECT `country`.`name` FROM `new_world`.`country` WHERE `country`.`Population` > 8000000;

#What are the names of countries that have “land” in their names ?
SELECT `country`.`name` FROM `new_world`.`country` WHERE `country`.`name` LIKE '%land%';

#What are the names of the cities with population in between 500,000 and 1 million ?
SELECT `city`.`Name` FROM `new_world`.`city` WHERE `city`.`Population` BETWEEN 500000 AND 1000000;

#What's the name of all the countries on the continent ‘Europe’ ?
SELECT `country`.`Name` FROM `new_world`.`country` WHERE `country`.`Continent` = "Europe";

#List all the countries in the descending order of their surface areas.
SELECT `country`.`Name` FROM `new_world`.`country` ORDER BY `country`.`SurfaceArea`  DESC;

#What are the names of all the cities in the Netherlands?
SELECT `city`.`Name` FROM `new_world`.`city` LEFT JOIN `new_world`.`country` ON `city`.`CountryCode`=`country`.`Code` WHERE `city`.`CountryCode` = "NLD" ORDER BY `city`.`Name` ASC; 

#What is the population of Rotterdam ?
SELECT `city`.`Population` FROM `new_world`.`city` WHERE `city`.`name` = "Rotterdam";

#What's the top 10 countries by Surface Area ?
SELECT `country`.`Name` FROM `new_world`.`country` ORDER BY `country`.`SurfaceArea`  DESC LIMIT 10;

#What's the top 10 most populated cities?
SELECT `city`.`Name` FROM `new_world`.`city` ORDER BY `city`.`Population`  DESC LIMIT 10;

#What is the population of the world ?
SELECT SUM(`country`.`Population`) AS WordPopulation FROM `new_world`.`country`;








