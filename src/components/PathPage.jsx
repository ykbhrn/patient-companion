import { useParams, Link } from "react-router-dom";
import { pathContent } from "../pathContent";
import AskBox from "./AskBox";

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

      <AskBox
        topic={data.name}
        context={`${data.name}: ${data.tagline} ${data.sections
          .map((s) => s.heading + " - " + s.body)
          .join(" ")}`}
        suggestions={
          pathId === "nervous"
            ? ["What if I panic?", "Can I have sedation?", "Can I visit first?"]
            : [
                "What should I bring?",
                "Where do I park?",
                "What happens first?",
              ]
        }
      />

      <Link to="/" className="back-link">
        ← Back to home
      </Link>
    </div>
  );
}

export default PathPage;
