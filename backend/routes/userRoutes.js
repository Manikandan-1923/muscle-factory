const express = require("express");
const protect = require("../middleware/authMiddleware");
const { registerUser, loginUser, getProfile, updateProfile } = require("../controllers/userController");
const router = express.Router();

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.get("/", (req, res) => {

  res.json([
    {
      name: "Manikandan",
      goal: "Muscle Gain",
    },

    {
      name: "Arun",
      goal: "Weight Loss",
    },
  ]);

});

router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;