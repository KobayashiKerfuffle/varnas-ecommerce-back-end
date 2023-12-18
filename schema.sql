-- Use IF NOT EXISTS to avoid an error if the database already exists
CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

-- Create a table for categories
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

-- Create a table for products
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 10,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Create a table for tags
CREATE TABLE tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(255)
);

-- Create a table for product tags (to establish many-to-many relationships between products and tags)
CREATE TABLE product_tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    tag_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);
