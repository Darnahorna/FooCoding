DELIMITER //

CREATE PROCEDURE checkCountryLanguages(IN country_code VARCHAR(3))
BEGIN
    DECLARE languageCount INT;
    SELECT COUNT(*) INTO languageCount
    FROM countrylanguage
    WHERE countrylanguage.CountryCode = country_code;
    IF languageCount >= 10 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Alert: this country has 10 or more languages!';
    END IF;
END //

DELIMITER ;
#---------------------------------------------------
DELIMITER //

CREATE TRIGGER languageQuantityChecker
AFTER INSERT ON countrylanguage
FOR EACH ROW
BEGIN
    CALL checkCountryLanguages(NEW.CountryCode);
END //

DELIMITER ;




