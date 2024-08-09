const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const involvementController = require("../controllers/involvementController");

const router = express.Router();
router.get("/all-involvement", involvementController.getAllInvolvement);
router.post(
  "/post-involvement",
  upload.single("image"),
  involvementController.postInvolvement
);
// router.get("get-involvement/:id", findInvovement);
// router.post("update-involvement", updateInvolvement);

module.exports = router;
