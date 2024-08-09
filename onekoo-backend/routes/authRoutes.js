const express = require("express");
const Auths = require("../middleware/authMiddleware");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.post("/admin-login", authController.adminLogin);
router.get("/check-auth", Auths.authMiddleware, authController.checkAuth);
router.get(
  "/check-admin-auth",
  Auths.authMiddlewareAdmin,
  authController.checkAuth
);

module.exports = router;
