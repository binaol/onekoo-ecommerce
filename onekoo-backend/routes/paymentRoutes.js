const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.get("/get-all", paymentController.getAllPayments);
router.post("/checkout-payment", paymentController.checkoutPayment);
router.post("/update-status", paymentController.updateStatus);

module.exports = router;
