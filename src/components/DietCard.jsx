function DietCard({ name, calories }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{calories} Calories</p>
    </div>
  );
}

export default DietCard;