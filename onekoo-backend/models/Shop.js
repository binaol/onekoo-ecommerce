const pool = require("../config/db");

const Shop = {};

Shop.getAll = async () => {
  const sql = "SELECT * FROM shops";
  const result = await pool.query(sql);
  return result;
};
Shop.create = async (
  name,
  location,
  image,
  email,
  phone,
  bank_name,
  acc_num
) => {
  const sql =
    "INSERT INTO shops (name, location, image, email, phone, bank_name, acc_num) VALUES (?, ?, ?, ?, ?, ?, ?)";
  return await pool.query(sql, [
    name,
    location,
    image,
    email,
    phone,
    bank_name,
    acc_num,
  ]);
};

Shop.findShopByName = async (name) => {
  const sql = "SELECT * FROM shops WHERE name = ?";
  return await pool.query(sql, [name]);
};

Shop.update = async (
  id,
  name,
  location,
  image,
  email,
  phone,
  bank_name,
  acc_num
) => {
  const sql =
    "UPDATE shops SET name = ?, location = ?, image = ?, email = ?, phone = ?, bank_name = ?, acc_num = ? WHERE id = ?";
  const result = await pool.query(sql, [
    name,
    location,
    image,
    email,
    phone,
    bank_name,
    acc_num,
    id,
  ]);
  return result;
};

Shop.getShopImage = async (id) => {
  const sql = "SELECT image FROM shops WHERE id = ?";
  return await pool.query(sql, [id]);
};

module.exports = Shop;
