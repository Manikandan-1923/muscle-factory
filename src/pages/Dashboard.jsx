import { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
    const [profile, setProfile] = useState({});
    const [workouts, setWorkouts] = useState([]);
 
    useEffect(() => {
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const profileRes = await axios.get(
        "http://localhost:5000/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const workoutRes = await axios.get(
        "http://localhost:5000/api/workouts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProfile(profileRes.data);
      setWorkouts(workoutRes.data);

    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);
const totalWorkouts = workouts.length;

const totalDuration = workouts.reduce(
  (sum, workout) => sum + workout.duration,
  0
);

const calories = totalDuration * 8;

const bmi =
  profile.height && profile.weight
    ? (
        profile.weight /
        ((profile.height / 100) * (profile.height / 100))
      ).toFixed(2)
    : 0;
    return (
    <div className="dashboard">
      <h2 style={{ textAlign: "center", color: "white" }}>
  👋 Welcome {profile.name}
</h2>
      <h1>📊 Dashboard</h1>

      <div className="stats">

        <div className="card">
          <h2>🏋️</h2>
          <h3>Total Workouts</h3>
          <p>{totalWorkouts}</p>
        </div>

        <div className="card">
          <h2>🔥</h2>
          <h3>Calories</h3>
          <p>{calories} kcal</p>
        </div>

        <div className="card">
          <h2>📊</h2>
          <h3>BMI</h3>
          <p>{bmi}</p>
        </div>

      </div>
    <h2 style={{ color: "orange", marginTop: "40px" }}>
  Recent Workouts
</h2>

{workouts.slice(0, 3).map((workout) => (
  <div className="workout-card" key={workout._id}>
    <h3>{workout.exerciseName}</h3>

    <p>💪 {workout.muscleGroup}</p>

    <p>
      {workout.sets} Sets × {workout.reps} Reps
    </p>

    <p>⏱️ {workout.duration} mins</p>
  </div>
))}
    </div>
  );
}

export default Dashboard;