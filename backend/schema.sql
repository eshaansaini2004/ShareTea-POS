-- Tea Shop Database Schema
-- This file contains all the table definitions for the tea shop application

-- Create database (run this separately if needed)
-- CREATE DATABASE tea_shop_db;

-- Products table (21 items)
CREATE TABLE IF NOT EXISTS products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  product_cost DECIMAL(10,2) NOT NULL,
  base_cost DECIMAL(10,2) NOT NULL,
  product_type VARCHAR(50) NOT NULL,
  category_id VARCHAR(50) NOT NULL, -- 'milk_tea', 'classic_tea', 'fruit_tea'
  allergens TEXT,
  order_count INTEGER DEFAULT 0,
  price_increased BOOLEAN DEFAULT FALSE
);

-- Inventory table
CREATE TABLE IF NOT EXISTS inventory (
  item_id SERIAL PRIMARY KEY,
  item_name VARCHAR(100) NOT NULL,
  amount INTEGER NOT NULL,
  transaction_id INTEGER DEFAULT 1
);

-- Transactions table
CREATE TABLE IF NOT EXISTS customer_transaction (
  customer_transaction_num SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL,
  product_id INTEGER REFERENCES products(product_id),
  customer_id INTEGER DEFAULT 0,
  purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ice_amount DECIMAL(3,2),
  topping_type VARCHAR(50)
);

-- Business closure log table for X/Z reports
CREATE TABLE IF NOT EXISTS business_closure_log (
  closure_id SERIAL PRIMARY KEY,
  closure_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Menu item inventory mapping (for inventory usage reports)
CREATE TABLE IF NOT EXISTS menu_item_inventory (
  mapping_id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(product_id),
  item_id INTEGER REFERENCES inventory(item_id),
  quantity_used INTEGER NOT NULL DEFAULT 1
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_transactions_date ON customer_transaction(purchase_date);
CREATE INDEX IF NOT EXISTS idx_transactions_product ON customer_transaction(product_id);
CREATE INDEX IF NOT EXISTS idx_inventory_name ON inventory(item_name);
