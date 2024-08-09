const Achievement = require("../models/Achievement");
const achievementController = {};

achievementController.postAchievement = async (req, res) => {
  const { title, descripiton } = req.body;
  const image = req.file.filename;
  try {
    const result = await Achievement.findByTitle(title);
    if (result) return res.status(400).json({ msg: "Title already exists" });

    // fkj;lakj;laksjfafk
    // sdlkfj;lkds
    // afk;lakjdfa
    // slkfjls
    // sflksjfk

    const result2 = await Achievement.create(image, title, descripiton);
    console.log(result2);
    return res.json(result2);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

achievementController.getAllAchievement = async (req, res) => {
  try {
    const result = await Achievement.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = achievementController;
