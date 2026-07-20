const express = require("express");
const protect = require("../middleware/authMiddleware");

const {
  addMeal,
  getMeals,
  updateMeal,
  deleteMeal,
} = require("../controllers/dietController");

const router = express.Router();

router.get("/", protect, getMeals);

router.post("/", protect, addMeal);

router.put("/:id", protect, updateMeal);

router.delete("/:id", protect, deleteMeal);

module.exports = router;
