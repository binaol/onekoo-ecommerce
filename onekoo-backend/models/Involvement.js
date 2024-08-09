const pool = require("../config/db");

const Involvement = {};

Involvement.getAll = async () => {
  const sql = "SELECT * FROM involvement";
  return await pool.query(sql);
};

Involvement.create = async (image, title, description) => {
  const sql =
    "INSERT INTO involvement (Image, Title, Description) VALUES (?, ?, ?)";
  return await pool.query(sql, [image, title, description]);
};

Involvement.findByTitle = async (title) => {
  const sql = "SELECT * FROM involvement WHERE Title = ?";
  const result = await pool.query(sql, [title]);
  return result[0];
};

module.exports = Involvement;
