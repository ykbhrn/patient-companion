// Content for the "New Patient" and "Feeling Nervous" paths.
// Grounded in Crescent Lodge Dental Practice's own website content.
// Same `sections` shape as treatments.js so the same page component can render it,
// and so individual sections can later be used as context for the AI assistant.

export const pathContent = {
  new: {
    name: "New Patient",
    tagline:
      "Everything you need to know before your first visit to Crescent Lodge.",
    sections: [
      {
        heading: "A warm welcome",
        body: "Crescent Lodge has been part of the Clapham Common community for over 50 years and is one of the larger dental practices in London. Our friendly team looks after everyone from adults and children to nervous patients, and we work hard to make you feel comfortable from the moment you arrive.",
      },
      {
        heading: "Your first appointment",
        body: "We book new patients in for a relaxed 30 to 40 minute session. It's a chance for us to get to know you and to get up to speed with your mouth, teeth and gums. Your dentist will discuss anything you'd like to raise and talk through any treatment options with you — there's no rush.",
      },
      {
        heading: "New patient combo pack",
        body: "For new patients we offer a combined check-up and hygiene appointment for £150, a simple way to get a full picture of your dental health and a fresh clean in one visit. Ask our reception team for details.",
      },
      {
        heading: "What to bring",
        body: "Please bring a list of any medications you take and details of any medical conditions, along with your contact details. If you've had dental treatment elsewhere recently, any information you can share about it is helpful. Try to arrive a few minutes early so we can complete your medical history form.",
      },
      {
        heading: "Finding us",
        body: "We're at 28 Clapham Common South Side, London SW4 9BN. The practice is clean, bright and welcoming, with the latest technology. Opening hours are Monday to Friday 8am to 8pm and Saturday 9am to 5pm.",
      },
      {
        heading: "Booking and questions",
        body: "To book or ask anything before your visit, call our friendly team on 020 7622 5333 or email reception@dentistsw4.com. We're always happy to help you feel prepared for your first appointment.",
      },
    ],
  },

  nervous: {
    name: "Feeling Nervous",
    tagline: "You're not alone, and we're here to help you feel at ease.",
    sections: [
      {
        heading: "You're in good company",
        body: "Feeling anxious about the dentist is very common — around 1 in 4 people in the UK feel nervous about visiting, and many avoid appointments as a result. Please know there's no judgement here. Our team is known for the extra care we give nervous patients, and many of our patients tell us how grateful they are for it.",
      },
      {
        heading: "Come and look around first",
        body: "If it helps, you're welcome to visit the practice before your appointment to look around and meet the team. Getting familiar with the environment and seeing a few friendly faces beforehand can make a real difference. Many of our team have been here for years, so you'll often see the same familiar faces at every visit.",
      },
      {
        heading: "We go at your pace",
        body: "Your first appointment is often simply a chance for us to get to know you and for you to share any fears you have. Your dentist will discuss any concerns and answer your questions before any treatment begins. Appointments are never rushed, and anything we do is taken only at a speed you're comfortable with.",
      },
      {
        heading: "A stop word, whenever you need it",
        body: "If you'd like, we can agree a stop word before your check-up or treatment. Using it lets you pause at any moment, so you always stay in control. Knowing you can stop whenever you need to helps many patients feel far more relaxed.",
      },
      {
        heading: "Sedation options",
        body: "For patients who need a little more support, we offer reassuring sedation. Oral and intravenous sedation are safe, reliable ways to manage dental anxiety. You stay conscious throughout, but many patients remember very little of the appointment afterwards and find that time passes very quickly.",
      },
      {
        heading: "Talk to us",
        body: "The hardest step is often the first one. If you'd like to find out how we can help, call our friendly team on 020 7622 5333 or email reception@dentistsw4.com. We'll do everything we can to make you feel confident and comfortable.",
      },
    ],
  },
};
