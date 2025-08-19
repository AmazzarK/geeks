-- Create the first table with ID and Name
CREATE TABLE FirstTab (
    id INTEGER,
    name VARCHAR(10)
);

-- Insert sample data into FirstTab
INSERT INTO FirstTab VALUES
(5, 'Pawan'),
(6, 'Sharlee'),
(7, 'Krish'),
(NULL, 'Avtaar');

-- View contents of FirstTab
SELECT * FROM FirstTab;

-- Create the second table with just an ID
CREATE TABLE SecondTab (
    id INTEGER
);

-- Insert sample data into SecondTab
INSERT INTO SecondTab VALUES
(5),
(NULL);

-- View contents of SecondTab
SELECT * FROM SecondTab;


--Q1


SELECT *
FROM FirstTab ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id IS NOT NULL
);


--Q2

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id = 5
);


--Q3

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (SELECT id FROM SecondTab);


--Q4

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id IS NOT NULL
);


