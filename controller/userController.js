const user = require("../models/user");

const create = async (req, res) => {
  console.log(req.body);
  try {
    const userData = new user(req.body);
    if (!userData) {
      return res.status(404).json({
        message: "data not found",
      });
    }
    const savedData = await userData.save();
    res.status(201).json({ message: "User Created Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err: err,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const userData = await user.find();
    if (!userData) {
      return res.status(404).json({
        message: "data not found",
      });
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({
      err: err,
    });
  }
};

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await user.findById(id);
    if (!userExist) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    res.status(200).json(userExist);
  } catch (err) {
    res.status(500).json({
      err: err,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await user.findById(id);
    if (!userExist) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    const updatedData = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "User Updated Successfully" });
    console.log(updatedData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err: err,
    });
  }
};

const deleteUSer = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await user.findById(id);
    if (!userExist) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    await user.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err: err,
    });
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  deleteUSer,
};
