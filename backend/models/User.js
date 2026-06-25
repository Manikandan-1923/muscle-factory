const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  goal: {
    type: String,
    default: "Muscle Gain",
  },

});

module.exports = mongoose.model("User", userSchema);