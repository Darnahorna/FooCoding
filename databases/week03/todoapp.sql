-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: todoapp
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `idtag` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`idtag`),
  UNIQUE KEY `idtag_UNIQUE` (`idtag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taglist`
--

DROP TABLE IF EXISTS `taglist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taglist` (
  `idtagList` int NOT NULL AUTO_INCREMENT,
  `tagId` int NOT NULL,
  `listItemId` int NOT NULL,
  PRIMARY KEY (`idtagList`),
  KEY `fk_tagId_idx` (`tagId`),
  KEY `fk_listItemId_idx` (`listItemId`),
  CONSTRAINT `fk_listItemId` FOREIGN KEY (`listItemId`) REFERENCES `todoitem` (`idtoDoItem`),
  CONSTRAINT `fk_tagId` FOREIGN KEY (`tagId`) REFERENCES `tag` (`idtag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taglist`
--

LOCK TABLES `taglist` WRITE;
/*!40000 ALTER TABLE `taglist` DISABLE KEYS */;
/*!40000 ALTER TABLE `taglist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `todoitem`
--

DROP TABLE IF EXISTS `todoitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todoitem` (
  `idtoDoItem` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(245) DEFAULT NULL,
  `isCompleted` enum('T','F') NOT NULL,
  `reminder` timestamp(6) NULL DEFAULT NULL,
  `listId` int NOT NULL,
  PRIMARY KEY (`idtoDoItem`),
  UNIQUE KEY `idtoDoItem_UNIQUE` (`idtoDoItem`),
  KEY `fk_listId_idx` (`listId`),
  CONSTRAINT `fk_listId` FOREIGN KEY (`listId`) REFERENCES `todolist` (`idList`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todoitem`
--

LOCK TABLES `todoitem` WRITE;
/*!40000 ALTER TABLE `todoitem` DISABLE KEYS */;
INSERT INTO `todoitem` VALUES (1,'Shoping List','List of groceries for the next (25) week','T',NULL,2),(2,'Frank\'s birthday','Buy a book','T','2023-06-21 08:00:00.000000',1),(3,'Go for the excursion with Mia','Malmo Opera','T',NULL,4),(4,'Call Victor Brayan','Public Policy Discussion','T','2023-06-10 06:00:00.000000',3),(5,'call mama','df','T',NULL,1),(6,'Bring the ball back to Fritidsbanken','They work until 4pm','F','2023-05-27 08:00:00.000000',1),(7,'Bring the ball back to Fritidsbanken','They work until 4pm','F','2023-05-27 08:00:00.000000',1),(8,'Bring the ball back to Fritidsbanken','They work until 4pm','T','2023-05-27 08:00:00.000000',1),(9,'Bring the ball back to Fritidsbanken','They work until 4pm','T','2023-05-27 08:00:00.000000',1);
/*!40000 ALTER TABLE `todoitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `todolist`
--

DROP TABLE IF EXISTS `todolist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todolist` (
  `idList` int NOT NULL AUTO_INCREMENT,
  `listName` varchar(200) NOT NULL,
  `created` timestamp(6) NOT NULL,
  `userId` int NOT NULL,
  `reminder` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`idList`),
  UNIQUE KEY `idList_UNIQUE` (`idList`),
  KEY `fk_userId_idx` (`userId`),
  CONSTRAINT `fk_userId` FOREIGN KEY (`userId`) REFERENCES `user` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todolist`
--

LOCK TABLES `todolist` WRITE;
/*!40000 ALTER TABLE `todolist` DISABLE KEYS */;
INSERT INTO `todolist` VALUES (1,'Personal','2023-06-05 12:29:59.000000',1,'2023-06-06 08:00:00.000000'),(2,'Home','2023-06-05 12:29:59.000000',1,'2023-06-06 18:00:00.000000'),(3,'Work','2023-06-05 12:29:59.000000',1,NULL),(4,'Travel','2023-06-05 12:29:59.000000',1,NULL),(5,'5g','2023-06-05 12:29:59.000000',1,'2023-06-05 12:29:59.000000');
/*!40000 ALTER TABLE `todolist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `iduser` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Daria','Nahorna','qwerty','darnahorna'),(2,'Johan','Möller','123456789','johan');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-07 16:37:19
