// Expanded long-form breed profiles, batch 28 (deep-dive standard): Rottweiler and Dachshund.
// These replace the older, shorter profiles for the same slugs (later batches override earlier ones in breedService.js).
// Same shape as breedProfilesExpanded27.js. A section may carry a `figure` ({ n, alt, caption }),
// which shows src/assets/breeds/<slug>-<n>.jpg as a small photo card (nothing shows if the file is missing).
// Keep vetReviewed false until a licensed vet has signed off on the profile.

export const breedProfilesExpanded28 = {
  rottweiler: {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Germany",
    summary:
      "Powerful, loyal, and calmly confident, the Rottweiler is a German herding and guarding breed that is devoted to its family, and it needs an experienced owner, early socialization, steady training, and careful attention to joints, weight, and cancer risk.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        figure: {
          n: 1,
          alt: "A black and tan Rottweiler sitting calmly and looking at the camera",
          caption: "The Rottweiler was developed in Germany as a drover and guardian of livestock and families.",
        },
        paragraphs: [
          "The Rottweiler takes its name from the town of Rottweil in southwestern Germany, where the breed was developed over many generations. It is commonly said to descend from the large drover dogs that accompanied Roman armies across the Alps, herding the cattle that fed the soldiers. After the Romans settled in the region, some of these dogs are thought to have remained and bred with local dogs, producing a strong, intelligent, and obedient herding and guarding type. The details of this story are difficult to verify, but it is widely repeated in breed histories.",
          "For centuries, Rottweil was a center of the cattle trade, and the local butchers kept the dogs to drive cattle to market and to guard their property. The dogs were known as the butcher's dogs of Rottweil, and it is often told that butchers tied their money pouches around the dogs' necks to keep them safe from thieves on the way home. The breed's job was demanding, and only dogs that were strong, steady, and trustworthy were kept for breeding.",
          "In the 1800s, railways replaced the long cattle drives, and driving cattle by dog was banned in some areas, so the breed's traditional work declined and it nearly disappeared. Enthusiasts revived it in the early 1900s, forming breed clubs in Germany and writing breed standards. Rottweilers were then trained as police dogs, and later served as messenger, guard, and search dogs in several roles.",
          "The breed spread to other countries in the 1900s, and the American Kennel Club recognized it in 1931. Today the Rottweiler is a popular family guardian and working dog, used in service, search and rescue, therapy, and obedience work. It is also one of the breeds most often subject to legal restrictions, insurance limits, and housing rules, because of its size and its reputation, so owners need to check local requirements carefully.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance and size",
        paragraphs: [
          "The Rottweiler is a large, robust, and powerful dog, with a compact, muscular build and a calm, confident presence. Males typically stand about 24 to 27 inches at the shoulder and weigh roughly 95 to 135 pounds, while females stand about 22 to 25 inches and weigh about 80 to 100 pounds. The body is slightly longer than tall, with a broad, deep chest, a straight back, and strong, well-muscled legs.",
          "The head is broad, with a strong, medium-length muzzle, a black nose, and powerful jaws. The eyes are medium-sized, almond-shaped, and dark brown, with a calm, steady expression, and the ears are medium-sized, triangular, and hang close to the cheeks. The tail is traditionally docked in some countries, although natural tails are common and docking is illegal or discouraged in many places.",
          "The coat is short, coarse, and dense, with a thick undercoat. The color is always black with clearly defined rust to mahogany markings on the cheeks, muzzle, chest, legs, and above the eyes. The coat sheds moderately all year, with heavier shedding in spring and autumn. The dark coat can absorb heat, so Rottweilers can overheat in hot, sunny weather.",
        ],
        lists: [
          {
            title: "Quick breed snapshot",
            items: [
              "Height: about 22 to 27 inches",
              "Weight: about 80 to 135 pounds",
              "Coat: short, coarse, and dense double coat",
              "Color: black with rust to mahogany markings",
              "Lifespan: roughly 8 to 10 years",
            ],
          },
        ],
      },
      {
        id: "temperament",
        title: "Temperament and personality",
        paragraphs: [
          "Rottweilers are loyal, confident, and calm. A well-bred and well-raised Rottweiler is typically steady and self-assured, deeply attached to its family, and often affectionate and playful at home. Many are described as clowns with their people, leaning against them, following them from room to room, and asking for attention, despite their serious appearance.",
          "The breed is naturally protective and watchful. It tends to be reserved with strangers, quick to notice anything unusual, and ready to defend its home and family, which makes it an excellent guardian. This also means that early socialization, solid training, and responsible management are essential. A Rottweiler that is poorly socialized or poorly handled can be fearful, suspicious, or dangerous.",
          "Rottweilers are intelligent and eager to work, and they respond best to calm, confident, consistent, reward-based training. They are strong-willed and can test boundaries, particularly in adolescence, and they will take advantage of an inconsistent owner. They need a job to do, such as obedience, tracking, or carting, and plenty of mental work.",
          "With other dogs, many Rottweilers are dominant or intolerant, particularly toward dogs of the same sex, and some have a strong prey drive. They are very powerful dogs, and an owner needs to be able to control them reliably in all situations, including when visitors arrive or other dogs pass by.",
        ],
        lists: [
          {
            title: "Personality in a few words",
            items: [
              "Loyal, calm, and confident",
              "Protective and watchful",
              "Intelligent and eager to work",
              "Strong-willed and testing",
              "Reserved with strangers and often dominant with other dogs",
            ],
          },
        ],
      },
      {
        id: "suitability",
        title: "Is a Rottweiler right for you?",
        paragraphs: [
          "The Rottweiler is a superb companion for experienced, confident, and committed owners who understand large guardian breeds. It suits people who enjoy training, who can provide structure and socialization for life, and who have a secure property. It is not a good choice for first-time owners, for people who cannot control a very strong dog, or for homes without secure fencing.",
          "With family, a well-bred, well-socialized Rottweiler can be a loyal, gentle, and protective companion, and many are patient with the children they know. Because of the breed's size, strength, and guarding instincts, supervision around children is essential, and it is not wise to leave a Rottweiler alone with visiting children. Teach children to respect the dog's space, food, and toys.",
          "With other pets, many Rottweilers live peacefully with dogs and cats they have been raised with, but they may be intolerant of unfamiliar dogs, and some chase small animals. Introduce any new pet carefully, and consider the dog's sex and temperament, since two dogs of the same sex can clash.",
          "Rottweilers can live in a house with a secure yard, and they can adapt to smaller homes if they get enough exercise, but they need to live indoors with the family. They are not suited to being left alone outside for long hours. They tolerate cool weather well, but the dark coat and heavy build make hot weather difficult.",
          "Owners should also be ready for legal and practical considerations. In some places, breed-specific laws, insurance requirements, or housing restrictions apply, and some countries limit or ban the breed, so check local laws and rental or insurance policies before getting a dog. Be ready, too, for a shorter lifespan and for the costs of veterinary care for a large breed.",
        ],
        lists: [
          {
            title: "A Rottweiler may suit you if you:",
            items: [
              "Have experience with large, powerful guardian breeds",
              "Are calm, confident, and consistent",
              "Can provide secure fencing, training, and lifelong socialization",
              "Are prepared for the costs and shorter lifespan of a large breed",
            ],
          },
          {
            title: "Think twice if you:",
            items: [
              "Are a first-time dog owner",
              "Have young children and frequent visitors who are hard to manage",
              "Want a dog that loves meeting every person and dog",
              "Live in a rental or area with restrictions on the breed",
            ],
          },
        ],
      },
      {
        id: "care",
        title: "Exercise and daily care",
        figure: {
          n: 2,
          alt: "A Rottweiler walking on a lead beside its owner on a path",
          caption: "Daily structured walks and training keep a Rottweiler fit, focused, and calm.",
        },
        paragraphs: [
          "Rottweilers are strong, athletic dogs and need regular exercise. Most healthy adults need about 60 to 90 minutes of activity a day, such as brisk walks, hikes, and play in a secure yard. They do not need endless running, but they do need a daily outlet for their energy, or they can become bored, destructive, and overweight.",
          "Mix up the activities. Walks, fetch, swimming, tracking, and carting suit the breed, and many Rottweilers excel at obedience, rally, agility, and scent work. Rottweilers were bred to pull, so carting and weight pulling, done carefully and with a properly fitted harness, can be satisfying outlets for adult dogs.",
          "Always exercise your Rottweiler on a lead or in a securely fenced area. The breed's size, strength, and guarding instincts make off-lead exercise in public risky, and a dog of this size can cause serious harm if it is not under control. Use a sturdy, well-fitted harness or collar, and make sure you can control the dog in all situations. Choose quiet walking routes, and avoid busy dog parks.",
          "Mental stimulation matters as well. Obedience, scent games, puzzle feeders, and structured training sessions keep an intelligent dog engaged. A bored Rottweiler may dig, chew, or become pushy.",
          "Protect growing joints. Large-breed puppies should avoid repetitive high-impact activity, long runs, and jumping from heights until the growth plates close, usually at around 18 months. In hot weather, walk in the cool parts of the day, bring water, and rest often, since the dark coat and heavy build make Rottweilers prone to overheating. Never leave a Rottweiler in a parked car.",
        ],
        lists: [
          {
            title: "A sample day for an adult Rottweiler",
            items: [
              "Morning: a 30 to 45 minute brisk walk, followed by breakfast",
              "Midday: a chew or puzzle toy while you are busy, in a cool place",
              "Afternoon: a training session, a swim, or play in a secure yard",
              "Evening: a second calm walk, dinner, and rest with the family",
            ],
          },
        ],
      },
      {
        id: "feeding",
        title: "Feeding and nutrition",
        paragraphs: [
          "A complete and balanced dog food made for the dog's life stage is the best starting point for a Rottweiler, and a large- or giant-breed formula is usually recommended. Because the breed is prone to joint problems and obesity, ask your vet to help you choose a food and to adjust it as your dog's weight and activity change.",
          "How much to feed depends on the dog's weight, age, activity level, and metabolism, and the feeding guide on the label is only a starting point. The table below gives rough daily calorie ranges for healthy adults with moderate activity. Many dry foods contain roughly 350 to 450 calories per cup, so a typical adult Rottweiler may eat around four to six cups a day, split into two meals.",
          "Puppies need a food formulated for large-breed growth, with controlled calories and calcium, because rapid growth can contribute to joint problems. Do not overfeed or supplement calcium, and keep puppies lean. Feed three to four small meals a day for young puppies, moving to two meals by about six months. Ask your vet when to switch to an adult diet, usually around 18 months.",
          "Rottweilers love food and can gain weight easily, and obesity worsens joint disease and shortens life. Measure every meal, limit treats, and avoid feeding from the table. Use small pieces of the daily kibble as training rewards, and consider slow feeders for dogs that gulp.",
          "Rottweilers are deep-chested and at risk of bloat, a life-threatening twisting of the stomach. Feed two or more smaller meals rather than one large one, avoid vigorous exercise for an hour before and after meals, and seek emergency care immediately if you see a swollen belly, unproductive retching, or restlessness after a meal. Some Rottweilers guard their food, so teach your dog from puppyhood that people approaching its bowl is a good thing. Keep foods toxic to dogs, including chocolate, grapes, raisins, onions, garlic, and xylitol, out of reach.",
        ],
        lists: [
          {
            title: "Rough daily calories for a healthy adult (moderate activity)",
            items: [
              "About 80 pounds: roughly 1,410 to 1,905 calories",
              "About 95 pounds: roughly 1,600 to 2,165 calories",
              "About 110 pounds: roughly 1,790 to 2,420 calories",
              "About 130 pounds: roughly 2,030 to 2,745 calories",
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
          text: "You should be able to feel your dog's ribs without pressing hard and see a waist from above. Extra weight puts strain on a large dog's joints and heart, so keep your Rottweiler lean.",
        },
      },
      {
        id: "training",
        title: "Training and socialization",
        paragraphs: [
          "Rottweilers are intelligent, willing, and eager to work with an owner they respect, but they are also strong-willed and powerful, so training needs consistency, confidence, and calm authority. Start the day your puppy comes home, and work with a qualified trainer who understands large guardian breeds, particularly if you are inexperienced.",
          "Use positive, reward-based methods, with food, toys, and calm praise, combined with clear rules and boundaries. Harsh corrections, shouting, or physical punishment damage trust and can trigger fear or defensive aggression in a proud, sensitive dog. The Rottweiler should see you as a calm, fair leader, not as a threat. Keep sessions short, varied, and rewarding.",
          "Socialization is the most important part of Rottweiler training. From the earliest weeks, introduce your puppy gently to many people, places, surfaces, sounds, and well-mannered dogs, always at a pace the puppy can handle. A poorly socialized Rottweiler can become fearful, suspicious, or aggressive. Ask your vet when it is safe to begin outings after vaccinations, and consider a well-run puppy class. Continue socialization throughout adolescence and adulthood.",
          "Teach impulse control and calm behavior. Skills such as waiting at doors, leaving food, giving up toys, and settling on a mat are essential for a large, strong dog. Teach loose-leash walking before the dog is too strong to manage, and practice calm greetings so that the dog does not jump on people or lean its weight on them.",
          "Teach a reliable recall and a strong leave it, but recognize that a Rottweiler should not be trusted off-lead in unsecured areas. Practice handling from puppyhood, so that grooming and veterinary care are easy. Never encourage or reward aggression, and do not train a Rottweiler as an attack dog without professional supervision.",
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
          "Many Rottweiler behavior issues are linked to the breed's guarding heritage, strength, and strong will. Understanding the causes helps you respond early, before problems become serious.",
          "Wariness of strangers can turn into fear or aggression if socialization is neglected. Control introductions to visitors, give the dog a safe space away from guests, and reward calm behavior. Always secure the dog before opening a door to unfamiliar people, and make sure fencing and gates are secure and visible, with warning signs.",
          "Dog aggression is a common concern. Many Rottweilers are dominant or intolerant of other dogs, particularly of the same sex, and this tendency usually grows as the dog matures. Avoid unplanned meetings, keep the dog on a lead, and seek professional help early if your dog reacts.",
          "Resource guarding can occur. Rottweilers may guard food, bones, toys, or resting places. Never punish a growl, because it is a warning. Instead, teach trading games, avoid situations that trigger guarding, and work with a qualified behavior professional if the behavior is strong.",
          "Leaning, mouthing, and pushiness are common in an affectionate, heavy dog. Teach calm greetings, redirect mouthing to toys, and do not reward pushy behavior. Pulling and jumping are problems with a dog of this size, so teach loose-leash walking early and use a well-fitted harness or head halter if advised by a trainer.",
          "Destructive behavior and separation anxiety occur in bored, lonely dogs. A Rottweiler can chew furniture, dig, and howl. Increase exercise and mental work, provide strong chews and puzzle toys, and build alone-time gradually. Ask your vet or a qualified trainer for help if the problem is serious.",
        ],
        lists: [
          {
            title: "Common issues and first steps",
            items: [
              "Wariness of strangers: socialize early and control introductions",
              "Dog aggression: avoid unplanned meetings, use a lead, and seek professional help early",
              "Resource guarding: teach trading, never punish growling, and consult a behavior professional",
              "Pushiness and leaning: teach calm greetings and reward calm behavior",
              "Separation anxiety: build alone-time gradually and seek help if severe",
            ],
          },
        ],
      },
      {
        id: "grooming",
        title: "Grooming and coat care",
        figure: {
          n: 3,
          alt: "A Rottweiler's short black coat being brushed with a rubber curry brush",
          caption: "The short coat is easy to care for with a weekly brush.",
        },
        paragraphs: [
          "The Rottweiler's short, dense coat is easy to care for. It sheds moderately all year, with heavier shedding in spring and autumn, when the undercoat comes out in clumps, and the short, stiff hairs can work their way into clothes and furniture. The coat has little doggy odor, and many Rottweilers stay surprisingly clean.",
          "Brush once or twice a week with a rubber curry brush or a grooming glove to remove loose hair and keep the coat healthy. Brush daily during heavier shedding periods. A damp cloth or chamois can add shine after brushing. Because of the dog's size, brushing takes time, so make it a pleasant routine with treats.",
          "Bathe only when your dog is dirty or smelly, usually every two to three months. Bathing a large dog is a big job, so consider a professional groomer with a large tub, or practice with a calm, gentle approach. Use a gentle dog shampoo, rinse thoroughly, and dry the coat well, particularly the undercoat and the skin around the jowls and between the toes.",
          "Trim the nails every two to three weeks. Rottweilers have strong, thick nails that grow quickly, and a dog that is used to nail care from puppyhood is much easier to handle. Check the paws for cuts, cracks, and foreign objects. Check the elbows and hips for pressure sores, and provide thick, soft bedding.",
          "Use grooming time as a health check. Feel for lumps, particularly in the legs and chest, check the skin for redness, hot spots, or parasites, and look at the eyes, ears, and teeth. Report any new lump or limp promptly. Clean the lip folds and wipe away drool as needed. Practice handling from puppyhood, so that grooming and veterinary care are easy, which is especially important for a dog of this size.",
        ],
        lists: [
          {
            title: "A simple grooming schedule",
            items: [
              "Brush: once or twice a week, daily during heavy shedding",
              "Bathe: every two to three months, or as needed",
              "Nails: every two to three weeks",
              "Ears: check weekly and clean only when needed",
              "Teeth: brush daily or at least several times a week",
              "Skin and body check: during every grooming session, feeling for lumps",
            ],
          },
        ],
      },
      {
        id: "eyes",
        title: "Eye care",
        paragraphs: [
          "Rottweilers can suffer from several eyelid and eye conditions. These include entropion, in which the eyelid rolls inward and rubs on the eye, ectropion, in which the lower lid droops and exposes the eye, and distichiasis, in which extra eyelashes irritate the surface. Other problems include cataracts and, less commonly, progressive retinal atrophy.",
          "Check the eyes every day. Wipe away normal discharge with a clean, damp cloth or cotton pad, using a fresh one for each eye. Drooping eyelids collect dirt and debris, so cleaning is important. Do not use human eye drops unless your vet recommends them.",
          "Contact your vet if you see redness, squinting, cloudiness, thick or colored discharge, rubbing at the eye, or any change in vision. Entropion often needs surgical correction, and persistent irritation can damage the surface of the eye.",
          "Yearly eye exams are a good idea, and responsible breeders have their dogs examined by a veterinary ophthalmologist before breeding.",
        ],
      },
      {
        id: "ears",
        title: "Ear care",
        paragraphs: [
          "Rottweilers have medium-sized drop ears that fold over the ear canal, limiting air circulation. Moisture and wax can build up, and ear infections can occur, particularly in dogs that swim or have allergies.",
          "Check the ears weekly for redness, odor, discharge, or signs of discomfort. Healthy ears are pale pink and mostly clean, with no strong smell. If the ears look dirty, use a vet-approved ear cleaner on a cotton ball, wipe only the visible part, and let your dog shake its head.",
          "Never push cotton swabs into the ear canal. Dry the ears thoroughly after bathing or swimming. Allergies can contribute to recurring problems, so long-term management with your vet is common.",
          "See your vet if your dog shakes its head often, scratches its ears, holds its head tilted, or has redness, discharge, or a bad smell. Ear infections need a proper diagnosis, because the wrong treatment can make things worse.",
        ],
      },
      {
        id: "dental",
        title: "Dental care",
        paragraphs: [
          "Dental disease is a problem for dogs of every breed. Plaque hardens into tartar, which can lead to gum disease, painful teeth, and infection that spreads to other organs. Starting care early is the best prevention.",
          "Brush your dog's teeth daily if you can, or at least several times a week, using a dog toothbrush and dog toothpaste. Never use human toothpaste. Start while your dog is young, and make it a calm routine with praise and a reward. A dog that is protective of its mouth needs gentle, gradual training.",
          "Dental chews and toys can help reduce plaque but do not replace brushing. Look for products approved by a recognized veterinary dental council, and avoid very hard items such as bones, antlers, and hard nylon toys, which can break the teeth of a powerful chewer.",
          "Your vet will check the mouth at each visit and may recommend a professional cleaning. Anesthesia carries extra risk in large breeds, so talk to your vet about the safest approach. See a vet if you notice bad breath, red or bleeding gums, a broken tooth, drooling beyond the breed's normal level, or reluctance to eat.",
        ],
      },
      {
        id: "health",
        title: "Health and lifespan",
        paragraphs: [
          "Rottweilers typically live about 8 to 10 years. They are generally strong dogs, but the breed is prone to several inherited and common conditions of large, heavy breeds, particularly joint problems, bone cancer, and obesity. Knowing what to watch for helps you catch problems early.",
          "Regular veterinary checkups, a lean body weight, sensible conditioning, and early attention to changes in behavior, mobility, or lumps make the biggest difference. Choosing a breeder who health-tests their dogs also matters a great deal.",
          "See a vet promptly for limping, difficulty rising, a swollen leg or lump on a bone, a swollen belly, unproductive retching, red or painful eyes, persistent scratching, weakness in the back legs, or any lump that is growing.",
        ],
        lists: [
          {
            title: "Conditions to know about",
            items: [
              "Hip dysplasia and elbow dysplasia: inherited joint malformations",
              "Osteosarcoma: an aggressive bone cancer, and other cancers",
              "Cruciate ligament injuries",
              "Bloat (gastric dilatation-volvulus): a life-threatening twisting of the stomach",
              "Subvalvular aortic stenosis: an inherited heart defect",
              "Juvenile laryngeal paralysis and polyneuropathy: an inherited nerve disease",
              "Eye problems: entropion, ectropion, and cataracts",
              "Hypothyroidism: an underactive thyroid gland",
              "Allergies and skin problems",
              "Obesity, which worsens most other conditions",
            ],
          },
        ],
      },
      {
        id: "conditions",
        title: "Health conditions explained",
        paragraphs: [
          "Hip and elbow dysplasia are the most common orthopedic conditions. In dysplasia the joint does not fit together properly, which causes wear, pain, and arthritis. Because of the Rottweiler's great weight, the effects can be severe. Signs include stiffness after rest, difficulty rising, limping, bunny-hopping, and reluctance to climb stairs. A vet diagnoses them with a physical exam and X-rays. Management includes keeping the dog lean, controlled exercise, pain relief, physical therapy, and sometimes surgery. Responsible breeders have the hips and elbows of breeding dogs evaluated.",
          "Cancer is a major cause of death in the breed, and osteosarcoma, a cancer of the bone, is particularly common in large dogs. Signs include lameness that does not go away, and a painful, firm swelling on a leg, often near a joint. A vet diagnoses it with X-rays and other tests, and treatment often involves surgery and chemotherapy. Check your dog for lumps regularly, and report any limp that lasts more than a few days, any new lump, or any unexplained weight loss promptly. Other cancers, such as lymphoma and hemangiosarcoma, also occur.",
          "Cruciate ligament tears are common in large, heavy breeds. A dog may yelp, then hold a leg off the ground or walk with a limp. A vet diagnoses it with an exam and sometimes X-rays, and treatment usually involves surgery. Keeping your dog lean is the best prevention.",
          "Bloat is a life-threatening emergency. The stomach fills with gas and may twist on itself, cutting off blood flow. Signs include a swollen belly, drooling, unproductive retching, restlessness, and collapse. A dog can die within hours, and treatment is emergency surgery. A preventive procedure called a gastropexy can be done in advance, and many vets recommend it for large, deep-chested breeds.",
          "Subvalvular aortic stenosis is an inherited heart defect in which a ring of tissue below the aortic valve narrows the outflow from the heart. Mild cases may cause no signs, while severe cases can cause fainting, exercise intolerance, and sudden death. It is often first detected as a heart murmur in a young dog. Responsible breeders have breeding dogs examined by a veterinary cardiologist.",
          "Juvenile laryngeal paralysis and polyneuropathy is an inherited disease in young Rottweilers, in which the nerves that control the voice box and limbs deteriorate. Signs, which start in the first months of life, include noisy breathing, a change in the bark, and weakness in the back legs. A DNA test is available, and responsible breeders use it. Entropion and ectropion are corrected by surgery if they cause irritation, and hypothyroidism is managed well with daily medication. Allergies show up as itching, paw licking, red skin, and ear infections.",
        ],
        note: {
          title: "Important",
          text: "This is general information, not a diagnosis. Always speak to your veterinarian if you are worried about your dog's health, and treat a swollen belly, sudden collapse, or a limp that does not go away as urgent.",
        },
      },
      {
        id: "genetics",
        title: "Health testing and choosing a puppy",
        paragraphs: [
          "The breeder you choose has more influence on your Rottweiler's health and temperament than almost anything else. A responsible breeder tests breeding dogs for inherited conditions, selects for stable, confident temperaments, raises puppies in a home environment, socializes them early, and carefully screens buyers.",
          "Ask to see written proof of testing for both parents. Key checks for Rottweilers include hip and elbow evaluations, a heart examination by a veterinary cardiologist, an eye examination by a veterinary ophthalmologist, and a DNA test for juvenile laryngeal paralysis and polyneuropathy. Ask about the temperaments of the parents, particularly how they behave with strangers and other dogs, and about the family history of cancer, including the ages at which relatives developed it and died, since longevity is a key concern in the breed.",
          "Be cautious about breeders who sell puppies with no health information, who advertise dogs for their aggression, size, or as guard dogs, who offer oversized dogs as more valuable, or who sell very young puppies. A good breeder will ask you many questions about your experience, your home, and your fencing, and may refuse to sell to an unsuitable home.",
          "Adoption can also be a good route, and Rottweilers are common in breed rescues and shelters, often as adults. A breed rescue can tell you about a dog's history, temperament, and how it behaves with other dogs, children, and strangers. Many rescued Rottweilers are loving, well-behaved companions, but approach adoption with care and ask for a behavior assessment.",
        ],
        lists: [
          {
            title: "Questions to ask a breeder",
            items: [
              "Can I see hip, elbow, heart, and eye test results for both parents?",
              "Have the parents been DNA tested for juvenile laryngeal paralysis and polyneuropathy?",
              "How do the parents behave with strangers and other dogs?",
              "What is the family history of cancer, and at what ages?",
              "Will you take the dog back at any age if I cannot keep it?",
            ],
          },
        ],
      },
      {
        id: "lifestages",
        title: "Puppy to senior: what changes",
        paragraphs: [
          "A Rottweiler's needs shift across its life. Planning for each stage helps you avoid problems and keep your dog healthy and happy.",
        ],
        lists: [
          {
            title: "Life stages",
            items: [
              "Puppy (to about 12 months): rapid growth, vaccinations as your vet advises, intensive socialization, house training, and a controlled-growth diet",
              "Adolescent (about 12 to 30 months): a testing phase, with the first signs of guarding and dog selectivity, so keep training and socialization going",
              "Adult (about 3 to 6 years): a calm, settled, powerful companion, daily exercise, annual checkups, regular lump checks, and careful weight management",
              "Senior (from about 7 years): a slower pace, possible joint stiffness, twice-yearly checkups, softer bedding, gentler exercise, and regular checks for lumps, limping, vision, and heart health",
            ],
          },
          {
            title: "Caring for an older Rottweiler",
            items: [
              "Keep exercising, but choose lower-impact options such as gentle walks and swimming",
              "Ask your vet about joint support and pain management",
              "Keep your dog at a healthy weight and cool in hot weather",
              "Use ramps and non-slip rugs to help a stiff dog get around",
              "Check for lumps and limps regularly, and report any new ones promptly",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are Rottweilers good family dogs?",
        a: "They can be devoted to their own family, but their size, strength, and guarding instincts mean they need experienced owners, early socialization, and supervision around children.",
      },
      {
        q: "Are Rottweilers aggressive?",
        a: "Not by nature. They are calm and confident but protective and reserved with strangers, and many are intolerant of other dogs. Early socialization, training, and good management are essential.",
      },
      {
        q: "How much exercise does a Rottweiler need?",
        a: "About 60 to 90 minutes a day, including brisk walks and play in a secure yard, plus mental stimulation.",
      },
      {
        q: "Do Rottweilers shed a lot?",
        a: "They shed moderately all year, with heavier shedding in spring and autumn. Weekly brushing helps.",
      },
      {
        q: "Are Rottweilers good for first-time owners?",
        a: "Generally not. They are powerful, strong-willed guardian dogs that need an experienced, confident owner.",
      },
      {
        q: "Can a Rottweiler live in a hot climate?",
        a: "With care. The dark coat and heavy build make them prone to overheating, so they need shade, water, cool resting places, and exercise in the cool parts of the day.",
      },
      {
        q: "Are Rottweilers easy to train?",
        a: "They are intelligent and eager to work with an owner they respect, but strong-willed. Consistent, calm, reward-based training with clear boundaries works best.",
      },
      {
        q: "How long do Rottweilers live?",
        a: "Usually about 8 to 10 years. Good breeding, a lean weight, and regular veterinary care help them live well.",
      },
    ],
  },

  dachshund: {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Germany",
    summary:
      "Bold, curious, and unmistakably long and low, the Dachshund is a German badger-hunting hound with a big personality, and it needs careful back protection, weight control, and patient training.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        figure: {
          n: 1,
          alt: "A red smooth-coated Dachshund standing alert on grass",
          caption: "The Dachshund was developed in Germany to hunt badgers underground.",
        },
        paragraphs: [
          "The Dachshund was developed in Germany several centuries ago as a hunting dog. Its name means badger dog in German, from the words for badger and dog, and it describes the breed's original job: following badgers into their burrows, and either driving them out or holding them at bay until the hunter arrived. The breed's long body, short legs, deep chest, and powerful front paws are all suited to digging and working in tight tunnels.",
          "The Dachshund descends from German hounds and terriers, and early dachshunds were bred in several sizes and coat types for different kinds of hunting. Larger dogs were used against badgers and for tracking wounded deer and boar, while smaller ones were used to go after rabbits and foxes in burrows. These size differences are the origin of today's standard and miniature varieties, and, in some countries, a still smaller rabbit-sized variety.",
          "The three coat types, smooth, longhaired, and wirehaired, developed from crosses with other breeds. Smooth coats are thought to be the oldest, the longhaired were produced by crossing with spaniel-type dogs, and the wirehaired by crossing with rough-coated terriers, giving protection in thick brush. The breed was recognized by kennel clubs in the late 1800s, and the American Kennel Club recognized it in 1885.",
          "Today the Dachshund is one of the most popular companion breeds in the world, recognized by its shape and bold personality. It still hunts in some places, and it is also kept as a family pet, a show dog, and a competitor in earthdog trials, which test the dog's instinct to go to ground. Its popularity has also drawn attention to its health, particularly spinal disease, and breeders increasingly focus on sound, moderate builds.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance and size",
        paragraphs: [
          "The Dachshund is a low, long, and muscular dog with a deep chest, short legs, and a confident, alert bearing. It comes in two sizes in many countries. The standard stands about 8 to 9 inches at the shoulder and typically weighs 16 to 32 pounds. The miniature stands about 5 to 6 inches and weighs 11 pounds or less. Some countries also recognize a smaller rabbit-sized variety, measured by chest size.",
          "The head is long and tapering, with a slightly arched skull, a long muzzle, and a dark nose. The eyes are almond-shaped and dark, with an intelligent, spirited expression, and the long, rounded ears hang close to the head and are set high. The tail is a continuation of the spine, carried low and slightly curved.",
          "The breed comes in three coat types. The smooth coat is short, dense, and glossy. The longhaired coat is soft and straight or slightly wavy, with feathering on the ears, chest, legs, and tail. The wirehaired coat is a harsh, tight outer coat with a soft undercoat, with a beard and bushy eyebrows. Colors include red, black and tan, chocolate and tan, cream, and dapple, brindle, and piebald patterns. Coat types shed lightly to moderately, with the smooth and wirehaired types needing the least grooming.",
        ],
        lists: [
          {
            title: "Quick breed snapshot",
            items: [
              "Height: about 5 to 9 inches",
              "Weight: miniature up to 11 pounds, standard about 16 to 32 pounds",
              "Coat: smooth, longhaired, or wirehaired",
              "Colors: red, black and tan, chocolate and tan, cream, dapple, brindle, and others",
              "Lifespan: roughly 12 to 16 years",
            ],
          },
        ],
      },
      {
        id: "temperament",
        title: "Temperament and personality",
        paragraphs: [
          "Dachshunds are bold, curious, and clever. They are lively, spirited dogs with a big personality and a lot of self-confidence, and they often act as though they are much larger than they are. A Dachshund is typically devoted to its family, affectionate, and playful, and many love to burrow under blankets and sleep close to their people.",
          "They are also independent and stubborn. Dachshunds were bred to work alone underground, making their own decisions, and that independence shows in everyday life. They are intelligent, but they are not always eager to please, and training needs patience, consistency, and a sense of humor.",
          "The breed has a strong prey drive and a love of digging. A Dachshund will chase small animals, follow scents, and dig in the garden, the sofa, or the bedding, and it is determined enough to follow a trail for a long way. They are also vocal, with a surprisingly loud bark for a small dog, and they make alert watchdogs.",
          "With strangers, many Dachshunds are reserved or suspicious, and they may bark at visitors. With other dogs, they can be bold and even confrontational, regardless of size, and the smaller varieties can be wary of larger dogs. Dachshunds are loyal, and many bond closely with one person, and they do not like to be left alone for long hours.",
        ],
        lists: [
          {
            title: "Personality in a few words",
            items: [
              "Bold, curious, and clever",
              "Devoted and affectionate with their family",
              "Independent and stubborn",
              "A strong prey drive and a love of digging",
              "Alert, vocal, and sometimes suspicious of strangers",
            ],
          },
        ],
      },
      {
        id: "suitability",
        title: "Is a Dachshund right for you?",
        paragraphs: [
          "The Dachshund is a charming companion for owners who enjoy a bold, funny, and loyal dog, and who are prepared to protect its back and manage its stubborn streak. It is not a good choice for people who want an obedient, off-lead dog, who have many stairs and high furniture and will not use ramps, or who are away from home for long hours.",
          "With family, Dachshunds are generally affectionate and playful with the people they know, but they are small and fragile-backed, and they can snap if they are hurt or startled. They are usually better suited to homes with older, gentle children who can handle a small dog carefully. Supervise all interactions with young children, and teach children never to pick the dog up by the front legs or to handle it roughly.",
          "With other pets, many Dachshunds live happily with dogs and cats they have been raised with, but they may chase small animals, and some are bossy or confrontational with other dogs. Introduce new pets carefully.",
          "Dachshunds adapt well to apartments and small homes, because they need little space and moderate exercise. They can be noisy, so consider neighbors. They need a securely fenced yard if they have outdoor access, because they dig, and they can squeeze through small gaps. They dislike cold and wet weather because of their low bodies and short coats, so a coat may be needed in winter.",
          "Owners should also be prepared to manage the home for the dog's spine. Stairs, jumping on and off furniture, and rough play all strain the back, so ramps, steps, and supervision are part of life with a Dachshund. Be ready, too, for the costs of veterinary care, since back surgery for a Dachshund can be expensive, and consider pet insurance early.",
        ],
        lists: [
          {
            title: "A Dachshund may suit you if you:",
            items: [
              "Want a small, bold, devoted companion with a lot of personality",
              "Are willing to protect its back with ramps and careful handling",
              "Can handle a stubborn, vocal, digging dog with humor and patience",
              "Are home for much of the day",
            ],
          },
          {
            title: "Think twice if you:",
            items: [
              "Want a dog that is reliably obedient off the lead",
              "Have young children who are rough with pets",
              "Live somewhere with lots of stairs and will not use ramps or steps",
              "Are away from home for long hours most days",
            ],
          },
        ],
      },
      {
        id: "care",
        title: "Exercise and daily care",
        figure: {
          n: 2,
          alt: "A Dachshund walking on a lead on a grassy path",
          caption: "Regular walks on the flat keep a Dachshund fit, which protects the back.",
        },
        paragraphs: [
          "Dachshunds are energetic, sturdy dogs and need regular exercise, though less than many hounds. Most healthy adults need about 30 to 60 minutes of activity a day, divided into walks and play. Regular, moderate exercise keeps the muscles that support the spine strong and helps control weight, which is vital for the breed.",
          "Choose activities that suit the body. Walks on the flat, sniffing games, and gentle play are ideal. Avoid activities that put strain on the back, such as jumping from heights, climbing many stairs, and rough wrestling. Many Dachshunds enjoy scent work, earthdog trials, and tracking, which use their natural instincts without strain, and some enjoy swimming.",
          "Keep your Dachshund on a lead or in a secure area when in public. The breed's nose and prey drive mean that when a scent appears, the dog may follow it and ignore your calls. Use a well-fitted harness rather than a collar, since a harness takes pressure off the neck and spine.",
          "Mental stimulation matters. Puzzle feeders, scent games, hide-and-seek, and short training sessions keep a clever mind occupied. A bored Dachshund may dig, bark, or chew.",
          "Protect the back at home. Use ramps or steps to reach the sofa and bed, block access to stairs if needed, and lift your dog with one hand under the chest and the other supporting the hindquarters, keeping the spine level. Be careful in cold weather, since Dachshunds feel the chill, and provide a coat and warm bedding.",
        ],
        lists: [
          {
            title: "A sample day for an adult Dachshund",
            items: [
              "Morning: a 15 to 30 minute walk on a harness, followed by breakfast",
              "Midday: a puzzle feeder or chew while you are busy",
              "Afternoon: a scent game or short training session",
              "Evening: a second walk, dinner, and cuddles under a blanket",
            ],
          },
        ],
      },
      {
        id: "feeding",
        title: "Feeding and nutrition",
        paragraphs: [
          "A complete and balanced dog food made for the dog's life stage is the best starting point for a Dachshund. Many do well on a good-quality food made for small breeds. Because the breed is prone to obesity and back problems, ask your vet to help you choose a food and to adjust it as your dog's weight and activity change.",
          "How much to feed depends on the dog's size, weight, age, activity level, and metabolism, and the feeding guide on the label is only a starting point. The table below gives rough daily calorie ranges for healthy adults with moderate activity. Many Dachshunds are less active than this and need fewer calories, so adjust to your dog's body condition. Many dry foods contain roughly 350 to 450 calories per cup, so a typical adult miniature may eat about half a cup a day, and a standard around one to one and a half cups, split into two meals.",
          "Puppies need a food formulated for growth, ideally one suited to small breeds. Feed three to four small meals a day for young puppies, moving to two meals by about six months. Ask your vet when to switch to an adult diet, usually around 10 to 12 months. Do not let puppies grow too fast, and avoid letting them jump.",
          "Dachshunds love food and gain weight easily, and obesity is one of the biggest threats to their health, because every extra pound puts strain on the spine. Measure every meal, limit treats, and avoid feeding from the table. Use small pieces of the daily kibble as training rewards, and weigh your dog regularly. Keeping a Dachshund lean is one of the best ways to protect its back.",
          "Some Dachshunds guard their food. Teach your dog from puppyhood that people approaching its bowl is a good thing, feed it away from children and other pets, and never let children take food from the dog. Foods toxic to dogs, including chocolate, grapes, raisins, onions, garlic, and xylitol, must be kept out of reach. Fresh water should always be available.",
        ],
        lists: [
          {
            title: "Rough daily calories for a healthy adult (moderate activity)",
            items: [
              "Miniature, about 10 pounds: roughly 295 to 400 calories",
              "About 16 pounds: roughly 420 to 570 calories",
              "About 22 pounds: roughly 535 to 725 calories",
              "About 30 pounds: roughly 675 to 910 calories",
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
          text: "You should be able to feel your dog's ribs easily and see a waist from above and from the side. Because the body is long, extra weight shows as a sagging belly. Even a small amount of extra weight is a risk for the spine.",
        },
      },
      {
        id: "training",
        title: "Training and socialization",
        paragraphs: [
          "Dachshunds are intelligent but independent and stubborn, and training needs patience, consistency, and a sense of humor. They learn quickly when they are motivated, but they often ask what is in it for them, and they lose interest in repetition. Many owners find that they respond best to short, fun, food-rewarded sessions.",
          "Use positive, reward-based methods, with tasty treats, toys, and praise. Harsh corrections, shouting, or physical punishment backfire, damaging trust and making the dog stubborn or defensive. Keep sessions to five or ten minutes, end on a success, and stop before the dog loses interest.",
          "Start early. Begin training and socialization the day your puppy comes home. Introduce your puppy gently to many people, places, surfaces, sounds, and well-mannered dogs, always at a pace the puppy can handle. A poorly socialized Dachshund can become fearful, snappy, or overprotective. Ask your vet when it is safe to begin outings after vaccinations, and consider a well-run puppy class for small dogs.",
          "House training is often slow. Dachshunds are known for being difficult to house train, partly because of their stubbornness and partly because they dislike wet and cold weather. Keep to a strict routine, take your dog out often, reward success right away, and never punish accidents. Many owners use a crate, and some use an indoor toilet area as part of the plan, particularly in bad weather.",
          "Practice handling from puppyhood. A Dachshund should learn to accept having its feet, ears, mouth, and body touched, and to be lifted properly, so that grooming and veterinary care are easy. Teach ramp and step use early, a reliable leave it, and a quiet cue for barking. Teach children how to hold the dog safely.",
        ],
        lists: [
          {
            title: "Skills worth teaching early",
            ordered: true,
            items: [
              "Name recognition and eye contact",
              "Sit, down, and stay",
              "Using ramps and steps to reach furniture",
              "Loose-leash walking on a harness",
              "Leave it and drop it, including trading food or toys for treats",
              "Come when called, practiced with high-value rewards, always on a long line outdoors",
              "A quiet cue for barking",
              "Calm acceptance of handling, lifting, grooming, and vet care",
            ],
          },
        ],
      },
      {
        id: "behavior",
        title: "Behavior and common problems",
        paragraphs: [
          "Most Dachshund behavior problems come from the breed's hunting instincts, independence, and strong will. Understanding the cause helps you respond early.",
          "Digging is natural for a dog bred to go to ground. A Dachshund may dig up the garden, burrow into the bedding, or scratch at the carpet. Provide a designated digging spot, such as a sandpit, bury toys there, and reward use of it. Give plenty of blankets to burrow in, since many Dachshunds like to sleep under covers.",
          "Barking is common. Dachshunds are alert and vocal, and they may bark at visitors, noises, and passers-by, or out of boredom. Teach a quiet cue, reward calm behavior, and increase exercise and mental work. Avoid shouting, which the dog may mistake for joining in.",
          "Stubbornness is typical. A Dachshund may refuse to walk, ignore commands, or sit down when it has had enough. Keep training positive and consistent, use rewards that matter to your dog, and do not turn it into a battle.",
          "Separation anxiety is common, because Dachshunds bond closely and do not like to be alone. Signs include destructive chewing, howling, pacing, and toileting accidents. Build alone-time gradually, provide enrichment, and ask your vet or a qualified trainer for help if the problem is serious.",
          "Snapping and guarding can occur, particularly if the dog is in pain, startled, or handled roughly. Never punish a growl, because it is a warning, and consider whether pain, particularly back pain, may be the cause. Teach trading games, avoid situations that trigger guarding, and work with a qualified behavior professional if the behavior is strong.",
        ],
        lists: [
          {
            title: "Common issues and first steps",
            items: [
              "Digging: provide a designated digging area and blankets to burrow in",
              "Barking: teach a quiet cue and reward calm behavior",
              "Stubbornness: keep training short, positive, and rewarding",
              "Separation anxiety: build alone-time gradually and seek help if severe",
              "Snapping: check for pain, never punish a growl, and seek professional help if strong",
            ],
          },
        ],
      },
      {
        id: "grooming",
        title: "Grooming and coat care",
        figure: {
          n: 3,
          alt: "A Dachshund's coat being brushed gently with a soft brush",
          caption: "Grooming needs depend on the coat type, from a quick wipe to regular combing.",
        },
        paragraphs: [
          "Grooming needs depend on the coat type. The smooth coat is the easiest, needing only a quick brush, while the longhaired coat needs regular combing, and the wirehaired coat needs brushing and occasional trimming. All three types shed lightly to moderately.",
          "For the smooth coat, brush once a week with a rubber curry brush or a grooming glove, and wipe with a damp cloth or chamois for shine. For the longhaired coat, comb two or three times a week with a metal comb and a soft brush, paying attention to the feathering behind the ears, on the chest, and under the tail, where tangles form. For the wirehaired coat, brush once or twice a week, and have the coat hand-stripped or trimmed two or three times a year to keep its texture, and trim the beard and eyebrows.",
          "Bathe every two to three months, or as needed, using a gentle dog shampoo, and rinse thoroughly. Dry the coat well, since Dachshunds chill easily, and keep the dog warm afterwards. Support the body in the bath to protect the back, and never lift the dog by its front legs.",
          "Trim the nails every two to three weeks. Dachshunds' nails often grow long because their short legs keep the paws close to the ground, and long nails can change the way the dog walks. Check the paws for cuts, cracks, and foreign objects.",
          "Use grooming time as a health check. Feel for lumps, check the skin for redness, hot spots, or parasites, and look at the eyes, ears, and teeth. Check the skin for thinning around the ears, which can be a sign of pattern baldness in the breed. Practice handling from puppyhood, so that grooming and veterinary care are easy.",
        ],
        lists: [
          {
            title: "A simple grooming schedule",
            items: [
              "Brush or comb: once a week for smooth coats, two or three times a week for longhaired coats",
              "Wirehaired trim or hand-strip: two or three times a year",
              "Bathe: every two to three months, or as needed",
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
          "Dachshunds can suffer from several inherited eye conditions. The best known are progressive retinal atrophy, in which the cells at the back of the eye slowly break down, leading to loss of vision, and cataracts. Dry eye, glaucoma, and corneal problems also occur, and dapple dogs can have eye defects.",
          "Check the eyes every day. Wipe away normal discharge with a clean, damp cloth or cotton pad, using a fresh one for each eye. Do not use human eye drops unless your vet recommends them.",
          "Contact your vet if you see redness, squinting, cloudiness, thick or colored discharge, rubbing at the eye, or any change in vision, such as bumping into objects or hesitating in dim light. Dogs with progressive retinal atrophy often lose night vision first. Glaucoma is painful and can cause permanent blindness, so treat any painful, red, or cloudy eye as an emergency.",
          "Yearly eye exams are a good idea, and responsible breeders have their dogs examined by a veterinary ophthalmologist before breeding. A DNA test is available for a form of progressive retinal atrophy in miniature longhaired Dachshunds, and good breeders use it.",
        ],
      },
      {
        id: "ears",
        title: "Ear care",
        paragraphs: [
          "Dachshunds have long, hanging ears that fold over the ear canal, limiting air circulation. Moisture, wax, and dirt can build up, and ear infections are common, particularly in dogs that have allergies.",
          "Check the ears weekly for redness, odor, discharge, or signs of discomfort. Healthy ears are pale pink and mostly clean, with no strong smell. If the ears look dirty, use a vet-approved ear cleaner on a cotton ball, wipe only the visible part, and let your dog shake its head.",
          "Never push cotton swabs into the ear canal. Dry the ears after bathing. Longhaired Dachshunds have hair on the ear flaps that can mat, so comb it often. The thin skin of the ear can also lose hair in some dogs, a condition called pattern baldness, which is usually not harmful but is worth mentioning to your vet.",
          "See your vet if your dog shakes its head often, scratches its ears, holds its head tilted, or has redness, discharge, or a bad smell. Ear infections need a proper diagnosis, because the wrong treatment can make things worse, and recurring infections should prompt a check for underlying allergies.",
        ],
      },
      {
        id: "dental",
        title: "Dental care",
        paragraphs: [
          "Dental disease is very common in small breeds, and the Dachshund is no exception. The long, narrow muzzle and crowded teeth mean plaque and tartar build up quickly, which can lead to gum disease, painful teeth, and infection that spreads to other organs. Starting care early is the best prevention.",
          "Brush your dog's teeth daily if you can, using a dog toothbrush or finger brush and dog toothpaste. Never use human toothpaste. Start while your dog is young, and make it a calm routine with praise and a reward.",
          "Dental chews and toys can help reduce plaque but do not replace brushing. Look for products approved by a recognized veterinary dental council, and choose sizes suited to a small mouth. Avoid very hard items such as bones and antlers, which can break teeth.",
          "Your vet will check the mouth at each visit, and many Dachshunds need regular professional cleanings, sometimes with extractions. Retained baby teeth are also common in small breeds and may need removal. See a vet if you notice bad breath, red or bleeding gums, a broken tooth, drooling, or reluctance to eat.",
        ],
      },
      {
        id: "health",
        title: "Health and lifespan",
        paragraphs: [
          "Dachshunds typically live about 12 to 16 years, and many are healthy, long-lived dogs. The breed is, however, prone to spinal disease because of its long back and short legs, and to obesity, which makes everything worse. Knowing what to watch for helps you catch problems early.",
          "Regular veterinary checkups, a lean body weight, careful back protection, and early attention to changes in mobility, behavior, or appetite make the biggest difference. Choosing a breeder who health-tests their dogs also matters a great deal.",
          "See a vet immediately for sudden back or neck pain, yelping when lifted, a hunched back, reluctance to move, weakness or dragging of the back legs, loss of bladder control, or any sudden change in walking. Back problems can worsen within hours.",
        ],
        lists: [
          {
            title: "Conditions to know about",
            items: [
              "Intervertebral disc disease: spinal disc problems, the breed's best-known risk",
              "Obesity: the most important preventable risk to the spine and joints",
              "Patellar luxation: a slipping kneecap",
              "Progressive retinal atrophy, cataracts, and other eye diseases",
              "Lafora disease: an inherited seizure disorder in wirehaired and miniature dogs",
              "Dental disease and crowded teeth",
              "Ear infections and allergies",
              "Diabetes and Cushing's disease: hormone disorders",
              "Pattern baldness: thinning hair on the ears and body",
              "Epilepsy and hip problems",
            ],
          },
        ],
      },
      {
        id: "conditions",
        title: "Health conditions explained",
        paragraphs: [
          "Intervertebral disc disease is the most important health concern in the breed. The discs between the bones of the spine act as cushions, and in Dachshunds they tend to harden and degenerate early, so a disc can bulge or burst and press on the spinal cord. Often cited estimates suggest that a substantial share of Dachshunds, perhaps around one in four, will have a disc problem at some point in life. Signs include a hunched back, neck or back pain, yelping, reluctance to move, trembling, wobbliness, and weakness or paralysis in the back legs, sometimes with loss of bladder control. It can come on suddenly. A vet diagnoses it with an examination and imaging, and treatment ranges from strict crate rest and pain relief to emergency surgery, with the best results when surgery happens quickly. Prevention includes keeping the dog lean, avoiding jumping and stairs, using ramps, lifting the dog with proper support, and building strong muscles with regular, moderate exercise.",
          "Obesity makes disc disease more likely and recovery harder, and it worsens joint disease, breathing, and diabetes. Because of the dog's long body, extra weight is easy to underestimate. Weigh your dog regularly, measure meals, and talk to your vet if your dog is overweight, and set a target weight together.",
          "Patellar luxation is a condition in which the kneecap slips out of place, with signs such as skipping on a hind leg, which may come and go. Mild cases need monitoring, and severe ones may need surgery.",
          "Progressive retinal atrophy causes gradual loss of vision, often starting with night blindness, and there is no cure, but dogs often cope well in familiar surroundings. Cataracts cloud the lens and may be removed by surgery. A DNA test is available for one form of progressive retinal atrophy in miniature longhaired dogs.",
          "Lafora disease is an inherited form of epilepsy seen in miniature wirehaired and some other Dachshunds, with signs such as myoclonic jerks, seizures, and, over time, dementia and loss of coordination, usually starting in middle age. A DNA test is available, and responsible breeders use it. Epilepsy in general causes recurring seizures, and many dogs live well on daily anti-seizure medication.",
          "Diabetes and Cushing's disease are hormone disorders seen in middle-aged and older dogs. Signs include increased thirst, urination, and appetite, weight changes, and a pot belly, and both are diagnosed with blood and urine tests and managed with medication. Allergies show up as itching, paw licking, red skin, and ear infections, and may need long-term management. Pattern baldness is a gradual thinning of the hair on the ears, chest, or belly, which is usually not harmful.",
        ],
        note: {
          title: "Important",
          text: "This is general information, not a diagnosis. Always speak to your veterinarian if you are worried about your dog's health, and treat sudden back pain, yelping, or weakness in the back legs as an emergency, because quick treatment greatly improves the chances of recovery.",
        },
      },
      {
        id: "genetics",
        title: "Health testing and choosing a puppy",
        paragraphs: [
          "The breeder you choose has more influence on your Dachshund's health and temperament than almost anything else. A responsible breeder tests breeding dogs for inherited conditions, selects for sound, moderate builds with a good length of leg and a healthy back, raises puppies in a home environment, socializes them early, and carefully screens buyers.",
          "Ask to see written proof of testing for both parents. Key checks for Dachshunds include an eye examination by a veterinary ophthalmologist, DNA tests for progressive retinal atrophy and Lafora disease where relevant to the variety, and patella evaluations. Some breeders also use spinal X-rays to check for calcified discs in breeding dogs. Ask about the family history of back problems, since this is one of the most informative questions you can ask, and about the ages at which relatives developed them.",
          "Be cautious about breeders who sell puppies with no health information, who say the breed has no health problems, who breed for very long backs, extreme shortness of leg, or unusual colors such as double dapples, who sell very young puppies, or who sell through unregulated online listings. A good breeder will ask you many questions about your home and lifestyle, and may refuse to sell to an unsuitable home.",
          "Adoption can also be a good route, and Dachshunds turn up in rescues, often as adults or seniors, and some have had back surgery. A breed rescue can tell you about the dog's health, personality, and how it behaves with other dogs and children. Be ready for ongoing veterinary needs and back care.",
        ],
        lists: [
          {
            title: "Questions to ask a breeder",
            items: [
              "Is there a family history of back problems, and at what ages?",
              "Can I see eye test results and the relevant DNA tests for both parents?",
              "Can I see patella test results for both parents?",
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
          "A Dachshund's needs shift across a long life. Planning for each stage helps you avoid problems and keep your dog healthy and happy.",
        ],
        lists: [
          {
            title: "Life stages",
            items: [
              "Puppy (to about 12 months): rapid growth, vaccinations as your vet advises, careful socialization, house training, and protection from jumping and stairs",
              "Adolescent (about 6 to 18 months): a bold, testing phase, with stubbornness and selective hearing, so keep training gentle and consistent",
              "Adult (about 2 to 8 years): a spirited, devoted companion, regular walks, careful weight management, annual checkups, and back protection",
              "Senior (from about 9 years): a slower pace, higher risk of spinal, heart, and dental problems, twice-yearly checkups, softer bedding, ramps, and gentler exercise",
            ],
          },
          {
            title: "Caring for an older Dachshund",
            items: [
              "Keep walks gentle and regular, since muscle tone protects the spine",
              "Ask your vet about joint support, pain management, and dental care",
              "Use ramps and non-slip rugs, and avoid jumping and stairs",
              "Keep your dog lean, since extra weight puts strain on the back",
              "Watch for changes in walking, drinking, vision, or behavior, and report them promptly",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are Dachshunds good family dogs?",
        a: "They can be, particularly with older, gentle children. They are loyal and playful, but small and fragile-backed, so careful handling and supervision are important.",
      },
      {
        q: "How much exercise does a Dachshund need?",
        a: "About 30 to 60 minutes a day, in walks and gentle play, plus mental stimulation. Avoid jumping and stairs.",
      },
      {
        q: "Do Dachshunds shed?",
        a: "Lightly to moderately. Smooth coats need a weekly brush, longhaired coats need combing a few times a week, and wirehaired coats need brushing and occasional trimming.",
      },
      {
        q: "Why do Dachshunds get back problems?",
        a: "Their long backs and short legs put strain on the spinal discs, which tend to degenerate early. Keeping them lean, avoiding jumping, and using ramps help protect the spine.",
      },
      {
        q: "Are Dachshunds easy to train?",
        a: "They are intelligent but independent and stubborn. House training is often slow. Short, patient, reward-based sessions work best.",
      },
      {
        q: "Do Dachshunds bark a lot?",
        a: "Many do. They are alert and vocal, and they bark at visitors, noises, and when bored. A quiet cue and plenty of attention help.",
      },
      {
        q: "What is the difference between standard and miniature Dachshunds?",
        a: "They are the same breed in two sizes. The miniature weighs 11 pounds or less, while the standard is typically 16 to 32 pounds.",
      },
      {
        q: "How long do Dachshunds live?",
        a: "Usually about 12 to 16 years. Good breeding, a lean weight, back protection, and regular veterinary care help them live well.",
      },
    ],
  },
};
