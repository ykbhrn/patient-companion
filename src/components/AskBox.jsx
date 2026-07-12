import { useState } from "react";

function AskBox({ topic, context }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return; // ignore empty questions

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/.netlify/functions/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, context }),
      });

      const data = await response.json();
      setAnswer(data.answer);
    } catch (err) {
      console.log(err);
      setAnswer("Sorry, something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="askbox">
      <p className="askbox-label">Have a question about {topic}?</p>

      <div className="askbox-input-row">
        <input
          className="askbox-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask here..."
        />
        <button className="askbox-btn" onClick={handleAsk} disabled={loading}>
          {loading ? "..." : "Ask"}
        </button>
      </div>

      {answer && <p className="askbox-answer">{answer}</p>}
    </div>
  );
}

export default AskBox;
