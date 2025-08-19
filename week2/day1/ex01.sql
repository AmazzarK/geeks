CREATE DATABASE public;

CREATE TABLE items (
    ID_Item INT PRIMARY KEY serial,
    Title_Item VARCHAR(100),
    Price INT
);


CREATE TABLE customers (
    ID_Customer INT PRIMARY KEY serial,
    First_name VARCHAR(100),
    last_name VARCHAR(100),
);


INSERT INTO items (Title_Item, Price)
VALUES ("Small Desk", 100);


INSERT INTO items (Title_Item, Price)
VALUES ("Large desk", 30);


INSERT INTO items (Title_Item, Price)
VALUES ("Fan ", 80);



INSERT INTO customers (First_name, last_name)
VALUES ( "Greg","Jones");

INSERT INTO customers (First_name, last_name)
VALUES ( "Sandra" , "Jones");

INSERT INTO customers (First_name, last_name)
VALUES ( "Scott" , "Scott");

INSERT INTO customers (First_name, last_name)
VALUES ( "Trevor" , "Green");

INSERT INTO customers (First_name, last_name)
VALUES ( "Melanie" , "Johnson");


SELECT * from items

SELECT * from items WHERE price > 80

SELECT * from items WHERE price = 300

SELECT * from customers WHERE last_name="Smith"

SELECT * from customers WHERE last_name="Jones"

SELECT *
FROM customers
WHERE firstname <> 'Scott';
