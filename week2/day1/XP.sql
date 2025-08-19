CREATE DATABASE bootcamp;

CREATE TABLE students(COMMENT
     Id_student INT PRIMARY KEY serial,
     last_name_student VARCHAR(30),
     firstname_student VARCHAR(30),
     birth_date_student  time

)




INSERT INTO students (last_name_student,firstname_student,birth_date_student )
VALUES ("Leo", "Benichou",27/07/1987),
       ( "Yoan", "Cohen",03/12/2010),
       ( "Marc", "Benichou",02/11/1998),
       ("Amelia","Dux",07/04/1996),
       ( "David", "Grez",14/06/2003),
       ( "Omar", "Simpson",03/10/1980)
       ;




SELECT * FROM students

SELECT firstname_student,last_name_student from students



SELECT firstname_student,last_name_student from students 
WHERE Id_student=2

SELECT firstname_student,last_name_student from students 
WHERE  last_name_student="Benichou" and firstname_student ="Marc"

SELECT firstname_student,last_name_student from students 
WHERE  last_name_student="Benichou" or firstname_student="Marc"


SELECT firstname_student,last_name_student from students 
WHERE last_name_student LIKE '%a%'

SELECT firstname_student,last_name_student from students 
WHERE last_name_student LIKE 'a%' OR column_name LIKE 'A%'


SELECT firstname_student,last_name_student from students 
WHERE last_name_student LIKE '%a' OR column_name LIKE '%A'

SELECT firstname_student,last_name_student from students 
WHERE  LENGTH(last_name_student) -1 ,1 ) = 'a'

SELECT firstname_student,last_name_student from students 
WHERE Id_student = 1 and Id_student = 3


SELECT * from students 
WHERE birth_date_student =< 1/01/2000
