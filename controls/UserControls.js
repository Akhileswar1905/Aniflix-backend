const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

const SignUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

module.exports = { SignUp };
