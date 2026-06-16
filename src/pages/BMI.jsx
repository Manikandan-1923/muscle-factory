import { useState } from "react";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const calculateBMI = () => {

    if (!height || !weight) {
      setBmi("");
      setCategory("");
  alert("Please enter height and weight");
  return;
}
    const h = height / 100;
    const result = weight / (h * h);

    setBmi(result.toFixed(2));
    
    if (result < 18.5) {
      setCategory("Underweight");
    } else if (result < 25) {
      setCategory("Normal weight");
    } else if (result < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>BMI Calculator 💪</h1>

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateBMI}>
        Calculate BMI
      </button>

      {bmi && (
        <h2>Your BMI: {bmi}</h2>
      )}

{category && (
  <h3 style={{color:category ==="Normal" ? "lime"
  : category === "Underweight" ? "orange"
  : category === "Overweight" ? "red"
  : category === "Obese" ? "darkred" : "black"
  }}>Category: {category}</h3>
)}
    </div>
  );
}

export default BMI;