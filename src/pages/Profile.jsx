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

  <p><strong>BMI:</strong> 24.22</p>

  <button onClick={() => setIsEditing(!isEditing)}>
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