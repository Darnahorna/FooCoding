SELECT `country`.`name` FROM `new_world`.`country` WHERE `country`.`Population` > 8000000;

SELECT `country`.`name` FROM `new_world`.`country` WHERE `country`.`name` LIKE '%land%';

SELECT `city`.`Name` FROM `new_world`.`city` WHERE `city`.`Population` BETWEEN 500000 AND 1000000;

SELECT `country`.`Name` FROM `new_world`.`country` WHERE `country`.`Continent` = "Europe";

SELECT `country`.`Name` FROM `new_world`.`country` ORDER BY `country`.`SurfaceArea`  DESC;

SELECT `city`.`Name` FROM `new_world`.`city` 
WHERE `city`.`CountryCode` = "NLD" ORDER BY `city`.`Name` ASC; 

SELECT `city`.`Population` FROM `new_world`.`city` WHERE `city`.`name` = "Rotterdam";

SELECT `country`.`Name` FROM `new_world`.`country` ORDER BY `country`.`SurfaceArea`  DESC LIMIT 10;

SELECT `city`.`Name` FROM `new_world`.`city` ORDER BY `city`.`Population`  DESC LIMIT 10;

SELECT SUM(`country`.`Population`) AS WordPopulation FROM `new_world`.`country`;




