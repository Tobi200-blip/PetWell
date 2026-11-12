// Expanded long-form breed profiles. These override the shorter versions of the same slug.
// Section fields: id, title, paragraphs[], lists[{title, items[], ordered}], note{title, text}
// Keep vetReviewed false until a licensed vet has signed off on the profile.

export const breedProfilesExpanded = {
  "golden-retriever": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Scotland",
    summary:
      "Friendly, devoted, and eager to please, the Golden retriever is one of the world's most popular family dogs, and one of the most active.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        paragraphs: [
          "The Golden retriever was developed in Scotland in the second half of the 19th century. Its creator is generally considered to be Dudley Marjoribanks, later Lord Tweedmouth, who wanted a retriever that could mark and fetch shot waterfowl over the rough, wet country of his Guisachan estate in the Scottish Highlands. Hunting was done on foot, often in cold water, so the dog needed a soft mouth, a keen nose, a water-repellent coat, and the patience to wait quietly until sent.",
          "Tweedmouth's breeding records are the usual source for the breed's early story. They describe a yellow retriever named Nous being crossed with Belle, a Tweed water spaniel, around 1868, and later bring in other gundog and hound blood, including, according to the records, Irish setter and bloodhound. Historians debate parts of this account, but the picture of a deliberate, carefully recorded breeding program is well supported.",
          "The breed was shown in Britain from the early 1900s, was registered by The Kennel Club in 1911, and was renamed Golden retriever in 1920. The American Kennel Club recognized it in 1925. Since then Goldens have excelled well beyond the field, working as guide dogs, therapy dogs, search-and-rescue dogs, and detection dogs, as well as family companions.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance and size",
        paragraphs: [
          "Golden retrievers are well-balanced, powerful, medium-to-large sporting dogs built for stamina. The head is broad with a friendly, intelligent expression, the eyes are dark and kind, and the feathered tail is carried level or with a gentle upward curve.",
          "The coat is the breed's signature. A dense, water-repellent double coat has a firm outer layer that lies flat or in gentle waves over a thick, soft undercoat that insulates the dog in cold water. Longer feathering grows on the chest, belly, back of the legs, and tail. Colors run through shades of gold, from light cream to deep, rich gold. The American breed standard asks for lustrous shades of gold and discourages extremes that are very pale or very dark, while the British standard also accepts cream.",
          "According to the American Kennel Club standard, males stand about 23 to 24 inches (58 to 61 cm) at the shoulder and weigh 65 to 75 lb (29 to 34 kg), while females are slightly smaller at 21.5 to 22.5 inches (55 to 57 cm) and 55 to 65 lb (25 to 29 kg). Individual dogs vary, and a healthy weight depends on frame as much as on the number on the scale.",
        ],
      },
      {
        id: "temperament",
        title: "Temperament and personality",
        paragraphs: [
          "Goldens are famous for being friendly, devoted, and eager to please. Most greet everyone, including strangers, with a wagging tail, which makes them poor guard dogs but excellent companions. They are generally patient with children and get along well with other dogs and pets when properly socialized.",
          "The breed's retrieving heritage shows in everyday life. Many Goldens carry toys, shoes, and laundry around the house, love water, and are happiest when they have something in their mouth. This is normal and can be channeled with retrieving games and good manners around 'drop it.'",
          "Goldens are people dogs and do not thrive when left alone for long stretches. Boredom and loneliness can show up as chewing, digging, barking, or separation distress. They also mature slowly, often behaving like exuberant puppies until two or three years old, so patience during adolescence pays off.",
        ],
        lists: [
          {
            title: "Typical traits",
            items: [
              "Friendly with people, including strangers",
              "Eager to please and highly trainable",
              "Playful and energetic, often well into adulthood",
              "A strong urge to carry and retrieve objects",
              "Thrives on companionship and dislikes long periods alone",
              "Sensitive to harsh handling",
            ],
          },
        ],
      },
      {
        id: "suitability",
        title: "Is a Golden retriever right for you?",
        paragraphs: [
          "Goldens suit a wide range of households, but they are not low-maintenance dogs. They need daily activity, regular grooming, company, and training, and they shed throughout the year. Being honest about your lifestyle before you choose is the kindest thing you can do for both of you.",
        ],
        lists: [
          {
            title: "Often a good match if you",
            items: [
              "Enjoy daily walks, play, or outdoor activity",
              "Want a friendly, trainable dog for a family",
              "Are home for much of the day, or can arrange company for your dog",
              "Do not mind dog hair on clothes and floors",
              "Can budget for food, grooming, and veterinary care",
            ],
          },
          {
            title: "Think carefully if you",
            items: [
              "Want a watchdog, since most Goldens welcome strangers",
              "Are away from home for long hours most days",
              "Live somewhere very hot and cannot keep a thick-coated dog cool",
              "Prefer a quiet, low-energy dog",
              "Are not prepared for a long, boisterous puppyhood",
            ],
          },
        ],
        note: {
          title: "In hot climates",
          text: "Goldens have a dense double coat bred for cold Scottish water. In warm regions they can do well with care, including shade, fresh water, indoor cooling where possible, and exercise early in the morning or in the evening, but they are not a natural fit for intense heat. Vets generally advise against shaving a double-coated dog, since the coat also protects against heat and sunburn.",
        },
      },
      {
        id: "care",
        title: "Exercise and daily care",
        paragraphs: [
          "Golden retrievers are sporting dogs and need at least an hour of activity a day. Brisk walks, fetch, swimming, and scent games all suit them, and mental work such as training and puzzle toys tires them as effectively as physical exercise.",
          "Without an outlet, a Golden can become destructive, noisy, or hyperactive. Adolescents between roughly six months and two years can be especially energetic, so build exercise and training into the routine early.",
          "Puppies need care too. While their growth plates are still open, avoid repetitive high-impact exercise such as long runs on hard surfaces or lots of jumping, and build up activity gradually. Short, frequent play sessions are better than long ones. Ask your vet what is right for your puppy's age and size.",
        ],
        lists: [
          {
            title: "A sample daily rhythm for an adult",
            items: [
              "Morning: a brisk 20 to 30 minute walk before breakfast",
              "Midday: a short play or training session, and a chance to relieve itself",
              "Afternoon or evening: a longer outing with fetch, swimming, or a sniff-focused walk",
              "Evening: calm time with the family and a chew or puzzle toy",
            ],
          },
        ],
      },
      {
        id: "feeding",
        title: "Feeding and nutrition",
        paragraphs: [
          "Many adult Goldens do well on roughly two to three cups of a quality dry food a day, split into two meals. Calories per cup vary a lot between foods, so the feeding guide on the label and your vet's advice should set the real figure for your dog.",
          "Goldens are famously food-motivated and prone to weight gain, and extra weight worsens joint and heart problems. Measure meals, count treats, and keep your dog lean enough that you can feel the ribs easily.",
          "Puppies should eat a large-breed puppy formula, which supports steady growth and controlled calcium levels, in three to four meals a day at first. As a deep-chested breed, Goldens can be at risk of bloat, so many vets advise avoiding hard exercise and excitement right before and after meals.",
        ],
        note: {
          title: "A quick weight check",
          text: "You should be able to feel your dog's ribs under a thin layer of fat without pressing hard, and see a waist when looking from above. If you cannot, talk to your vet about adjusting portions.",
        },
      },
      {
        id: "training",
        title: "Training and socialization",
        paragraphs: [
          "Goldens are intelligent and highly motivated by praise, play, and food, so reward-based training works best. Harsh methods tend to backfire with this sensitive breed. Keep sessions short, upbeat, and varied.",
          "Socialization matters from the start. Ask your vet when it is safe to take your puppy out and about, then introduce it gently to new people, surfaces, sounds, and well-behaved dogs. A puppy class is a good investment.",
          "Common issues include jumping up, mouthing, pulling on the leash, and counter-surfing. Rather than only saying no, teach an alternative behavior, such as sitting to greet. Goldens also thrive with a job, from obedience and agility to dock diving, scent work, and therapy-dog training.",
        ],
        lists: [
          {
            title: "Skills worth teaching early",
            ordered: true,
            items: [
              "Name recognition and eye contact",
              "Sit, down, and stay",
              "A reliable recall, practiced with great rewards",
              "Loose-leash walking",
              "Drop it and leave it, which matter for a mouthy retriever",
              "Settling calmly on a mat",
            ],
          },
        ],
      },
      {
        id: "grooming",
        title: "Grooming",
        paragraphs: [
          "Goldens shed year-round and heavily once or twice a year when they blow their undercoat. Regular brushing keeps loose hair under control, prevents mats in the feathering, and spreads the coat's natural oils.",
          "Bathe when your dog is dirty or smelly, usually every month or two, and dry thoroughly, since damp coats can lead to skin irritation. Their floppy ears trap moisture and wax, so check and clean them weekly to prevent infections.",
        ],
        lists: [
          {
            title: "A simple grooming routine",
            items: [
              "Brush two to three times a week, and daily during heavy shedding",
              "Bathe about every four to eight weeks, or when needed",
              "Check and clean the ears weekly",
              "Trim nails every three to four weeks",
              "Brush the teeth several times a week",
              "Check the skin for hot spots, ticks, and lumps while you groom",
            ],
          },
        ],
      },
      {
        id: "health",
        title: "Health and lifespan",
        paragraphs: [
          "Golden retrievers typically live 10 to 12 years. They are generally robust, but the breed is predisposed to a number of inherited and age-related conditions, which is why choosing a breeder who health-tests their dogs matters so much.",
          "Regular veterinary checkups, a healthy weight, and early attention to changes in mobility, behavior, or new lumps make the biggest difference. See a vet promptly for limping, difficulty rising, sudden lethargy, a swollen belly, or any lump that is growing.",
        ],
        lists: [
          {
            title: "Conditions to know about",
            items: [
              "Hip and elbow dysplasia: inherited joint malformations that can cause pain and arthritis",
              "Cancer: certain cancers, such as hemangiosarcoma and lymphoma, are a leading cause of death in the breed",
              "Heart disease: including subvalvular aortic stenosis, a narrowing below the aortic valve",
              "Eye disease: such as cataracts, progressive retinal atrophy, and pigmentary uveitis",
              "Skin allergies and hot spots: itchy, inflamed skin, often linked to allergies",
              "Ear infections: floppy, hairy ears hold moisture and wax",
              "Hypothyroidism: an underactive thyroid",
            ],
          },
          {
            title: "What responsible breeders screen for",
            items: [
              "Hip and elbow evaluations through a recognized scheme",
              "A heart examination by a veterinary cardiologist",
              "Annual eye examinations",
              "Relevant genetic tests",
            ],
          },
        ],
      },
      {
        id: "lifestages",
        title: "Puppy to senior: what changes",
        paragraphs: [
          "A Golden's needs shift considerably over its life. Knowing what to expect at each stage helps you plan ahead.",
        ],
        lists: [
          {
            title: "Life stages",
            items: [
              "Puppy (to about 12 months): vaccinations as your vet advises, socialization, house training, short play sessions, and a large-breed puppy diet",
              "Adolescent (about 6 to 24 months): lots of energy and boundary testing, so keep training consistent while the joints are still maturing",
              "Adult (about 2 to 7 years): peak fitness, steady daily exercise, annual checkups, and careful weight management",
              "Senior (from about 7 or 8 years): slower pace, possible joint stiffness, twice-yearly checkups, softer bedding, gentler exercise, and regular checks for lumps and weight changes",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are Golden retrievers good family dogs?",
        a: "Yes. They are known for being gentle, patient, and affectionate with children, though their size and enthusiasm mean young kids should be supervised.",
      },
      {
        q: "Do Golden retrievers shed a lot?",
        a: "Yes. They shed year-round and heavily twice a year, so regular brushing and a good vacuum are part of ownership.",
      },
      {
        q: "How much exercise does a Golden retriever need?",
        a: "Roughly an hour or more per day, split into walks, play, and training. Swimming and fetch are favorites.",
      },
      {
        q: "Are they a good choice for first-time owners?",
        a: "Often, yes. They are trainable and forgiving, but first-time owners should be ready for the exercise commitment and the long puppy phase.",
      },
      {
        q: "Can a Golden retriever live in a hot climate?",
        a: "With care, yes. They need shade, fresh water, indoor cooling where possible, and exercise at cooler times of day, but they are better suited to mild climates.",
      },
      {
        q: "How long do Golden retrievers live?",
        a: "Typically 10 to 12 years. Healthy weight, regular veterinary care, and health-tested breeding lines all help.",
      },
    ],
  },
};