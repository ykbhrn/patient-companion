import { Link } from "react-router-dom";
import { treatments } from "../treatments";

function Treatments() {
  return (
    <div>
      <h2>Treatments</h2>
      <p>Explore treatments to transform your smile.</p>

      {Object.keys(treatments).map((key) => (
        <Link key={key} to={`/treatments/${key}`}>
          {treatments[key].name}
        </Link>
      ))}
    </div>
  );
}

export default Treatments;
