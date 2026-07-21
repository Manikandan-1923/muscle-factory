import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Diet from "./pages/Diet";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import BMI from "./pages/BMI";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import MyDiet from "./pages/MyDiet";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/bmi" element={<BMI />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/my-diet" element={<MyDiet />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;