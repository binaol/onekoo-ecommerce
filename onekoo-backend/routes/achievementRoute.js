// import express from "express";
const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const achievementController = require("../controllers/achievementController");

const router = express.Router();

router.get("/get-achievements", achievementController.getAllAchievement);
router.post(
  "/post-achievement",
  upload.single("image"),
  achievementController.postAchievement
);
// router.get("get-achievement/:id", findAchievement);
// router.post("update-achievement", updateAchievement);

module.exports = router;
