import { useParams, Link } from "react-router-dom";
import { treatments } from "../treatments";
import AskBox from "./AskBox";

function Treatment() {
  const { treatment } = useParams();
  const data = treatments[treatment];

  if (!data) {
    return (
      <div className="page">
        <h2>{data.name}</h2>
        <p className="tagline">{data.tagline}</p>

        {data.sections.map((section) => (
          <div key={section.heading} className="section">
            <h3>{section.heading}</h3>
            <p>{section.body}</p>
          </div>
        ))}

        <AskBox
          topic={data.name}
          context={`${data.name}: ${data.tagline} ${data.sections.map((s) => s.heading + " - " + s.body).join(" ")}`}
        />

        <Link to="/treatments" className="back-link">
          ← Back to treatments
        </Link>
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
