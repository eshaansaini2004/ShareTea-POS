-- Seed data for Tea Shop Database
-- This file populates the database with the 21 menu items and initial inventory

-- Clear existing data (be careful in production!)
DELETE FROM customer_transaction;
DELETE FROM menu_item_inventory;
DELETE FROM products;
DELETE FROM inventory;
DELETE FROM business_closure_log;

-- Reset sequences
ALTER SEQUENCE products_product_id_seq RESTART WITH 1;
ALTER SEQUENCE inventory_item_id_seq RESTART WITH 1;
ALTER SEQUENCE customer_transaction_customer_transaction_num_seq RESTART WITH 1;
ALTER SEQUENCE business_closure_log_closure_id_seq RESTART WITH 1;
ALTER SEQUENCE menu_item_inventory_mapping_id_seq RESTART WITH 1;

-- Insert 21 products
INSERT INTO products (product_name, product_cost, base_cost, product_type, category_id, allergens, order_count, price_increased) VALUES
-- Items 1-10: Milk Tea
('Classic Milk Tea', 4.50, 4.50, 'Tea', 'milk_tea', 'Dairy', 0, false),
('Taro Milk Tea', 5.25, 5.25, 'Tea', 'classic_tea', 'Dairy', 0, false),
('Brown Sugar Milk Tea', 5.75, 5.75, 'Tea', 'milk_tea', 'Dairy', 0, false),
('Matcha Milk Tea', 5.50, 5.50, 'Tea', 'milk_tea', 'Dairy', 0, false),
('Thai Milk Tea', 4.75, 4.75, 'Tea', 'milk_tea', 'Dairy, Spices', 0, false),
('Caramel Milk Tea', 5.95, 5.95, 'Tea', 'milk_tea', 'Dairy', 0, false),
('Honey Milk Tea', 4.25, 4.25, 'Tea', 'milk_tea', 'Dairy', 0, false),
('Vanilla Milk Tea', 5.00, 5.00, 'Tea', 'milk_tea', 'Dairy', 0, false),
('Coconut Milk Tea', 5.25, 5.25, 'Tea', 'milk_tea', 'Dairy, Nuts', 0, false),
('Milk Tea Eshaan', 6.50, 6.50, 'Tea', 'classic_tea', 'Dairy', 0, false),

-- Items 11-14: Mixed categories
('Cookies and Cream Milk Tea', 5.95, 5.95, 'Tea', 'milk_tea', 'Dairy, Gluten', 0, false),
('Mango Fruit Tea', 4.75, 4.75, 'Tea', 'fruit_tea', 'None', 0, false),
('Oolong Tea', 3.75, 3.75, 'Tea', 'classic_tea', 'None', 0, false),
('Chamomile Tea', 3.00, 3.00, 'Tea', 'classic_tea', 'None', 0, false),

-- Items 15-21: Fruit Tea
('Mango Fruit Tea', 4.75, 4.75, 'Tea', 'fruit_tea', 'None', 0, false),
('Orange Tea', 4.50, 4.50, 'Tea', 'fruit_tea', 'None', 0, false),
('Peach Fruit Tea', 4.25, 4.25, 'Tea', 'fruit_tea', 'None', 0, false),
('Passion Fruit Tea', 4.95, 4.95, 'Tea', 'fruit_tea', 'None', 0, false),
('Lychee Fruit Tea', 4.50, 4.50, 'Tea', 'fruit_tea', 'None', 0, false),
('Lemon Fruit Tea', 4.25, 4.25, 'Tea', 'fruit_tea', 'None', 0, false),
('Mixed Berry Tea', 5.25, 5.25, 'Tea', 'fruit_tea', 'None', 0, false);

-- Insert initial inventory
INSERT INTO inventory (item_name, amount, transaction_id) VALUES
('Coffee Beans', 100, 1),
('Milk', 50, 1),
('Sugar', 75, 1),
('Ice cubes', 200, 1),
('Green Tea Mix', 30, 1),
('Black Tea Mix', 25, 1),
('Chai Mix', 20, 1),
('Chocolate Syrup', 15, 1),
('Vanilla Syrup', 20, 1),
('Caramel Syrup', 18, 1),
('Classic Milk Tea Mix', 25, 1),
('Taro Milk Tea Mix', 20, 1),
('Brown Sugar Milk Tea Mix', 18, 1),
('Matcha Milk Tea Mix', 22, 1),
('Thai Milk Tea Mix', 15, 1),
('Caramel Milk Tea Mix', 16, 1),
('Honey Milk Tea Mix', 19, 1),
('Vanilla Milk Tea Mix', 17, 1),
('Coconut Milk Tea Mix', 14, 1),
('Milk Tea Eshaan Mix', 12, 1),
('Cookies and Cream Milk Tea Mix', 13, 1),
('Mango Fruit Tea Mix', 21, 1),
('Oolong Tea Mix', 28, 1),
('Chamomile Tea Mix', 30, 1),
('Orange Tea Mix', 23, 1),
('Peach Fruit Tea Mix', 20, 1),
('Passion Fruit Tea Mix', 16, 1),
('Lychee Fruit Tea Mix', 18, 1),
('Lemon Fruit Tea Mix', 25, 1),
('Mixed Berry Tea Mix', 17, 1);

-- Create menu item inventory mappings
INSERT INTO menu_item_inventory (product_id, item_id, quantity_used) VALUES
-- Classic Milk Tea uses Classic Milk Tea Mix
(1, 11, 1),
-- Taro Milk Tea uses Taro Milk Tea Mix
(2, 12, 1),
-- Brown Sugar Milk Tea uses Brown Sugar Milk Tea Mix
(3, 13, 1),
-- Matcha Milk Tea uses Matcha Milk Tea Mix
(4, 14, 1),
-- Thai Milk Tea uses Thai Milk Tea Mix
(5, 15, 1),
-- Caramel Milk Tea uses Caramel Milk Tea Mix
(6, 16, 1),
-- Honey Milk Tea uses Honey Milk Tea Mix
(7, 17, 1),
-- Vanilla Milk Tea uses Vanilla Milk Tea Mix
(8, 18, 1),
-- Coconut Milk Tea uses Coconut Milk Tea Mix
(9, 19, 1),
-- Milk Tea Eshaan uses Milk Tea Eshaan Mix
(10, 20, 1),
-- Cookies and Cream Milk Tea uses Cookies and Cream Milk Tea Mix
(11, 21, 1),
-- Mango Fruit Tea uses Mango Fruit Tea Mix
(12, 22, 1),
-- Oolong Tea uses Oolong Tea Mix
(13, 23, 1),
-- Chamomile Tea uses Chamomile Tea Mix
(14, 24, 1),
-- Mango Fruit Tea (duplicate) uses Mango Fruit Tea Mix
(15, 22, 1),
-- Orange Tea uses Orange Tea Mix
(16, 25, 1),
-- Peach Fruit Tea uses Peach Fruit Tea Mix
(17, 26, 1),
-- Passion Fruit Tea uses Passion Fruit Tea Mix
(18, 27, 1),
-- Lychee Fruit Tea uses Lychee Fruit Tea Mix
(19, 28, 1),
-- Lemon Fruit Tea uses Lemon Fruit Tea Mix
(20, 29, 1),
-- Mixed Berry Tea uses Mixed Berry Tea Mix
(21, 30, 1);

-- Insert some sample transactions for testing
INSERT INTO customer_transaction (customer_transaction_num, order_id, product_id, customer_id, purchase_date, ice_amount, topping_type) VALUES
(1, 1, 1, 0, '2024-01-15 10:30:00', 0.5, 'None'),
(2, 1, 2, 0, '2024-01-15 10:30:00', 0, 'Cinnamon'),
(3, 2, 3, 0, '2024-01-15 11:15:00', 0.75, 'None'),
(4, 3, 12, 0, '2024-01-15 12:00:00', 0.5, 'None'),
(5, 4, 5, 0, '2024-01-15 14:30:00', 0.25, 'None');

-- Insert a business closure log entry for testing reports
INSERT INTO business_closure_log (closure_date) VALUES
('2024-01-14 23:59:59');
