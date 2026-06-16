import DietCard from "../components/DietCard";
import diets from "../data/diets";

function Diet() {
  return (
    <div>
      {diets.map((diet) => (
        <DietCard
          key={diet.id}
          name={diet.name}
          calories={diet.calories}
        />
      ))}
    </div>
  );
}

export default Diet;