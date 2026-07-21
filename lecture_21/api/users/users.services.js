const Users = require("../../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const getUsers = async (req, res) => {
  const users = await Users.find().select("-password");
  res.json({ message: "users", data: users });
};
const getUsersById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "id is not valid", data: null });
  }
  const user = await Users.findById(id).select("-password");
  if (!user) {
    return res.status(400).json({ message: "id not found", data: null });
  }
  res.json({ message: "user info", data: user });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "id is not valid", data: null });
  }
  const deletedUser = await Users.findByIdAndDelete(id);
  if (!deletedUser) {
    return res.status(400).json({ message: "id not found", data: null });
  }
  res.json({ message: "user deleted successfully", data: deletedUser });
};
const updatedUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "id is not valid", data: null });
  }
  const updateData = { name, email };

  if (password) {
    const hashed = await bcrypt.hash(password, 10);
    updateData.password = hashed;
  }
  const updatedUser = await Users.findByIdAndUpdate(id, updateData, {
    new: true,
  }).select("-password");
      if (!updatedUser) {
      return res.status(404).json({ message: "User not found", data: null });
    }

 res.json({ message: "user updated successfully", data: updatedUser });
 
};

module.exports = { getUsers, getUsersById, deleteUser, updatedUser };
