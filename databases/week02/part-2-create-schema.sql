

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema toDoApp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema toDoApp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `toDoApp` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema todoapp
-- -----------------------------------------------------
USE `toDoApp` ;

-- -----------------------------------------------------
-- Table `toDoApp`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toDoApp`.`user` (
  `iduser` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `toDoApp`.`toDoList`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toDoApp`.`toDoList` (
  `idList` INT NOT NULL AUTO_INCREMENT,
  `listName` VARCHAR(200) NOT NULL,
  `created` DATE NOT NULL,
  `userId` INT NOT NULL,
  PRIMARY KEY (`idList`),
  UNIQUE INDEX `idList_UNIQUE` (`idList` ASC) VISIBLE,
  INDEX `fk_userId_idx` (`userId` ASC) VISIBLE,
  CONSTRAINT `fk_userId`
    FOREIGN KEY (`userId`)
    REFERENCES `toDoApp`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `toDoApp`.`toDoItem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toDoApp`.`toDoItem` (
  `idtoDoItem` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(245) NOT NULL,
  `isCompleted` TINYINT(2) NOT NULL,
  `reminder` VARCHAR(45) NOT NULL,
  `listId` INT NOT NULL,
  PRIMARY KEY (`idtoDoItem`),
  UNIQUE INDEX `idtoDoItem_UNIQUE` (`idtoDoItem` ASC) VISIBLE,
  INDEX `fk_listId_idx` (`listId` ASC) VISIBLE,
  CONSTRAINT `fk_listId`
    FOREIGN KEY (`listId`)
    REFERENCES `toDoApp`.`toDoList` (`idList`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `toDoApp`.`tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toDoApp`.`tag` (
  `idtag` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtag`),
  UNIQUE INDEX `idtag_UNIQUE` (`idtag` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `toDoApp`.`tagList`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toDoApp`.`tagList` (
  `idtagList` INT NOT NULL AUTO_INCREMENT,
  `tagId` INT NOT NULL,
  `listItemId` INT NOT NULL,
  PRIMARY KEY (`idtagList`),
  INDEX `fk_tagId_idx` (`tagId` ASC) VISIBLE,
  INDEX `fk_listItemId_idx` (`listItemId` ASC) VISIBLE,
  CONSTRAINT `fk_tagId`
    FOREIGN KEY (`tagId`)
    REFERENCES `toDoApp`.`tag` (`idtag`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_listItemId`
    FOREIGN KEY (`listItemId`)
    REFERENCES `toDoApp`.`toDoItem` (`idtoDoItem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
