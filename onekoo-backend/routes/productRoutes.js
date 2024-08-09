const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const Auths = require("../middleware/authMiddleware");
const productController = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/get-all", Auths.authMiddleware, productController.getProducts);
router.get("/get-product/:id", productController.getSingleProduct);
router.post(
  "/",
  Auths.authMiddleware,
  upload.single("image"),
  productController.createProduct
);
router.post(
  "/create-product-admin",
  upload.single("image"),
  productController.createProductAdmin
);

router.post(
  "/update-product",
  upload.single("image"),
  productController.updateProduct
);

module.exports = router;
