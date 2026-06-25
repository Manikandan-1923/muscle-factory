const express = require("express");
const { registerUser } = require("../controllers/userController");
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

module.exports = router;