const Diet = require("../models/Diet");

// Add Meal
const addMeal = async (req, res) => {
  try {
    const meal = await Diet.create({
      user: req.user.id,
      ...req.body,
    });

    res.status(201).json({
      message: "Meal Added Successfully 🥗",
      meal,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Meals
const getMeals = async (req, res) => {
  try {
    const meals = await Diet.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(meals);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Meal
const updateMeal = async (req, res) => {
  try {
    const meal = await Diet.findById(req.params.id);

    if (!meal)
      return res.status(404).json({
        message: "Meal not found",
      });

    if (meal.user.toString() !== req.user.id)
      return res.status(401).json({
        message: "Unauthorized",
      });

    Object.assign(meal, req.body);

    await meal.save();

    res.json({
      message: "Meal Updated ✅",
      meal,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Meal
const deleteMeal = async (req, res) => {
  try {
    const meal = await Diet.findById(req.params.id);

    if (!meal)
      return res.status(404).json({
        message: "Meal not found",
      });

    if (meal.user.toString() !== req.user.id)
      return res.status(401).json({
        message: "Unauthorized",
      });

    await meal.deleteOne();

    res.json({
      message: "Meal Deleted 🗑️",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addMeal,
  getMeals,
  updateMeal,
  deleteMeal,
};