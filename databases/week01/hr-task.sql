CREATE table hr;
USE hr;

CREATE TABLE `hr`.`employee` (
  `id_employee` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `personal_number` VARCHAR(45) NOT NULL,
  `location_id` INT NOT NULL,
  PRIMARY KEY (`id_employee`),
  INDEX `fk_location_idx` () VISIBLE,
  INDEX `fk_Reader_idx_idx` (`location_id` ASC) VISIBLE,
  CONSTRAINT `fk_Reader_idx`
    FOREIGN KEY (`location_id`)
    REFERENCES `hr`.`location` (`id_location`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE);
  
  CREATE TABLE `hr`.`location` (
  `id_location` INT NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_location`));
  
  INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('1', 'Johan', 'Moller', '199905121221');
INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('2', 'Ann', 'Ekstrom', '198812122322');
INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('3', 'Sofie', 'Mobberg', '199805034595');
INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('4', 'Daria', 'Nahorna', '199409083434');
INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('5', 'Oleksander', 'Kovalenko', '199905062345');
INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('6', 'Ihor', 'Melihov', '196804274567');
INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('7', 'Maria', 'Fedkhiv', '196905129495');
INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('8', 'Arina', 'Riabokon', '197812120988');
INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('9', 'Olha', 'Hubska', '199905092023');
INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('10', 'Baraa', 'M', '199703194804');
INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('11', 'Anton', 'Nilsson', '196905049494');
INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('12', 'Linnea', 'Thorsson', '198705061111');
INSERT INTO `hr`.`employee` (`id_employee`, `name`, `surname`, `personal_number`) VALUES ('13', 'Lotta', 'Line', '199905112020');


INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('1', 'Lund', 'Sweden');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('2', 'Malmo', 'Sweden');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('3', 'Stockholm', 'Sweden');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('4', 'Kiyv', 'Ukraine');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('5', 'Berlin', 'Germany');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('6', 'Warsaw', 'Poland');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('7', 'Linkoping', 'Sweden');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('8', 'Eslov', 'Sweden');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('9', 'Helsinborg', 'Sweden');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('10', 'Gdansk', 'Poland');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('11', 'Chernihiv', 'Ukraine');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('12', 'Kherson', 'Ukraine');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('13', 'Lviv', 'Ukraine');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('14', 'Orebro', 'Sweden');
INSERT INTO `hr`.`location` (`id_location`, `city`, `country`) VALUES ('15', 'Svedala', 'Sweden');
