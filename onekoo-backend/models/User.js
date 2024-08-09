const pool = require("../config/db");

const User = {};

User.create = async (username, email, password, address) => {
  const sql =
    "INSERT INTO users (name, email, password, address) VALUES (?, ?, ?, ?)";
  return await pool.query(sql, [username, email, password, address]);
};

User.findByEmail = async (email) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  const result = await pool.query(sql, [email]);
  return result;
};

User.update = async (id, name, email, password, address) => {
  const sql = `UPDATE users SET name = ?, email = ?, password = ?, address = ? WHERE id = ?`;
  const result = await pool.query(sql, [name, email, password, address, id]);
  return result;
};

// User.findAdminEmail = async (email) => {
//   const sql  = 'Select * FROM users WHERE email = '
//   const result = await pool.query(sql, [email]);
// };

module.exports = User;
