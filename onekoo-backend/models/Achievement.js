const pool = require("../config/db");

const Achievement = {};

Achievement.getAll = async () => {
  const sql = "SELECT * FROM achievement";
  return await pool.query(sql);
};

Achievement.create = async (image, title, description) => {
  const sql =
    "INSERT INTO achievement (Image, Title, Description) VALUES (?, ?, ?)";
  return await pool.query(sql, [image, title, description]);
};

Achievement.findByTitle = async (title) => {
  const sql = "SELECT * FROM achievement WHERE Title = ?";
  const result = await pool.query(sql, [title]);
  return result[0];
};

module.exports = Achievement;
