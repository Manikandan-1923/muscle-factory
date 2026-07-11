require("dotenv").config();

const workoutRoutes = require("./routes/workoutRoutes");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");



const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.send("Muscle Factory Backend Running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});