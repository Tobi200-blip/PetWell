// Each article is one entry. To add a new one, copy an entry and change the content.
// Set vetReviewed to true (and fill reviewedBy) only after a licensed vet has signed off.
// Set featured to true to show the article on the homepage.

export const articles = [
  {
    slug: "choosing-pet-insurance",
    title: "Choosing the right pet insurance",
    category: "Insurance",
    excerpt: "What pet insurance covers, what to check before you buy, and why timing matters.",
    readTime: 5,
    date: "Oct 2026",
    featured: true,
    vetReviewed: false,
    reviewedBy: "",
    sections: [
      {
        heading: "How pet insurance works",
        paragraphs: [
          "In most plans you pay the vet bill first, then claim a reimbursement from the insurer. The plan's premium, deductible, reimbursement percentage, and annual limit decide how much you get back.",
        ],
      },
      {
        heading: "Types of cover",
        paragraphs: [
          "Plans generally come in tiers. Accident-only cover is the cheapest and pays for injuries. Accident and illness cover adds conditions such as infections and digestive problems, and often covers hereditary conditions. Comprehensive plans may also include routine care such as vaccinations and dental checkups.",
        ],
      },
      {
        heading: "What to check before you buy",
        paragraphs: ["Read the policy wording closely. These are the details that most often cause surprises:"],
        list: [
          "Waiting periods before cover starts, especially for illness",
          "Whether pre-existing conditions are excluded",
          "Whether hereditary and breed-specific conditions are covered",
          "Annual and lifetime payout limits",
          "Exclusions, such as dental disease or behavioral treatment",
        ],
      },
      {
        heading: "When to enroll",
        paragraphs: [
          "Earlier is generally better. Conditions that appear before your policy starts are usually treated as pre-existing and excluded, and premiums tend to rise as pets age. Premiums vary widely by breed, age, location, and level of cover, so compare several quotes.",
        ],
      },
    ],
  },
  {
    slug: "how-much-to-feed-your-dog",
    title: "How much should you feed your dog?",
    category: "Nutrition",
    excerpt: "A practical guide to portions, meal frequency, and checking whether your dog is at a healthy weight.",
    readTime: 4,
    date: "Oct 2026",
    featured: true,
    vetReviewed: false,
    reviewedBy: "",
    sections: [
      {
        heading: "Start with the food label",
        paragraphs: [
          "Dog food packaging includes a feeding guide based on your dog's weight. Treat it as a starting point rather than a rule, because the right amount also depends on age, activity level, whether your dog is neutered, and the individual dog's metabolism.",
        ],
      },
      {
        heading: "Meal frequency by age",
        paragraphs: [
          "Young puppies usually eat three to four small meals a day, moving to two meals a day as they approach adulthood. Most adult dogs do well on two measured meals. Large-breed puppies benefit from a large-breed puppy formula, which supports steady growth.",
        ],
      },
      {
        heading: "Check your dog's body condition",
        paragraphs: ["The scale is only part of the picture. A quick hands-on check tells you more:"],
        list: [
          "You should be able to feel the ribs under a thin layer of fat without pressing hard",
          "Looking from above, there should be a visible waist behind the ribs",
          "From the side, the belly should tuck up slightly rather than hang level or low",
        ],
      },
      {
        heading: "Treats and adjustments",
        paragraphs: [
          "A commonly used guideline is to keep treats to around 10 percent of daily calories, and to reduce meals slightly to make room for them. Measure food with a cup or kitchen scale instead of guessing. If your dog is gaining or losing weight, or you're unsure about portions, ask your veterinarian for a target weight and feeding plan.",
        ],
      },
    ],
  },
  {
    slug: "puppy-vaccination-basics",
    title: "Puppy vaccination basics",
    category: "Health",
    excerpt: "The core vaccines, a typical timeline, and why your vet's schedule matters more than any chart.",
    readTime: 4,
    date: "Oct 2026",
    featured: true,
    vetReviewed: false,
    reviewedBy: "",
    sections: [
      {
        heading: "Core vaccines",
        paragraphs: [
          "Core vaccines protect against serious diseases that most dogs are at risk of. They typically include distemper, parvovirus, and adenovirus, usually given as a combined vaccine, plus rabies. Rabies vaccination is required by law in many places.",
        ],
      },
      {
        heading: "A typical timeline",
        paragraphs: [
          "Puppies usually begin vaccinations at around six to eight weeks old. Boosters are then given every few weeks until the puppy is about 16 weeks old, because the protection a puppy gets from its mother's milk can interfere with early vaccines. A booster is commonly given around one year of age, followed by boosters every one to three years depending on the vaccine and your vet's advice.",
        ],
      },
      {
        heading: "Non-core vaccines",
        paragraphs: [
          "Some vaccines are recommended only based on your dog's lifestyle and where you live. Examples include kennel cough, leptospirosis, and Lyme disease. Your vet can advise which are relevant for your dog, for example if it will be boarded, groomed regularly, or spend time around water or wildlife.",
        ],
      },
      {
        heading: "Before the course is finished",
        paragraphs: [
          "Vets commonly advise keeping puppies away from unvaccinated dogs and high-risk public areas until the vaccination series is complete. Schedules vary by country, product, and local disease risk, so follow the plan your own veterinarian sets for your puppy.",
        ],
      },
    ],
  },
  {
    slug: "positive-reinforcement-training",
    title: "Positive reinforcement training: the basics",
    category: "Training",
    excerpt: "How reward-based training works and how to get started with a new dog or puppy.",
    readTime: 5,
    date: "Oct 2026",
    featured: true,
    vetReviewed: false,
    reviewedBy: "",
    sections: [
      {
        heading: "What it means",
        paragraphs: [
          "Positive reinforcement means rewarding behavior you want, so your dog is more likely to repeat it. Rewards can be small treats, praise, or play. It builds trust and keeps training enjoyable, and it avoids the fear and stress that harsh corrections can cause.",
        ],
      },
      {
        heading: "Timing is everything",
        paragraphs: [
          "Reward within a second or two of the behavior so your dog connects the reward with what it just did. Many trainers use a short marker word such as 'yes' or a clicker to pinpoint the exact moment, followed by the treat.",
        ],
      },
      {
        heading: "Start with these five skills",
        paragraphs: [],
        list: [
          "Name recognition: reward every time your dog looks at you when called",
          "Sit: lure with a treat, then reward the moment the dog's rear touches the floor",
          "Come when called: practice at short distances first, and always make it rewarding",
          "Loose-leash walking: reward your dog for staying beside you",
          "Settle: reward calm behavior on a mat or bed",
        ],
      },
      {
        heading: "Keep it short and consistent",
        paragraphs: [
          "Several sessions of five to ten minutes a day work better than one long session. Make sure everyone in the household uses the same cues and rules. Socialization matters too: puppies benefit from positive exposure to new people, sounds, and places during their first few months, so start early and keep experiences gentle.",
        ],
      },
    ],
  },
  {
    slug: "grooming-your-dog-at-home",
    title: "Grooming your dog at home",
    category: "Grooming",
    excerpt: "Brushing, bathing, nails, ears, and teeth: a simple routine that keeps your dog comfortable.",
    readTime: 4,
    date: "Oct 2026",
    featured: false,
    vetReviewed: false,
    reviewedBy: "",
    sections: [
      {
        heading: "Brushing",
        paragraphs: [
          "Brushing removes loose hair, spreads natural oils, and lets you check for lumps, ticks, and skin problems. Short-coated dogs may need it weekly, while long or curly coats often need brushing several times a week to prevent mats.",
        ],
      },
      {
        heading: "Bathing",
        paragraphs: [
          "Most dogs need a bath only every few weeks to a couple of months, depending on coat, lifestyle, and skin. Use a shampoo made for dogs, rinse thoroughly, and dry well, particularly in skin folds and ears.",
        ],
      },
      {
        heading: "Nails, ears, and teeth",
        paragraphs: [],
        list: [
          "Nails: trim every few weeks. If you hear clicking on hard floors, they are likely too long",
          "Ears: check weekly for redness, odor, or discharge, and see your vet if you notice any",
          "Teeth: brush with a dog toothpaste as often as you can. Human toothpaste is not designed to be swallowed, and some contain xylitol, which is toxic to dogs",
        ],
      },
      {
        heading: "Make it positive",
        paragraphs: [
          "Introduce each step gradually and reward calm behavior. Dogs that are handled gently from puppyhood generally accept grooming more easily. If a dog is very anxious or the coat is badly matted, a professional groomer can help.",
        ],
      },
    ],
  },
  {
    slug: "foods-dogs-should-never-eat",
    title: "Foods your dog should never eat",
    category: "Nutrition",
    excerpt: "Common human foods that are dangerous for dogs, and what to do if your dog eats one.",
    readTime: 3,
    date: "Oct 2026",
    featured: false,
    vetReviewed: false,
    reviewedBy: "",
    sections: [
      {
        heading: "Foods to keep away from dogs",
        paragraphs: ["These everyday foods are widely recognized by veterinary sources as harmful to dogs:"],
        list: [
          "Chocolate, especially dark chocolate and baking chocolate",
          "Grapes and raisins, which can cause kidney failure",
          "Xylitol, an artificial sweetener found in some gum, candy, baked goods, and peanut butter",
          "Onions, garlic, and chives",
          "Macadamia nuts",
          "Alcohol and caffeine",
          "Cooked bones, which can splinter",
        ],
      },
      {
        heading: "What to do if your dog eats something toxic",
        paragraphs: [
          "Contact your veterinarian or a local animal poison service straight away, even if your dog seems fine, because some toxins take hours to show symptoms. Have the food, the amount, your dog's weight, and the time it was eaten ready. Do not try to make your dog vomit unless a vet tells you to.",
        ],
      },
      {
        heading: "Prevention",
        paragraphs: [
          "Keep food off counters, use bins with secure lids, and tell visitors and children not to share human food. Check ingredient labels on anything you give your dog as a treat.",
        ],
      },
    ],
  },
];