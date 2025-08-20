SELECT * FROM language

--SELECT * from film

SELECT f.title, f.description, l.name AS language_name
FROM film f
JOIN language l ON f.language_id = l.language_id;



SELECT f.title, f.description, l.name AS language_name
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Add some sample films
INSERT INTO new_film (name) VALUES ('The Sumo Saga'), ('Ocean Fury'), ('Silent Echo');

--SELECT * FROM new_film

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL,
    language_id INTEGER NOT NULL,
    title VARCHAR(255),
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);



INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
(1, 1, 'Epic and Emotional', 9, 'A powerful story of resilience and tradition.'),
(2, 2, 'Thrilling Ride', 8, 'Intense action and stunning visuals throughout.');

--SELECT * from customer_review

DELETE FROM new_film WHERE id = 1;

--SELECT * from customer_review