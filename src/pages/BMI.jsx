import { useState } from "react";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {
    const h = height / 100;
    const result = weight / (h * h);

    setBmi(result.toFixed(2));
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

      <h2>Your BMI: {bmi}</h2>
    </div>
  );
}

export default BMI;