const pool = require("../config/db");

const Order = {};

Order.getAll = async () => {
  const sql = "SELECT * FROM orders";
  return await pool.query(sql);
};

module.exports = Order;
