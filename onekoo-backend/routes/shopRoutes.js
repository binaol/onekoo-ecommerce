const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();
const shopController = require("../controllers/shopController");

router.post("/create-shop", upload.single("image"), shopController.createShop);
router.post("/update-shop", upload.single("image"), shopController.updateShop);
router.get("/get-shop-img/:id", shopController.getLocationImage);
router.get("/find-shop/:id", shopController.findShop);
router.get("/all-shops", shopController.getAllShops);
module.exports = router;
