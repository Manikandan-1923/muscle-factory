import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        💪 Muscle Factory
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
<NavLink to="/dashboard">Dashboard</NavLink>

<NavLink to="/workouts">Workouts</NavLink>

<NavLink to="/diet">Diet Guide</NavLink>

<NavLink to="/my-diet">My Diet</NavLink>

<NavLink to="/bmi">BMI</NavLink>

<NavLink to="/profile">Profile</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;