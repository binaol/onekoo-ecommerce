const Involvement = require("../models/Involvement");
const involvementController = {};

involvementController.postInvolvement = async (req, res) => {
  const { title, descripiton } = req.body;
  const image = req.file.filename;
  try {
    const result = await Involvement.findByTitle(title);
    if (result) return res.status(400).json({ msg: "Title already exists" });

    const result2 = await Involvement.create(image, title, descripiton);
    console.log(result2);
    return res.json(result2);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

involvementController.getAllInvolvement = async (req, res) => {
  try {
    const result = await Involvement.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = involvementController;
