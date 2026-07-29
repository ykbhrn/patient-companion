import { Link } from "react-router-dom";

const paths = [
  {
    to: "/new",
    title: "New Patient",
    description:
      "What to expect at your first visit, what to bring, and how to find us.",
  },
  {
    to: "/treatments",
    title: "Treatments",
    description:
      "Explore our treatments, what's involved, and what to expect afterwards.",
  },
  {
    to: "/nervous",
    title: "Feeling Nervous",
    description:
      "How we help anxious patients feel calm, comfortable and in control.",
  },
];

function Home() {
  return (
    <div className="page home">
      <h2 className="home-welcome">Welcome to Crescent Lodge</h2>
      <p className="home-intro">
        Your companion for everything before, during and after your visit.
        Choose where you'd like to start.
      </p>

      <div className="home-cards">
        {paths.map((path) => (
          <Link key={path.to} to={path.to} className="home-card">
            <span className="home-card-title">{path.title}</span>
            <span className="home-card-desc">{path.description}</span>
            <span className="home-card-arrow">→</span>
          </Link>
        ))}
      </div>

      <div className="home-hint">
        <strong>Have a question?</strong> Ask it in the bar at the bottom of any
        page and you'll get an answer straight away.
      </div>
    </div>
  );
}

export default Home;
