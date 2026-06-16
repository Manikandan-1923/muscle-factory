import {useState} from "react";
import "./Profile.css";

function Profile() {

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("Manikandan");
  const [email, setEmail] = useState("maniathitiyanz@gmail.com");
  const [goal, setGoal] = useState("Muscle Gain");
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("70");

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

</div>

      </div>

  
  );
}

export default Profile;