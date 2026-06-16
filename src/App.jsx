import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Diet from "./pages/Diet";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import BMI from "./pages/BMI";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;