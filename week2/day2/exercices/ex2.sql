SELECT * from customer
SELECT first_name, last_name as full_name from customer
SELECT DISTINCT create_date from customer

 SELECT * from customer order by first_name ASC

SELECT film_id, title , description , release_year , rental_rate from film order by rental_rate ASC 

SELECT * from address


SELECT address.address, address.phone
FROM customer
INNER JOIN address
ON customer.address_id = address.address_id
WHERE address.district = 'Texas';



SELECT * from film where film_id=15 or film_id =150




SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Your Favorite Movie';


SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'In%';



SELECT film_id, title, description, length, rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10;


SELECT 
  customer.customer_id,
  customer.first_name,
  customer.last_name,
  payment.amount,
  payment.payment_date
FROM customer
INNER JOIN payment
  ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id ASC;


SELECT film.film_id, film.title, film.description, film.length, film.rental_rate
FROM film
LEFT JOIN inventory
  ON film.film_id = inventory.film_id
WHERE inventory.film_id IS NULL;


SELECT 
  city.city_id,
  city.city,
  country.country
FROM city
INNER JOIN country
  ON city.country_id = country.country_id;
