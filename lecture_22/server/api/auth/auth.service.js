const User = require("../../models/userModel");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sign_up = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "name,email,password are required fields" });
  }
  const existinguser = await User.findOne({ email: email });
  if (existinguser) {
    return res
      .status(400)
      .json({ message: "user with this email already registered" });
  }
  const hashedPass = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashedPass });
  res.json({ message: "user registeredsuccessfully", data: newUser });
};
const sign_in = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "email and password are required fields!" });
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "user with this email not found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "credentials incorrect!" });
  }
  const payload = { userId: user._id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ message: "login successfully", token: token });
};

module.exports={sign_up,sign_in}