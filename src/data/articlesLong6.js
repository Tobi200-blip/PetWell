// Long-form articles, batch 6. Same shape as articlesLong.js, but these are deliberately shorter:
// they cover their own topic and point readers to a fuller guide with `fullGuide` where one exists.
// Read time is calculated automatically from the word count.
// Written for a worldwide audience: no country-specific rules or seasons.

export const longArticles6 = [
  {
    slug: "puppy-proofing-your-home",
    title: "Puppy-proofing your home: a room-by-room checklist",
    category: "Health",
    excerpt:
      "How to make your home safe before a puppy arrives, from cables and cleaning products to bins, plants, gardens, and the things puppies love to chew.",
    date: "Nov 2026",
    featured: false,
    vetReviewed: false,
    reviewedBy: "",
    intro: [
      "Puppies explore the world with their mouths. They chew, swallow, dig, and squeeze into places you would never expect, and most home accidents happen in the first weeks, when everything is new. A little preparation before your puppy arrives prevents most of them.",
      "This checklist walks through your home room by room. It is general information, not veterinary advice. If you think your puppy has swallowed something dangerous, call your vet or a local animal poison service straight away.",
    ],
    keyPoints: [
      "Get down to puppy height and look for anything chewable, swallowable, or reachable.",
      "Secure cables, cleaning products, medicines, and bins, and keep small objects out of reach.",
      "Give your puppy a safe space and plenty of approved chews, so it has something better to do.",
      "Check plants, garden chemicals, fences, and gates before your puppy goes outside.",
    ],
    sections: [
      {
        heading: "Start at puppy height",
        paragraphs: [
          "Kneel or crawl through each room and look at it from your puppy's point of view. Anything within reach is a possible toy, from shoes and remote controls to dangling cords and the stuffing in a cushion. Remove, raise, or block off anything you would not want chewed or swallowed.",
          "Decide on the rules in advance too. Choose which rooms the puppy can use, where it will sleep and play, and which areas are off limits, and put baby gates or closed doors in place before day one. Consistent boundaries make a puppy feel safe and make training easier.",
        ],
      },
      {
        heading: "Living areas",
        paragraphs: [
          "Living rooms hide many hazards. Puppies chew electrical cables, which can cause burns or electric shock, so use cable covers, tuck wires behind furniture, and unplug devices when not in use. Keep remote controls, phones, chargers, and small batteries out of reach, since button batteries are especially dangerous if swallowed.",
        ],
        lists: [
          {
            title: "Living room checklist",
            items: [
              "Cover or tuck away electrical cables and chargers",
              "Remove coins, hair ties, socks, children's toys, and other small objects from the floor",
              "Keep candles, air fresheners, and potpourri out of reach",
              "Secure bookcases and tall furniture that could tip over",
              "Check that fireplaces and heaters are guarded",
              "Move houseplants out of reach, and check them against a list of plants that are toxic to dogs",
            ],
          },
        ],
      },
      {
        heading: "Kitchen and dining areas",
        paragraphs: [
          "The kitchen is the room with the most poison risks, because of food, cleaning products, and bins. Keep food and bins out of reach, with lids that close firmly, and keep cupboard doors shut, using child locks where needed. Never leave drinks or food on low tables.",
        ],
        fullGuide: {
          slug: "foods-dogs-should-never-eat",
          label: "Foods dogs should never eat: a complete safety guide",
        },
      },
      {
        heading: "Bathroom, laundry, and storage",
        paragraphs: [
          "Medicines, vitamins, razors, cleaning products, soaps, and laundry pods are all dangerous. Keep them in closed cupboards or on high shelves, and close the toilet lid, especially if you use cleaning tablets. Keep laundry baskets closed, since socks and underwear are favorite targets and can cause blockages if swallowed. Keep the washing machine and dryer doors shut, and check them before you start them.",
        ],
      },
      {
        heading: "Bedrooms and hallways",
        paragraphs: [
          "Shoes, slippers, jewelry, and clothes are tempting chew items, so put them in closets or on high shelves. Keep doors closed to rooms you do not want your puppy in. Check stairs, balconies, and open windows too: young puppies can fall, so use gates at the top and bottom of stairs, and make sure balcony railings have no gaps a puppy can slip through.",
        ],
      },
      {
        heading: "Garden and outdoor areas",
        paragraphs: [
          "Check your fence for gaps, loose boards, and holes a puppy could dig under or squeeze through, and make sure the gate latches securely. Store garden chemicals, fertilizers, slug and snail bait, rat poison, and antifreeze in locked cupboards, and clean up spills straight away. Antifreeze tastes sweet and is highly poisonous.",
          "Many garden and houseplants are toxic to dogs, including lilies, sago palms, azaleas, and some bulbs. Ask your vet or look up a local list of plants to avoid. Cover ponds and pools, and never leave a puppy unsupervised near water. Also watch for compost heaps, fallen fruit, and mushrooms, which can contain toxins or mold.",
        ],
      },
      {
        heading: "Give your puppy safe things to chew",
        paragraphs: [
          "Chewing is normal, so give your puppy plenty of safe things to chew instead of making it a battle. Offer a variety of sturdy toys of the right size, rotate them to keep them interesting, and swap in a toy whenever your puppy chews something forbidden. Avoid toys with small parts that can come off, and avoid very hard items, such as bones and antlers, which can break teeth.",
        ],
        fullGuide: {
          slug: "positive-reinforcement-training",
          label: "Positive reinforcement dog training: the complete guide",
        },
      },
      {
        heading: "A final check before your puppy comes home",
        paragraphs: [
          "Set up a quiet, safe space with a bed or crate, water, and a few toys, and let your puppy rest there. Save your vet's number and your nearest emergency clinic in your phone. Then do a last sweep of the house on your hands and knees, and remember that puppy-proofing is not a one-off job. As your puppy grows and learns to jump and climb, you will need to adjust.",
        ],
        callout: {
          title: "If your puppy swallows something",
          text: "Call your vet or a local animal poison service straight away, and do not make your puppy vomit unless a vet tells you to. Take any packaging with you.",
        },
      },
    ],
    faqs: [
      {
        q: "When should I start puppy-proofing?",
        a: "Before your puppy comes home, ideally a few days earlier, so you can fix problems calmly and your puppy arrives in a safe space.",
      },
      {
        q: "How long do I need to puppy-proof for?",
        a: "Most puppies chew and explore intensely until they are around one to two years old, and some dogs never stop. Keep the main hazards secured for life, and relax other rules gradually as your dog proves trustworthy.",
      },
      {
        q: "Is a crate or playpen necessary?",
        a: "Not essential, but a crate or a playpen can be a safe place for your puppy when you cannot watch it. Introduce it slowly with treats, and never leave a puppy in a crate for longer than it can manage.",
      },
    ],
  },

  {
    slug: "dog-dental-care",
    title: "Dog dental care: brushing, chews, and when to see a vet",
    category: "Health",
    excerpt:
      "Why your dog's teeth matter, how to brush them, what dental chews can and cannot do, and the signs of dental disease that need a vet.",
    date: "Nov 2026",
    featured: false,
    vetReviewed: false,
    reviewedBy: "",
    intro: [
      "Dental disease is one of the most common health problems in dogs, and many owners do not notice it until it is advanced. Plaque turns into tartar, gums become inflamed and sore, teeth can loosen, and infection can sometimes spread beyond the mouth. The good news is that regular home care makes a big difference.",
      "This guide explains how to look after your dog's teeth, how to brush them, what chews and products can help, and when to see a vet. It is general information, not veterinary advice, and your own vet can show you what suits your dog.",
    ],
    keyPoints: [
      "Brushing daily, or at least several times a week, with dog toothpaste is the most effective home care.",
      "Never use human toothpaste, which can be harmful to dogs.",
      "Dental chews and diets can help, but they do not replace brushing.",
      "Bad breath, red gums, a broken tooth, or reluctance to eat are signs to see your vet.",
    ],
    sections: [
      {
        heading: "Why dental care matters",
        paragraphs: [
          "After a meal, a sticky film of bacteria called plaque builds up on the teeth. If it is not removed, it hardens into tartar within a few days, which irritates the gums and leads to gum disease. Over time, gum disease can destroy the tissue holding the teeth, cause pain and tooth loss, and allow bacteria to enter the bloodstream.",
          "Dogs rarely show pain from their teeth. Many keep eating normally even with serious disease, so regular checks matter. Small and flat-faced breeds are particularly prone, because their teeth are often crowded, but dogs of every size and breed can be affected.",
        ],
      },
      {
        heading: "How to brush your dog's teeth",
        paragraphs: [
          "Start slowly, ideally while your dog is young, but dogs of any age can learn. Use a toothbrush made for dogs or a finger brush, and toothpaste made for dogs, which comes in flavors such as chicken or beef. Never use human toothpaste, because it often contains ingredients that are harmful if swallowed, such as fluoride and xylitol.",
        ],
        lists: [
          {
            title: "A step-by-step approach",
            ordered: true,
            items: [
              "Let your dog lick a little dog toothpaste from your finger, and reward it",
              "Gently rub a finger over the outside of the teeth and gums for a few seconds, then reward",
              "Introduce the brush with a little toothpaste, and brush a few teeth at first",
              "Brush the outer surfaces, where most plaque builds up, in small circles along the gum line",
              "Build up to the whole mouth over a couple of weeks, keeping each session short and positive",
              "Finish with praise, a treat, or a game",
            ],
          },
        ],
        fullGuide: {
          slug: "positive-reinforcement-training",
          label: "Positive reinforcement dog training: the complete guide",
        },
      },
      {
        heading: "Chews, toys, and diets",
        paragraphs: [
          "Dental chews, toys, and diets can help reduce plaque, but they work best alongside brushing, not instead of it. Look for products that carry the approval of a recognized veterinary dental council where one operates in your country, and choose the right size for your dog.",
          "Avoid very hard items such as bones, antlers, hooves, and hard nylon toys, which can break teeth, and avoid items that are too small, which can be swallowed whole. Count chews towards your dog's daily calories, and supervise your dog while it chews.",
        ],
      },
      {
        heading: "Signs of dental problems",
        paragraphs: [
          "Check your dog's mouth regularly, lifting the lips gently to look at the teeth and gums. Healthy gums are usually pink, with no swelling, and the teeth are clean and white or cream. Contact your vet if you notice any of the signs below.",
        ],
        lists: [
          {
            title: "Signs to watch for",
            items: [
              "Bad breath that does not go away",
              "Yellow or brown tartar on the teeth",
              "Red, swollen, or bleeding gums",
              "Loose, broken, or missing teeth",
              "Drooling, pawing at the mouth, or dropping food",
              "Reluctance to eat hard food or to play with toys",
              "Swelling under the eye or on the face",
            ],
          },
        ],
      },
      {
        heading: "Professional dental care",
        paragraphs: [
          "Your vet will check your dog's mouth at routine visits and may recommend a professional cleaning. This is done under general anesthesia, which allows a thorough clean above and below the gum line, X-rays, and treatment of any problem teeth. Anesthesia carries some risk, which your vet will discuss and reduce with checks beforehand, particularly for older dogs and those with health conditions.",
          "Be wary of anesthesia-free cleaning. It cannot clean below the gum line, where disease starts, and many veterinary organizations advise against it. Ask your vet how often your dog needs a check and a cleaning, as this varies by dog.",
        ],
        callout: {
          title: "The bottom line",
          text: "Brush often, choose safe chews, check the mouth regularly, and see your vet if something looks wrong. Starting early is the best way to keep your dog's teeth healthy for life.",
        },
      },
    ],
    faqs: [
      {
        q: "How often should I brush my dog's teeth?",
        a: "Daily is ideal, and at least several times a week gives real benefit. Even occasional brushing is better than none.",
      },
      {
        q: "Can I use human toothpaste?",
        a: "No. Human toothpaste can contain ingredients that are harmful to dogs, including xylitol and fluoride, and dogs cannot spit it out. Use a toothpaste made for dogs.",
      },
      {
        q: "Are dental chews enough?",
        a: "They can help reduce plaque, but they do not replace brushing and vet checks. Use them as an extra, and choose the right size and type for your dog.",
      },
      {
        q: "At what age should I start?",
        a: "As early as possible, so your dog gets used to it, but older dogs can learn too. Go slowly and keep it positive.",
      },
    ],
  },

  {
    slug: "how-to-house-train-a-puppy",
    title: "How to house train a puppy: a step-by-step plan",
    category: "Training",
    excerpt:
      "A practical, reward-based plan for house training: routines, schedules, crate use, handling accidents, nighttime, and what to do when progress stalls.",
    date: "Nov 2026",
    featured: false,
    vetReviewed: false,
    reviewedBy: "",
    intro: [
      "House training is one of the first challenges of life with a puppy, and one of the most stressful. The good news is that it follows a simple formula: a predictable routine, frequent trips outside, immediate rewards, and patience. Most puppies learn the basics within a few weeks, and are reliable within a few months, though every dog is different.",
      "This guide gives you a step-by-step plan, from the first day through nighttime, crates, accidents, and common problems. It uses reward-based methods, and it is general information, not veterinary or behavior advice. If your puppy seems to need to go constantly, strains, or has frequent accidents despite a good routine, ask your vet to check for a medical cause.",
    ],
    keyPoints: [
      "Take your puppy out often, and always after waking, eating, drinking, and playing.",
      "Reward immediately, outside, with a treat and praise, as soon as your puppy goes.",
      "Never punish accidents. Supervise closely, clean up with an enzyme cleaner, and learn from the mistake.",
      "Young puppies cannot hold their bladders for long, so expect to take them out every one to two hours at first.",
      "A crate, used kindly and briefly, can speed up house training, but it is a tool, not a solution on its own.",
    ],
    sections: [
      {
        heading: "How house training works",
        paragraphs: [
          "Puppies are not born knowing where to go. They learn by experience, and by what gets rewarded. Your job is to give your puppy many chances to go in the right place, to reward it when it does, and to prevent chances to go in the wrong place. The more often the right behavior is rewarded, and the less often mistakes happen, the faster your puppy learns.",
          "A rough guide is that a puppy can hold its bladder for about one hour for every month of age, up to a limit, but this varies. Very young puppies need to go out every one to two hours during the day, and often during the night too. Small breeds and very young puppies may need even more frequent trips.",
        ],
      },
      {
        heading: "The basic routine",
        paragraphs: [
          "Choose one spot outside, and take your puppy there every time, on a lead if the area is not enclosed. Wait quietly for a few minutes. Do not play or talk too much, because your puppy needs to concentrate. Add a cue word such as go potty once your puppy starts to go, and when it finishes, give lots of praise and a treat straight away, before you go back inside.",
        ],
        lists: [
          {
            title: "Always take your puppy out",
            items: [
              "First thing in the morning, and last thing at night",
              "Straight after waking from any nap",
              "Within a few minutes of eating or drinking",
              "After playing, training, or excitement",
              "Before being left alone, and again when you come back",
              "At least every one to two hours for young puppies during the day",
            ],
          },
        ],
        fullGuide: {
          slug: "positive-reinforcement-training",
          label: "Positive reinforcement dog training: the complete guide",
        },
      },
      {
        heading: "Supervision and management",
        paragraphs: [
          "Most accidents happen when a puppy is not watched. When you cannot give your puppy your full attention, put it in a safe, small space such as a crate or playpen, or keep it on a lead attached to you. Watch for signs that your puppy needs to go: sniffing the floor, circling, whining, walking to the door, or suddenly stopping play.",
          "If you catch your puppy in the act, calmly interrupt with a light sound, pick it up or lead it outside, and reward it if it finishes in the right place. Never shout, hit, or rub its nose in the mess. This does not teach your puppy where to go. It teaches it to hide from you when it needs to go.",
        ],
      },
      {
        heading: "Using a crate",
        paragraphs: [
          "Most dogs avoid soiling the place where they sleep, so a crate can help with house training when it is used properly. Choose one just big enough for your puppy to stand, turn, and lie down. Introduce it with treats and meals so it becomes a safe, comfortable den, and never use it as a punishment.",
          "Do not leave a puppy in a crate for longer than it can hold its bladder, plus time for its needs. Take your puppy out immediately when you let it out of the crate. Puppies that are left too long may soil the crate, which makes house training harder. If you work long hours, arrange for someone to visit your puppy, or use a playpen with a toilet area instead.",
        ],
      },
      {
        heading: "Nighttime",
        paragraphs: [
          "Young puppies cannot sleep through the night at first, and they usually need to go out once or twice. Take your puppy out last thing before bed, and set an alarm for a trip in the night if needed. Keep it calm and boring: no play, no lights, just a quick trip, a treat, and back to bed. Gradually stretch the time between trips over a few weeks.",
        ],
      },
      {
        heading: "Accidents and cleaning",
        paragraphs: [
          "Accidents will happen, and they are part of learning. Clean them up with an enzymatic cleaner made for pet stains, which breaks down the smell. Ordinary cleaners may leave a scent that tempts your puppy to return to the same spot. Avoid ammonia-based cleaners, which smell like urine to dogs.",
          "Use every accident as information. Ask yourself whether you waited too long, missed a sign, or gave too much freedom too soon, and adjust your routine. Do not punish your puppy afterwards, because it cannot connect the punishment with something it did earlier.",
        ],
      },
      {
        heading: "Apartments, bad weather, and indoor options",
        paragraphs: [
          "If you live in an apartment or cannot go out easily, you can teach your puppy to use a toilet area indoors, such as a puppy pad or a patch of grass in a tray. The principles are the same: take your puppy there regularly, reward successes, and keep it consistent. Be aware that teaching an indoor toilet may make it harder for your puppy to understand that outside is the place to go, so decide on your long-term plan early.",
          "Many puppies dislike rain, snow, and cold. Go out with your puppy, use a coat if needed, and reward heavily. Dogs with short coats and small breeds may feel the cold more.",
        ],
      },
      {
        heading: "When progress stalls",
        paragraphs: [
          "Setbacks are common, especially at around four to six months, when puppies get distracted, or when routines change. Go back a step: take your puppy out more often, supervise more closely, and reward more generously. Make sure everyone in the home follows the same routine.",
          "See your vet if your puppy has frequent accidents despite a good routine, strains to pass urine or stool, passes small amounts often, drinks much more than usual, or has diarrhea. Urinary infections, parasites, and other medical problems can all make house training harder, and they need treatment, not training.",
        ],
        callout: {
          title: "The bottom line",
          text: "Take your puppy out often, reward success right away, supervise closely, and stay patient. Consistency matters more than any trick, and every puppy gets there.",
        },
      },
    ],
    faqs: [
      {
        q: "How long does house training take?",
        a: "Most puppies get the basics in a few weeks, but being fully reliable can take several months. Small breeds often take longer, and every dog is different.",
      },
      {
        q: "Should I use puppy pads?",
        a: "They can help in apartments or when you cannot get outside, but they can also slow down learning to go outdoors. Decide on your long-term goal, and be consistent.",
      },
      {
        q: "My puppy goes outside, then has an accident inside. Why?",
        a: "Puppies often get distracted outside and do not finish. Stay out until your puppy has gone, keep it on a lead, and reward only when it has finished. If it does not go, bring it in, and supervise closely or crate it for a short time before trying again.",
      },
      {
        q: "Is it normal for an adult dog to have accidents?",
        a: "Not usually. Sudden accidents in a house-trained adult are a reason to see your vet, since illness, pain, or age-related changes may be the cause.",
      },
    ],
  },
];
