const Order = require("../models/Order");

const orderController = {};

orderController.getAllOrders = async (req, res) => {
  try {
    const result = await Order.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = orderController;
