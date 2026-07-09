import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("70");
  const navigate = useNavigate();

  const bmi = (
  Number(weight) /
  ((Number(height) / 100) * (Number(height) / 100))
).toFixed(2);

let bmiStatus = "";

if (bmi < 18.5) {
  bmiStatus = "Underweight";
} else if (bmi < 25) {
  bmiStatus = "Normal";
} else if (bmi < 30) {
  bmiStatus = "Overweight";
} else {
  bmiStatus = "Obese";
}

  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName(res.data.name);
      setEmail(res.data.email);
      setGoal(res.data.goal);
      setHeight(res.data.height);
      setWeight(res.data.weight);

    } catch (error) {
      console.log(error);

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  fetchProfile();
}, [navigate]);


const handleSave = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.put(
      "http://localhost:5000/api/users/profile",
      {
        name,
        email,
        goal,
        height,
        weight,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Profile Updated Successfully ✅");

    setIsEditing(false);

  } catch (error) {
    alert(error.response?.data?.message || "Update Failed");
  }
};


  const handleLogout = () => {
  localStorage.removeItem("token");

  alert("Logged Out Successfully 👋");

  navigate("/login");
};

  return (
    <div className="profile-container">

  <div className="profile-card">

  <h1>👤 My Profile</h1>

  {
    isEditing ? (
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    ) : (
      <p>
        <strong>Name:</strong> {name}
      </p>
    )
  }

  {
    isEditing ? (
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    ) : (
      <p>
        <strong>Email:</strong> {email}
      </p>
    )
  }

  {
  isEditing ? (

    <input
      type="text"
      value={goal}
      onChange={(e)=>setGoal(e.target.value)}
    />

  ) : (

    <p>
      <strong>Goal:</strong> {goal} 💪
    </p>

  )
}

  {
  isEditing ? (

    <input
      type="number"
      value={height}
      onChange={(e)=>setHeight(e.target.value)}
    />

  ) : (

    <p>
      <strong>Height:</strong> {height} cm
    </p>

  )
}

  {
  isEditing ? (

    <input
      type="number"
      value={weight}
      onChange={(e)=>setWeight(e.target.value)}
    />

  ) : (

    <p>
      <strong>Weight:</strong> {weight} kg
    </p>

  )
}

  <p><strong>BMI:</strong> {bmi}</p>
  <p><strong>Status:</strong> {bmiStatus}</p>
 <button
  onClick={() => {
    if (isEditing) {
      handleSave();
    } else {
      setIsEditing(true);
    }
  }}
>
  {isEditing ? "Save Changes" : "Edit Profile"}
</button> 
  <br /><br />

<button onClick={handleLogout}>
  Logout 
</button>

</div>

      </div>

  
  );
}

export default Profile;