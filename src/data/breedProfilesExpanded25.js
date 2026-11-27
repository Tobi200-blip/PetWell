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
              "Reactivity to dogs: avoid unplanned meetings and seek professional help early",
            ],
          },
        ],
      },
      {
        id: "grooming",
        title: "Grooming and coat care",
        figure: {
          n: 3,
          alt: "A German Shepherd's thick double coat being brushed with an undercoat rake",
          caption: "Regular brushing helps control the German Shepherd's heavy shedding.",
        },
        paragraphs: [
          "The German Shepherd's double coat sheds heavily all year, with a major shed, called blowing the coat, twice a year in spring and autumn. The thick undercoat comes out in clumps, and the hair spreads over clothes, carpets, and furniture. Regular grooming is the best way to manage it.",
          "Brush two to three times a week, and daily during heavy shedding, using an undercoat rake, a slicker brush, and a de-shedding tool. Work in sections, brushing down to the skin, and pay attention to the thick hair behind the ears, on the legs, and on the tail. A bath followed by a thorough brushing can help release loose undercoat during a blowout.",
          "Bathe every two to three months, or as needed, using a gentle dog shampoo, and rinse thoroughly. Too-frequent bathing can strip natural oils and irritate the skin. Dry the coat well, particularly the undercoat, to prevent hot spots.",
          "Do not shave a German Shepherd. The double coat helps regulate temperature and protects the skin, and shaving can damage the coat, increase the risk of sunburn, and may leave the coat uneven when it grows back.",
          "Trim the nails every two to three weeks, and check the paws for cuts, cracks, and foreign objects. Use grooming time as a health check, feeling for lumps, checking the skin for redness, hot spots, or parasites, and looking at the eyes, ears, and teeth. Practice handling from puppyhood, so that grooming and veterinary care are easy.",
        ],
        lists: [
          {
            title: "A simple grooming schedule",
            items: [
              "Brush: two to three times a week, daily during heavy shedding",
              "Bathe: every two to three months, or as needed",
              "Nails: every two to three weeks",
              "Ears: check weekly and clean only when needed",
              "Teeth: brush daily or at least several times a week",
              "Skin and body check: during every grooming session",
            ],
          },
        ],
      },
      {
        id: "eyes",
        title: "Eye care",
        paragraphs: [
          "German Shepherds can suffer from several eye conditions. The best known is pannus, also called chronic superficial keratitis, an immune-related inflammation of the cornea that is more common in the breed and is made worse by ultraviolet light. Other problems include dry eye, cataracts, and, less commonly, progressive retinal atrophy.",
          "Check the eyes every day. Wipe away normal discharge with a clean, damp cloth or cotton pad, using a fresh one for each eye. Do not use human eye drops unless your vet recommends them.",
          "Contact your vet if you see redness, squinting, cloudiness, a dark film across the surface of the eye, thick or colored discharge, rubbing at the eye, or any change in vision. Pannus is managed for life with eye drops and sun protection, and early treatment protects vision.",
          "Yearly eye exams are a good idea, and responsible breeders have their dogs examined by a veterinary ophthalmologist before breeding.",
        ],
      },
      {
        id: "ears",
        title: "Ear care",
        paragraphs: [
          "German Shepherds have large, erect ears that allow good air circulation, so ear infections are less common than in dogs with heavy, hanging ears. They can still collect wax, dirt, and moisture, and allergies may cause ear problems.",
          "Check the ears weekly for redness, odor, discharge, or signs of discomfort. Healthy ears are pale pink and mostly clean, with no strong smell. If the ears look dirty, use a vet-approved ear cleaner on a cotton ball, wipe only the visible part, and let your dog shake its head.",
          "Never push cotton swabs into the ear canal. Dry the ears after bathing or swimming. Puppies' ears often go through a floppy stage during teething, and they usually stand up by about six months, though some take longer. Do not tape or manipulate the ears without advice from your vet or breeder.",
          "See your vet if your dog shakes its head often, scratches its ears, holds its head tilted, or has redness, discharge, or a bad smell. Ear infections need a proper diagnosis, because the wrong treatment can make things worse.",
        ],
      },
      {
        id: "dental",
        title: "Dental care",
        paragraphs: [
          "Dental disease is a problem for dogs of every breed. Plaque hardens into tartar, which can lead to gum disease, painful teeth, and infection that spreads to other organs. Starting care early is the best prevention.",
          "Brush your dog's teeth daily if you can, or at least several times a week, using a dog toothbrush and dog toothpaste. Never use human toothpaste. Start while your dog is young, and make it a calm routine with praise and a reward.",
          "Dental chews and toys can help reduce plaque but do not replace brushing. Look for products approved by a recognized veterinary dental council, and avoid very hard items such as bones, antlers, and hard nylon toys, which can break the teeth of a strong chewer. Shepherds are powerful chewers, so check toys for wear.",
          "Your vet will check the mouth at each visit and may recommend a professional cleaning. See a vet if you notice bad breath, red or bleeding gums, a broken tooth, drooling, or reluctance to eat or carry things. Working dogs are also prone to broken teeth, so check regularly.",
        ],
      },
      {
        id: "health",
        title: "Health and lifespan",
        paragraphs: [
          "German Shepherds typically live about 9 to 13 years. They are strong, capable dogs, but the breed is prone to several inherited and common conditions, particularly joint, spinal, and digestive problems. Knowing what to watch for helps you catch problems early.",
          "Regular veterinary checkups, a lean body weight, sensible conditioning, and early attention to changes in mobility, digestion, or behavior make the biggest difference. Choosing a breeder who health-tests their dogs also matters a great deal.",
          "See a vet promptly for limping, difficulty rising, weakness or dragging of the back legs, a swollen belly, unproductive retching, persistent diarrhea, weight loss, red or painful eyes, persistent scratching, or any lump that is growing.",
        ],
        lists: [
          {
            title: "Conditions to know about",
            items: [
              "Hip dysplasia: an inherited malformation of the hip joint",
              "Elbow dysplasia: abnormal development of the elbow joint",
              "Degenerative myelopathy: a progressive spinal cord disease",
              "Bloat (gastric dilatation-volvulus): a life-threatening twisting of the stomach",
              "Exocrine pancreatic insufficiency: poor digestion due to a lack of enzymes",
              "Perianal fistulas: painful sores around the anus",
              "Allergies and skin problems",
              "Pannus: an inflammatory eye disease",
              "Von Willebrand disease and hemophilia: bleeding disorders",
              "Cancer, including hemangiosarcoma, and megaesophagus",
            ],
          },
        ],
      },
      {
        id: "conditions",
        title: "Health conditions explained",
        paragraphs: [
          "Hip and elbow dysplasia are the most common orthopedic conditions in the breed. In dysplasia the joint does not fit together properly, which causes wear, pain, and arthritis. Signs include stiffness after rest, difficulty rising, limping, bunny-hopping, and reluctance to climb stairs. A vet diagnoses them with a physical exam and X-rays. Management includes keeping the dog lean, controlled exercise, pain relief, physical therapy, and sometimes surgery. Responsible breeders have the hips and elbows of breeding dogs evaluated.",
          "Degenerative myelopathy is a progressive disease of the spinal cord that usually starts in older dogs, at around eight years of age or more. It begins with weakness and wobbliness in the back legs, scuffing of the toes, and difficulty rising, and slowly progresses over months to years. There is no cure, but physical therapy and good care can help. A DNA test is available, and responsible breeders use it to avoid producing affected puppies.",
          "Bloat is a life-threatening emergency. The stomach fills with gas and may twist on itself, cutting off blood flow. Signs include a swollen belly, drooling, unproductive retching, restlessness, and collapse. Treatment is emergency surgery, and a preventive procedure called a gastropexy can be done in advance. Many vets recommend it for deep-chested breeds.",
          "Exocrine pancreatic insufficiency occurs when the pancreas does not produce enough digestive enzymes. Dogs lose weight despite eating large amounts, and they have loose, greasy, pale stools. It is diagnosed with a blood test and is managed well with enzyme supplements added to food, usually for life. Perianal fistulas, also called anal furunculosis, are painful, draining sores around the anus, with signs such as licking, straining, and a bad smell. They are linked to an immune problem, and treatment usually involves long-term medication and diet management.",
          "Allergies and skin problems are common. Atopic dermatitis shows up as itching, paw licking, red skin, and ear infections, and hot spots can appear suddenly. Food sensitivities can also cause digestive and skin signs. Your vet can help find the cause and recommend management.",
          "Megaesophagus is a condition in which the esophagus loses its ability to move food to the stomach, so the dog regurgitates after meals and may develop pneumonia. It can be inherited or acquired, and it is managed with upright feeding and careful diet changes. Cancer, including hemangiosarcoma, becomes more common with age, so check for lumps regularly. Von Willebrand disease and hemophilia are inherited bleeding disorders, for which DNA tests are available.",
        ],
        note: {
          title: "Important",
          text: "This is general information, not a diagnosis. Always speak to your veterinarian if you are worried about your dog's health, and treat a swollen belly or sudden weakness in the back legs as an emergency.",
        },
      },
      {
        id: "genetics",
        title: "Health testing and choosing a puppy",
        paragraphs: [
          "The breeder you choose has more influence on your German Shepherd's health and temperament than almost anything else. A responsible breeder tests breeding dogs for inherited conditions, selects for stable, confident temperaments, raises puppies in a home environment, socializes them early, and carefully screens buyers.",
          "Ask to see written proof of testing for both parents. Key checks for German Shepherds include hip and elbow evaluations, a DNA test for degenerative myelopathy, and, where available, tests for other inherited conditions. Many breeders also have their dogs assessed for working ability and temperament through trials or titles. Ask about the family history of digestive problems, bloat, and joint disease.",
          "Be cautious about breeders who sell puppies with no health information, who say the breed has no health problems, who advertise dogs for their size or unusual colors, who sell very young puppies, or who sell through unregulated online listings. Exaggerated sloping backs and extreme hind-leg angles are linked to weakness and should be avoided. A good breeder will ask you many questions about your experience, your home, and your lifestyle, and may refuse to sell to an unsuitable home.",
          "Adoption is also an excellent route, and German Shepherds are common in breed rescues and shelters, often as adults. A rescue can tell you about the dog's health, temperament, and how it behaves with strangers, other dogs, and children.",
        ],
        lists: [
          {
            title: "Questions to ask a breeder",
            items: [
              "Can I see hip and elbow test results for both parents?",
              "Have the parents been DNA tested for degenerative myelopathy?",
              "How do the parents behave with strangers and other dogs?",
              "Is there a family history of bloat or digestive problems?",
              "Will you take the dog back at any age if I cannot keep it?",
            ],
          },
        ],
      },
      {
        id: "lifestages",
        title: "Puppy to senior: what changes",
        paragraphs: [
          "A German Shepherd's needs shift across its life. Planning for each stage helps you avoid problems and keep your dog healthy and happy.",
        ],
        lists: [
          {
            title: "Life stages",
            items: [
              "Puppy (to about 12 months): rapid growth, vaccinations as your vet advises, intensive socialization, house training, and a controlled-growth diet",
              "Adolescent (about 12 to 30 months): a testing phase, with lots of energy and possible fear periods, so keep training and socialization going",
              "Adult (about 3 to 7 years): a focused, loyal working companion, daily exercise and mental work, annual checkups, and careful weight management",
              "Senior (from about 8 years): a slower pace, possible joint stiffness and spinal problems, twice-yearly checkups, softer bedding, gentler exercise, and regular checks for lumps and mobility",
            ],
          },
          {
            title: "Caring for an older German Shepherd",
            items: [
              "Keep exercising, but choose lower-impact options such as gentle walks and swimming",
              "Ask your vet about joint support and pain management",
              "Keep your dog at a healthy weight and warm in cold weather",
              "Use ramps and non-slip rugs to help a stiff dog get around",
              "Watch for weakness or scuffing in the back legs, and report it promptly",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are German Shepherds good family dogs?",
        a: "Yes, when well bred, trained, and socialized. They are loyal and protective, but they are strong and need experienced owners, supervision around children, and plenty of activity.",
      },
      {
        q: "Are German Shepherds aggressive?",
        a: "Not by nature. They are protective and reserved with strangers, but a well-bred, well-socialized, well-trained Shepherd is steady and confident. Poor socialization and handling can cause problems.",
      },
      {
        q: "How much exercise does a German Shepherd need?",
        a: "About 60 to 120 minutes a day, including brisk walks, running, and training, plus mental stimulation.",
      },
      {
        q: "Do German Shepherds shed a lot?",
        a: "Yes, heavily all year, with big seasonal sheds in spring and autumn. Regular brushing helps, and the coat should not be shaved.",
      },
      {
        q: "Are German Shepherds easy to train?",
        a: "They are among the most trainable breeds. They are intelligent and eager to work, and they respond best to calm, consistent, reward-based training.",
      },
      {
        q: "Can German Shepherds be left alone?",
        a: "Short periods are fine once trained, but they bond closely and can become bored, anxious, and destructive if left for long hours.",
      },
      {
        q: "What is degenerative myelopathy?",
        a: "It is a progressive disease of the spinal cord that usually affects older dogs, causing weakness in the back legs. A DNA test is available for breeders.",
      },
      {
        q: "How long do German Shepherds live?",
        a: "Usually about 9 to 13 years. Good breeding, a lean weight, and regular veterinary care help them live well.",
      },
    ],
  },

  "french-bulldog": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "England and France",
    summary:
      "Affectionate, clownish, and devoted to its people, the French Bulldog is a compact companion with bat ears and a flat face, and it needs careful heat management, weight control, and a vet who understands flat-faced breeds.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        figure: {
          n: 1,
          alt: "A fawn French Bulldog with large upright bat ears sitting indoors",
          caption: "The French Bulldog's bat ears and flat face are its most recognizable features.",
        },
        paragraphs: [
          "The French Bulldog developed in the 1800s from small bulldogs kept in England, particularly in the Nottingham area, where lace makers valued them as companions. When the Industrial Revolution reduced the demand for handmade lace, many of these craftspeople moved to northern France, taking their small bulldogs with them. In France the dogs became popular, and they were crossed with local breeds, possibly including terriers, producing a smaller dog with erect, bat-like ears.",
          "The breed became fashionable in Paris in the second half of the 1800s, and was kept by shopkeepers, artists, and society people alike. It is often said that the Parisian love of the dog is what gave it its name, French Bulldog, although the details of its development are not fully documented, and some of the popular stories about its past are likely embellished.",
          "French Bulldogs were exported to other countries in the late 1800s, and the breed was soon recognized in North America and England. The American Kennel Club recognized the breed in 1898. A long-running disagreement about ear shape, with some breeders preferring rose ears like the English bulldog and others preferring bat ears, was settled in favor of the bat ear, which is now a hallmark of the breed.",
          "Today the French Bulldog is one of the most popular companion breeds in the world, particularly in cities. Its popularity has led to concerns about breeding for extreme features, since the very flat face, short body, and narrow hips linked to the breed's look are associated with serious health problems. Many veterinary and breed organizations encourage buyers to choose dogs with healthier, less extreme features.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance and size",
        paragraphs: [
          "The French Bulldog is a small, compact, muscular dog with a heavy bone structure and a short, smooth coat. It typically stands about 11 to 13 inches at the shoulder and weighs up to about 28 pounds, with most adults weighing between 16 and 28 pounds. The body is broad and short, with a deep chest, a short back that rises slightly over the loins, and sturdy legs.",
          "The head is large and square, with a flat skull, a short, broad, flat muzzle, and loose skin that forms wrinkles above the nose. The most distinctive feature is the ears, which are large, upright, and rounded at the top, like those of a bat. The eyes are round, dark, and set low, and the nose is broad and black. The tail is naturally short and may be straight or screwed.",
          "The coat is short, smooth, and fine, and it comes in several colors, including brindle, fawn, cream, white, and pied, with various markings. Some colors, such as blue, chocolate, and merle, are sold at a premium but are linked to health problems and are not accepted by many breed standards. The coat sheds lightly to moderately all year.",
        ],
        lists: [
          {
            title: "Quick breed snapshot",
            items: [
              "Height: about 11 to 13 inches",
              "Weight: up to about 28 pounds",
              "Coat: short, smooth, and fine",
              "Colors: brindle, fawn, cream, white, and pied, with markings",
              "Lifespan: roughly 10 to 12 years, though breathing problems can shorten it",
            ],
          },
        ],
      },
      {
        id: "temperament",
        title: "Temperament and personality",
        paragraphs: [
          "French Bulldogs are affectionate, playful, and devoted to their families. They are known for their clownish sense of humor, and many seem to love making their people laugh. A Frenchie wants to be wherever its person is, and it often follows them from room to room, leaning against their legs or climbing onto their laps.",
          "They are also alert and adaptable. French Bulldogs make good watchdogs for their size, usually alerting their owners with a few barks rather than constant noise, and many are friendly with visitors. They are less vocal than many small dogs, but they snort, snore, and grunt a great deal, because of their flat faces.",
          "The breed is intelligent but can be stubborn. A Frenchie may decide that training is optional, particularly if there is no reward, and they can be strong-willed about walks, food, and furniture. They are sensitive to tone and respond best to positive, patient, short training sessions.",
          "French Bulldogs are generally sociable with people and with other dogs, though some can be dog-selective or possessive of their people. They do not like to be alone, and they can develop separation anxiety if left for long hours. They are not high-energy dogs, and they are content with moderate activity and plenty of cuddles.",
        ],
        lists: [
          {
            title: "Personality in a few words",
            items: [
              "Affectionate, playful, and clownish",
              "Devoted to their people",
              "Alert but not very noisy",
              "Stubborn but eager for attention",
              "Dislikes being alone",
            ],
          },
        ],
      },
      {
        id: "suitability",
        title: "Is a French Bulldog right for you?",
        paragraphs: [
          "The French Bulldog is a delightful companion for people who want a small, affectionate, low-energy dog, and who are prepared for the breed's health needs. It suits apartment living, relaxed households, and owners who are home for much of the day. It is not a good choice for people who want an athletic running or hiking partner, who live in a very hot climate without cooling, or who cannot afford potentially high veterinary costs.",
          "With family, Frenchies are generally playful and gentle, and many love children. They are sturdy enough for family life, but their flat faces and short bodies mean they overheat and tire easily, so supervise play, and teach children to handle the dog gently. Never leave any dog alone with young children.",
          "With other pets, most French Bulldogs get along well with other dogs and cats, particularly when raised together. Some can be bossy or possessive, so supervise introductions.",
          "French Bulldogs adapt very well to apartments and small homes, because they need little space and moderate exercise. They are not suited to living outdoors, and they must be kept cool and comfortable at home. They are not good swimmers, because of their heavy front and short legs, so keep them away from pools and deep water unless supervised in a life jacket.",
          "Owners should also be prepared for the costs and care that go with the breed, including breathing assessments, skin and eye care, and veterinary expenses for spine and breathing problems. Consider pet insurance early, check the policy for pre-existing conditions, and be aware that many French Bulldog puppies are born by cesarean section, which adds to breeding costs.",
        ],
        lists: [
          {
            title: "A French Bulldog may suit you if you:",
            items: [
              "Want a small, affectionate, low-energy companion",
              "Are home for much of the day",
              "Can keep your home cool and manage a flat-faced breed",
              "Are prepared for potentially high veterinary costs",
            ],
          },
          {
            title: "Think twice if you:",
            items: [
              "Live in a very hot climate without air conditioning",
              "Want a dog for running, hiking, or swimming",
              "Are away from home for long hours most days",
              "Cannot afford ongoing veterinary care and insurance",
            ],
          },
        ],
      },
      {
        id: "care",
        title: "Exercise and daily care",
        figure: {
          n: 2,
          alt: "A French Bulldog walking on a lead on a shaded path",
          caption: "Short, gentle walks in cool conditions suit the French Bulldog best.",
        },
        paragraphs: [
          "French Bulldogs need only moderate exercise. Most healthy adults are happy with about 30 to 45 minutes of activity a day, divided into a couple of short, gentle walks and some indoor play. They are not built for long distances, jogging, or intense exercise, and their flat faces mean they tire quickly.",
          "Heat is the biggest danger. Flat-faced dogs cannot cool themselves efficiently by panting, and even a mildly warm day can be risky. Walk in the cool early morning or evening, keep walks short, carry water, and rest often. Never leave a French Bulldog in a parked car or in a hot room, and take any sign of heavy panting, drooling, or distress seriously.",
          "Use a harness rather than a collar. A collar can put pressure on the throat and airway of a flat-faced dog, while a well-fitted harness spreads the pressure across the chest. Choose a lightweight, breathable one.",
          "Protect the back. French Bulldogs are prone to spinal problems, so avoid jumping from furniture, use ramps or steps to reach the sofa and bed, and lift your dog with support under the chest and hindquarters. Avoid rough play, and keep your dog at a healthy weight.",
          "Mental stimulation is worth providing. Short training sessions, gentle games, treat puzzles, and sniffing walks keep a clever dog engaged. A bored Frenchie may become vocal, destructive, or fussy.",
        ],
        lists: [
          {
            title: "A sample day for an adult French Bulldog",
            items: [
              "Morning: a 15 to 20 minute gentle walk in cool conditions, followed by breakfast",
              "Midday: rest in a cool room, with a puzzle toy or chew",
              "Afternoon: a short play or training session indoors",
              "Evening: a second short walk, dinner, and a quiet evening on the sofa",
            ],
          },
        ],
      },
      {
        id: "feeding",
        title: "Feeding and nutrition",
        paragraphs: [
          "A complete and balanced dog food made for the dog's life stage is the best starting point for a French Bulldog. Many do well on a good-quality food made for small breeds, and some benefit from foods designed for sensitive skin or digestion, since the breed is prone to allergies. Ask your vet to help you choose a food and to adjust it if problems appear.",
          "How much to feed depends on the dog's weight, age, activity level, and metabolism, and the feeding guide on the label is only a starting point. The table below gives rough daily calorie ranges for healthy adults with moderate activity. Many French Bulldogs are less active than this and need fewer calories, so adjust to your dog's body condition. Many dry foods contain roughly 350 to 450 calories per cup, so a typical adult Frenchie may eat around one to one and a half cups a day, split into two meals.",
          "Puppies need a food formulated for growth, ideally one suited to small breeds. Feed three to four small meals a day for young puppies, moving to two meals by about six months. Ask your vet when to switch to an adult diet, usually around 10 to 12 months.",
          "French Bulldogs gain weight easily, and obesity is one of the biggest threats to their health, because it worsens breathing problems, strains the spine, and makes heat intolerance worse. Measure every meal, limit treats, and avoid feeding from the table. Use small pieces of the daily kibble as training rewards.",
          "Flat-faced dogs often swallow air when they eat, which can cause gas and vomiting. A shallow bowl, a slow feeder, or smaller, more frequent meals can help. Some Frenchies have sensitive stomachs and food allergies, so talk to your vet if you see persistent digestive or skin problems. Foods toxic to dogs, including chocolate, grapes, raisins, onions, garlic, and xylitol, must be kept out of reach.",
        ],
        lists: [
          {
            title: "Rough daily calories for a healthy adult (moderate activity)",
            items: [
              "About 16 pounds: roughly 420 to 570 calories",
              "About 20 pounds: roughly 500 to 675 calories",
              "About 24 pounds: roughly 570 to 775 calories",
              "About 28 pounds: roughly 640 to 870 calories",
            ],
          },
          {
            title: "Feeding habits that help",
            items: [
              "Measure meals with a scale or measuring cup",
              "Feed two meals a day at regular times",
              "Use part of the daily kibble as training rewards",
              "Weigh your dog monthly and adjust portions with your vet",
            ],
          },
        ],
        note: {
          title: "A quick weight check",
          text: "You should be able to feel your dog's ribs easily and see a waist from above. Even a small amount of extra weight is a problem for a flat-faced dog with a short back, so keep your Frenchie lean.",
        },
      },
      {
        id: "training",
        title: "Training and socialization",
        paragraphs: [
          "French Bulldogs are intelligent and eager to please their people, but they can be stubborn and easily distracted, so training needs patience, consistency, and a sense of humor. They respond best to positive, reward-based methods, with tasty treats, gentle praise, and short, varied sessions.",
          "Use positive methods. Harsh corrections, shouting, or physical punishment are unnecessary and can make a sensitive dog anxious or stubborn. Keep sessions to five or ten minutes, end on a success, and stop before the dog loses interest. Because Frenchies tire easily, avoid long sessions in warm conditions.",
          "Start early. Begin training and socialization the day your puppy comes home. Introduce your puppy gently to many people, places, surfaces, sounds, and well-mannered dogs, always at a pace the puppy can handle. A poorly socialized Frenchie can become fearful, snappy, or overprotective. Ask your vet when it is safe to begin outings after vaccinations, and consider a well-run puppy class.",
          "House training can be slow. Many French Bulldogs take longer to learn, and they dislike going out in the rain or cold. Keep to a strict routine, take your dog out often, reward success right away, and never punish accidents. Crate training helps, and many Frenchies like the cozy den, but never crate a flat-faced dog in a hot place.",
          "Practice handling from puppyhood. A Frenchie should learn to accept having its feet, face, wrinkles, ears, mouth, and body touched, so that grooming and veterinary care are easy. Teach loose-leash walking on a harness, and a calm greeting, since an excited Frenchie may snort and pull.",
        ],
        lists: [
          {
            title: "Skills worth teaching early",
            ordered: true,
            items: [
              "Name recognition and eye contact",
              "Sit, down, and stay",
              "Loose-leash walking on a harness",
              "Leave it and drop it, including trading food or toys for treats",
              "Come when called, practiced with high-value rewards in a safe place",
              "Settle on a mat and relax on cue",
              "Going to a crate or bed on cue",
              "Calm acceptance of handling, grooming, and vet care",
            ],
          },
        ],
      },
      {
        id: "behavior",
        title: "Behavior and common problems",
        paragraphs: [
          "Most French Bulldog behavior problems come from the breed's stubbornness, closeness to its people, and tendency to be treated like a fragile toy. Understanding the cause helps you respond early.",
          "Stubbornness is the best known. A Frenchie may simply refuse to move on a walk, ignore commands, or sit down when it has had enough. Keep training positive and consistent, use rewards that matter to your dog, and do not turn it into a battle.",
          "Separation anxiety is common, because French Bulldogs bond closely and do not like to be alone. Signs include destructive chewing, howling, pacing, and toileting accidents. Build alone-time gradually, provide enrichment, and ask your vet or a qualified trainer for help if the problem is serious.",
          "Possessiveness and guarding can occur. Some Frenchies guard their people, their food, toys, or resting places, and may snap if approached. Never punish a growl, because it is a warning. Instead, teach trading games, avoid situations that trigger guarding, and work with a qualified behavior professional if the behavior is strong.",
          "Snoring, snorting, and flatulence are normal for the breed, but they can also signal breathing or digestive problems, so mention any increase to your vet. Barking is usually moderate, and it can be controlled with a quiet cue and rewards for calm behavior.",
          "Small-dog syndrome can develop if a Frenchie is not given rules. A dog that is carried everywhere, never corrected, and allowed to dominate the household can become demanding and difficult. Give your dog boundaries, routine, and the same training you would give a larger breed.",
        ],
        lists: [
          {
            title: "Common issues and first steps",
            items: [
              "Stubbornness: keep training short, positive, and rewarding",
              "Separation anxiety: build alone-time gradually and seek help if severe",
              "Possessiveness and guarding: never punish a growl, teach trading, and consult a professional",
              "Increased snoring or noisy breathing: mention it to your vet",
              "Small-dog behavior: set rules and boundaries from the start",
            ],
          },
        ],
      },
      {
        id: "grooming",
        title: "Grooming and coat care",
        figure: {
          n: 3,
          alt: "A French Bulldog's face wrinkles being wiped with a soft damp cloth",
          caption: "Cleaning and drying the face wrinkles every day helps prevent skin infections.",
        },
        paragraphs: [
          "The French Bulldog's short, smooth coat is easy to care for, but the skin needs attention. The breed sheds lightly to moderately all year, and the short hairs are easy to brush away. The coat has little doggy odor, but the skin folds can cause problems if they are neglected.",
          "Brush once a week with a soft rubber brush or a grooming glove to remove loose hair and keep the coat healthy. Brush more often during heavier shedding periods. A damp cloth or chamois can add shine after brushing.",
          "Clean the face wrinkles every day. The folds above the nose and around the face collect moisture, dirt, and bacteria, and can become red, sore, and smelly. Wipe gently with a damp cloth or a vet-approved wipe, and dry the folds thoroughly. Check the tail pocket, in dogs that have one, and clean it if needed.",
          "Bathe every four to six weeks, or as needed, using a gentle dog shampoo for sensitive skin, and rinse thoroughly. Dry the coat and skin folds well, since a damp coat can cause skin problems, and Frenchies chill easily. Too-frequent bathing can irritate the skin.",
          "Trim the nails every two to three weeks, since French Bulldogs often have thick nails that grow quickly and are not worn down by walking. Check the paws for cuts, cracks, and irritation between the toes. Use grooming time as a health check, feeling for lumps and checking the skin, eyes, ears, and teeth.",
        ],
        lists: [
          {
            title: "A simple grooming schedule",
            items: [
              "Brush: once a week, more during heavy shedding",
              "Face wrinkles: clean and dry every day",
              "Bathe: every four to six weeks, or as needed",
              "Nails: every two to three weeks",
              "Ears: check weekly and clean only when needed",
              "Teeth: brush daily or at least several times a week",
            ],
          },
        ],
      },
      {
        id: "eyes",
        title: "Eye care",
        paragraphs: [
          "The French Bulldog's large, round, prominent eyes and flat face leave the eyes exposed, and the breed is prone to several eye problems. These include corneal ulcers, dry eye, cherry eye, in which a gland in the third eyelid pops out, and entropion, in which eyelids roll inward. Cataracts and eyelash problems also occur.",
          "Check the eyes every day. Wipe away normal discharge with a clean, damp cloth or cotton pad, using a fresh one for each eye. Do not use human eye drops unless your vet recommends them.",
          "Treat eye problems as urgent. Squinting, redness, cloudiness, a blue tint, tearing, or rubbing at the eye can mean an ulcer, which can worsen quickly. Cherry eye appears as a red swelling in the corner of the eye and usually needs surgery. Avoid collars, rough play, and situations that could cause injury to the eyes.",
          "Yearly eye exams are a good idea, and responsible breeders have their dogs examined by a veterinary ophthalmologist before breeding.",
        ],
      },
      {
        id: "ears",
        title: "Ear care",
        paragraphs: [
          "French Bulldogs have large, erect ears that allow reasonable air circulation, but they are prone to ear problems, particularly in dogs with allergies. The ear canals can also be narrow, which traps wax and moisture, and some dogs have ear infections repeatedly.",
          "Check the ears weekly for redness, odor, discharge, or signs of discomfort. Healthy ears are pale pink and mostly clean, with no strong smell. If the ears look dirty, use a vet-approved ear cleaner on a cotton ball, wipe only the visible part, and let your dog shake its head.",
          "Never push cotton swabs into the ear canal. Dry the ears after bathing. Hearing loss can also occur, particularly in dogs with a lot of white, and it may affect one or both ears.",
          "See your vet if your dog shakes its head often, scratches its ears, holds its head tilted, or has redness, discharge, or a bad smell. Ear infections need a proper diagnosis, because the wrong treatment can make things worse, and recurring infections should prompt a check for underlying allergies.",
        ],
      },
      {
        id: "dental",
        title: "Dental care",
        paragraphs: [
          "Dental disease is very common in small and flat-faced breeds, and the French Bulldog is no exception. The short jaw and crowded teeth mean plaque and tartar build up quickly, which can lead to gum disease, painful teeth, and infection that spreads to other organs. Starting care early is the best prevention.",
          "Brush your dog's teeth daily if you can, using a dog toothbrush or finger brush and dog toothpaste. Never use human toothpaste. Start while your dog is young, and make it a calm routine with praise and a reward.",
          "Dental chews and toys can help reduce plaque but do not replace brushing. Look for products approved by a recognized veterinary dental council, and choose sizes suited to a small, short mouth. Avoid very hard items such as bones and antlers, which can break teeth.",
          "Your vet will check the mouth at each visit, and many French Bulldogs need regular professional cleanings. Anesthesia carries extra risk in flat-faced dogs because of their breathing, so talk to your vet about the safest approach. See a vet if you notice bad breath, red or bleeding gums, a broken tooth, or reluctance to eat.",
        ],
      },
      {
        id: "health",
        title: "Health and lifespan",
        paragraphs: [
          "French Bulldogs typically live about 10 to 12 years, although some studies suggest that dogs with severe breathing problems may live shorter lives. The breed is prone to several health problems linked to its flat face, short body, and narrow pelvis, and owners should be prepared to manage them. Knowing what to watch for helps you catch problems early.",
          "Regular veterinary checkups, a lean body weight, careful heat management, and early attention to changes in breathing, eyes, skin, or mobility make the biggest difference. Choosing a breeder who prioritizes health and a less extreme build also matters a great deal.",
          "See a vet promptly for noisy or difficult breathing, collapse, blue or pale gums, a red, cloudy, or painful eye, reluctance to move, yelping, weakness or dragging of the back legs, persistent vomiting, or persistent scratching.",
        ],
        lists: [
          {
            title: "Conditions to know about",
            items: [
              "Brachycephalic obstructive airway syndrome: breathing problems linked to the flat face",
              "Heat intolerance and heatstroke",
              "Intervertebral disc disease and hemivertebrae: spinal problems",
              "Eye problems: corneal ulcers, dry eye, cherry eye, and entropion",
              "Skin fold dermatitis and skin allergies",
              "Food sensitivities and digestive problems",
              "Patellar luxation: a slipping kneecap",
              "Dental disease and crowded teeth",
              "Difficult births, with most litters needing cesarean sections",
              "Obesity, which worsens most other conditions",
            ],
          },
        ],
      },
      {
        id: "conditions",
        title: "Health conditions explained",
        paragraphs: [
          "Brachycephalic obstructive airway syndrome is a group of problems caused by the flat face. The nostrils may be narrow, the soft palate too long, and the windpipe small, making it harder to breathe. Signs include noisy breathing, snoring, snorting, gagging, exercise intolerance, and collapse in heat or excitement. Mild cases are managed by keeping the dog cool, lean, and calm, and by using a harness. Severe cases may need surgery to widen the nostrils or shorten the palate. Ask your vet to assess your puppy's breathing early.",
          "Heatstroke is a serious risk. A flat-faced dog cannot pant effectively, and its body temperature can rise rapidly. Signs include heavy panting, drooling, bright red gums, vomiting, weakness, and collapse. Move the dog to a cool place, offer small amounts of cool water, wet the body with cool water, and go to a vet at once. Prevent it by avoiding exertion in the heat, keeping the home cool, and never leaving the dog in a car.",
          "Spinal problems are common. Hemivertebrae are malformed, wedge-shaped bones in the spine, which can cause the spine to twist and put pressure on the spinal cord, leading to weakness, wobbliness, and incontinence. Intervertebral disc disease occurs when a disc bulges or bursts and presses on the spinal cord. Signs include pain, reluctance to move, yelping, and weakness or paralysis in the back legs. A vet diagnoses these conditions with an examination and imaging, and treatment ranges from strict rest and pain relief to surgery.",
          "Eye problems are common because of the prominent eyes. Corneal ulcers can be caused by scratches, dryness, or irritation from facial hair, and they need prompt treatment to avoid permanent damage. Cherry eye is a red swelling in the corner of the eye and is treated with surgery. Entropion and dry eye may also need treatment.",
          "Skin fold dermatitis is an infection in the folds of the face and tail, where moisture and bacteria collect. Signs include redness, odor, and discharge, and it is prevented by cleaning and drying the folds daily. Skin allergies show up as itching, paw licking, red skin, and ear infections, and may need long-term management. Food sensitivities can also cause digestive upset and skin problems.",
          "Difficult births are common because of the puppies' large heads and the mother's narrow pelvis, and most litters are delivered by cesarean section, so owners who plan to breed need veterinary guidance. Patellar luxation is a condition in which the kneecap slips out of place, with signs such as skipping on a hind leg. Mild cases need monitoring, and severe ones may need surgery.",
        ],
        note: {
          title: "Important",
          text: "This is general information, not a diagnosis. Always speak to your veterinarian if you are worried about your dog's health, and treat heatstroke, collapse, difficulty breathing, and sudden weakness in the back legs as emergencies.",
        },
      },
      {
        id: "genetics",
        title: "Health testing and choosing a puppy",
        paragraphs: [
          "The breeder you choose has more influence on your French Bulldog's health and temperament than almost anything else. A responsible breeder breeds for health and function, selecting dogs with open nostrils, good breathing, healthy eyes, sound spines, and stable temperaments, raises puppies in a home environment, socializes them early, and carefully screens buyers.",
          "Ask to see written proof of testing for both parents. Key checks for French Bulldogs include a breathing assessment or fitness test, an eye examination by a veterinary ophthalmologist, a spinal evaluation by X-ray, patella evaluations, and, where available, DNA tests for inherited conditions. Ask about the family history of breathing, spinal, and eye problems, and look at how the parents breathe and move.",
          "Be cautious about breeders who prefer extreme faces, tiny sizes, or rare colors such as blue, chocolate, or merle, who sell puppies with no health information, who say the breed has no health problems, or who sell very young puppies. Puppies are often sold for very high prices, and the demand has attracted unscrupulous sellers. A dog with a slightly longer muzzle and open nostrils is generally healthier. A good breeder will ask you many questions about your home and lifestyle, and may refuse to sell to an unsuitable home.",
          "Adoption can also be a good route, and French Bulldogs turn up in rescues, often as adults or seniors. A breed rescue can tell you about the dog's health, personality, and how it behaves with other dogs and children. Be ready for ongoing veterinary needs.",
        ],
        lists: [
          {
            title: "Questions to ask a breeder",
            items: [
              "How do the parents breathe at rest and after exercise?",
              "Can I see eye, spine, and patella test results for both parents?",
              "Is there a family history of back, eye, or breathing problems?",
              "Are the puppies raised in the home and socialized?",
              "Will you take the dog back at any age if I cannot keep it?",
            ],
          },
        ],
      },
      {
        id: "lifestages",
        title: "Puppy to senior: what changes",
        paragraphs: [
          "A French Bulldog's needs shift across its life. Planning for each stage helps you avoid problems and keep your dog healthy and happy.",
        ],
        lists: [
          {
            title: "Life stages",
            items: [
              "Puppy (to about 12 months): rapid growth, vaccinations as your vet advises, careful socialization, house training, and protection from falls and heat",
              "Adolescent (about 6 to 18 months): a boisterous, testing phase, with stubbornness and selective hearing, so keep training gentle and consistent",
              "Adult (about 2 to 8 years): a playful, settled companion, short daily walks, face-fold care, annual checkups, and careful weight management",
              "Senior (from about 9 years): a slower pace, possible spine, breathing, and dental problems, twice-yearly checkups, softer bedding, ramps, and gentle exercise",
            ],
          },
          {
            title: "Caring for an older French Bulldog",
            items: [
              "Keep walks short, gentle, and in cool conditions",
              "Ask your vet about breathing checks, dental care, and pain management",
              "Use ramps and non-slip rugs, and avoid jumping",
              "Keep your dog lean, since extra weight worsens breathing and back problems",
              "Watch for noisier breathing, tiredness, or weakness in the back legs, and report them promptly",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are French Bulldogs good family dogs?",
        a: "Yes, for many families. They are affectionate and playful, but they are small, tire easily, and are sensitive to heat, so supervision and gentle handling are important.",
      },
      {
        q: "How much exercise does a French Bulldog need?",
        a: "About 30 to 45 minutes a day, in short, gentle walks and indoor play, in cool conditions.",
      },
      {
        q: "Do French Bulldogs shed?",
        a: "Yes, lightly to moderately all year. Weekly brushing keeps the short coat tidy.",
      },
      {
        q: "Can French Bulldogs live in hot climates?",
        a: "Only with great care. Their flat faces make them very prone to heatstroke, so they need a cool, air-conditioned home and limited outdoor time in warm weather.",
      },
      {
        q: "Why do French Bulldogs snore and snort?",
        a: "Their flat faces and narrow airways make breathing noisier. Mild noise is common, but labored breathing needs a vet check.",
      },
      {
        q: "Can French Bulldogs swim?",
        a: "Many cannot swim safely, because of their heavy front and short legs and flat faces. Keep them away from deep water unless supervised in a life jacket.",
      },
      {
        q: "Are French Bulldogs easy to train?",
        a: "They are intelligent but stubborn. Short, patient, reward-based sessions work best.",
      },
      {
        q: "How long do French Bulldogs live?",
        a: "Usually about 10 to 12 years, though severe breathing problems can shorten life. Good breeding, a lean weight, careful heat management, and regular veterinary care help them live well.",
      },
    ],
  },
};
