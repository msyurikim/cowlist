-- mysql syntax (could type this in terminal)
-- create database, use database, create tables in database

CREATE DATABASE IF NOT EXISTS cowlist;

USE cowlist;

CREATE TABLE IF NOT EXISTS cows(
  -- primary key is already unique, don't need unique constraint
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20),
  description VARCHAR(200)
);

/*  Execute this file from the command line by typing:
 *  mysql -u root < database/schema.sql --> doesn't work... (with/ without sudo)
mysql -u root
source database/schema.sql
 *  to create the database and the tables, and start mysql server*/

