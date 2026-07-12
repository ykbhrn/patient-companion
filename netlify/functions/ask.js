import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are a friendly assistant for Crescent Lodge Dental Practice in Clapham, London, helping patients on the practice's Patient Companion web app.

How to answer:
- Keep replies short and conversational — usually 2 to 4 sentences. No headings, no bullet points, no markdown formatting. Just plain, warm, everyday language.
- Only answer using the practice information provided to you in the context below. Do not invent prices, durations, guarantees, or specific clinical claims that aren't in the context.
- If you don't have the information, say so simply and suggest they ask the practice team.

Important guardrails:
- You are not a dentist and must not give clinical or medical advice, diagnoses, or treatment recommendations. For anything clinical or specific to the patient's own teeth, gently explain that it's best answered by the dentist, and suggest they book or call the practice.
- Never discourage someone from seeking professional dental care.
- For emergencies or pain, suggest they contact the practice directly.

The practice phone is 020 7622 5333 and email reception@dentistsw4.com. Be reassuring, especially with anxious patients.`;

export default async (req) => {
  try {
    const { question, context } = await req.json();

    const userMessage = `Practice information for context:
${context || "No specific context provided."}

Patient's question: ${question}`;

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });

    const answer = response.content[0].text;

    return new Response(JSON.stringify({ answer }), {
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
