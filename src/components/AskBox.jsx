import { useState } from "react";

function AskBox({ topic, context }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    // Add the patient's question to the conversation
    const newMessages = [...messages, { role: "user", content: question }];
    setMessages(newMessages);
    setQuestion(""); // clear the input
    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, context }),
      });

      const data = await response.json();

      // Add the AI's reply to the conversation
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.answer },
      ]);
    } catch (err) {
      console.log(err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="askbox">
      <p className="askbox-label">Have a question about {topic}?</p>

      {messages.length > 0 && (
        <div className="askbox-conversation">
          {messages.map((msg, index) => (
            <p
              key={index}
              className={msg.role === "user" ? "askbox-user" : "askbox-answer"}
            >
              {msg.content}
            </p>
          ))}
        </div>
      )}

      {loading && <p className="askbox-loading">Thinking…</p>}

      <div className="askbox-input-row">
        <input
          className="askbox-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask here..."
          onKeyDown={(e) => e.key === "Enter" && handleAsk()}
        />
        <button className="askbox-btn" onClick={handleAsk} disabled={loading}>
          {loading ? "..." : "Ask"}
        </button>
      </div>
    </div>
  );
}

export default AskBox;
