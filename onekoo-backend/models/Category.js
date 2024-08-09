const pool = require("../config/db");

const Category = {};

Category.getAll = async () => {
  const sql = "SELECT * FROM categories";
  return await pool.query(sql);
};

Category.getCategory = async (name) => {
  const sql = "SELECT * FROM categories WHERE name = ?";
  return await pool.query(sql, [name]);
};

Category.create = async (name, description) => {
  const sql = "INSERT INTO categories (name, description) VALUES (?, ?)";
  return await pool.query(sql, [name, description]);
};

Category.update = async (id, name, description) => {
  const sql = "UPDATE categories SET name = ?, description = ? WHERE id = ?";
  return await pool.query(sql, [name, description, id]);
};

Category.delete = async (id) => {
  const sql = "DELETE FROM categories WHERE id = ?";
  return await pool.query(sql, [id]);
};

module.exports = Category;
