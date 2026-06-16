import { useState } from "react";
import WorkoutCard from "../components/WorkoutCard";
import workouts from "../data/workouts";
import "./Workouts.css";

function Workouts() {
  const [search, setSearch] = useState("");

  const filteredWorkouts = workouts.filter((workout) =>
    workout.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="workouts-container">
      <input className="search"
        type="text"
        placeholder="Search workout..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredWorkouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          title={workout.title}
          muscle={workout.muscle}
        />
      ))}
    </div>
  );
}

export default Workouts;