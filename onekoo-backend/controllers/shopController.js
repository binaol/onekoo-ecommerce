const Shop = require("../models/Shop");

const shopController = {};

shopController.getAllShops = async (req, res) => {
  try {
    const shops = await Shop.getAll();
    console.log(shops);
    return res.json(shops);
  } catch (error) {
    console.log(error);
    res.staus(500).json(error);
  }
};
shopController.createShop = async (req, res) => {
  const { name, location, email, phone, bank_name, acc_num } = req.body;
  const image = req.file.filename;

  try {
    const result = await Shop.create(
      name,
      location,
      image,
      email,
      phone,
      bank_name,
      acc_num
    );
    console.log(result);
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

shopController.getLocationImage = async (req, res) => {
  const id = req.params.id;
  try {
    const locationImage = await Shop.getShopImage(id);
    console.log(locationImage);
    return res.json(locationImage);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

shopController.updateShop = async (req, res) => {
  if (req.file === undefined) {
    var { id, name, location, image, email, phone, bank_name, acc_num } =
      req.body;
  } else {
    var { id, name, location, email, phone, bank_name, acc_num } = req.body;
    var image = req.file.filename;
  }
  try {
    const result = await Shop.update(
      id,
      name,
      location,
      image,
      email,
      phone,
      bank_name,
      acc_num
    );
    console.log(result);
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

shopController.findShop = async (req, res) => {
  const shopName = req.params.id;
  try {
    const result = await Shop.findShopByName(shopName);
    console.log(result);
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = shopController;
