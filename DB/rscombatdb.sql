-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema rscombat
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `rscombat` ;

-- -----------------------------------------------------
-- Schema rscombat
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rscombat` ;
USE `rscombat` ;

-- -----------------------------------------------------
-- Table `combat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `combat` ;

CREATE TABLE IF NOT EXISTS `combat` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `category` VARCHAR(45) NULL,
  `count` INT NULL,
  `time` TIME NULL,
  `combat_style` VARCHAR(45) NULL,
  `gp` INT NULL,
  `created_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS user@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `combat`
-- -----------------------------------------------------
START TRANSACTION;
USE `rscombat`;
INSERT INTO `combat` (`id`, `name`, `category`, `count`, `time`, `combat_style`, `gp`, `created_at`) VALUES (1, 'Chaos Elemental', 'boss', 1, NULL, 'necromancy', 10000, NULL);
INSERT INTO `combat` (`id`, `name`, `category`, `count`, `time`, `combat_style`, `gp`, `created_at`) VALUES (2, 'Twin Furies', 'boss', 1, '1:20', 'necromancy', 20000, NULL);

COMMIT;

