const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();

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