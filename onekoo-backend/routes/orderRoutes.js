const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/get-orders", orderController.getAllOrders);

module.exports = router;
