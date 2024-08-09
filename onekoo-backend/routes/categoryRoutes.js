const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/all-category", categoryController.getAllCategories);
router.get("/get-category/:id", categoryController.getSingleCategory);
router.post("/create-category", categoryController.createCategory);
router.post("/update-category", categoryController.updateCategory);
router.delete("/delete-category/:id", categoryController.deleteCategory);

module.exports = router;
