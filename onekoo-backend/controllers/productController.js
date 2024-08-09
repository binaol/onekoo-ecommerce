const Product = require("../models/Product");

const productController = {};

productController.getProducts = async (req, res) => {
  const products = await Product.getAll();
  res.json({ user: req.user, products: products });
};

productController.getSingleProduct = async (req, res) => {
  const productName = req.params.id;
  try {
    const product = await Product.getProduct(productName);
    console.log(product);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

productController.createProduct = async (req, res) => {
  const { name, description, price, categoryId } = req.body;
  const image = req.file.filename;
  await Product.create(name, description, price, categoryId, image);
  res.json({ msg: "Product created" });
};

productController.createProductAdmin = async (req, res) => {
  const { name, description, price, categoryId, quality, location, shopId } =
    req.body;
  const image = req.file.filename;
  try {
    const result = await Product.create(
      name,
      description,
      price,
      categoryId,
      image,
      quality,
      location,
      shopId
    );
    console.log(result);
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

productController.updateProduct = async (req, res) => {
  console.log(req.file === undefined);
  if (req.file === undefined) {
    console.log("start here");
    var {
      id,
      name,
      description,
      price,
      categoryId,
      image,
      quality,
      location,
      shopId,
    } = req.body;
  } else {
    console.log("start here");
    var {
      id,
      name,
      description,
      price,
      categoryId,
      quality,
      location,
      shopId,
    } = req.body;
    var image = req.file.filename;
  }
  try {
    const result = await Product.update(
      id,
      name,
      description,
      price,
      categoryId,
      image,
      quality,
      location,
      shopId
    );
    console.log(result);
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = productController;
