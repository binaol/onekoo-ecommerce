const pool = require("../config/db");
const Payment = {};

Payment.getAll = async () => {
  const sql = "SELECT * FROM payments";
  return await pool.query(sql);
};

Payment.insert = async (user_id, total_price, ref_num) => {
  const sql =
    "INSERT INTO payments (user_id, total_price, ref_num) VALUES (?, ?, ?)";
  return await pool.query(sql, [user_id, total_price, ref_num]);
};

Payment.updateStaus = async (id, status) => {
  const sql = "UPDATE payments SET status = ? WHERE id = ?";
  return await pool.query(sql, [status, id]);
};

module.exports = Payment;
