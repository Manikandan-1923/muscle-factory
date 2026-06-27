const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/musclefactory");

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;