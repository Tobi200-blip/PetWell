// Long-form articles, batch 3. Same shape as articlesLong.js.
// An entry here replaces any article in articles.js with the same slug.
// Read time is calculated automatically from the word count.

export const longArticles3 = [
  {
    slug: "puppy-vaccination-basics",
    title: "Puppy vaccinations: the complete guide",
    category: "Health",
    excerpt:
      "Why puppies need a series of vaccines, what the core and optional vaccines protect against, a typical schedule, how rabies rules work in Canada, and how to keep your puppy safe and socialized in the meantime.",
    date: "Nov 2026",
    featured: true,
    vetReviewed: false,
    reviewedBy: "",
    intro: [
      "Bringing home a puppy comes with a long list of things to organize, and vaccinations sit near the top. They protect against serious and sometimes deadly diseases, and they are among the most effective things you can do for a young dog's health. They also come with a lot of confusing detail: abbreviations such as DHPP, a schedule that seems to involve endless boosters, and conflicting advice from breeders, friends, and the internet.",
      "This guide explains puppy vaccinations in plain language. We cover why puppies need several doses, what the core and optional vaccines protect against, what a typical schedule looks like, how rabies rules work in Canada, how to keep your puppy safe and socialized before the series is finished, what to expect afterwards, and when to call your vet. Everything here is general information, not veterinary advice. Schedules and requirements vary between clinics, provinces, and individual puppies, so the plan your own veterinarian sets for your puppy is the one to follow.",
    ],
    keyPoints: [
      "Puppies need a series of vaccines, not a single shot, because antibodies from their mother can block the early doses.",
      "Core vaccines protect against distemper, parvovirus, adenovirus, and rabies. Others depend on where you live and how your dog spends its time.",
      "Rabies vaccination is required by law in many parts of Canada, and the rules vary by province and municipality.",
      "Your puppy is not fully protected until the series is finished, so careful, controlled socialization matters in the meantime.",
      "Keep every vaccination record, and follow the schedule your own vet sets for your puppy.",
    ],
    sections: [
      {
        heading: "Why puppy vaccinations matter",
        paragraphs: [
          "Several of the diseases that vaccines protect against are serious, hard to treat, and in some cases fatal. Parvovirus can cause severe vomiting and bloody diarrhea and often needs intensive hospital care. Distemper attacks the respiratory, digestive, and nervous systems, and there is no specific cure, so treatment is supportive. Rabies is almost always fatal once symptoms begin, and it can pass to people. Vaccines work by preparing the immune system before it meets the real disease, which is far safer and cheaper than treating an illness afterwards.",
          "Vaccination also protects other dogs. When most dogs in a community are vaccinated, these diseases have fewer chances to spread, which helps puppies that are too young to be fully protected and dogs that cannot be vaccinated for medical reasons. Vaccines are not a guarantee, and no vaccine protects every dog against every disease, but they lower the risk dramatically.",
        ],
      },
      {
        heading: "How vaccines work, and why puppies need several doses",
        paragraphs: [
          "A vaccine introduces a harmless piece or a weakened form of a germ so the immune system learns to recognize it and can respond quickly if it meets the real thing. Puppies are born with some protection: antibodies passed from their mother, mostly through her first milk, called colostrum. These maternal antibodies guard a young puppy, but they fade over the first weeks and months, and they fade at a different speed in every puppy.",
          "That creates a timing problem. While maternal antibodies are still high, they can neutralize a vaccine before the puppy's own immune system has a chance to respond. When they drop low enough, the puppy is no longer protected by its mother but may not yet be protected by vaccination either, and that gap can leave a puppy vulnerable. Because nobody can tell exactly when each puppy's antibodies fade, vets give a series of doses a few weeks apart, with the last one at around 16 weeks of age or later, to make sure at least one dose lands when the puppy can respond.",
        ],
        callout: {
          title: "Why one shot is not enough",
          text: "A single early vaccine may be blocked by maternal antibodies, so it cannot be counted on. A puppy is considered properly vaccinated against the core diseases only after finishing the whole series, including the final puppy dose and the first booster.",
        },
      },
      {
        heading: "The core vaccines",
        paragraphs: [
          "Core vaccines are recommended for every dog, because the diseases are widespread, severe, or both. Veterinary organizations such as the World Small Animal Veterinary Association (WSAVA) publish vaccination guidelines that many clinics follow or adapt, and they update them from time to time.",
          "Your vet will usually give distemper, adenovirus, and parvovirus together in one combination shot, often written as DHPP, DAPP, or DA2PP depending on the product. The extra letter usually stands for parainfluenza, a cause of kennel cough, and the combination vaccine is given as an injection.",
        ],
        lists: [
          {
            title: "What the core vaccines protect against",
            items: [
              "Distemper: a highly contagious virus that affects the respiratory, digestive, and nervous systems, with symptoms such as fever, coughing, discharge from the eyes and nose, vomiting, and in severe cases tremors and seizures",
              "Parvovirus: a hardy virus that attacks the intestines and the immune system, causing vomiting, severe and often bloody diarrhea, and dehydration, and that can survive in the environment for a long time",
              "Adenovirus: the vaccine protects against infectious canine hepatitis, a disease affecting the liver, kidneys, and eyes, and against a cause of kennel cough",
              "Rabies: a viral disease of the nervous system that is almost always fatal once signs appear, and that can spread to people through bites and saliva",
            ],
          },
        ],
      },
      {
        heading: "Non-core vaccines: it depends on your puppy's life",
        paragraphs: [
          "Non-core vaccines are recommended based on where you live and how your dog spends its time. Your vet will ask about your home, your region, and your plans, such as daycare, boarding, hiking, or travel, and will weigh the benefit against the risk for your individual puppy.",
        ],
        lists: [
          {
            title: "Common non-core vaccines",
            items: [
              "Bordetella and canine parainfluenza (kennel cough): protects against some of the causes of a contagious cough that spreads where dogs gather, such as daycare, boarding, grooming, and training classes. Depending on the product, it is given by injection, nose drops, or by mouth",
              "Leptospirosis: a bacterial disease spread through water, soil, and the urine of infected animals, including wildlife and rodents. It can damage the kidneys and liver and can spread to people. Ask your vet about local risk, since it occurs in rural and urban areas",
              "Lyme disease: a bacterial infection spread by blacklegged ticks, which are established in parts of Canada. The vaccine suits some dogs in higher-risk areas, but it does not replace tick checks and tick prevention",
              "Canine influenza: a contagious respiratory virus that can spread in group settings. Its relevance varies by region and by outbreaks",
            ],
          },
        ],
        callout: {
          title: "Ask about local risk",
          text: "Disease patterns differ between regions and change over time. Your own vet knows what is circulating near you, which is why a friend's puppy in another province may be on a different plan.",
        },
      },
      {
        heading: "A typical puppy vaccination schedule",
        paragraphs: [
          "Every clinic and every puppy is a little different, but this is a common pattern for the core vaccines, based on widely used guidelines. Treat it as an outline to understand your vet's plan, not as a schedule to follow on your own.",
        ],
        lists: [
          {
            ordered: true,
            items: [
              "6 to 8 weeks: the first combination vaccine (distemper, adenovirus, parvovirus, and often parainfluenza), which is frequently given by the breeder or rescue before the puppy comes home",
              "Every 2 to 4 weeks after the first dose: repeat doses of the combination vaccine",
              "16 weeks or older: the final puppy dose of the combination vaccine, so that protection does not depend on antibodies from the mother",
              "Around 12 to 16 weeks: the first rabies vaccine, depending on your vet and local law",
              "Non-core vaccines, if recommended: often started from around 8 to 12 weeks, and some need a second dose a few weeks later",
              "6 to 12 months of age: a booster of the core combination vaccine, and a rabies booster at around one year, depending on the product and local law",
              "After that: core boosters are often given every three years, rabies every one to three years depending on the vaccine and local law, and non-core vaccines such as kennel cough, leptospirosis, and Lyme usually every year for dogs that need them",
            ],
          },
        ],
        callout: {
          title: "Your vet may adjust the plan",
          text: "Your vet may change the timing or add a dose depending on your puppy's breed, health, size, and risk of exposure. Follow the schedule your clinic gives you, and write down the dates of the next appointments before you leave.",
        },
      },
      {
        heading: "Rabies vaccination and the law in Canada",
        paragraphs: [
          "Rabies is a public health issue as well as a pet health one, so vaccination is regulated. In many parts of Canada, rabies vaccination is required by law for dogs, and proof is commonly needed for municipal licensing, boarding, grooming, daycare, and travel. The rules, including the age at the first dose, how long a vaccine is recognized as valid, and what happens after a bite, vary between provinces, territories, and municipalities.",
          "Rabies vaccines are given by or under the direction of a veterinarian, and you should receive a signed certificate. If your dog bites someone, or is bitten by an unknown animal, the vaccination record can make a big difference to what happens next, because public health authorities will ask for proof. Check your own municipality's rules, and ask your vet which rabies vaccine and schedule they use.",
        ],
      },
      {
        heading: "Your first vet visit: what to bring and ask",
        paragraphs: [
          "Book a visit within the first few days of bringing your puppy home, even if the breeder or rescue has already given a first vaccine. The vet will do a full physical examination, checking weight, heart, lungs, eyes, ears, teeth, skin, and joints, and will talk through vaccines, parasite control, microchipping, nutrition, and when to spay or neuter.",
        ],
        lists: [
          {
            title: "What to bring",
            items: [
              "All paperwork from the breeder or rescue, including vaccination and deworming records with dates and product names",
              "Any health guarantee or contract",
              "A fresh stool sample, if your clinic asks for one, since parasite testing is common at early visits",
              "The name or label of the food your puppy is eating",
              "A list of questions",
              "Treats, and a blanket or towel that smells like home",
            ],
          },
        ],
      },
      {
        heading: "Keeping your puppy safe before the series is finished",
        paragraphs: [
          "Until your puppy has finished the vaccine series, it is not fully protected, and protection takes a little time to build even after the final dose. Some diseases, especially parvovirus, spread through contact with an infected dog's feces, or through contaminated ground, shoes, and objects. Risk is not the same everywhere, so ask your vet about conditions in your area.",
        ],
        lists: [
          {
            title: "Sensible precautions",
            items: [
              "Avoid dog parks, pet store floors, boarding facilities, and busy areas where many unfamiliar dogs go",
              "Do not let your puppy sniff or eat the feces of other dogs",
              "Arrange meetings only with healthy, fully vaccinated dogs you know, in a clean, private space",
              "Carry your puppy across public areas you cannot avoid, and take it to the vet in your arms or in a carrier",
              "Wash your hands and change your shoes after being around unknown dogs, before handling your puppy",
              "Keep your yard clean, and ask your vet which disinfectants work against parvovirus, since many household cleaners do not",
              "Keep sick dogs away from your puppy",
            ],
          },
        ],
        callout: {
          title: "Winter is not a safe season",
          text: "Parvovirus is hardy and can survive in the environment for a long time, including through cold weather. A snowy yard or a cold season is not a reason to delay or skip vaccination.",
        },
      },
      {
        heading: "Socializing your puppy before the series is complete",
        paragraphs: [
          "The first months of life are also the most important window for socialization, when puppies learn what the world is like and what is safe. Missing it can contribute to fear and behavior problems later on. That is why behavior experts generally do not recommend keeping a puppy shut away until the vaccine series is finished. The goal is to socialize safely, not to skip it.",
          "Many veterinary behavior organizations support carefully run puppy classes that require vaccination and health checks, with clean floors and small groups, and some classes start after the first round of vaccines. Ask your vet what is appropriate for your puppy and your area.",
        ],
        lists: [
          {
            title: "Safe ways to socialize",
            items: [
              "Invite friends and family of different ages to your home, including people in hats, uniforms, and glasses",
              "Let your puppy experience different surfaces, sounds, and gentle handling in your home and clean yard",
              "Carry your puppy, or use a carrier, wagon, or stroller, to watch the world from a safe distance",
              "Enroll in a well-run puppy class that requires vaccination records and keeps its space clean",
              "Arrange short, supervised meetings with healthy, vaccinated adult dogs you know",
              "Keep every new experience short and positive, with plenty of treats",
            ],
          },
        ],
      },
      {
        heading: "What to expect after a vaccination",
        paragraphs: [
          "Most puppies feel fine afterwards. Some are sleepy, a little sore, or less interested in food for a day or two. It helps to book the appointment earlier in the day, rather than just before the clinic closes, so that you can watch your puppy and reach the clinic if you have a question.",
        ],
        lists: [
          {
            title: "Common, mild reactions",
            items: [
              "Tiredness or sleepiness",
              "Mild soreness, or a small lump at the injection site that usually fades within a few weeks",
              "A mild fever",
              "Lower appetite for a day",
              "Mild sneezing or coughing for a few days after a nasal vaccine",
            ],
          },
          {
            title: "How to help",
            items: [
              "Let your puppy rest, and keep the day calm",
              "Offer water and normal food",
              "Avoid stressful events, rough play, and long trips that day",
              "Watch your puppy closely for the first few hours",
              "Have the clinic's number to hand, including the after-hours number",
            ],
          },
        ],
        callout: {
          title: "Check any lump that lingers",
          text: "A small lump where the injection was given is common. If it is still there after a few weeks, or it is getting bigger, painful, or red, have your vet look at it.",
        },
      },
      {
        heading: "Allergic reactions, and when to call your vet",
        paragraphs: [
          "Serious reactions are uncommon, but they can happen with any vaccine, usually within minutes to a few hours. Tell your vet about any reaction, even a mild one, so that it can be recorded and the next vaccine planned accordingly, for example with a different product, a different spacing, or special precautions. Some studies suggest small breeds have a higher rate of reactions, so mention your puppy's breed and size.",
        ],
        lists: [
          {
            title: "Signs that need prompt veterinary attention",
            items: [
              "Swelling of the face, especially around the muzzle and eyes",
              "Hives, or intense itching",
              "Repeated vomiting or diarrhea",
              "Difficulty breathing, or a persistent cough",
              "Pale gums, extreme weakness, or collapse",
              "A fever that persists, or a puppy that is unusually lethargic for more than a day or two",
            ],
          },
        ],
        callout: {
          title: "Call your vet or an emergency clinic straight away",
          text: "Facial swelling, trouble breathing, collapse, or repeated vomiting after a vaccine are emergencies. Do not wait to see whether they pass.",
        },
      },
      {
        heading: "Keeping your vaccination records",
        paragraphs: [
          "Your puppy's vaccination record is a document you will need many times: for licensing, boarding, grooming, daycare, classes, travel, insurance, and in the event of a bite incident. Keep the original somewhere safe, take a photo of it, and ask the clinic to email you a copy.",
        ],
        lists: [
          {
            title: "What a good record includes",
            items: [
              "The date of each vaccine",
              "The name of each vaccine, and the manufacturer and lot number where recorded",
              "The name of the veterinarian or clinic",
              "The date the next dose is due",
              "The rabies certificate, with the tag or license number",
              "Your puppy's microchip number",
              "Notes on any reaction",
            ],
          },
        ],
      },
      {
        heading: "If you miss a booster, or your puppy's history is unknown",
        paragraphs: [
          "Life gets busy, and appointments slip. If you miss a booster, do not panic, and do not guess. Call your clinic. Whether you can simply continue or need to restart depends on your puppy's age, the vaccine, and how long it has been. For puppies, long gaps between doses can mean the series has to be repeated, so call sooner rather than later.",
          "If you adopt a puppy or an older dog and nobody knows its history, your vet will usually treat it as unvaccinated and start from the beginning, or may discuss testing antibody levels. Be cautious about records that cannot be verified.",
        ],
      },
      {
        heading: "Adult boosters and individualized schedules",
        paragraphs: [
          "After the puppy series, boosters keep protection going. Veterinary guidelines have moved away from automatic yearly shots for every vaccine, because immunity from the core vaccines often lasts longer than a year. Many clinics now give core boosters about every three years and give non-core vaccines yearly where the risk continues. A yearly checkup is still important even in years without a vaccine, since it is when your vet can check your dog's weight, teeth, heart, and skin.",
          "Some owners ask about antibody titer testing, a blood test that measures antibodies against some of the core diseases. A positive result can suggest protection, but interpretation varies, not every disease has a widely accepted test, and rabies rules are set by law, so a titer may not replace a rabies booster. Discuss it with your vet before deciding.",
        ],
      },
      {
        heading: "Boarding, grooming, daycare, and travel",
        paragraphs: [
          "Places that bring dogs together usually require proof of vaccination, commonly rabies, the core combination vaccine, and often kennel cough. Requirements vary, and each facility sets its own rules, so ask early.",
        ],
        lists: [
          {
            items: [
              "Ask the facility exactly which vaccines it requires, and what proof it accepts",
              "Plan ahead, since some places want a vaccine given a certain number of days before the stay",
              "Keep your records handy, in print and on your phone",
              "If you plan to travel with your puppy, especially across borders or by air, check the requirements well in advance, because rules for puppies, including minimum ages and paperwork, can be strict and can change",
            ],
          },
        ],
      },
      {
        heading: "Common myths about puppy vaccines",
        paragraphs: [
          "Vaccines attract a lot of misinformation. These are some of the most common claims, and what is really going on.",
        ],
        lists: [
          {
            items: [
              "Myth: My puppy stays indoors, so it does not need vaccines. In reality, viruses such as parvovirus can be carried on shoes, clothes, and objects, and indoor dogs still go to the vet and the groomer",
              "Myth: The breeder gave the first shots, so my puppy is covered. In reality, the first dose is only the start, and protection depends on finishing the series",
              "Myth: Vaccines give puppies the disease. In reality, vaccines for dogs are designed not to cause the disease, and mild, short-lived symptoms such as sleepiness are common and are not the illness itself",
              "Myth: More vaccines are always better. In reality, unnecessary vaccines add cost and risk without benefit, and the goal is the right vaccines at the right times for your puppy",
              "Myth: Natural infection gives better protection. In reality, natural infection can be severe or fatal, while vaccination builds protection without the illness",
              "Myth: A vaccinated dog can never get sick. In reality, vaccines greatly reduce risk, but no vaccine is perfect, and protection takes time to build",
            ],
          },
        ],
      },
      {
        heading: "Making vet visits calmer",
        paragraphs: [
          "Early vet visits shape how your dog feels about the clinic for life, so it is worth making them as pleasant as you can. A few habits help.",
        ],
        lists: [
          {
            items: [
              "Bring high-value treats and use them throughout the visit",
              "Practice handling your puppy's paws, ears, mouth, and belly at home, with rewards",
              "Keep your puppy in your arms, a carrier, or a crate in the waiting room",
              "Choose quiet times for appointments, if your clinic allows it",
              "Ask about quick 'happy visits', where your puppy pops in for a weigh-in and a treat with no procedure",
              "Stay calm yourself, since puppies pick up on your mood",
              "Praise and reward your puppy afterwards",
            ],
          },
        ],
      },
      {
        heading: "Planning for the cost",
        paragraphs: [
          "Vaccination costs vary by clinic, region, and which vaccines your puppy needs. Many clinics offer puppy packages that bundle exams, vaccines, and parasite control, and some community and humane society clinics offer lower-cost options. Ask for a written estimate for the whole first year, and ask which items are essential and which depend on lifestyle.",
          "If you are thinking about pet insurance, note that routine vaccinations are usually not covered unless you add a wellness option. Our guide to choosing pet insurance in the Learning Hub explains what to look for.",
        ],
      },
      {
        heading: "Questions to ask your vet",
        paragraphs: [
          "Keep this list with you at the first appointment, and write down the answers.",
        ],
        lists: [
          {
            items: [
              "Which vaccines does my puppy need now, and which depend on lifestyle?",
              "When is each dose due, and when is the last puppy dose?",
              "When can my puppy safely start going out in public, and which places should I avoid?",
              "When can my puppy start puppy class, and what do you recommend locally?",
              "What are the rabies requirements where I live, and when will my puppy receive its first rabies vaccine?",
              "Are leptospirosis, Lyme, or kennel cough vaccines advisable for us?",
              "What reactions should I watch for, and what should I do if one happens?",
              "How often will boosters be needed after the puppy series?",
              "What tick, flea, and worm prevention do you recommend, and when should we start?",
              "Do you offer a puppy package, and what does it include?",
            ],
          },
        ],
      },
      {
        heading: "A simple puppy vaccination checklist",
        paragraphs: [
          "Vaccinating a puppy is easier when you break it into steps. This is a general outline you can adapt with your vet.",
        ],
        lists: [
          {
            ordered: true,
            items: [
              "Collect the paperwork from the breeder or rescue, including any vaccines already given.",
              "Book the first vet visit within a few days of bringing your puppy home.",
              "Agree a vaccine schedule with your vet, and write the dates in your calendar.",
              "Keep your puppy away from unknown dogs and high-risk places until your vet says it is safe.",
              "Socialize safely at home and in controlled settings, with short, happy experiences.",
              "Complete the whole series, including the final puppy dose and the first booster.",
              "Register your dog with your municipality, with proof of rabies vaccination, if required.",
              "Keep the records safe, in print and on your phone.",
              "Book yearly checkups, and review the booster plan with your vet each time.",
            ],
          },
        ],
        callout: {
          title: "The bottom line",
          text: "The best plan is the one you finish. Follow your own vet's schedule, ask questions, and keep your puppy's records up to date.",
        },
      },
    ],
    faqs: [
      {
        q: "When can my puppy go outside?",
        a: "Ask your vet, because it depends on your area and your puppy's schedule. Many vets advise avoiding public places where unknown dogs go until a week or two after the final puppy vaccine. Careful, controlled socialization, such as carrying your puppy and visiting a clean private yard, can start earlier.",
      },
      {
        q: "How long until my puppy is protected after a vaccine?",
        a: "Protection takes time to build, often a week or two, and it is considered reliable only after the full series is complete. Your vet will tell you when your puppy is considered protected.",
      },
      {
        q: "Do puppies need shots every year?",
        a: "Not necessarily for every vaccine. Many clinics give core boosters about every three years and give non-core vaccines yearly where the risk continues, but schedules and local rules vary, and rabies follows the vaccine and the law.",
      },
      {
        q: "Can I vaccinate my puppy myself?",
        a: "Rabies vaccines must be given by a veterinarian for the certificate to count. For other vaccines, a vet visit also gives your puppy a health examination, ensures vaccines are stored and given correctly, and puts help at hand if there is a reaction, which is why most vets recommend clinic vaccination.",
      },
      {
        q: "Is it safe to vaccinate a puppy that seems unwell?",
        a: "Vets usually postpone non-urgent vaccines if a puppy is unwell, because illness can affect how well a vaccine works. Tell the clinic about any symptoms before the appointment.",
      },
      {
        q: "Can my puppy get several vaccines at once?",
        a: "Combination vaccines are widely used, and the core diseases are usually covered in one shot. Your vet may space out other vaccines, especially in small puppies or those that have reacted before, so ask about the plan.",
      },
      {
        q: "What should I do if my puppy had a reaction?",
        a: "Call your vet right away for anything serious, such as facial swelling, trouble breathing, or repeated vomiting. For mild reactions, tell your vet at the next visit, so the record is updated and the next vaccine is planned with that in mind.",
      },
    ],
  },
];