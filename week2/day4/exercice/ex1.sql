
---part 01


---qst1


CREATE TABLE Menu_Items(
        item_id  SERIAL PRIMARY KEY,
         item_name  VARCHAR(30) NOT NULL,
        item_price  SMALLINT DEFAULT 0
)


--INSERT INTO Menu_Items (item_name ,item_price) VALUES ( %s , %s )



INSERT INTO Menu_Items (item_name, item_price) VALUES
('Margherita Pizza', 80),
('Chicken Burger', 65),
('Caesar Salad', 50),
('Spaghetti Bolognese', 90),
('Grilled Salmon', 120),
('Veggie Wrap', 55),
('Beef Tacos', 70),
('Tomato Soup', 40),
('Chocolate Cake', 45),
('Fresh Lemonade', 30);

SELECT * FROM menu_items