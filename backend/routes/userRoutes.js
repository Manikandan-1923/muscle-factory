const express = require("express");

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

module.exports = router;