import "./Home.css";
import hero from "../assets/hero.png";
function Home() {
  return (
    <div className="home">

      <section className="hero">

        <h1>💪 Muscle Factory</h1>
     <p>
          Train Smarter. Track Better. Become Stronger.
        </p>    
  <div className="hero-buttons">
          <button>🏋️ Start Workout</button>
          <button>🥗 View Diet</button>
        </div>
<img
  src={hero}
  alt="Hero"
  className="hero-image"
/>

      </section>

      <section className="features">

        <h2>Why Choose Muscle Factory?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>🏋️ Workout Tracker</h3>
            <p>Track every workout and monitor your progress.</p>
          </div>

          <div className="feature-card">
            <h3>🥗 Diet Plans</h3>
            <p>Maintain a healthy diet for better fitness.</p>
          </div>

          <div className="feature-card">
            <h3>📊 BMI Calculator</h3>
            <p>Calculate your BMI instantly.</p>
          </div>

          <div className="feature-card">
            <h3>👤 Personal Profile</h3>
            <p>Update your profile and fitness goals.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;