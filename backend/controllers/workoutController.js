const Workout = require("../models/Workout");

// Add Workout
const addWorkout = async (req, res) => {
  try {
    const {
      exerciseName,
      muscleGroup,
      sets,
      reps,
      duration,
    } = req.body;

    const workout = await Workout.create({
      user: req.user.id,
      exerciseName,
      muscleGroup,
      sets,
      reps,
      duration,
    });

    res.status(201).json({
      message: "Workout Added Successfully 💪",
      workout,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(workouts);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({
        message: "Workout not found",
      });
    }

    // Security Check
    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    workout.exerciseName = req.body.exerciseName || workout.exerciseName;
    workout.muscleGroup = req.body.muscleGroup || workout.muscleGroup;
    workout.sets = req.body.sets || workout.sets;
    workout.reps = req.body.reps || workout.reps;
    workout.duration = req.body.duration || workout.duration;

    const updatedWorkout = await workout.save();

    res.status(200).json({
      message: "Workout Updated Successfully ✅",
      workout: updatedWorkout,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({
        message: "Workout not found",
      });
    }

    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    await workout.deleteOne();

    res.status(200).json({
      message: "Workout Deleted Successfully 🗑️",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
};