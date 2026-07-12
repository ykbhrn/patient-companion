import { useState, useRef, useEffect } from "react";

function AskBox({ topic, context }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

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
    <div className={`askbox-dock ${open ? "open" : ""}`}>
      {open && (
        <div className="askbox-panel">
          <div className="askbox-panel-header">
            <span className="askbox-label">Ask about {topic}</span>
            <button className="askbox-close" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="askbox-conversation">
            {messages.map((msg, index) => (
              <p
                key={index}
                className={
                  msg.role === "user" ? "askbox-user" : "askbox-answer"
                }
              >
                {msg.content}
              </p>
            ))}
            {loading && <p className="askbox-loading">Thinking…</p>}
            <div ref={bottomRef} />
          </div>
        </div>
      )}

      <div className="askbox-input-row">
        <input
          className="askbox-input"
          value={question}
          onFocus={() => setOpen(true)}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={`Ask about ${topic}...`}
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
