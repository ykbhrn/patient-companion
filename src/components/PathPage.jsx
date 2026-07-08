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
    <div>
      <h2>{data.name}</h2>
      <p>{data.tagline}</p>

      {data.sections.map((section) => (
        <div key={section.heading}>
          <h3>{section.heading}</h3>
          <p>{section.body}</p>
        </div>
      ))}

      <Link to="/">Back to home</Link>
    </div>
  );
}

export default PathPage;
