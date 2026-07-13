import { useState , useEffect} from "react";
import axios from "axios";

function Workouts() {
  const [exerciseName, setExerciseName] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [duration, setDuration] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
const [editingId, setEditingId] = useState(null);



const fetchWorkouts = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:5000/api/workouts",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setWorkouts(res.data);

  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/workouts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Workout Deleted 🗑️");

    fetchWorkouts();

  } catch (error) {
    alert(error.response?.data?.message || "Delete Failed");
  }
};

const handleEdit = (workout) => {
  setExerciseName(workout.exerciseName);
  setMuscleGroup(workout.muscleGroup);
  setSets(workout.sets);
  setReps(workout.reps);
  setDuration(workout.duration);

  setEditingId(workout._id);
  setIsEditing(true);
};

const handleUpdateWorkout = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:5000/api/workouts/${editingId}`,
      {
        exerciseName,
        muscleGroup,
        sets,
        reps,
        duration,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Workout Updated Successfully ✅");

    fetchWorkouts();

    setExerciseName("");
    setMuscleGroup("");
    setSets("");
    setReps("");
    setDuration("");

    setEditingId(null);
    setIsEditing(false);

  } catch (error) {
    alert(error.response?.data?.message || "Update Failed");
  }
};

  const handleAddWorkout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/workouts",
        {
          exerciseName,
          muscleGroup,
          sets,
          reps,
          duration,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Workout Added Successfully 💪");
      
      fetchWorkouts();

      setExerciseName("");
      setMuscleGroup("");
      setSets("");
      setReps("");
      setDuration("");

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <h1>🏋️ Workouts</h1>

      <input
        type="text"
        placeholder="Exercise Name"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Muscle Group"
        value={muscleGroup}
        onChange={(e) => setMuscleGroup(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <br /><br />

      <button
  onClick={() => {
    if (isEditing) {
      handleUpdateWorkout();
    } else {
      handleAddWorkout();
    }
  }}
>
  {isEditing ? "Update Workout" : "Add Workout"}
</button>

    <hr />

<h2>My Workouts</h2>

{workouts.map((workout) => (
  <div
    key={workout._id}
    style={{
      border: "1px solid white",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "10px",
    }}
  >
    <h3>{workout.exerciseName}</h3>

    <p>💪 {workout.muscleGroup}</p>

    <p>
      {workout.sets} Sets × {workout.reps} Reps
    </p>

    <p>⏱️ {workout.duration} mins</p>

   
<div style={{ marginTop: "10px" }}>
  <button
    onClick={() => handleEdit(workout)}
    style={{ marginRight: "10px" }}
  >
    ✏️ Edit
  </button>

  <button onClick={() => handleDelete(workout._id)}>
    🗑️ Delete
  </button>
</div>
  </div>
))}  


    </div>
  );
}

export default Workouts;