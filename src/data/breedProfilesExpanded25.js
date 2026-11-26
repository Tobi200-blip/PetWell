// Expanded long-form breed profiles, batch 25 (deep-dive standard): German Shepherd and French Bulldog.
// These replace the older, shorter profiles for the same slugs (later batches override earlier ones in breedService.js).
// Same shape as breedProfilesExpanded24.js. A section may carry a `figure` ({ n, alt, caption }),
// which shows src/assets/breeds/<slug>-<n>.jpg as a small photo card (nothing shows if the file is missing).
// Keep vetReviewed false until a licensed vet has signed off on the profile.

export const breedProfilesExpanded25 = {
  "german-shepherd": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Germany",
    summary:
      "Intelligent, loyal, and versatile, the German Shepherd is one of the world's great working dogs and a devoted family guardian, and it needs training, exercise, a job to do, and careful attention to its hips, back, and digestion.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        figure: {
          n: 1,
          alt: "A black and tan German Shepherd standing alert in profile",
          caption: "The German Shepherd was developed in Germany as a versatile herding and working dog.",
        },
        paragraphs: [
          "The German Shepherd was developed in Germany in the late 1800s, from the herding and farm dogs that worked sheep in different regions of the country. These local dogs varied in size, coat, and ability, and they were valued above all for their intelligence, stamina, and willingness to work. A retired cavalry officer, Captain Max von Stephanitz, set out to turn them into a single, standardized breed that combined intelligence, strength, and trainability.",
          "In 1899 von Stephanitz bought a dog named Hektor Linksrhein at a dog show and renamed him Horand von Grafrath. Horand became the first registered German Shepherd, and in the same year von Stephanitz and a group of fellow enthusiasts founded the breed's parent club in Germany. He believed strongly that the breed's purpose was work, and he promoted the dog as a service animal for police, the military, and other roles, as well as for herding.",
          "As Germany industrialized and the need for herding dogs declined, the breed found new roles. German Shepherds were used as messenger, rescue, and sentry dogs in the First World War, and soldiers from other countries who met them brought dogs home. In some English-speaking countries the breed was renamed the Alsatian after the war, to avoid the German name, and the original name was restored in the United Kingdom in the 1970s.",
          "Today the German Shepherd is one of the most popular and widely used working breeds in the world. It serves as a police and military dog, a search and rescue dog, a detection dog, a guide dog, a herding dog, and a family companion. The breed's popularity has also led to wide variation in quality, and some lines have been bred for exaggerated looks at the expense of health, so choosing a breeder carefully is important.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance and size",
        paragraphs: [
          "The German Shepherd is a large, athletic, and well-muscled dog, slightly longer than it is tall, with a noble, confident bearing. Males typically stand about 24 to 26 inches at the shoulder and weigh roughly 65 to 90 pounds, while females stand about 22 to 24 inches and weigh about 50 to 70 pounds. The body is strong and balanced, with a deep chest and a level or gently sloping back.",
          "The head is wedge-shaped and in proportion to the body, with a long muzzle and a black nose. The eyes are almond-shaped and dark, with an intelligent, self-assured expression, and the large, erect ears are carried upright, tipped forward when the dog is alert. The tail is bushy and hangs in a gentle curve when relaxed.",
          "The coat is a dense double coat with a straight, coarse outer layer and a thick undercoat. Most dogs have a medium-length coat, while a long-coated variety is also seen. Colors include black and tan, black and red, sable, solid black, and, less commonly, other colors. The breed sheds heavily all year, with seasonal blowouts, and owners often joke that they wear dog hair as an accessory.",
        ],
        lists: [
          {
            title: "Quick breed snapshot",
            items: [
              "Height: about 22 to 26 inches",
              "Weight: about 50 to 90 pounds",
              "Coat: medium-length double coat, sometimes long",
              "Colors: black and tan, black and red, sable, solid black, and others",
              "Lifespan: roughly 9 to 13 years",
            ],
          },
        ],
      },
      {
        id: "temperament",
        title: "Temperament and personality",
        paragraphs: [
          "German Shepherds are loyal, confident, and highly intelligent. They tend to bond strongly with their families, and a well-bred and well-raised Shepherd is typically devoted, protective, and eager to work with its person. They are serious, alert dogs that take their responsibilities seriously, and many seem to watch over their families.",
          "The breed is naturally watchful and protective. It tends to be reserved with strangers, quick to notice anything unusual, and ready to defend its home and family, which makes it a superb guardian. This also means that early socialization, solid training, and responsible management are essential. A poorly socialized or poorly handled Shepherd can become fearful, suspicious, or aggressive.",
          "German Shepherds are among the most trainable breeds, and they excel at obedience, tracking, protection work, agility, and many other activities. They need a job to do, whether it is formal work, a sport, or daily training, and they need to be mentally challenged. A bored Shepherd can be destructive, noisy, and anxious.",
          "With family, a well-socialized Shepherd is typically affectionate and playful, and many are gentle with children they know. They may try to herd children, nipping at heels, and need training to prevent this. With other dogs, many are fine when properly socialized, but some are dominant or reactive. They have a moderate prey drive, and can chase cats and small animals if not trained.",
        ],
        lists: [
          {
            title: "Personality in a few words",
            items: [
              "Loyal, confident, and highly intelligent",
              "Protective and watchful",
              "Eager to work and learn",
              "Reserved with strangers",
              "Needs a job and mental challenge",
            ],
          },
        ],
      },
      {
        id: "suitability",
        title: "Is a German Shepherd right for you?",
        paragraphs: [
          "The German Shepherd is a magnificent companion for active, committed owners who are ready for a smart, strong, and demanding dog. It is a good choice for people who enjoy training, sport, and the outdoors, and who can give the dog plenty of time, attention, and structure. It is not a good fit for people who are away for long hours, who cannot provide exercise and mental work, or who want an easygoing, low-maintenance dog.",
          "With family, a well-bred and well-trained Shepherd can be a loyal and protective companion. Because of the breed's size, strength, and herding instincts, supervision around young children is essential, and children should be taught to treat the dog with respect. Never leave any dog alone with young children.",
          "With other pets, many Shepherds get along with dogs and cats they have been raised with, particularly when socialized early. They may be dominant with unfamiliar dogs, and some chase small animals. Introductions should be careful and supervised.",
          "German Shepherds can live in a house with a secure yard, and they can adapt to apartment life if their exercise needs are met, but they do best with space and activity. They are not suited to being left alone for long hours, or to living outdoors away from the family. They tolerate a wide range of climates, but the thick coat can make hot weather difficult.",
          "Owners should also be ready for the breed's health and grooming needs. Shepherds are prone to joint and digestive problems, and they shed heavily, so budget for veterinary care and expect hair in your home. In some places, there are rules or insurance conditions that apply to large guardian breeds, so check local rules before getting a dog.",
        ],
        lists: [
          {
            title: "A German Shepherd may suit you if you:",
            items: [
              "Want a loyal, intelligent, and trainable working companion",
              "Enjoy training, sport, and daily activity",
              "Can provide structure, socialization, and mental challenge",
              "Are ready for heavy shedding and ongoing veterinary care",
            ],
          },
          {
            title: "Think twice if you:",
            items: [
              "Are away from home for long hours most days",
              "Want a dog that loves every person and dog it meets",
              "Cannot provide exercise and mental work every day",
              "Are a first-time owner unwilling to invest in training",
            ],
          },
        ],
      },
      {
        id: "care",
        title: "Exercise and daily care",
        figure: {
          n: 2,
          alt: "A German Shepherd running across a field with a ball",
          caption: "German Shepherds are athletic dogs that thrive on running, training, and having a job.",
        },
        paragraphs: [
          "German Shepherds are athletic, high-energy dogs and need regular exercise. Most healthy adults need about 60 to 120 minutes of activity a day, including brisk walks, running, and active play, and many need more. Dogs from working lines can need considerably more.",
          "Mix up the activities. Fetch, hiking, jogging, swimming, and structured games all suit the breed, and many Shepherds excel at agility, obedience, tracking, scent work, herding, and protection sports. Training sessions count as exercise for the mind, and they are as important as physical activity.",
          "Mental stimulation matters just as much. Puzzle feeders, scent games, new tricks, and tasks such as carrying a backpack on walks keep a clever mind occupied. A bored Shepherd will find its own entertainment, and the results, such as chewing, digging, and barking, are rarely welcome.",
          "Protect growing joints. Large-breed puppies should avoid repetitive high-impact activity, long runs, and jumping from heights until their growth plates close, usually at around 18 months. Short, gentle play sessions are better than long, strenuous ones. Avoid exercise just after meals, because the breed is at risk of bloat.",
          "Keep your dog on a lead or in a secure area when in public unless its recall is truly reliable. In hot weather, exercise in the cool parts of the day, bring water, and rest often. In cold weather, most Shepherds enjoy the activity, but watch older dogs with stiff joints.",
        ],
        lists: [
          {
            title: "A sample day for an adult German Shepherd",
            items: [
              "Morning: a 30 to 45 minute brisk walk or run, followed by breakfast",
              "Midday: a puzzle feeder or chew while you are busy",
              "Afternoon: a training session, a sport, or a game of fetch",
              "Evening: a second walk, dinner, and relaxing with the family",
            ],
          },
        ],
      },
      {
        id: "feeding",
        title: "Feeding and nutrition",
        paragraphs: [
          "A complete and balanced dog food made for the dog's life stage is the best starting point for a German Shepherd. Many do well on a good-quality food made for large breeds. Because the breed is prone to digestive problems, joint disease, and skin allergies, ask your vet to help you choose a food and to adjust it if problems appear.",
          "How much to feed depends on the dog's weight, age, activity level, and metabolism, and the feeding guide on the label is only a starting point. The table below gives rough daily calorie ranges for healthy adults with moderate activity. Working and very active dogs may need more. Many dry foods contain roughly 350 to 450 calories per cup, so a typical adult Shepherd may eat around three to four cups a day, split into two meals.",
          "Puppies need a food formulated for large-breed growth, with controlled calories and calcium, because rapid growth can contribute to joint problems. Do not overfeed or supplement calcium, and keep puppies lean. Feed three to four small meals a day for young puppies, moving to two meals by about six months. Ask your vet when to switch to an adult diet, usually around 12 to 18 months.",
          "German Shepherds are deep-chested and at risk of bloat, a life-threatening twisting of the stomach. Feed two or more smaller meals rather than one large one, avoid vigorous exercise for an hour before and after meals, and discourage gulping. Seek emergency care immediately if you see a swollen belly, unproductive retching, or restlessness after a meal.",
          "Some Shepherds have sensitive stomachs, and the breed is prone to a condition called exocrine pancreatic insufficiency, in which the pancreas does not make enough digestive enzymes. Signs include weight loss despite a big appetite, and loose, greasy stools. Talk to your vet about any persistent digestive problems. Keep your dog lean, and keep foods toxic to dogs, including chocolate, grapes, raisins, onions, garlic, and xylitol, out of reach.",
        ],
        lists: [
          {
            title: "Rough daily calories for a healthy adult (moderate activity)",
            items: [
              "About 50 pounds: roughly 990 to 1,340 calories",
              "About 60 pounds: roughly 1,130 to 1,530 calories",
              "About 70 pounds: roughly 1,275 to 1,725 calories",
              "About 80 pounds: roughly 1,410 to 1,905 calories",
              "About 90 pounds: roughly 1,540 to 2,080 calories",
            ],
          },
          {
            title: "Feeding habits that help",
            items: [
              "Measure meals with a scale or measuring cup",
              "Feed two meals a day, never one large meal",
              "Rest quietly for an hour after eating",
              "Check body condition monthly and adjust portions with your vet",
            ],
          },
        ],
        note: {
          title: "A quick weight check",
          text: "You should be able to feel your dog's ribs under the coat without pressing hard and see a waist from above. Because the coat hides the body, feel your dog regularly. Extra weight puts strain on the hips and back.",
        },
      },
      {
        id: "training",
        title: "Training and socialization",
        paragraphs: [
          "German Shepherds are among the most trainable of all breeds. They are intelligent, focused, and eager to work with an owner they respect, and they learn quickly. They respond best to calm, confident, consistent, reward-based training, and they are sensitive to harsh handling, which can create fear or defensive behavior.",
          "Start early. Begin training and socialization the day your puppy comes home. Teach manners from the first day, including loose-leash walking, waiting at doors, not jumping up, and settling calmly. Keep sessions short, varied, and rewarding, and always end on a success. Work with a qualified trainer, particularly if you are a first-time Shepherd owner.",
          "Socialization is the most important part of Shepherd training. From the earliest weeks, introduce your puppy gently to many people, places, surfaces, sounds, and well-mannered dogs, always at a pace the puppy can handle. A poorly socialized Shepherd can become fearful, suspicious, or aggressive. Ask your vet when it is safe to begin outings after vaccinations, and consider a well-run puppy class. Keep socializing through adolescence and adulthood.",
          "Teach impulse control and calm behavior. Skills such as waiting for food, leaving things alone, and settling on a mat are essential for an alert, energetic dog. Teach a reliable recall, practiced on a long line, and a strong leave it. Because the breed is protective, teach the dog that visitors are welcome when you say so.",
          "Give your Shepherd a job. Many dogs benefit from structured activities such as obedience, tracking, scent work, agility, or herding, which channel their intelligence and energy. Practice handling from puppyhood, so that grooming and veterinary care are easy. Never encourage or reward aggression, and do not train a Shepherd for protection work without professional supervision.",
        ],
        lists: [
          {
            title: "Skills worth teaching early",
            ordered: true,
            items: [
              "Name recognition and eye contact",
              "Sit, down, and stay",
              "Settle on a mat and relax on cue",
              "Loose-leash walking, before the dog is too strong to manage",
              "Four paws on the floor when greeting people",
              "Leave it and drop it, including trading food or toys for treats",
              "Come when called, practiced with high-value rewards, always on a long line outdoors",
              "Calm acceptance of handling, grooming, and vet care",
            ],
          },
        ],
      },
      {
        id: "behavior",
        title: "Behavior and common problems",
        paragraphs: [
          "Most German Shepherd behavior problems come from the breed's intelligence, energy, and protective instincts, combined with too little exercise, training, or socialization. Understanding the cause helps you respond early.",
          "Wariness of strangers can turn into fear or aggression if socialization is neglected. Control introductions to visitors, reward calm behavior, and give the dog a safe space away from guests. Always secure the dog before opening a door to unfamiliar people, and make sure fencing and gates are secure.",
          "Herding behavior is natural. A Shepherd may nip at heels, circle, or try to round up children, other pets, and even adults. Redirect the behavior with games and tasks, teach a calm response to moving things, and never let the dog herd children.",
          "Barking is common. Shepherds are alert and vocal, and they may bark at visitors, noises, and passers-by, or out of boredom. Teach a quiet cue, reward calm behavior, and increase exercise and mental work.",
          "Destructive behavior and separation anxiety are common in bored, lonely dogs. A Shepherd can destroy furniture, dig, and howl. Increase exercise and mental work, provide durable chews and puzzle toys, and build alone-time gradually. Ask your vet or a qualified trainer for help if the problem is serious.",
          "Reactivity to other dogs occurs in some Shepherds, particularly if they were poorly socialized, or are frustrated on the lead. Avoid unplanned meetings, reward calm behavior at a distance, and seek professional help early. Fear and nervousness, which can be inherited, also occur, so choose a breeder who selects for a steady temperament.",
        ],
        lists: [
          {
            title: "Common issues and first steps",
            items: [
              "Wariness of strangers: socialize early and control introductions",
              "Herding and nipping: redirect with games and never allow herding of children",
              "Barking: teach a quiet cue and reward calm behavior",
              "Destructive behavior and separation anxiety: increase exercise and build alone-time gradually",
              "Reactivity to