import { useParams, Link } from "react-router-dom";
import { treatments } from "../treatments";

function Treatment() {
  const { treatment } = useParams();
  const data = treatments[treatment];

  if (!data) {
    return (
      <div>
        <p>Treatment not found.</p>
        <Link to="/treatments">Back to Treatments</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <Link to="/treatments">Back to Treatments</Link>
    </div>
  );
}

export default Treatment;
