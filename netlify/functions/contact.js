import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req) => {
  try {
    const { patientEmail, messages, topic } = await req.json();

    // Turn the conversation array into readable plain text
    const conversationText = messages
      .map((msg) =>
        msg.role === "user"
          ? `You asked: ${msg.content}`
          : `Reply: ${msg.content}`,
      )
      .join("\n\n");

    const result = await resend.emails.send({
      from: "Patient Companion <onboarding@resend.dev>",
      to: "reception@dentistsw4.com",
      replyTo: patientEmail,
      subject: `Patient enquiry: ${topic}`,
      text: `From: ${patientEmail}

      ${conversationText}`,
    });

    return new Response(JSON.stringify({ success: true, result }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = {
  path: "/.netlify/functions/contact",
  rateLimit: {
    windowLimit: 3,
    windowSize: 60,
    aggregateBy: ["ip", "domain"],
  },
};
