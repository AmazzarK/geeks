CREATE TABLE actors (
     Id_actor INT PRIMARY KEY serial,
     Name_actor VARCHAR(50),
     age_actor INT

)

SELECT COUNT(*) AS total_actors
FROM actors;


INSERT INTO actors ( Name_actor, age_actor)
VALUES ( "blabla", 45);

SELECT * FROM actors;

