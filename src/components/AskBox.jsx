import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function AskBox({
  topic,
  context,
  suggestions = [
    "How much does it cost?",
    "Does it hurt?",
    "How long does it take?",
  ],
}) {
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

  const handleAsk = async (presetQuestion) => {
    const q = presetQuestion || question;
    if (!q.trim()) return;

    const newMessages = [...messages, { role: "user", content: q }];
    setMessages(newMessages);
    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, context }),
      });

      if (response.status === 429) {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content:
              "You've asked a few questions in quick succession. Please wait a moment and try again, or call us on 020 7622 5333.",
          },
        ]);
        setLoading(false);
        return;
      }

      const data = await response.json();

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

  return createPortal(
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
            {loading && (
              <div className="askbox-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          {messages.length === 0 && !loading && (
            <div className="askbox-suggestions">
              {suggestions.map((s) => (
                <button
                  key={s}
                  className="askbox-suggestion"
                  onClick={() => handleAsk(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {messages.length > 0 && !sent && (
            <div className="askbox-contact">
              {!showContactForm ? (
                <button
                  className="askbox-contact-btn"
                  onClick={() => setShowContactForm(true)}
                >
                  Contact the team about this
                </button>
              ) : (
                <>
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
                  <button
                    className="askbox-contact-cancel"
                    onClick={() => setShowContactForm(false)}
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          )}

          {sent && (
            <p className="askbox-sent">
              ✓ Sent! The team will reply to your email soon.
            </p>
          )}

          <div ref={bottomRef} />
        </div>
      )}

      {!showContactForm && (
        <div className="askbox-input-row">
          <input
            className="askbox-input"
            value={question}
            onFocus={() => setOpen(true)}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={`Ask about ${topic}...`}
            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
          />
          <button
            className="askbox-btn askbox-send"
            onClick={() => handleAsk()}
            disabled={loading}
          >
            {loading ? (
              "..."
            ) : (
              <>
                <span className="btn-text">Ask</span>
                <span className="btn-arrow">→</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>,
    document.body,
  );
}

export default AskBox;
