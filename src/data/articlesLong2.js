// Long-form articles, batch 2. Same shape as articlesLong.js.
// An entry here replaces any article in articles.js with the same slug.
// Read time is calculated automatically from the word count.

export const longArticles2 = [
  {
    slug: "choosing-pet-insurance",
    title: "Choosing pet insurance: the complete guide",
    category: "Insurance",
    excerpt:
      "How pet insurance works, what the terms mean, what is covered and excluded, how to compare policies, and what to do if insurance is not available to you.",
    date: "Nov 2026",
    featured: true,
    vetReviewed: false,
    reviewedBy: "",
    intro: [
      "A vet bill can arrive without warning. A swallowed sock, a torn ligament, a sudden bout of illness, and a cost that would have been unthinkable last month is suddenly due today. Pet insurance exists to soften that blow, but it is also one of the easiest things to buy badly. Two policies with similar names can pay out very differently, and the differences usually sit in the fine print.",
      "This guide explains how pet insurance works in plain language. We cover the main types of cover, the terms that decide what you actually get back, what is usually covered and excluded, what affects the price, how to compare policies and make a claim, and how to decide whether insurance is right for you. We also cover what to do if pet insurance is hard to find where you live, or does not suit your budget, because a dedicated savings fund can do much of the same job. Everything here is general information, not financial advice. Policies differ between insurers and between countries, so the documents you are actually offered are always what counts.",
    ],
    keyPoints: [
      "Most pet insurance reimburses part of a vet bill after you have paid it, within limits set by the policy.",
      "The deductible, reimbursement percentage, and limits matter more than the monthly price.",
      "Waiting periods and pre-existing condition rules cause most of the disappointment, so read them first.",
      "Enrolling while your pet is young and healthy is usually cheaper and leaves fewer conditions excluded.",
      "Insurance is not the only way to prepare. A dedicated savings fund can work too, as long as you start before the emergency.",
    ],
    sections: [
      {
        heading: "What pet insurance is, and what it is not",
        paragraphs: [
          "Pet insurance is a contract. You pay a regular premium, and in return the insurer agrees to pay some or all of the eligible vet costs for covered events, up to the limits written in the policy. In most plans you pay the vet first and claim the money back. Some insurers can pay the clinic directly instead.",
          "It is designed to protect you from large, unexpected costs, not to pay for every vet visit. It is also not a promise to pay for everything that happens to your pet. Policies cover specific events, exclude others, and usually pay only a share of the eligible bill, so 'covered' rarely means 'paid in full'.",
        ],
        lists: [
          {
            title: "What insurance usually helps with",
            items: [
              "Emergency surgery after an accident, such as a road injury or a broken bone",
              "Diagnosis and treatment of illnesses such as infections, digestive problems, and allergies, on plans that include illness",
              "Cancer treatment, hospital stays, and medication, depending on the plan",
              "Ongoing conditions such as diabetes or arthritis, if the policy covers them long term",
            ],
          },
          {
            title: "What it usually does not do",
            items: [
              "Pay for conditions your pet already had before cover began",
              "Cover routine care such as vaccinations and checkups, unless you add a wellness option",
              "Remove your share of the cost, since most policies have a deductible and a reimbursement percentage",
            ],
          },
        ],
      },
      {
        heading: "How a claim usually works",
        paragraphs: [
          "The details differ between insurers, but most claims follow the same path.",
        ],
        lists: [
          {
            ordered: true,
            items: [
              "Your pet is treated and you pay the vet, or the vet bills the insurer directly if your plan allows it.",
              "You collect the itemized invoice and the vet's clinical notes for the visit.",
              "You submit a claim form with those documents before the deadline in your policy.",
              "The insurer checks the claim: is the condition covered, is the waiting period over, is it pre-existing, and which limits apply.",
              "If approved, the insurer works out the payment after your deductible and the reimbursement percentage, and pays you or the clinic.",
              "If it is declined, you can ask for the reasons in writing and appeal or complain.",
            ],
          },
        ],
        callout: {
          title: "Two things to know before you need to claim",
          text: "Claim deadlines can be short, sometimes only weeks after treatment, so find yours now. And in an emergency, treatment always comes first: do not delay urgent care while waiting for the insurer. For large planned procedures, ask whether the insurer offers pre-approval or an estimate of what it will pay.",
        },
      },
      {
        heading: "The main types of cover",
        paragraphs: [
          "Policies are usually sold in tiers, and the names differ between insurers, so look at what a policy covers rather than what it is called.",
        ],
        lists: [
          {
            title: "Common tiers",
            items: [
              "Accident-only: the cheapest option. It pays for injuries from accidents, such as fractures, bites, or swallowed objects, depending on how the policy defines an accident, and it does not cover illness.",
              "Accident and illness: adds conditions such as infections, digestive problems, allergies, and often cancer, plus diagnostics and medication. This is what most people mean by pet insurance.",
              "Comprehensive: adds extras such as dental treatment, behavioral therapy, or alternative therapies on top of accident and illness cover.",
              "Wellness or routine care add-ons: a fixed allowance toward vaccinations, checkups, and parasite control. Work out whether the allowance is worth more than the extra premium.",
            ],
          },
          {
            title: "In some markets, policies are also described by how long they keep paying for one condition",
            items: [
              "Time-limited: pays for a condition for a set period, often 12 months, then stops",
              "Maximum benefit: pays up to a set amount for each condition",
              "Lifetime: renews the annual limit each year, so ongoing conditions stay covered",
            ],
          },
        ],
        callout: {
          title: "Why this matters for chronic conditions",
          text: "Conditions such as diabetes, arthritis, and skin disease can last for a pet's whole life. A policy that stops paying after 12 months can leave you with the full bill for years. Always ask how long the policy will keep paying for a condition that does not go away.",
        },
      },
      {
        heading: "The numbers that decide what you actually get back",
        paragraphs: [
          "The monthly premium is only one of five numbers, and often not the most important.",
          "A cheap premium paired with a high deductible, a 50 percent reimbursement rate, and a low annual limit can cost you more in the end than a pricier policy. Compare policies on a few realistic scenarios, not on the premium alone.",
        ],
        lists: [
          {
            title: "The five numbers",
            items: [
              "Premium: what you pay each month or year to keep the policy",
              "Deductible (also called the excess): the amount you pay before the insurer pays anything. It may apply once a year, once per condition, or on every claim, and these behave very differently",
              "Reimbursement percentage: the share of the eligible bill the insurer pays after the deductible, commonly somewhere between 70 and 90 percent",
              "Annual limit: the most the insurer will pay in one policy year. Some plans have no annual limit",
              "Per-condition or lifetime limit: the most the insurer will pay for a single condition, or over your pet's whole life",
            ],
          },
        ],
        callout: {
          title: "A worked example",
          text: "Say a vet bill is 1,000, your deductible is 100, and your reimbursement rate is 80 percent. The bill after the deductible is 900. The insurer pays 80 percent of 900, which is 720, and you pay the remaining 280. Some insurers apply the percentage first and the deductible afterwards, which gives a different result, so check how your own policy calculates it.",
        },
      },
      {
        heading: "Waiting periods",
        paragraphs: [
          "Most policies do not cover claims straight away. A waiting period is the gap between buying the policy and the day cover starts. It exists so that people cannot buy cover only after their pet has become unwell.",
          "Waiting periods for accidents are usually short, often a few days. Waiting periods for illness are usually longer, commonly a couple of weeks or more, and some policies set longer waits for particular conditions, such as joint and ligament problems.",
        ],
        lists: [
          {
            title: "What to check",
            items: [
              "How long you wait for accidents, and how long for illness",
              "Whether certain conditions, such as joint, ligament, or hereditary problems, have longer waits",
              "Whether the waiting period starts again if you upgrade your plan or switch insurers",
              "Whether a vet examination is required before cover begins",
            ],
          },
        ],
      },
      {
        heading: "Pre-existing conditions",
        paragraphs: [
          "A pre-existing condition is generally one that showed signs, or was diagnosed or treated, before your cover began or during the waiting period. Almost every pet insurer excludes them.",
          "Definitions vary a lot. Some insurers only look at what is in the vet records. Others also count symptoms that were never seen by a vet, and some look back a fixed period such as 12 months while others look at your pet's whole life. A few insurers will start covering a condition again if your pet has been free of symptoms and treatment for a set period. Ask how your insurer decides.",
          "Be completely honest on the application. If you leave out a known condition or past symptoms, the insurer can refuse a claim or cancel the policy, and you could lose the cover you paid for.",
        ],
        callout: {
          title: "Watch for the bilateral exclusion",
          text: "Some policies treat a condition on one side of the body as pre-existing for the other side. If your dog is treated for a torn cruciate ligament in one knee, the policy may exclude the other knee, because the problem often appears in both. Ask whether a policy has this clause.",
        },
      },
      {
        heading: "Hereditary, congenital, and breed-specific conditions",
        paragraphs: [
          "Hereditary conditions run in families, such as hip dysplasia in many large breeds. Congenital conditions are present from birth. Breed-specific conditions are those a breed is especially prone to, such as breathing difficulty in flat-faced breeds, heart disease in some toy and giant breeds, and spinal disc disease in long-backed breeds.",
          "These are often among the most expensive conditions to treat, and insurers handle them in very different ways. Some exclude them completely. Some cover them after a waiting period, some only on higher tiers, and some charge more for the breeds most affected instead of excluding anything. Never assume. Our breed guides list the health problems each breed is prone to, which makes a useful checklist when you speak to insurers.",
        ],
        lists: [
          {
            title: "How to check",
            items: [
              "Look in the exclusions for words such as hereditary, congenital, developmental, and breed-related",
              "Ask directly whether the conditions common in your breed are covered",
              "Ask whether there is a waiting period before they are covered",
              "Ask whether any exclusion applies specifically to your pet's breed",
            ],
          },
        ],
      },
      {
        heading: "What is usually excluded",
        paragraphs: [
          "Exclusions vary, but these are common. The exclusions section of a policy often tells you more than the benefits section, so read it carefully.",
        ],
        lists: [
          {
            items: [
              "Pre-existing conditions",
              "Routine and preventive care, such as vaccinations, checkups, and parasite treatment, unless you have a wellness add-on",
              "Cosmetic or elective procedures, such as tail docking or ear cropping",
              "Pregnancy, breeding, and related costs",
              "Dental disease, except where an accident caused the damage, on many policies",
              "Behavioral treatment on some policies",
              "Conditions linked to neglect, or to not following the vet's advice",
              "Illnesses that vaccinations would have prevented, where the policy requires vaccinations to be up to date",
              "Racing, working, or competition use on some policies",
              "Everyday costs such as food, grooming, and boarding",
            ],
          },
        ],
      },
      {
        heading: "What affects the price",
        paragraphs: [
          "Insurers estimate how likely your pet is to need expensive treatment, and they set the price from that estimate.",
          "Be careful with 'from' prices. Advertised prices often apply to young, healthy pets of lower-risk breeds. Ask for a written quote for your own pet's breed and age, and ask how the price may change at renewal, since premiums often rise as pets age and as vet costs rise.",
        ],
        lists: [
          {
            items: [
              "Breed and size, since some breeds are prone to costly conditions",
              "Age, because older pets are more likely to be ill",
              "Where you live, because vet costs differ between areas",
              "The level of cover: higher limits and reimbursement cost more",
              "The deductible you choose: a higher deductible usually lowers the premium",
              "Claims history, which can raise your renewal price",
              "Your pet's medical history",
            ],
          },
        ],
      },
      {
        heading: "Why starting young helps",
        paragraphs: [
          "Young, healthy pets are generally cheaper to insure and have little history that could be excluded later. Many insurers set a minimum age to join, often a few weeks old, and some set a maximum age, after which cover may be limited or unavailable.",
          "Premiums usually rise as a pet ages, which is also when the need for cover tends to grow. Before you buy, make sure you could keep paying for the policy when your pet is ten years old, not only today. Dropping a policy in your pet's senior years means losing the cover just when it might be most useful.",
        ],
        lists: [
          {
            title: "Questions about age",
            items: [
              "What are the minimum and maximum ages to join?",
              "Does cover renew for life, or can the insurer stop renewing at a certain age?",
              "How will the premium change as my pet gets older?",
              "Do any benefits, such as the reimbursement rate, reduce for older pets?",
            ],
          },
        ],
      },
      {
        heading: "How to compare policies",
        paragraphs: [
          "Do not choose on the monthly price. Compare policies on the same terms and test them against realistic scenarios.",
        ],
        lists: [
          {
            ordered: true,
            items: [
              "Write down your pet's details: breed, age, weight, and any health history.",
              "Decide what you most want to protect against: major accidents only, or illness and long-term conditions as well.",
              "Ask at least three insurers for a written quote using the same deductible, reimbursement rate, and annual limit, so you are comparing like with like.",
              "Ask for the full policy wording and the summary of cover before you pay, and read the definitions, exclusions, and claim conditions.",
              "Check the waiting periods, and how the policy handles pre-existing, hereditary, and bilateral conditions.",
              "Run two or three scenarios through each policy, such as surgery for a swallowed object, a long-term skin condition, and a ligament injury, and work out what you would pay in each case.",
              "Look into the insurer's reputation for paying claims quickly and fairly.",
              "Choose on the total you are likely to pay and how well the policy covers the risks you care about, not on the lowest premium.",
            ],
          },
        ],
      },
      {
        heading: "Questions to ask an insurer",
        paragraphs: [
          "Keep this list with you when you call or chat with an insurer, and ask for the answers in writing.",
        ],
        lists: [
          {
            items: [
              "How do you define a pre-existing condition, and how far back do you look?",
              "Is the deductible annual, per condition, or per claim?",
              "Does the reimbursement rate stay the same as my pet ages?",
              "Are hereditary, congenital, and breed-specific conditions covered, and after what wait?",
              "Is there a bilateral exclusion?",
              "What are the annual, per-condition, and lifetime limits?",
              "Do you pay the vet directly, or do I claim the money back?",
              "How long do claims take to pay, and what is the deadline for submitting them?",
              "Can the premium rise after a claim, and can you refuse to renew my policy?",
              "What is the cancellation policy, and is there a cooling-off period in which I can cancel for a refund?",
            ],
          },
        ],
      },
      {
        heading: "Common mistakes",
        paragraphs: [
          "Most insurance disappointments come from a small number of avoidable mistakes.",
        ],
        lists: [
          {
            items: [
              "Choosing on the monthly price alone",
              "Waiting until the pet is older, or has already had a health problem",
              "Leaving out known conditions or past symptoms on the application",
              "Assuming 'covered' means paid in full",
              "Skipping the waiting periods and the exclusions for hereditary conditions",
              "Missing claim deadlines or sending incomplete paperwork",
              "Not checking what happens at renewal",
              "Letting vaccinations or checkups lapse when the policy requires them",
              "Switching insurers without realizing that ongoing conditions may count as pre-existing with the new one",
            ],
          },
        ],
      },
      {
        heading: "Making a claim without the stress",
        paragraphs: [
          "A little organization makes claims quicker and reduces the chance of a rejection.",
        ],
        lists: [
          {
            items: [
              "Keep every invoice and clinical record in one folder, including digital copies",
              "Note your claim deadline as soon as treatment begins",
              "Ask your vet for an itemized invoice and notes showing the diagnosis",
              "For large planned procedures, ask the insurer whether it offers pre-approval",
              "Submit the claim promptly and complete the form fully",
              "Keep copies of everything you send and every reply you receive",
              "If a claim is declined, ask for the reasons in writing, check them against your policy, and use the insurer's complaints process, and then any ombudsman or regulator route available in your country",
            ],
          },
        ],
      },
      {
        heading: "Is pet insurance worth it?",
        paragraphs: [
          "There is no universal answer. Insurance is a trade: you pay a known, regular cost to avoid the risk of an unknown, large one. Many owners will pay more in premiums over their pet's life than they claim, just as with other kinds of insurance, and that is not a failure. You are paying for protection.",
          "The useful question is whether you could pay a large, sudden vet bill without serious hardship, and without letting money alone decide your pet's treatment.",
        ],
        lists: [
          {
            title: "Insurance is more likely to be worth it if",
            items: [
              "You could not comfortably pay a large vet bill from savings",
              "Your breed is prone to costly conditions",
              "You want to be able to say yes to treatment without hesitating over the cost",
              "A suitable policy is available at a premium you can keep paying for your pet's whole life",
            ],
          },
          {
            title: "It may be less compelling if",
            items: [
              "You already have a dedicated fund large enough to cover a major emergency",
              "The policies available exclude most of the conditions you are worried about",
              "The premium is so high that you are likely to drop it later",
              "Pet insurance is not available locally on reasonable terms",
            ],
          },
        ],
      },
      {
        heading: "If pet insurance is not available, or not right for you",
        paragraphs: [
          "In some places pet insurance is limited, and not everyone wants it. A dedicated savings fund can do much of the same job. It has no exclusions or waiting periods, but it only protects you once it has grown, so it is weaker in the early years than insurance.",
          "Preventive care also lowers your risk of large bills: keeping vaccinations up to date, controlling parasites, caring for your pet's teeth, and keeping your pet at a healthy weight. Our feeding guide explains how to check your dog's body condition. It is also worth asking your vet about payment plans and about treatment options at different price points.",
        ],
        lists: [
          {
            title: "Building a pet emergency fund",
            ordered: true,
            items: [
              "Ask your vet for typical price ranges for emergency consultations, imaging, and surgery.",
              "Set a target, such as enough to cover one major emergency.",
              "Open a separate account just for your pet, and set up an automatic monthly contribution so it does not mix with other spending.",
              "Build it steadily, and top it up after any withdrawal.",
              "Keep it easy to reach, not locked into a long-term investment.",
              "Review the target each year as your pet ages and costs change.",
            ],
          },
        ],
        callout: {
          title: "Be realistic about the early years",
          text: "A fund takes time to grow, and an emergency in the first year could be larger than what you have saved. Some owners combine a cheaper accident-only policy with a savings fund for illness, which gives protection against the biggest sudden risks while the fund builds.",
        },
      },
      {
        heading: "Staying safe when you buy",
        paragraphs: [
          "Money and paperwork are involved, so take a few precautions.",
        ],
        lists: [
          {
            items: [
              "Check that the insurer is licensed by your country's insurance regulator.",
              "Buy from the insurer's official website, or through a licensed broker or agent, and confirm the name before you pay",
              "Do not pay into a personal account, and always get a receipt and the full policy documents in writing",
              "Be wary of offers with no waiting periods, no exclusions, or pressure to pay today",
              "Store your policy documents safely and note the claims contact details",
              "Read reviews and complaint records, but treat them as one signal among several",
            ],
          },
        ],
      },
      {
        heading: "A simple decision process",
        paragraphs: [
          "If you want a plan to follow, here is one.",
        ],
        lists: [
          {
            ordered: true,
            items: [
              "Work out how much of a large vet bill you could pay from savings today.",
              "Find out which licensed insurers offer pet cover where you live.",
              "Get at least three written quotes for your pet, using the same limits.",
              "Compare waiting periods, exclusions, and how each handles pre-existing and hereditary conditions.",
              "Test each policy with two or three realistic scenarios.",
              "Decide between a full policy, accident-only cover plus a savings fund, or a savings fund alone.",
              "Keep your records in order, and review your choice every year.",
            ],
          },
        ],
        callout: {
          title: "The bottom line",
          text: "The best plan is the one you will actually keep, understand, and be able to use when you need it. Start before the emergency, whichever route you choose.",
        },
      },
    ],
    faqs: [
      {
        q: "Is pet insurance worth it for a healthy young pet?",
        a: "Young, healthy pets are the cheapest to insure and have the least history that could be excluded, so this is when cover is easiest to get. Whether it is worth it depends on your savings, your breed's risks, and whether a good policy is available to you. The section above on whether pet insurance is worth it lists the questions to ask yourself.",
      },
      {
        q: "Does pet insurance cover vaccinations and routine checkups?",
        a: "Usually not. Routine care is generally excluded unless you add a wellness option, so check whether the allowance is worth more than the extra premium.",
      },
      {
        q: "Can I get cover for a pet that already has a health problem?",
        a: "Often yes, but the existing condition will normally be excluded as pre-existing. Other conditions may still be covered, so ask the insurer exactly what would be excluded before you buy.",
      },
      {
        q: "Will insurance pay for hereditary conditions in my breed?",
        a: "It depends on the insurer and the plan. Some exclude them, some cover them after a waiting period, and some only on higher tiers. Ask directly about the conditions your breed is known for.",
      },
      {
        q: "Can I switch insurers without losing cover for ongoing conditions?",
        a: "Be careful. A new insurer may treat a condition your pet already has as pre-existing and exclude it, even if your old policy was paying for it. Check this before cancelling a policy.",
      },
      {
        q: "What happens to my premium as my pet gets older?",
        a: "It usually rises, because older pets are more likely to need treatment, and it can also rise after claims or as vet costs go up. Ask how renewals are priced, and make sure you could afford the premium in your pet's senior years.",
      },
      {
        q: "Do I need the insurer's approval before treatment?",
        a: "In an emergency, treatment comes first, so do not delay urgent care. For large planned procedures, ask whether the insurer offers pre-approval or an estimate of what it would pay.",
      },
    ],
  },
];