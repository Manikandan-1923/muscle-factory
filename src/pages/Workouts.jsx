import WorkoutCard from "../components/WorkoutCard";
import workouts from "../data/workots";
    

function Workouts() {
  return (
    <div>
      {workouts.map((workout) => (
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
      