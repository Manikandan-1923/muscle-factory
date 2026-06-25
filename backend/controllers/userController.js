const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, goal } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      goal,
    });

    res.status(201).json({
      message: "User Registered Successfully ✅",
      user,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
};