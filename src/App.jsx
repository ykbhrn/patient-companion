import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Treatment from "./components/Treatment";
import Treatments from "./components/Treatments";
import PathPage from "./components/PathPage";
import logo from "./assets/CLDP-Logo.png";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <img
            src={logo}
            alt="Crescent Lodge Dental Practice"
            className="logo"
          />
          <div className="header-text">
            <h1 className="brand">Crescent Lodge</h1>
            <p className="brand-sub">Patient Companion</p>
          </div>
        </div>
      </header>

      <nav className="nav">
        <Link to="/new" className="nav-link">
          New Patient
        </Link>
        <Link to="/treatments" className="nav-link">
          Treatments
        </Link>
        <Link to="/nervous" className="nav-link">
          Feeling Nervous
        </Link>
      </nav>

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<p>Choose an option above to get started.</p>}
          />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/:treatment" element={<Treatment />} />
          <Route path="/:pathId" element={<PathPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
