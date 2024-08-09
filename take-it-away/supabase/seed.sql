INSERT INTO pizzas (name, base_price) VALUES 
('Margherita Pizza', 8.50),
('Marinara Pizza', 7.50),
('Quattro Stagioni Pizza', 10.00),
('Quattro Formaggi Pizza', 9.50),
('Capricciosa Pizza', 10.00),
('Diavola Pizza', 9.00),
('Napoletana Pizza', 9.00),
('Romana Pizza', 8.50),
('Prosciutto e Funghi Pizza', 9.50),
('Boscaiola Pizza', 9.50),
('Siciliana Pizza', 9.00),
('Ortolana (Vegetariana) Pizza', 9.00),
('Pizza ai Quattro Salumi', 11.00),
('Pizza con Patate e Rosmarino', 8.50),
('Pizza alla Carbonara', 10.00);

INSERT INTO toppings (name) VALUES 
('Tomato sauce'),
('Fresh mozzarella'),
('Fresh basil'),
('Olive oil'),
('Garlic'),
('Oregano'),
('Mozzarella'),
('Mushrooms'),
('Ham'),
('Artichokes'),
('Olives'),
('Gorgonzola'),
('Parmesan'),
('Fontina'),
('Spicy salami'),
('Anchovies'),
('Capers'),
('Italian sausage'),
('Eggplant'),
('Zucchini'),
('Bell peppers'),
('Salami'),
('Pancetta'),
('Sausage'),
('Thinly sliced potatoes'),
('Rosemary'),
('Eggs'),
('Pancetta or guanciale'),
('Pecorino cheese'),
('Black pepper');

-- Margherita Pizza
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(1, 1), (1, 2), (1, 3), (1, 4);

-- Marinara Pizza
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(2, 1), (2, 5), (2, 6), (2, 4);

-- Quattro Stagioni Pizza
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(3, 1), (3, 7), (3, 8), (3, 9), (3, 10), (3, 11);

-- Quattro Formaggi Pizza
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(4, 7), (4, 12), (4, 13), (4, 14);

-- Capricciosa Pizza
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(5, 1), (5, 7), (5, 8), (5, 10), (5, 9), (5, 11);

-- Diavola Pizza
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(6, 1), (6, 7), (6, 15);

-- Napoletana Pizza
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(7, 1), (7, 7), (7, 16), (7, 17), (7, 6);

-- Romana Pizza
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(8, 1), (8, 7), (8, 16), (8, 17);

-- Prosciutto e Funghi Pizza
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(9, 1), (9, 7), (9, 9), (9, 8);

-- Boscaiola Pizza
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(10, 1), (10, 7), (10, 8), (10, 18);

-- Siciliana Pizza
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(11, 1), (11, 7), (11, 16), (11, 17), (11, 11);

-- Ortolana (Vegetariana) Pizza
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(12, 1), (12, 7), (12, 19), (12, 20), (12, 21);

-- Pizza ai Quattro Salumi
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(13, 1), (13, 7), (13, 22), (13, 9), (13, 23), (13, 24);

-- Pizza con Patate e Rosmarino
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(14, 25), (14, 26), (14, 7), (14, 4);

-- Pizza alla Carbonara
INSERT INTO pizzas_toppings (pizza_id, topping_id) VALUES 
(15, 7), (15, 27), (15, 28), (15, 29), (15, 30);
