import { useParams, Link } from "react-router-dom";
import { pathContent } from "../pathContent";

function PathPage() {
  const { pathId } = useParams();
  const data = pathContent[pathId];

  if (!data) {
    return (
      <div>
        <p>Page not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

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

      <Link to="/" className="back-link">
        ← Back to home
      </Link>
    </div>
  );
}

export default PathPage;
