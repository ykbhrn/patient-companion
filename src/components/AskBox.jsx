import { useState, useRef, useEffect } from "react";

function AskBox({ topic, context }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [patientEmail, setPatientEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleContact = async () => {
    if (!patientEmail.trim() || !patientEmail.includes("@")) return;

    setSending(true);

    try {
      await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patientEmail, messages, topic }),
      });
      setSent(true);
    } catch (err) {
      console.log(err);
    }

    setSending(false);
  };

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

  {
    messages.length > 0 && !sent && (
      <div className="askbox-contact">
        {!showContactForm ? (
          <button
            className="askbox-contact-btn"
            onClick={() => setShowContactForm(true)}
          >
            Contact the team about this
          </button>
        ) : (
          <div className="askbox-contact-form">
            <input
              className="askbox-input"
              type="email"
              placeholder="Your email address"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
            />
            <button
              className="askbox-btn"
              onClick={handleContact}
              disabled={sending}
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </div>
        )}
      </div>
    );
  }

  {
    sent && (
      <p className="askbox-sent">
        ✓ Sent! The team will reply to your email soon.
      </p>
    );
  }

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
