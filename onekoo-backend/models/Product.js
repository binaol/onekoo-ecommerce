const pool = require("../config/db");

const Product = {};

Product.getAll = async () => {
  const sql = "SELECT * FROM products";
  return await pool.query(sql);
};

Product.getProduct = async (name) => {
  const sql = "SELECT * FROM products WHERE name = ?";
  return await pool.query(sql, [name]);
};

Product.create = async (
  name,
  description,
  price,
  categoryId,
  image,
  quality,
  location,
  shopId
) => {
  const sql =
    "INSERT INTO products (name, description, price, category_id, image_url, quality, location, shop_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  return await pool.query(sql, [
    name,
    description,
    price,
    categoryId,
    image,
    quality,
    location,
    shopId,
  ]);
};

Product.update = async (
  id,
  name,
  description,
  price,
  categoryId,
  image,
  quality,
  location,
  shopId
) => {
  const sql = `UPDATE products SET name = ?, description = ?, price = ?, category_id = ?, image_url = ?, quality = ?, location = ?, shop_id = ? WHERE id = ?`;
  const result = await pool.query(sql, [
    name,
    description,
    price,
    categoryId,
    image,
    quality,
    location,
    shopId,
    id,
  ]);
  return result;
};

module.exports = Product;
