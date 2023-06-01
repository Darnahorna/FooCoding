SET @capital = 'SELECT city.Name FROM country INNER JOIN city ON country.Capital=city.ID WHERE country.Name = ?';
PREPARE stmt1 FROM @capital;
SET @country = "Ukraine";
EXECUTE stmt1 USING @country;
DEALLOCATE PREPARE stmt1;


SET @languages = 'SELECT count(city.Name) as amount FROM city INNER JOIN country ON country.Code = city.CountryCode inner JOIN countrylanguage cl ON country.Code=cl.CountryCode WHERE cl.Language = ? ORDER BY cl.Language ASC;';
PREPARE stmt2 FROM @languages;
SET @region = "Eastern Europe";
EXECUTE stmt2 USING @region;
DEALLOCATE PREPARE stmt2;


SET @cities = 'SELECT  cl.Language FROM country INNER JOIN countrylanguage cl ON country.Code=cl.CountryCode WHERE country.Region = ? group by cl.Language;';
PREPARE stmt3 FROM @cities;
SET @language = "Ukraininan";
EXECUTE stmt3 USING @language;
DEALLOCATE PREPARE stmt3;


SET @continentLanguages = 'SELECT country.Continent, count(cl.Language) as languages FROM country INNER JOIN countrylanguage cl ON country.Code=cl.CountryCode group by country.Continent;';
PREPARE stmt4 FROM @continentLanguages;
EXECUTE stmt4;
DEALLOCATE PREPARE stmt4;

SET @languageCountries ='SELECT IFNULL((SELECT GROUP_CONCAT(country.Name SEPARATOR ", ")  FROM country INNER JOIN countrylanguage cl ON country.Code=cl.CountryCode WHERE cl.Language IN
(SELECT  cl.Language FROM country INNER JOIN countrylanguage cl ON country.Code=cl.CountryCode WHERE country.Name = ? AND cl.IsOfficial=true) 
AND cl.IsOfficial=true AND country.Name <>?),0) AS result';
PREPARE stmt5 FROM @languageCountries;
SET @c = "Spain";
EXECUTE stmt5 USING @c, @c;
DEALLOCATE PREPARE stmt5;



SET @continentCountries = 'SELECT country.Name FROM country WHERE country.Continent = (SELECT country.Continent FROM country WHERE country.Name = ?);';
PREPARE stmt6 FROM @continentCountries;
SET @c = "Ukraine";
EXECUTE stmt6 USING @c;
DEALLOCATE PREPARE stmt6;
