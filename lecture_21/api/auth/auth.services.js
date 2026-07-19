const Users = require("../../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "name ,email,password are required filds" });
  }
  const user = await Users.findOne({ email: email });
  if (user) {
    return res
      .status(400)
      .json({ message: "user with this email already exists" });
  }
  hashedpass = await bcrypt.hash(password, 10);
  const newUser = await Users.create({ name, email, password: hashedpass });
  res.json({ message: "user created successfully", data: newUser });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email | !password) {
    return res
      .status(400)
      .json({ message: "email and password are required fields!" });
  }
  const user = await Users.findOne({ email: email });
  if (!user)
    return res.status(400).json({ message: "user  not found" });
  const isEquale = await bcrypt.compare(password, user.password);
  if (!isEquale)
    return res.status(400).json({ message: "inccorect credintiales" });
  const payload = { id: user._id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ message: "login successfully", Token: token });
};
module.exports={createUser,login};