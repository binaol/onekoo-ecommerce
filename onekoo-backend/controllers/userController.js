const bcrypt = require("bcryptjs");
const User = require("../models/User");

const userController = {};

userController.searchUserByEmail = async (req, res) => {
  const email = req.params.id;
  try {
    const user = await User.findByEmail(email);
    console.log(user);
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

userController.createUser = async (req, res) => {
  const { name, email, address, password, confirmPassword } = req.body;
  console.log(req.body);
  try {
    console.log(req.body);
    const [user] = await User.findByEmail(email);
    if (user) return res.status(400).json({ msg: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await User.create(name, email, hashedPassword, address);
    res.json(result);
    console.log(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

userController.updateUser = async (req, res) => {
  const { id, name, email, password, address } = req.body;
  try {
    const result = await User.update(id, name, email, password, address);
    console.log(result);
    if (result.affectedRows > 0) {
      res.json({ isUpdated: true });
      console.log("successfull");
    } else {
      res.json({ isUpdated: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = userController;
