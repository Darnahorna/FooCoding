#List of the names of the countries that has more than 10 cities, and a total population of the cities listed (not the country population) of more than 50 million
SELECT country.Name, country.Population, count(city.Name), sum(city.Population) as yy FROM new_world.country INNER JOIN new_world.city ON country.Code=city.CountryCode GROUP BY country.Name HAVING count(city.Name)>10 AND sum(city.Population)>50000000;

#List the cities from those countries with >50M pop in the listed cities, where the city population is > 5M  
SELECT city.Name, city.Population, country.Name, country.cityPop FROM 
(SELECT country.Code, country.Name, sum(city.Population) as cityPop FROM new_world.country INNER JOIN new_world.city ON country.Code=city.CountryCode GROUP BY country.Name HAVING count(city.Name)>10 AND sum(city.Population)>50000000) as country
CROSS JOIN new_world.city ON country.Code=city.CountryCode WHERE city.Population>5000000 and country.cityPop>50000000;