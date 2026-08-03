// Treatment content for the Patient Companion "Treatments" section.
// Grounded in Crescent Lodge Dental Practice's own treatment pages.
// Each treatment has a `category` (used to group them on the Treatments page)
// and a `sections` array so individual sections can later be used as context
// for the AI assistant (e.g. "patient is asking about the Aftercare section of veneers").

export const treatments = {
  whitening: {
    name: "Teeth Whitening",
    category: "Cosmetic & Smile Makeover",
    tagline:
      "A simple, effective way to lighten teeth and brighten your smile.",
    sections: [
      {
        heading: "What it is",
        body: "Professional teeth whitening lightens the natural colour of your teeth and reduces staining, without removing any of the tooth surface. It's one of the most popular cosmetic treatments and a common part of a smile makeover.",
      },
      {
        heading: "Your options",
        body: "We offer home whitening using custom-made trays and gel you use over a couple of weeks, in-practice Power (Zoom) whitening for a faster result, or a dual approach that combines both. Your dentist will recommend the best fit at your free whitening consultation.",
      },
      {
        heading: "What to expect",
        body: "For home whitening we take an impression to make trays that fit your teeth precisely, then show you how to apply the gel at home. In-practice whitening is done here in a single visit. Results build gradually and there's no downtime.",
      },
      {
        heading: "Aftercare",
        body: "For the first couple of days, avoid strongly coloured food and drink such as coffee, red wine, tea and curry, as teeth take on stains more easily right after treatment. Keeping up regular hygiene visits helps your result last.",
      },
      {
        heading: "How long it lasts",
        body: "Whitening typically lasts around two to three years, depending on your diet and habits. Occasional top-ups with your home trays keep your smile bright.",
      },
    ],
  },

  veneers: {
    name: "Porcelain Veneers",
    category: "Cosmetic & Smile Makeover",
    tagline:
      "Thin, custom-made shells bonded to the front of teeth for a natural, even smile.",
    sections: [
      {
        heading: "What it is",
        body: "Porcelain veneers are very thin, custom-made shells fixed to the front surface of your teeth. They can improve the colour, shape, size and alignment of teeth, and are often used to close small gaps or cover chips and stubborn staining.",
      },
      {
        heading: "Is it right for me",
        body: "Veneers suit people who want to improve the appearance of the front teeth that show when they smile. They're a popular part of a smile makeover and can be combined with whitening or other treatments. Your dentist will assess whether veneers or an alternative like composite bonding is the better choice for you.",
      },
      {
        heading: "What to expect",
        body: "Treatment usually takes two or three visits. The first involves gently preparing the teeth and taking an impression. The veneers are custom-made to suit your smile, then carefully bonded into place at a later appointment.",
      },
      {
        heading: "Aftercare",
        body: "Care for veneers just like natural teeth, with regular brushing, flossing and check-ups. Avoid biting directly on very hard objects, as porcelain can chip. A night guard may be recommended if you grind your teeth.",
      },
      {
        heading: "How long they last",
        body: "With good care, porcelain veneers commonly last many years before they may eventually need replacing. Regular check-ups help keep them looking their best.",
      },
    ],
  },

  bonding: {
    name: "Composite Bonding",
    category: "Cosmetic & Smile Makeover",
    tagline:
      "Tooth-coloured material shaped onto teeth to repair and reshape your smile.",
    sections: [
      {
        heading: "What it is",
        body: "Composite bonding uses a tooth-coloured resin applied directly to the teeth and sculpted into shape. It can repair chips, close small gaps, reshape uneven teeth and improve the overall look of your smile, usually in a single visit.",
      },
      {
        heading: "How it compares to veneers",
        body: "Bonding is typically quicker and more affordable than porcelain veneers, and usually needs little or no removal of the tooth surface. Veneers can offer a longer-lasting, more stain-resistant finish. Your dentist will help you weigh up which suits your goals and budget.",
      },
      {
        heading: "What to expect",
        body: "The tooth surface is lightly prepared, then the composite is applied, shaped and hardened with a light, and finally polished. Most bonding is completed in one appointment with no downtime.",
      },
      {
        heading: "Aftercare",
        body: "Brush and floss as normal and keep up regular check-ups. Composite can pick up staining over time, so easing off on coffee, red wine and smoking helps it stay looking fresh. Avoid biting hard objects to prevent chipping.",
      },
    ],
  },

  invisalign: {
    name: "Invisalign",
    category: "Cosmetic & Smile Makeover",
    tagline: "Clear, removable aligners that straighten teeth discreetly.",
    sections: [
      {
        heading: "What it is",
        body: "Invisalign straightens teeth using a series of clear, removable aligners instead of fixed braces. Each set is custom made for you and moves your teeth gradually into position. Because the aligners are clear and can be taken out, they are a popular choice with adults who would rather not have visible braces.",
      },
      {
        heading: "Is it right for me",
        body: "Invisalign works well for crowding, gaps and many bite problems. Some cases, particularly more complex ones, are better treated with fixed braces, and your dentist will tell you honestly which is the better fit for your teeth. Success also depends on wearing the aligners consistently, so it suits people happy to keep to that routine.",
      },
      {
        heading: "What to expect",
        body: "After a free consultation and a digital scan, your custom series of aligners is made for you. You wear each set for around one to two weeks, for roughly 20 to 22 hours a day, taking them out only to eat and to clean your teeth.",
      },
      {
        heading: "Will it hurt",
        body: "Most people feel mild pressure or tenderness for a day or two when they move to a new set of aligners. That is normal and a sign the treatment is working. It usually settles quickly and most people adjust easily.",
      },
      {
        heading: "How long it takes",
        body: "Treatment length depends on how much movement is needed. Simpler cases can be finished in a few months, while more complex ones may take around eighteen months. Your dentist will give you an estimated timeline at your consultation.",
      },
      {
        heading: "Aftercare and retainers",
        body: "Because the aligners come out, brushing and flossing stay straightforward throughout treatment. Once your teeth are in their final position you will need a retainer to hold them there, and most of our Invisalign packages include one.",
      },
    ],
  },

  braces: {
    name: "Fixed Braces",
    category: "Cosmetic & Smile Makeover",
    tagline: "Traditional braces that can correct a wide range of cases.",
    sections: [
      {
        heading: "What it is",
        body: "Fixed braces use brackets bonded to the teeth and a connecting wire to move them into position. Because they stay in place throughout treatment, they work continuously and can handle a wider range of cases than removable aligners. We use the Damon system, which uses a self-tying bracket designed to be comfortable and efficient.",
      },
      {
        heading: "Braces or Invisalign",
        body: "Both straighten teeth, and the right choice depends on your case. Fixed braces can correct more complex problems and do not rely on you remembering to wear them, which is why they are often the choice for children and teenagers. Invisalign is removable and far less visible, which many adults prefer. Your orthodontist will assess your teeth and explain honestly which option will give you the better result.",
      },
      {
        heading: "Options available",
        body: "As well as standard Damon braces, clear brackets are available if you would prefer something less noticeable. For adults wanting to correct just the front teeth, we also offer Lingual Social Six, where the braces are fitted behind the teeth so they are hidden from view.",
      },
      {
        heading: "What to expect",
        body: "Treatment starts with a consultation and assessment so your orthodontist can plan your case. The braces are then fitted, and you return for regular adjustment appointments through treatment. Your orthodontist will explain how to keep your teeth clean around the brackets and what to expect at each stage.",
      },
      {
        heading: "Will it hurt",
        body: "Teeth often feel tender for a few days after braces are fitted and again after adjustment appointments. This settles quickly and is a normal sign that the teeth are moving. Soft foods for a day or two usually help.",
      },
      {
        heading: "Braces for children",
        body: "We also offer interceptive orthodontics for children, which guides growth and development before all the adult teeth are through. Options include trainer appliances, twin blocks and expanders. Your orthodontist will advise whether early treatment would help or whether it is better to wait.",
      },
      {
        heading: "Aftercare and retainers",
        body: "Keeping teeth clean around fixed braces takes a little more care, and your orthodontist will show you how. Once the braces come off, a retainer is needed to hold your teeth in their new position. Retainers can be removable or fixed behind the teeth.",
      },
    ],
  },

  implants: {
    name: "Dental Implants",
    category: "Replacing Missing Teeth",
    tagline: "A natural-looking, long-lasting way to replace missing teeth.",
    sections: [
      {
        heading: "What it is",
        body: "A dental implant is a small titanium post placed into the jawbone to act as an artificial tooth root, topped with a custom crown. Implants replace missing teeth and can also support bridges, offering a stable, natural-looking result.",
      },
      {
        heading: "Why choose implants",
        body: "Implants fill gaps, help maintain the health of your jaw and neighbouring teeth, and provide long-lasting results that look and feel like natural teeth. They can be a key part of a full smile makeover where teeth are missing.",
      },
      {
        heading: "What to expect",
        body: "Treatment starts with a consultation and assessment, often including a 3D scan, to plan precisely. The implant is placed and given time to integrate with the bone before the final crown is fitted. Your dentist will explain each stage and the timeline for your case.",
      },
      {
        heading: "Aftercare",
        body: "Cared for well, with good brushing, flossing and regular check-ups, implants can last for decades. Keeping your gums healthy is key to long-term success.",
      },
    ],
  },

  bridges: {
    name: "Bridges & Dentures",
    category: "Replacing Missing Teeth",
    tagline:
      "Options to replace one or more missing teeth and restore your smile.",
    sections: [
      {
        heading: "What it is",
        body: "A bridge fills a gap by anchoring a replacement tooth to the teeth on either side, while dentures are removable appliances that replace several or all missing teeth. Both restore your ability to eat, speak and smile with confidence.",
      },
      {
        heading: "What to expect",
        body: "After an assessment, impressions or scans are taken so your bridge or denture can be custom-made to fit comfortably and look natural. Your dentist will talk you through which option best suits your situation.",
      },
      {
        heading: "Aftercare",
        body: "Bridges are cleaned much like natural teeth, with special care around the gum line. Dentures are removed for cleaning and overnight. Regular check-ups keep everything fitting well and your mouth healthy.",
      },
    ],
  },

  checkup: {
    name: "Check-up & Examination",
    category: "General & Preventive",
    tagline: "A routine examination to keep your teeth and gums healthy.",
    sections: [
      {
        heading: "What it is",
        body: "A routine dental examination where the dentist checks your teeth, gums and mouth for any signs of problems, helping to catch issues early before they become more serious.",
      },
      {
        heading: "What to expect",
        body: "The dentist examines your teeth and gums, may take x-rays if needed, and discusses any findings with you along with a plan for any treatment. It's also a good chance to ask any questions you have.",
      },
      {
        heading: "How often",
        body: "Most patients are seen every six to twelve months, though your dentist will advise how often is right for you based on your dental health.",
      },
    ],
  },

  hygiene: {
    name: "Hygiene & Cleaning",
    category: "General & Preventive",
    tagline:
      "Professional cleaning to keep your gums healthy and your smile fresh.",
    sections: [
      {
        heading: "What it is",
        body: "A professional clean with the hygienist that removes plaque and tartar build-up which regular brushing can't reach, helping to prevent gum disease and keep your mouth healthy.",
      },
      {
        heading: "What to expect",
        body: "The hygienist cleans and polishes your teeth, removes staining, and gives tailored advice on brushing and flossing to help you care for your teeth at home.",
      },
      {
        heading: "Aftercare",
        body: "Your teeth may feel a little sensitive briefly after a clean. Keeping up good brushing and flossing between visits helps maintain the result.",
      },
    ],
  },

  fillings: {
    name: "Fillings",
    category: "General & Preventive",
    tagline: "Tooth-coloured fillings to repair decayed or damaged teeth.",
    sections: [
      {
        heading: "What it is",
        body: "A filling restores a tooth that has been affected by decay or minor damage. We use tooth-coloured materials that blend in naturally, so repairs are discreet.",
      },
      {
        heading: "What to expect",
        body: "The affected area is gently cleaned and prepared, then the filling material is placed, shaped and set. The tooth is checked to make sure it feels comfortable when you bite. It's usually completed in a single visit.",
      },
      {
        heading: "Aftercare",
        body: "You can normally eat and drink as usual soon afterwards. Good brushing, flossing and regular check-ups help prevent further decay and keep your fillings lasting well.",
      },
    ],
  },

  rootcanal: {
    name: "Root Canal Treatment",
    category: "General & Preventive",
    tagline: "Treatment to save a tooth affected by infection or deep decay.",
    sections: [
      {
        heading: "What it is",
        body: "Root canal treatment removes infected or damaged tissue from inside a tooth, then cleans and seals it. It relieves pain and allows a tooth that might otherwise be lost to be saved.",
      },
      {
        heading: "What to expect",
        body: "The area is fully numbed for your comfort. The dentist cleans inside the tooth, then fills and seals it. It may take one or two visits, and a crown is often recommended afterwards to protect the tooth.",
      },
      {
        heading: "Will it hurt",
        body: "With modern techniques and effective numbing, root canal treatment is usually no more uncomfortable than having a filling. Any tenderness afterwards normally settles within a few days.",
      },
      {
        heading: "Aftercare",
        body: "Avoid chewing on the treated side until any numbness wears off. Keep the area clean and attend any follow-up appointments so the tooth can be properly restored.",
      },
    ],
  },
};
