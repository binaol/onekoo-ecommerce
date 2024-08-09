const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/get-user/:id",  userController.searchUserByEmail);
router.post("/create-user", userController.createUser);
router.post("/update-user", userController.updateUser);

module.exports = router;
