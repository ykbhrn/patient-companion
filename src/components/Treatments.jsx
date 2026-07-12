import { Link } from "react-router-dom";
import { treatments } from "../treatments";

function Treatments() {
  // Build a list of the unique category names from the treatments data
  const categories = [
    ...new Set(Object.values(treatments).map((t) => t.category)),
  ];

  return (
    <div className="page">
      <h2>Treatments</h2>
      <p className="tagline">Explore the treatments we offer.</p>

      {categories.map((category) => (
        <div key={category} className="category">
          <h3 className="category-title">{category}</h3>
          <div className="card-grid">
            {Object.keys(treatments)
              .filter((key) => treatments[key].category === category)
              .map((key) => (
                <Link key={key} to={`/treatments/${key}`} className="card">
                  <span className="card-name">{treatments[key].name}</span>
                  <span className="card-tagline">
                    {treatments[key].tagline}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Treatments;
