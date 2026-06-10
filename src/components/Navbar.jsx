import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <h2 className="logo">💪 Muscle Factory</h2>
    <div className="nav-links">
      <Link to="/">Home</Link> |{" "}
      <Link to="/workouts">Workouts</Link> |{" "}
      <Link to="/diet">Diet</Link> |{" "}
      <Link to="/profile">Profile</Link>
   </div>
    </nav>
  );
}

export default Navbar;