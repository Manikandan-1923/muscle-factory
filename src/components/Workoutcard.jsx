import "./Workoutcard.css";
function WorkoutCard(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.muscle}</p>
    </div>
  );
}

export default WorkoutCard;