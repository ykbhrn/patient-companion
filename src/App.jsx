import { Routes, Route, Link } from "react-router-dom";
import PathContent from "./components/PathContent";
import Treatment from "./components/Treatment";
import Treatments from "./components/Treatments";

function App() {
  return (
    <div>
      <h1>Patient Companion</h1>
      <p>Welcome to Crescent Lodge Dental Practice</p>

      <nav>
        <Link to="/new">New Patient</Link>
        <Link to="/nervous">Feeling Nervous</Link>
        <Link to="/treatments">Treatments</Link>
      </nav>

      <Routes>
        <Route
          path="/new"
          element={
            <PathContent
              title="New Patient"
              description="Everything you need to know before your first visit."
            />
          }
        />
        <Route
          path="/nervous"
          element={
            <PathContent
              title="Feeling Nervous"
              description="We're here to make your visit calm and comfortable."
            />
          }
        />
        <Route path="/treatments" element={<Treatments />} />

        <Route path="/treatments/:treatment" element={<Treatment />} />

        <Route
          path="/"
          element={<p>Choose an option above to get started.</p>}
        />
      </Routes>
    </div>
  );
}

export default App;
