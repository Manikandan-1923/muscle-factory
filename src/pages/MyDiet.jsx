import { useState, useEffect } from "react";
import axios from "axios";
import "./MyDiet.css";

function MyDiet() {
  const [mealName, setMealName] = useState("");
  const [mealType, setMealType] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  const [meals, setMeals] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchMeals = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/diet", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMeals(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const handleAddMeal = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/diet",
        {
          mealName,
          mealType,
          calories,
          protein,
          carbs,
          fat,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Meal Added ✅");

      setMealName("");
      setMealType("");
      setCalories("");
      setProtein("");
      setCarbs("");
      setFat("");

      fetchMeals();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const handleEdit = (meal) => {
  setMealName(meal.mealName);
  setMealType(meal.mealType);
  setCalories(meal.calories);
  setProtein(meal.protein);
  setCarbs(meal.carbs);
  setFat(meal.fat);

  setEditingId(meal._id);
  setIsEditing(true);
};

const handleUpdateMeal = async () => {
  try {
    await axios.put(
      `http://localhost:5000/api/diet/${editingId}`,
      {
        mealName,
        mealType,
        calories,
        protein,
        carbs,
        fat,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Meal Updated Successfully ✅");

    fetchMeals();

    setMealName("");
    setMealType("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFat("");

    setEditingId(null);
    setIsEditing(false);

  } catch (err) {
    alert(err.response?.data?.message || "Update Failed");
  }
};

const handleDelete = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/diet/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Meal Deleted 🗑️");

    fetchMeals();

  } catch (err) {
    alert(err.response?.data?.message || "Delete Failed");
  }
};

  return (
    <div className="diet-container">
      <h1 className="diet-title">🥗 My Diet</h1>
<div className="diet-form">
      <input
        placeholder="Meal Name"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
      />

      <input
        placeholder="Meal Type"
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}
      />

      <input
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      <input
        placeholder="Protein"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
      />

      <input
        placeholder="Carbs"
        value={carbs}
        onChange={(e) => setCarbs(e.target.value)}
      />

      <input
        placeholder="Fat"
        value={fat}
        onChange={(e) => setFat(e.target.value)}
      />

      <button
  onClick={() => {
    if (isEditing) {
      handleUpdateMeal();
    } else {
      handleAddMeal();
    }
  }}
>
  {isEditing ? "Update Meal" : "Add Meal"}
</button>
      </div>
   <div className="diet-list">

<h2>My Meals</h2>

{meals.map((meal) => (

<div
  key={meal._id}
  className="diet-card"
>
     
          <h3>{meal.mealName}</h3>

          <p>🍽️ {meal.mealType}</p>

          <p>🔥 {meal.calories} kcal</p>

          <p>🥩 Protein : {meal.protein} g</p>

          <p>🍚 Carbs : {meal.carbs} g</p>

          <p>🥑 Fat : {meal.fat} g</p>
   <div style={{ marginTop: "15px" }}>

<button
  className="edit-btn"
  onClick={() => handleEdit(meal)}
>
  ✏️ Edit
</button>

<button
  className="delete-btn"
  onClick={() => handleDelete(meal._id)}
>
  🗑️ Delete
</button>

</div>
        </div>
      ))}

</div>

    </div>
  );
}

export default MyDiet;