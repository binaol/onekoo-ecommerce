const Payment = require("../models/Payment");

const paymentController = {};

paymentController.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.getAll();
    console.table(payments);
    res.json(payments);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

paymentController.checkoutPayment = async (req, res) => {
  const { user_id, total_price, ref_num } = req.body;
  try {
    const result = await Payment.insert(user_id, total_price, ref_num);
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

paymentController.updateStatus = async (req, res) => {
  const { id, status } = req.body;
  try {
    const result = await Payment.updateStaus(id, status);
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = paymentController;
