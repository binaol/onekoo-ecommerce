const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const cookieParser = require("cookie-parser");
const { SECRET_KEY } = process.env;

const authController = {};

authController.register = async (req, res) => {
  const { fullname, email, address, password, confirmPassword } = req.body;
  console.log(req.body);
  const [user] = await User.findByEmail(email);
  if (user) return res.status(400).json({ msg: "User already exists" });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const result = await User.create(fullname, email, hashedPassword, address);
  console.log(result);

  // const payload = { user: { email } };
  // jwt.sign(payload, SECRET_KEY, { expiresIn: 3600 }, (err, token) => {
  //   if (err) throw err;
  //   res.json({ token });
  // });
};

authController.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const [user] = await User.findByEmail(email);
    console.log(user);
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
    console.log("nahomm");
    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.address,
      },
    };
    jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.cookie("token", token);
      console.log(req.cookies.token);
      res.json({ login: true, user: user });
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

authController.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (email === "Admin1@gmail.com" && password === "1234567890")
    try {
      const [user] = await User.findByEmail(email);
      console.log(user);
      if (!user) return res.status(400).json({ msg: "Invalid credentials" });

      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
      console.log("nahomm");
      const payload = { user: { user: user.name, email: user.email } };
      jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" }, (err, token) => {
        if (err) throw err;
        res.cookie("token2", token);
        res.json({ token });
      });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  else {
    return res.status(400).json({ msg: "no such admin" });
  }
};

authController.checkAuth = async (req, res) => {
  res.json({ user: req.user, isAuth: true });
};

authController.logout = async (req, res) => {
  res.clearCookie("token");
  res.json({ msg: "logged out" });
};

module.exports = authController;
