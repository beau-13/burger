CREATE DATABASE burgers_db; 

USE burgers_db;

CREATE TABLE burgers
(
  id INTEGER AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(50),
  devoured BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

