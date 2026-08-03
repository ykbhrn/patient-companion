// Content for the "New Patient" and "Feeling Nervous" paths.
// Fees reflect the July 2026 interim price list.
// Same `sections` shape as treatments.js so the same page component renders it,
// and so sections can be used as context for the AI assistant.

export const pathContent = {
  new: {
    name: "New Patient",
    tagline:
      "Everything you need to know before your first visit to Crescent Lodge.",
    sections: [
      {
        heading: "A warm welcome",
        body: "Crescent Lodge has been part of the Clapham Common community for over 100 years and is one of the largest dental practices in London. Our friendly team looks after everyone from adults and children to nervous patients, and we work hard to make you feel comfortable from the moment you arrive.",
      },
      {
        heading: "Your first appointment",
        body: "We book new patients in for a relaxed session of around 40 minutes. It is a chance for us to get to know you and to get up to speed with your mouth, teeth and gums. Your dentist will discuss anything you would like to raise and talk through any treatment options with you. There is no rush.",
      },
      {
        heading: "New Patient Combo Pack",
        body: "For new patients we offer a combined package for £150. It includes a full dental examination, two x-rays and a hygiene appointment. These are usually two appointments of around 40 minutes each, taken back to back on the same day or split across two visits. The Combo Pack is prepaid, so payment is taken in advance to secure your booking.",
      },
      {
        heading: "Registering with us",
        body: "New patients register before their first appointment. To create your file we need your full name, date of birth, address, mobile number and email address. You can register by calling reception or by getting in touch by email, and we will take it from there.",
      },
      {
        heading: "What to bring",
        body: "Please bring a list of any medications you take and details of any medical conditions. If you have had dental treatment elsewhere recently, anything you can tell us about it is helpful. Try to arrive a few minutes early so there is time to complete your medical history form.",
      },
      {
        heading: "Finding us",
        body: "We are at 28 Clapham Common South Side, London SW4 9BN. The practice is clean, bright and welcoming, with the latest technology. Opening hours are Monday to Friday 8am to 8pm and Saturday 9am to 4:30pm. We are closed on Sunday.",
      },
      {
        heading: "Parking and getting here",
        body: "We do not have our own parking at the practice. There is pay and display street parking on and around Clapham Common South Side, and some nearby car parks, though most have time limits. Please check the signs wherever you park and allow a little extra time to find a space. We are also well served by buses and are a short walk from Clapham Common and Clapham South stations on the Northern line.",
      },
      {
        heading: "Smile Plan membership",
        body: "Our Smile Plan spreads the cost of routine care over monthly direct debit payments. The adult plan is £26 a month and covers two dental health assessments a year, all necessary x-rays, two hygiene appointments a year, and 10% off treatment fees. There is a children's plan at £10.50 a month for ages 5 to 16, and children under 5 are free. There is no joining fee, and group discounts are available for families. Ask our team if you would like to join.",
      },
      {
        heading: "Paying for treatment",
        body: "For larger treatments we offer finance through Medenta, which lets you spread the cost over monthly instalments. It is interest free for up to 12 months, or 9.9% APR over 12 to 36 months, subject to approval. Your dentist will give you a written estimate before any treatment begins, so you always know the cost in advance.",
      },
      {
        heading: "If you need to cancel",
        body: "We ask for 48 hours' notice if you need to cancel or move an appointment, so we can offer the time to someone else. Short notice cancellations and missed appointments may be charged.",
      },
      {
        heading: "Booking and questions",
        body: "To book or ask anything before your visit, call our friendly team on 020 7622 5333 or email reception@dentistsw4.com. We are always happy to help you feel prepared for your first appointment.",
      },
    ],
  },

  nervous: {
    name: "Feeling Nervous",
    tagline: "You're not alone, and we're here to help you feel at ease.",
    sections: [
      {
        heading: "You're in good company",
        body: "Feeling anxious about the dentist is very common. Around one in four people in the UK feel nervous about visiting, and many avoid appointments as a result. There is no judgement here. Our team is known for the extra care we give nervous patients, and many of our patients tell us how grateful they are for it.",
      },
      {
        heading: "Come and look around first",
        body: "If it helps, you are welcome to visit the practice before your appointment to look around and meet the team. Getting familiar with the environment and seeing a few friendly faces beforehand can make a real difference. Many of our team have been here for years, so you will often see the same familiar faces at every visit.",
      },
      {
        heading: "We go at your pace",
        body: "Your first appointment is often simply a chance for us to get to know you and for you to share any fears you have. Your dentist will discuss any concerns and answer your questions before any treatment begins. Appointments are never rushed, and anything we do is taken only at a speed you are comfortable with.",
      },
      {
        heading: "A stop word, whenever you need it",
        body: "If you would like, we can agree a stop word before your check-up or treatment. Using it lets you pause at any moment, so you always stay in control. Knowing you can stop whenever you need to helps many patients feel far more relaxed.",
      },
      {
        heading: "Tell us in advance",
        body: "If you let us know you feel nervous when you book, we can note it on your file so the whole team knows before you arrive. We can also allow a little extra time, book you at a quieter part of the day, or arrange for you to see the same dentist each visit. Just mention it when you call or email.",
      },
      {
        heading: "Sedation options",
        body: "For patients who need a little more support, sedation is available. It is a safe, reliable way to manage dental anxiety. You stay conscious throughout, but many patients remember very little of the appointment afterwards and find that time passes very quickly. Sedation is provided by an external sedation specialist and paid directly to them rather than through the practice, and your dentist can talk you through whether it is right for you.",
      },
      {
        heading: "Talk to us",
        body: "The hardest step is often the first one. If you would like to find out how we can help, call our friendly team on 020 7622 5333 or email reception@dentistsw4.com. We will do everything we can to make you feel confident and comfortable.",
      },
    ],
  },
};
