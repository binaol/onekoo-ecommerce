const Category = require("../models/Category");

const categoryController = {};

categoryController.getAllCategories = async (req, res) => {
  try {
    const result = await Category.getAll();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

categoryController.getSingleCategory = async (req, res) => {
  const name = req.params.id;
  try {
    const result = await Category.getCategory(name);
    console.log(result);
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

categoryController.createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const result = await Category.create(name, description);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status.json(error);
  }
};

categoryController.updateCategory = async (req, res) => {
  const { id, name, description } = req.body;
  console.log(id, name, description);
  try {
    const result = await Category.update(id, name, description);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

categoryController.deleteCategory = async (req, res) => {
  const categoryId = req.params.id;
  try {
    const result = await Category.delete(categoryId);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = categoryController;
