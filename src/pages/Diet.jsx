import { useState, useEffect } from "react";
import axios from "axios";

function Diet() {
  const [mealName, setMealName] = useState("");
  const [mealType, setMealType] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto" }}>
      <h1>🥗 Diet Tracker</h1>

      <input
        type="text"
        placeholder="Meal Name"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Meal Type"
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Protein"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Carbs"
        value={carbs}
        onChange={(e) => setCarbs(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Fat"
        value={fat}
        onChange={(e) => setFat(e.target.value)}
      />

      <br /><br />

      <button>Add Meal</button>
    </div>
  );
}

export default Diet;