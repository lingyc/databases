CREATE DATABASE chat;

USE chat;

CREATE TABLE messages
(
Id int NOT NULL,
text varchar(255) NOT NULL,
time varchar(255) NOT NULL,
user int NOT NULL, 
room int NOT NULL,

PRIMARY KEY (Id),
FOREIGN KEY (user) REFERENCES users(Id),
FOREIGN KEY (room) REFERENCES rooms(Id)

);

CREATE TABLE users
(
Id int NOT NULL,
name varchar(255) NOT NULL,
PRIMARY KEY (Id)
);

CREATE TABLE rooms
(
Id int NOT NULL,
name varchar(255) NOT NULL,
PRIMARY KEY (Id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

