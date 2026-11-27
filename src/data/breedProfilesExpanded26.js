// Expnded long-form breed profiles, batch 26 (deep-dive standard): Poodle and Beagle.
// These replace the older, shorter profiles for the same slugs (later batches override earlier ones in breedService.js).
// Same shape as breedProfilesExpanded25.js. A section may carry a `figure` ({ n, alt, caption }),
// which shows src/assets/breeds/<slug>-<n>.jpg as a small photo card (nothing shows if the file is missing).
// Keep vetReviewed false until a licensed vet has signed off on the profile.

export const breedProfilesExpanded26 = {
  poodle: {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Germany and France",
    summary:
      "Intelligent, athletic, and eager to please, the Poodle comes in three sizes, Standard, Miniature, and Toy, and it needs regular professional grooming, daily mental and physical activity, and sensible health testing.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        figure: {
          n: 1,
          alt: "A Standard Poodle standing proudly in a show-style clip",
          caption: "The Poodle began as a water retriever and is now one of the most versatile breeds in the world.",
        },
        paragraphs: [
          "The Poodle's origins are debated, but the breed is generally understood to have started as a water retriever in continental Europe, where dogs of this type were used for centuries to fetch waterfowl for hunters. Germany is often credited as the breed's earliest home, and the English name poodle is thought to come from a German word meaning to splash in water. France, however, developed the breed into the form we know today and adopted it as a national dog, and the French name, caniche, is linked to a word for duck dog.",
          "The Poodle's distinctive clip, with shaved areas and tufts of hair left on the chest, joints, and head, is often said to have a practical origin. The longer hair around the chest and joints was left to protect vital organs and joints from cold water, while the shaved hindquarters helped the dog swim freely. Whether every detail of this story is accurate is difficult to verify, but the logic is widely repeated, and the show clips of today are a stylized version of it.",
          "Over time, breeders selected for smaller sizes. The Standard Poodle came first, followed by the Miniature, and then the Toy, which became popular as a companion in the courts and homes of Europe. Poodles were also prized as circus performers because of their intelligence and trainability, and they have been used as truffle hunters, guide dogs, service dogs, and gundogs.",
          "The breed was recognized by the major kennel clubs by the late 1800s, and it is now registered as one breed in three sizes by most clubs, although some organizations treat the varieties separately. Today the Poodle is one of the most popular breeds in the world, and it is often ranked among the smartest. It is also widely used as a parent of crossbreeds, so many dogs carry Poodle ancestry.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance and size",
        paragraphs: [
          "The Poodle is an elegant, square-proportioned, and athletic dog with a proud carriage and a distinctive coat. The breed comes in three sizes, distinguished by height. The Standard Poodle is over 15 inches at the shoulder and typically weighs 40 to 70 pounds. The Miniature Poodle stands 10 to 15 inches and weighs roughly 10 to 15 pounds. The Toy Poodle stands 10 inches or less and weighs about 4 to 6 pounds.",
          "All three varieties share the same body type: a straight back, a deep chest, a long neck, and a refined, balanced build. The head is long and fine, with a slightly rounded skull, a long, straight muzzle, and a dark nose. The eyes are oval, dark, and full of intelligence, and the ears hang close to the head, covered with long hair. The tail is carried high and is traditionally docked in some countries, although docking is illegal or discouraged in many places.",
          "The coat is dense, curly, and harsh in texture, with no undercoat to speak of, and it grows continuously. Colors include black, white, cream, apricot, brown, silver, blue, red, and gray, and some dogs have parti or phantom patterns. Poodles shed very little, but loose hair stays trapped in the curls, so the coat tangles and mats without regular care. They are often described as low-shedding, but no dog is truly allergy-proof.",
        ],
        lists: [
          {
            title: "Quick breed snapshot",
            items: [
              "Standard: over 15 inches, about 40 to 70 pounds",
              "Miniature: 10 to 15 inches, about 10 to 15 pounds",
              "Toy: 10 inches or less, about 4 to 6 pounds",
              "Coat: dense, curly, and low-shedding, needing regular clipping",
              "Lifespan: roughly 12 to 16 years, with smaller varieties often living longer",
            ],
          },
        ],
      },
      {
        id: "temperament",
        title: "Temperament and personality",
        paragraphs: [
          "Poodles are among the most intelligent dogs in the world, and they are lively, active, and eager to please. They learn quickly, pick up new tricks with ease, and form strong bonds with their families. A Poodle is typically happiest when it is close to its people and has a task to do, whether it is a training session, a game, or a trip out.",
          "They are also sensitive and perceptive. Poodles read the moods of their owners and respond to tone of voice, so harsh treatment can make them anxious or withdrawn. They respond best to calm, positive, reward-based training, and they are often more emotionally attuned than their elegant appearance suggests.",
          "Temperament varies a little between the sizes. Standard Poodles are often calm, steady, and athletic, with a goofy side. Miniatures and Toys tend to be more energetic and alert, and they may be more reserved with strangers and more prone to barking. All three need exercise and mental work, and an under-stimulated Poodle can become anxious, noisy, or destructive.",
          "With strangers, Poodles are often polite but reserved, and with other dogs they are generally friendly when well socialized. Toy and Miniature Poodles can be wary of large dogs and children, and some Poodles are prone to separation anxiety because they bond so closely.",
        ],
        lists: [
          {
            title: "Personality in a few words",
            items: [
              "Highly intelligent and eager to please",
              "Active, playful, and athletic",
              "Sensitive and attuned to their owners",
              "Reserved with strangers",
              "Dislikes being left alone",
            ],
          },
        ],
      },
      {
        id: "suitability",
        title: "Is a Poodle right for you?",
        paragraphs: [
          "The Poodle is an excellent choice for owners who want a smart, trainable, and adaptable companion, and who are ready to commit to grooming, exercise, and mental stimulation. It suits first-time owners who are willing to learn, active families, and people with allergies who want a low-shedding dog, although allergic people should spend time with the breed before deciding. It is not a good choice for people who cannot afford regular professional grooming, or who are away from home for long hours.",
          "With family, Poodles are generally affectionate, playful, and gentle, and many do well with children. Standard Poodles are often sturdy enough for family life, while Toy and Miniature Poodles are small and can be injured by rough handling, so supervise play and teach children to treat the dog gently. Never leave any dog alone with young children.",
          "With other pets, most Poodles get along well with other dogs and cats, particularly if they are raised together. Because the breed was developed as a bird retriever, some have an interest in birds and small animals.",
          "Poodles adapt well to many homes, including apartments, as long as they get enough exercise and company. Toys and Miniatures suit smaller homes, while Standards need more space and activity. They do best when they live indoors with their families, and they are not suited to being kept outside alone. Their coats offer limited protection in extreme cold, so a coat may be needed in winter.",
          "Owners should also be ready for the costs. A Poodle needs professional grooming every four to eight weeks, and the coat needs brushing several times a week at home. Standard Poodles also have specific health risks, including bloat and a hormone disease called Addison's disease, so budget for veterinary care.",
        ],
        lists: [
          {
            title: "A Poodle may suit you if you:",
            items: [
              "Want a smart, trainable, and adaptable companion",
              "Can afford regular professional grooming and brush at home",
              "Enjoy training, tricks, and activity",
              "Are home for much of the day",
            ],
          },
          {
            title: "Think twice if you:",
            items: [
              "Cannot afford regular professional grooming",
              "Are away from home for long hours most days",
              "Want a dog that needs little attention or mental work",
              "Assume a Poodle is allergy-proof without testing your own reaction",
            ],
          },
        ],
      },
      {
        id: "care",
        title: "Exercise and daily care",
        figure: {
          n: 2,
          alt: "A Miniature Poodle running with a ball across grass",
          caption: "Poodles of every size enjoy games, walks, and learning new tricks.",
        },
        paragraphs: [
          "Poodles are athletic, energetic dogs and need regular exercise, with the amount depending on size. Standard Poodles typically need about 60 to 90 minutes a day, Miniatures about 45 to 60 minutes, and Toys about 30 to 45 minutes. Walks, fetch, swimming, and active play all suit the breed.",
          "Poodles are natural swimmers and retrievers, and many love water and fetch. Standard Poodles in particular enjoy swimming, hiking, and jogging with their owners, and many excel at agility, obedience, rally, dock diving, and field work. Toys and Miniatures enjoy brisk walks and games, but they should avoid very long or strenuous outings, and small dogs should not jump from heights.",
          "Mental stimulation is as important as physical exercise. Poodles are clever and easily bored, so puzzle feeders, scent games, new tricks, and short training sessions keep their minds busy. A bored Poodle can become noisy, anxious, or destructive.",
          "Keep your Poodle on a lead or in a secure area when in public unless its recall is reliable. In hot weather, exercise in the cool parts of the day, bring water, and rest often. In cold weather, small dogs and freshly clipped dogs may need a coat.",
          "After walks, check the coat for burrs and tangles, particularly in the feet, legs, and ears, and wipe muddy paws. Protect the coat from knots by brushing after active outings.",
        ],
        lists: [
          {
            title: "A sample day for an adult Poodle",
            items: [
              "Morning: a brisk walk, 20 to 45 minutes depending on size, followed by breakfast",
              "Midday: a puzzle feeder or chew while you are busy",
              "Afternoon: a training session, a game of fetch, or a swim for Standards",
              "Evening: a second walk, dinner, and relaxing with the family",
            ],
          },
        ],
      },
      {
        id: "feeding",
        title: "Feeding and nutrition",
        paragraphs: [
          "A complete and balanced dog food made for the dog's life stage and size is the best starting point for a Poodle. Toy and Miniature Poodles do well on foods made for small breeds, with small kibble, while Standard Poodles do well on foods made for medium or large breeds. Ask your vet to help you choose a food, particularly if your dog has digestive or skin problems.",
          "How much to feed depends on the dog's size, weight, age, activity level, and metabolism, and the feeding guide on the label is only a starting point. The table below gives rough daily calorie ranges for healthy adults with moderate activity. Many dry foods contain roughly 350 to 450 calories per cup, so a typical adult Toy may eat about half a cup a day, a Miniature about one cup, and a Standard around two and a half to three and a half cups, split into two meals.",
          "Puppies need a food formulated for growth, with the right size of kibble for the variety. Feed three to four small meals a day for young puppies, moving to two meals by about six months. Toy puppies can be prone to low blood sugar, so do not skip meals. Ask your vet when to switch to an adult diet, usually around 10 to 12 months for Toys and Miniatures, and 12 to 18 months for Standards.",
          "Poodles can gain weight if overfed, and extra weight strains the joints and shortens life. Measure every meal, limit treats, and avoid feeding from the table. Use small pieces of the daily kibble as training rewards, which suits a clever, food-motivated dog.",
          "Standard Poodles are deep-chested and at risk of bloat, a life-threatening twisting of the stomach. Feed two or more smaller meals rather than one large one, avoid vigorous exercise for an hour before and after meals, and seek emergency care immediately if you see a swollen belly, unproductive retching, or restlessness after a meal. Foods toxic to dogs, including chocolate, grapes, raisins, onions, garlic, and xylitol, must be kept out of reach.",
        ],
        lists: [
          {
            title: "Rough daily calories for a healthy adult (moderate activity)",
            items: [
              "Toy, about 5 pounds: roughly 175 to 240 calories",
              "Miniature, about 12 pounds: roughly 340 to 460 calories",
              "Standard, about 45 pounds: roughly 915 to 1,235 calories",
              "Standard, about 60 pounds: roughly 1,130 to 1,530 calories",
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
          text: "You should be able to feel your dog's ribs under the coat and see a waist from above. Because the curly coat hides the body, feel your dog regularly rather than relying on how it looks.",
        },
      },
      {
        id: "training",
        title: "Training and socialization",
        paragraphs: [
          "Poodles are among the easiest breeds to train. They are intelligent, quick to learn, and eager to work with their owners, and they enjoy the mental challenge of training. They respond best to positive, reward-based methods, with food, toys, and praise. They are sensitive, and harsh corrections, shouting, or physical punishment can make them anxious or withdrawn.",
          "Start early. Begin training and socialization the day your puppy comes home. Teach manners from the first day, including loose-leash walking, waiting at doors, and settling calmly. Keep sessions short, varied, and fun, and always end on a success. Because Poodles are so clever, they learn bad habits just as quickly as good ones, so be consistent.",
          "Socialization is important. From the earliest weeks, introduce your puppy gently to many people, places, surfaces, sounds, and well-mannered dogs, always at a pace the puppy can handle. Toy and Miniature Poodles in particular can become fearful, shy, or yappy if poorly socialized. Ask your vet when it is safe to begin outings after vaccinations, and consider a well-run puppy class suited to your dog's size.",
          "Teach impulse control and calm behavior. Skills such as waiting for food, leaving things alone, and settling on a mat are essential. Teach a reliable recall, practiced on a long line, and a quiet cue if your dog is vocal. Practice grooming skills from puppyhood, including standing on a table, having feet, face, and ears handled, and accepting the sound of clippers.",
          "Give your Poodle a job. Many Poodles benefit from structured activities such as obedience, rally, agility, tricks, scent work, and therapy work, which channel their intelligence and energy. A mentally busy Poodle is a happy Poodle.",
        ],
        lists: [
          {
            title: "Skills worth teaching early",
            ordered: true,
            items: [
              "Name recognition and eye contact",
              "Sit, down, and stay",
              "Settle on a mat and relax on cue",
              "Loose-leash walking on a harness",
              "Leave it and drop it, including trading food or toys for treats",
              "Come when called, practiced with high-value rewards, always on a long line outdoors",
              "A quiet cue for barking",
              "Calm acceptance of handling, grooming, clippers, and vet care",
            ],
          },
        ],
      },
      {
        id: "behavior",
        title: "Behavior and common problems",
        paragraphs: [
          "Most Poodle behavior problems come from intelligence, sensitivity, and a strong bond with their people, combined with too little exercise or mental work. Understanding the cause helps you respond early.",
          "Separation anxiety is common, because Poodles bond closely and do not like to be alone. Signs include destructive chewing, howling, pacing, and toileting accidents. Build alone-time gradually, provide enrichment, and ask your vet or a qualified trainer for help if the problem is serious.",
          "Barking is common, particularly in Toys and Miniatures. Poodles are alert and may bark at visitors, noises, and passers-by, or out of boredom. Teach a quiet cue, reward calm behavior, and increase exercise and mental work. Avoid shouting, which the dog may mistake for joining in.",
          "Anxiety and nervousness can occur in sensitive Poodles, particularly if they are poorly socialized or exposed to harsh handling. Signs include trembling, hiding, and excessive licking. Build confidence with gentle training, a predictable routine, and positive experiences, and consult your vet if the anxiety is severe.",
          "Destructive behavior occurs in bored, under-exercised dogs. A Poodle can chew furniture, dig, and tear apart toys. Increase exercise and mental work, provide durable chews and puzzle toys, and use a crate or a secure area when you cannot supervise.",
          "Small-dog behavior can develop in Toys and Miniatures that are not given rules. A dog that is carried everywhere, never corrected, and allowed to dominate the household can become demanding and difficult. Give your dog boundaries, routine, and the same training you would give a larger breed. Some Poodles also guard food or toys, so teach trading games.",
        ],
        lists: [
          {
            title: "Common issues and first steps",
            items: [
              "Separation anxiety: build alone-time gradually and seek help if severe",
              "Barking: teach a quiet cue and reward calm behavior",
              "Nervousness: build confidence with gentle, positive training",
              "Destructive behavior: increase exercise and mental work",
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
          alt: "A Poodle's curly coat being brushed with a slicker brush on a grooming table",
          caption: "Regular brushing and professional clipping keep the Poodle's curly coat free of mats.",
        },
        paragraphs: [
          "The Poodle's coat is its most demanding feature. It is dense, curly, and continuously growing, and it sheds very little, but loose hairs stay trapped in the curls, so the coat tangles and mats quickly without regular care. Grooming is not optional for this breed, and the cost and time need to be part of your decision.",
          "Brush thoroughly at least three to four times a week, and daily if the coat is kept long, using a slicker brush and a metal comb. Brush down to the skin in sections, and check the armpits, behind the ears, under the collar, and between the legs, where mats form. Mist the coat lightly with water or a conditioning spray before brushing, and never brush a dry, dirty coat.",
          "Plan for a professional clip every four to eight weeks, depending on the style. Many pet owners choose a shorter, practical clip, such as a puppy cut or a lamb cut, which is easier to maintain than a show clip. Talk to your groomer about the best style for your dog's lifestyle, and be wary of leaving long coats unbrushed, since severe matting is painful and may need to be shaved off.",
          "Bathe every three to four weeks, using a gentle shampoo and conditioner, and brush the coat before bathing, since water tightens mats. Dry the coat thoroughly with a towel and a dryer, brushing as you dry, to keep the curls from tangling. Clean the face daily, since light-colored Poodles are prone to tear staining, and trim the hair around the eyes.",
          "Trim the nails every two to three weeks, and keep the hair between the paw pads trimmed. Ear hair needs attention, since Poodles grow hair inside the ear canal, and your groomer or vet can advise on whether it should be removed. Use grooming time as a health check, feeling for lumps and checking the skin, eyes, ears, and teeth.",
        ],
        lists: [
          {
            title: "A simple grooming schedule",
            items: [
              "Brush and comb: three to four times a week, daily for long coats",
              "Professional clip: every four to eight weeks",
              "Bathe: every three to four weeks, or as needed",
              "Face and eyes: wipe daily, especially for light-colored dogs",
              "Nails: every two to three weeks",
              "Teeth: brush daily or at least several times a week",
            ],
          },
        ],
      },
      {
        id: "eyes",
        title: "Eye care",
        paragraphs: [
          "Poodles can suffer from several inherited eye conditions. The best known is progressive retinal atrophy, in which the cells at the back of the eye slowly break down, leading to loss of vision, often starting with night blindness. Other problems include cataracts, glaucoma, dry eye, entropion, and extra eyelashes that irritate the eye.",
          "Check the eyes every day. Wipe away normal discharge with a clean, damp cloth or cotton pad, using a fresh one for each eye, and keep the hair around the eyes trimmed. Tear staining is common, particularly in light-colored dogs, so clean the area under the eyes daily. Do not use human eye drops unless your vet recommends them.",
          "Contact your vet if you see redness, squinting, cloudiness, thick or colored discharge, rubbing at the eye, or any change in vision, such as bumping into objects or hesitating in dim light. Glaucoma is painful and can cause permanent blindness within hours or days, so treat any painful, red, or cloudy eye as an emergency.",
          "Yearly eye exams are a good idea, and responsible breeders have their dogs examined by a veterinary ophthalmologist before breeding. A DNA test is available for the common form of progressive retinal atrophy in the breed, and good breeders use it.",
        ],
      },
      {
        id: "ears",
        title: "Ear care",
        paragraphs: [
          "Poodles have long, hanging ears covered with hair, and hair also grows inside the ear canal. This limits air circulation and can trap moisture, wax, and dirt, so ear infections are common, particularly in dogs that swim or have allergies.",
          "Check the ears weekly for redness, odor, discharge, or signs of discomfort. Healthy ears are pale pink and mostly clean, with no strong smell. If the ears look dirty, use a vet-approved ear cleaner on a cotton ball, wipe only the visible part, and let your dog shake its head. Ask your groomer or vet whether the hair in the ear canal should be removed, since opinions differ and plucking can irritate some dogs.",
          "Never push cotton swabs into the ear canal. Dry the ears thoroughly after bathing and swimming, and keep the hair around the ears trimmed so that air can circulate.",
          "See your vet if your dog shakes its head often, scratches its ears, holds its head tilted, or has redness, discharge, or a bad smell. Ear infections need a proper diagnosis, because the wrong treatment can make things worse, and recurring infections should prompt a check for underlying allergies.",
        ],
      },
      {
        id: "dental",
        title: "Dental care",
        paragraphs: [
          "Dental disease is very common in small Poodles and a problem for all sizes. Toy and Miniature Poodles have small, crowded mouths, so plaque and tartar build up quickly, leading to gum disease, painful teeth, and infection that spreads to other organs. Starting care early is the best prevention.",
          "Brush your dog's teeth daily if you can, using a dog toothbrush or finger brush and dog toothpaste. Never use human toothpaste. Start while your dog is young, and make it a calm routine with praise and a reward.",
          "Dental chews and toys can help reduce plaque but do not replace brushing. Look for products approved by a recognized veterinary dental council, and choose sizes suited to your dog's mouth. Avoid very hard items such as bones and antlers, which can break teeth.",
          "Your vet will check the mouth at each visit, and many small Poodles need regular professional cleanings, sometimes with extractions. Retained baby teeth are also common in small breeds and may need removal. See a vet if you notice bad breath, red or bleeding gums, a broken tooth, or reluctance to eat.",
        ],
      },
      {
        id: "health",
        title: "Health and lifespan",
        paragraphs: [
          "Poodles typically live about 12 to 16 years, with Toy and Miniature Poodles often living longer than Standards, sometimes into the high teens. They are generally healthy dogs, but each size has its own risks, and the breed as a whole is prone to eye, ear, skin, and joint problems. Knowing what to watch for helps you catch problems early.",
          "Regular veterinary checkups, a lean body weight, careful grooming, and early attention to changes in vision, mobility, or behavior make the biggest difference. Choosing a breeder who health-tests their dogs also matters a great deal.",
          "See a vet promptly for a swollen belly, unproductive retching, a red or painful eye, limping, a honking cough, collapse, persistent vomiting, increased thirst, or any lump that is growing.",
        ],
        lists: [
          {
            title: "Conditions to know about",
            items: [
              "Progressive retinal atrophy, cataracts, and glaucoma: eye diseases",
              "Addison's disease: a hormone disorder, more common in Standards",
              "Bloat (gastric dilatation-volvulus): a life-threatening twisting of the stomach, in Standards",
              "Sebaceous adenitis: an inherited skin disease, more common in Standards",
              "Patellar luxation and Legg-Calve-Perthes disease: in Toys and Miniatures",
              "Tracheal collapse and mitral valve disease: in small Poodles",
              "Hip dysplasia: more common in Standards",
              "Epilepsy: recurring seizures that may be inherited",
              "Hypothyroidism and Cushing's disease: hormone disorders",
              "Ear infections, allergies, and dental disease",
            ],
          },
        ],
      },
      {
        id: "conditions",
        title: "Health conditions explained",
        paragraphs: [
          "Progressive retinal atrophy causes gradual loss of vision, often starting with night blindness, and there is no cure, but dogs often cope well in familiar surroundings. A DNA test is available for the common form in Poodles, and responsible breeders use it. Cataracts cloud the lens and may be removed by surgery, and glaucoma, a rise in pressure inside the eye, is an emergency.",
          "Addison's disease occurs when the adrenal glands do not make enough hormones. Signs can be vague, including tiredness, vomiting, diarrhea, weight loss, and weakness, and they may come and go. In a crisis, a dog can collapse. It is diagnosed with blood tests and is managed well with lifelong medication. It is more common in Standard Poodles, so mention any unexplained, recurring illness to your vet.",
          "Bloat is a life-threatening emergency in Standard Poodles. The stomach fills with gas and may twist on itself, cutting off blood flow. Signs include a swollen belly, drooling, unproductive retching, restlessness, and collapse. Treatment is emergency surgery, and a preventive procedure called a gastropexy can be done in advance. Many vets recommend it for deep-chested breeds.",
          "Sebaceous adenitis is an inherited skin disease in which the oil glands are damaged, leading to dry, scaly skin and patchy hair loss. A vet diagnoses it with a skin biopsy, and management involves medicated baths and supplements. Skin allergies are also common, with itching, paw licking, red skin, and ear infections.",
          "In small Poodles, patellar luxation is a condition in which the kneecap slips out of place, with signs such as skipping on a hind leg. Legg-Calve-Perthes disease is a degeneration of the head of the thigh bone in young small dogs, causing pain and limping, and it is usually treated with surgery. Tracheal collapse is a weakening of the windpipe, causing a honking cough, particularly when excited or on a collar, and it is managed with a harness, weight control, and medication. Mitral valve disease is a common heart problem in older small dogs, in which the valve between the heart chambers leaks, and regular checkups catch it early.",
          "Epilepsy causes recurring seizures. During a seizure a dog may collapse, paddle its legs, drool, and lose awareness for a minute or two. If your dog has a seizure, stay calm, keep the dog away from hazards, do not put anything in its mouth, note the time, and call your vet. Many dogs live well on daily anti-seizure medication. Hypothyroidism and Cushing's disease are hormone disorders seen in older dogs, with signs including weight changes, increased thirst, and skin changes, and both are diagnosed with blood tests and managed with medication.",
        ],
        note: {
          title: "Important",
          text: "This is general information, not a diagnosis. Always speak to your veterinarian if you are worried about your dog's health, and treat a swollen belly, a seizure, collapse, or a painful eye as an emergency.",
        },
      },
      {
        id: "genetics",
        title: "Health testing and choosing a puppy",
        paragraphs: [
          "The breeder you choose has more influence on your Poodle's health and temperament than almost anything else. A responsible breeder tests breeding dogs for inherited conditions, selects for stable, friendly temperaments, raises puppies in a home environment, socializes them early, and carefully screens buyers.",
          "Ask to see written proof of testing for both parents. Key checks for Poodles include an eye examination by a veterinary ophthalmologist, a DNA test for progressive retinal atrophy, patella evaluations for Toys and Miniatures, hip evaluations for Standards, and, where available, tests for conditions such as von Willebrand disease and sebaceous adenitis. Ask about the family history of Addison's disease, bloat, seizures, and skin problems.",
          "Be cautious about breeders who sell puppies with no health information, who say the breed has no health problems, who advertise unusual colors or tiny sizes as rare or more valuable, who sell very young puppies, or who sell through unregulated online listings. Terms such as teacup are not recognized sizes, and very small dogs have a higher risk of health problems. A good breeder will ask you many questions about your home and lifestyle, and may refuse to sell to an unsuitable home.",
          "Adoption is also an excellent route, and Poodles of all sizes appear in breed rescues and shelters, often as adults. A rescue can tell you about the dog's health, temperament, and how it behaves with other dogs and children. Be ready for grooming needs, since rescued Poodles often arrive matted.",
        ],
        lists: [
          {
            title: "Questions to ask a breeder",
            items: [
              "Can I see eye test results and the DNA test for progressive retinal atrophy for both parents?",
              "Can I see patella (Toy and Miniature) or hip (Standard) test results?",
              "Is there a family history of Addison's disease, bloat, or seizures?",
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
          "A Poodle's needs shift across a long life. Planning for each stage helps you avoid problems and keep your dog healthy and happy.",
        ],
        lists: [
          {
            title: "Life stages",
            items: [
              "Puppy (to about 12 months): rapid growth, vaccinations as your vet advises, intensive socialization, house training, and gentle introduction to grooming and clippers",
              "Adolescent (about 6 to 24 months): a bouncy, testing phase, with chewing and selective hearing, and the puppy coat changing to the adult coat, which mats easily, so brush often",
              "Adult (about 2 to 8 years): an active, clever companion, daily exercise and mental work, regular grooming, annual checkups, and careful weight management",
              "Senior (from about 9 years for Standards, 10 or more for smaller sizes): a slower pace, possible joint stiffness, vision and heart changes, twice-yearly checkups, softer bedding, and gentler exercise",
            ],
          },
          {
            title: "Caring for an older Poodle",
            items: [
              "Keep exercising, but choose lower-impact options such as gentle walks",
              "Ask your vet about joint support, heart checks, and pain management",
              "Keep your dog at a healthy weight and warm in cold weather",
              "Keep up with grooming, which becomes harder with arthritis, so ask your groomer for shorter, gentler sessions",
              "Watch for vision changes, coughing, or changes in drinking, and report them promptly",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are Poodles hypoallergenic?",
        a: "No dog is truly allergy-proof, but Poodles shed very little, and many allergic people tolerate them better. Spend time with the breed before deciding.",
      },
      {
        q: "What is the difference between a Toy, Miniature, and Standard Poodle?",
        a: "They are the same breed in three sizes. Toy is 10 inches or less, Miniature is 10 to 15 inches, and Standard is over 15 inches at the shoulder.",
      },
      {
        q: "How much exercise does a Poodle need?",
        a: "It depends on size. Standards need about 60 to 90 minutes a day, Miniatures about 45 to 60, and Toys about 30 to 45, plus mental stimulation.",
      },
      {
        q: "How often does a Poodle need grooming?",
        a: "Brush several times a week at home, and plan for a professional clip every four to eight weeks.",
      },
      {
        q: "Are Poodles easy to train?",
        a: "Yes. They are among the most intelligent breeds and respond very well to positive, reward-based training.",
      },
      {
        q: "Can Poodles be left alone?",
        a: "Short periods are fine once trained, but they bond closely and can develop separation anxiety if left for long hours.",
      },
      {
        q: "Are Poodles good family dogs?",
        a: "Yes. They are affectionate, playful, and trainable. Standards suit families with children, while Toys and Miniatures need gentle handling.",
      },
      {
        q: "How long do Poodles live?",
        a: "Usually about 12 to 16 years, and smaller sizes often live longer. Good breeding, a lean weight, and regular veterinary care help them live well.",
      },
    ],
  },

  beagle: {
    vetReviewed: false,
    reviewedBy: "",
    origin: "England, United Kingdom",
    summary:
      "Merry, curious, and led by an extraordinary nose, the Beagle is a friendly scent hound that loves company and food, and it needs secure fencing, plenty of exercise, patient training, and careful weight control.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        figure: {
          n: 1,
          alt: "A tricolor Beagle sitting with its head tilted and ears hanging",
          caption: "The Beagle is a scent hound bred to follow trails over long distances in a pack.",
        },
        paragraphs: [
          "The Beagle is a small scent hound that developed in England as a pack dog for hunting hares and rabbits. Dogs of this general type have existed for centuries, and small hounds called beagles are mentioned in English writing from the 1400s and 1500s. The exact origin of the name is uncertain, and the early beagles varied widely in size, with some small enough to be carried in a saddlebag or pocket.",
          "Hunters kept packs of beagles because they were methodical, determined trackers with a strong nose and plenty of stamina, and they were small enough to be followed on foot. This was valuable for people who could not afford horses. The hounds worked together, giving tongue, or baying, to tell hunters where the trail led.",
          "In the 1800s, breeders began to standardize the breed. Several packs were established, and enthusiasts such as the Reverend Phillip Honeywood in Essex are often credited with developing a more uniform type. The breed was exported to other countries in the mid-1800s, and the Beagle was recognized by the major kennel clubs by the late 1800s. The American Kennel Club recognized it in 1885.",
          "Today the Beagle is one of the most popular family dogs in the world, valued for its small size, cheerful nature, and sturdy build. It still works as a hunting hound in some places, and it is widely used as a detection dog, sniffing out prohibited food items, drugs, and other substances. Beagles are also commonly used in scientific research, which has been the subject of significant ethical debate, and many are rehomed after research.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance and size",
        paragraphs: [
          "The Beagle is a small, sturdy, and compact hound with a solid build and a gentle expression. It comes in two sizes in some countries: those standing up to 13 inches at the shoulder and those over 13 and up to 15 inches. Most weigh roughly 20 to 30 pounds, with females slightly smaller. The body is muscular and well-balanced, with a deep chest, a straight back, and strong legs.",
          "The head is broad, with a slightly domed skull, a square muzzle, and a black or dark nose. The large, soft, brown or hazel eyes give the Beagle its famously appealing, pleading expression, and the long, wide ears hang close to the cheeks and reach almost to the end of the nose. The tail is carried high, with a white tip, which hunters used to follow the dog through tall grass.",
          "The coat is short, dense, and weather-resistant. The classic color is tricolor, with a black saddle, tan head, and white legs, chest, and tail tip, but lemon, red and white, and other combinations are accepted. The coat sheds moderately all year, with seasonal increases.",
        ],
        lists: [
          {
            title: "Quick breed snapshot",
            items: [
              "Height: up to about 15 inches",
              "Weight: about 20 to 30 pounds",
              "Coat: short, dense, and weather-resistant",
              "Colors: tricolor, lemon, red and white, and other hound colors",
              "Lifespan: roughly 12 to 15 years",
            ],
          },
        ],
      },
      {
        id: "temperament",
        title: "Temperament and personality",
        paragraphs: [
          "Beagles are friendly, curious, and merry. They are good-natured dogs that tend to love everyone they meet, and they are famously sociable, getting along with children, strangers, and other dogs. A Beagle is rarely aggressive, and it is generally patient and gentle, making it a popular family pet.",
          "They are also determined and independent. Beagles were bred to follow a scent trail for hours without human direction, and that independence means they do not always listen to instructions. A Beagle that has picked up an interesting smell may ignore its owner completely, and it can wander for miles following a trail.",
          "The breed is intelligent, but it is not always easy to train, because it is easily distracted and motivated by food above all else. Beagles are clever at finding ways to get food, from opening cupboards to raiding bins, and their appetite is legendary. They are also known for their voices, with a loud, melodious bay or howl that carries a long way.",
          "Beagles are pack animals, and they do not like to be alone. They thrive on company, and they can become anxious, noisy, and destructive if left alone for long hours. They are playful and energetic, and many keep a puppyish attitude well into adulthood.",
        ],
        lists: [
          {
            title: "Personality in a few words",
            items: [
              "Friendly, curious, and merry",
              "Led by the nose",
              "Independent and sometimes stubborn",
              "Very food-motivated",
              "Dislikes being alone, and loves to howl",
            ],
          },
        ],
      },
      {
        id: "suitability",
        title: "Is a Beagle right for you?",
        paragraphs: [
          "The Beagle is a delightful companion for active families who want a friendly, sturdy, and cheerful dog, and who are ready for the challenges of a scent hound. It is not a good choice for people who want an obedient, off-lead dog, who cannot provide secure fencing, or who are away from home for long hours.",
          "With family, Beagles are generally gentle, patient, and playful, and they are often considered excellent with children. Their sturdy build means they cope well with energetic play, but supervision is still important, and children should be taught to treat the dog gently and to respect its space and food. Never leave any dog alone with young children.",
          "With other pets, most Beagles get along well with other dogs, since they were bred to work in packs, and many enjoy having a canine companion. Their hunting instincts mean they may chase cats, rabbits, and other small animals, so supervise introductions, and never leave a Beagle alone with small pets.",
          "Beagles can live in apartments, but they can be noisy, with barking and baying that may bother neighbors. They need a securely fenced yard with a high fence, because they are expert escape artists, digging under or climbing over barriers to follow a scent. They are best in a home where someone is around for much of the day.",
          "Owners should also be ready for the breed's appetite. Beagles are among the breeds most prone to obesity, and extra weight shortens life and worsens joint and back problems, so careful feeding and exercise are essential. Keep food, bins, and treats well out of reach.",
        ],
        lists: [
          {
            title: "A Beagle may suit you if you:",
            items: [
              "Want a friendly, sturdy, and cheerful family dog",
              "Can provide secure fencing and daily exercise",
              "Are patient with a dog that follows its nose",
              "Are home for much of the day",
            ],
          },
          {
            title: "Think twice if you:",
            items: [
              "Want a dog that is reliably obedient off the lead",
              "Live close to neighbors who dislike barking and howling",
              "Are away from home for long hours most days",
              "Cannot resist feeding treats and table scraps",
            ],
          },
        ],
      },
      {
        id: "care",
        title: "Exercise and daily care",
        figure: {
          n: 2,
          alt: "A Beagle walking on a lead with its nose to the ground on a trail",
          caption: "Beagles love long, sniffing walks, and following a scent is their favorite activity.",
        },
        paragraphs: [
          "Beagles are energetic, athletic dogs and need regular exercise. Most healthy adults need about 45 to 90 minutes of activity a day, including brisk walks, play, and time to sniff. They were bred to follow a trail for hours, and many have a lot of stamina, so a short stroll around the block is rarely enough.",
          "Let your Beagle use its nose. Sniffing is exhausting and rewarding for a scent hound, and a slow walk with plenty of time to investigate can tire a Beagle as much as a fast one. Scent games at home, such as hiding treats around the house or yard, and activities such as scent work, tracking, and nose work classes suit the breed.",
          "Never trust a Beagle off the lead in an unfenced area. Once a Beagle picks up a scent, it may ignore calls and follow the trail for a long way, into traffic or out of sight. Use a secure harness and a lead on walks, and let your dog run only in securely fenced spaces. Make sure identification tags and a microchip are up to date.",
          "Mental stimulation is as important as physical exercise. Puzzle feeders, snuffle mats, scent games, new tricks, and short training sessions keep a clever nose busy. A bored Beagle will find its own entertainment, and the results, such as digging, howling, and raiding the bin, are rarely welcome.",
          "Be careful in hot weather, and exercise in the cool parts of the day. After walks, check the ears, coat, and skin for burrs, ticks, and foreign objects. Keep your Beagle lean, since extra weight puts strain on the back and joints.",
        ],
        lists: [
          {
            title: "A sample day for an adult Beagle",
            items: [
              "Morning: a 30 to 45 minute brisk, sniff-filled walk, followed by breakfast",
              "Midday: a puzzle feeder or snuffle mat while you are busy",
              "Afternoon: a scent game, a training session, or play in a secure yard",
              "Evening: a second walk, dinner, and relaxing with the family",
            ],
          },
        ],
      },
      {
        id: "feeding",
        title: "Feeding and nutrition",
        paragraphs: [
          "A complete and balanced dog food made for the dog's life stage is the best starting point for a Beagle. Many do well on a good-quality food made for small to medium breeds. Because the breed is prone to obesity, ask your vet to help you choose a food and to adjust it as your dog's weight and activity change.",
          "How much to feed depends on the dog's weight, age, activity level, and metabolism, and the feeding guide on the label is only a starting point. The table below gives rough daily calorie ranges for healthy adults with moderate activity. Many dry foods contain roughly 350 to 450 calories per cup, so a typical adult Beagle may eat around one and a half cups a day, split into two meals.",
          "Puppies need a food formulated for growth, ideally one suited to small or medium breeds. Feed three to four small meals a day for young puppies, moving to two meals by about six months. Ask your vet when to switch to an adult diet, usually around 12 months.",
          "Beagles are famously food-obsessed, and they will eat almost anything, so careful measuring is essential. Measure every meal, limit treats, avoid feeding from the table, and use part of the daily kibble as training rewards. A slow feeder or puzzle bowl helps dogs that gulp. Many owners find that a Beagle can look hungry all the time even when it is getting enough, so resist the pleading eyes.",
          "Secure the kitchen. Beagles are clever thieves that can open cupboards, raid bins, and counter-surf, and they may eat things that are dangerous, including chocolate, grapes, raisins, onions, garlic, and xylitol, all of which are toxic to dogs. Keep food and bins out of reach, and see a vet urgently if your dog eats something it should not.",
        ],
        lists: [
          {
            title: "Rough daily calories for a healthy adult (moderate activity)",
            items: [
              "About 18 pounds: roughly 460 to 625 calories",
              "About 22 pounds: roughly 535 to 725 calories",
              "About 25 pounds: roughly 590 to 795 calories",
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
          text: "You should be able to feel your dog's ribs easily and see a waist from above. Beagles gain weight quickly, and extra weight strains the back and joints, so keep your Beagle lean.",
        },
      },
      {
        id: "training",
        title: "Training and socialization",
        paragraphs: [
          "Beagles are intelligent, but training takes patience, consistency, and a lot of good treats. They are motivated by food, which helps, but they are also easily distracted by smells and independent by nature, so they do not always comply. A Beagle that is interested in a scent will often ignore its owner entirely.",
          "Use positive, reward-based methods, with tasty treats, toys, and praise. Harsh corrections, shouting, or physical punishment backfire, damaging trust and making the dog stubborn or fearful. Keep sessions short, varied, and fun, and end on a success. Because the breed is easily distracted, train in a quiet place first, and add distractions gradually.",
          "Start early. Begin training and socialization the day your puppy comes home. Introduce your puppy gently to many people, places, surfaces, sounds, and well-mannered dogs, always at a pace the puppy can handle. Beagles are generally friendly, but a poorly socialized dog can become shy or fearful. Ask your vet when it is safe to begin outings after vaccinations, and consider a well-run puppy class.",
          "Recall is the hardest skill. Practice it with very high-value rewards, such as small pieces of meat or cheese, always on a long line in safe areas, but accept that a Beagle should never be trusted off the lead in unsecured areas. Teach a strong leave it and wait at doors, since a Beagle that bolts after a scent can be gone in seconds.",
          "House training can take longer than with some breeds. Keep to a strict routine, take your dog out often, reward success right away, and never punish accidents. Crate training helps, and many Beagles like the cozy den. Practice handling of paws, ears, and mouth so that grooming and veterinary care are easy. Teach a quiet cue early, since Beagles can be very vocal.",
        ],
        lists: [
          {
            title: "Skills worth teaching early",
            ordered: true,
            items: [
              "Name recognition and eye contact",
              "Sit, down, and stay",
              "Wait at doors and gates",
              "Loose-leash walking on a secure harness",
              "Leave it and drop it, including trading food or toys for treats",
              "Come when called, practiced with high-value rewards, always on a long line outdoors",
              "A quiet cue for barking and howling",
              "Calm acceptance of handling, grooming, and vet care",
            ],
          },
        ],
      },
      {
        id: "behavior",
        title: "Behavior and common problems",
        paragraphs: [
          "Most Beagle behavior problems come from the breed's scent drive, appetite, and need for company. Understanding the cause helps you respond early.",
          "Following scents and escaping is the best known. A Beagle can dig under fences, climb over barriers, and bolt through open doors, and it may follow a trail for miles. Use a high, secure fence, check for weak points, supervise time in the yard, and keep gates latched. A microchip and identification tags are essential.",
          "Howling and barking are natural for the breed. Beagles bay when they follow a scent, when they are excited, and when they are lonely or bored. Teach a quiet cue, reward calm behavior, increase exercise and mental work, and avoid leaving the dog alone for long periods. Consider your neighbors before getting a Beagle.",
          "Food stealing and scavenging are common. A Beagle will raid bins, steal from counters, and eat things it should not. Keep food out of reach, use secure bins, teach a reliable leave it, and never leave tempting items within reach.",
          "Destructive behavior and separation anxiety occur in bored, lonely dogs. A Beagle can chew furniture, dig, and howl. Increase exercise and mental work, provide durable chews and puzzle toys, and build alone-time gradually. Ask your vet or a qualified trainer for help if the problem is serious. A second compatible dog can help some Beagles, but it is not a cure.",
          "Resource guarding can occur. Beagles may guard food, bones, toys, or resting places. Never punish a growl, because it is a warning. Instead, teach trading games, avoid situations that trigger guarding, and work with a qualified behavior professional if the behavior is strong.",
        ],
        lists: [
          {
            title: "Common issues and first steps",
            items: [
              "Following scents and escaping: use high, secure fencing and supervise outdoor time",
              "Howling and barking: teach a quiet cue and increase exercise and mental work",
              "Food stealing: keep food out of reach and teach leave it",
              "Separation anxiety: build alone-time gradually and seek help if severe",
              "Resource guarding: teach trading and seek help if strong",
            ],
          },
        ],
      },
      {
        id: "grooming",
        title: "Grooming and coat care",
        figure: {
          n: 3,
          alt: "A Beagle's short coat being brushed with a rubber grooming mitt",
          caption: "The short, dense coat needs only a quick weekly brush.",
        },
        paragraphs: [
          "The Beagle's short, dense coat is easy to care for. It sheds moderately all year, with heavier shedding in some seasons, and the short, stiff hairs can work their way into clothes and furniture. The coat has a mild doggy odor, particularly when wet, and many Beagles roll in smelly things when they get the chance.",
          "Brush once a week with a rubber curry brush or a grooming glove to remove loose hair and keep the coat healthy. Brush more often during heavier shedding periods. A damp cloth or chamois can add shine after brushing.",
          "Bathe every four to eight weeks, or as needed, using a gentle dog shampoo, and rinse thoroughly. Too-frequent bathing can strip natural oils and irritate the skin. Dry the coat and ears well after bathing.",
          "Trim the nails every two to three weeks. Active dogs may wear them down, but they still need regular checks. Check the paws for cuts, cracks, and foreign objects, and check between the toes for irritation.",
          "Use grooming time as a health check. Feel for lumps, check the skin for redness, hot spots, or parasites, and look at the eyes, ears, and teeth. Beagles can get ticks and fleas from running in fields, so check after walks. Practice handling from puppyhood, so that grooming and veterinary care are easy.",
        ],
        lists: [
          {
            title: "A simple grooming schedule",
            items: [
              "Brush: once a week, more during heavy shedding",
              "Bathe: every four to eight weeks, or as needed",
              "Nails: every two to three weeks",
              "Ears: check weekly and clean only when needed",
              "Teeth: brush daily or at least several times a week",
              "Skin and body check: during every grooming session, and after walks",
            ],
          },
        ],
      },
      {
        id: "eyes",
        title: "Eye care",
        paragraphs: [
          "Beagles can suffer from several eye conditions. The best known are cherry eye, in which a gland in the third eyelid pops out, glaucoma, dry eye, and entropion, in which the eyelid rolls inward. Cataracts and distichiasis, in which extra eyelashes irritate the eye, can also occur.",
          "Check the eyes every day. Wipe away normal discharge with a clean, damp cloth or cotton pad, using a fresh one for each eye. Do not use human eye drops unless your vet recommends them.",
          "Contact your vet if you see redness, squinting, cloudiness, thick or colored discharge, rubbing at the eye, a red swelling in the corner of the eye, or any change in vision. Glaucoma is painful and can cause permanent blindness within hours or days, so treat any painful, red, or cloudy eye as an emergency. Cherry eye is treated with surgery.",
          "Yearly eye exams are a good idea, and responsible breeders have their dogs examined by a veterinary ophthalmologist before breeding.",
        ],
      },
      {
        id: "ears",
        title: "Ear care",
        paragraphs: [
          "Beagles have long, wide, hanging ears that cover the ear canal and limit air circulation. Moisture, wax, and dirt build up easily, and ear infections are very common in the breed, particularly in dogs that swim or have allergies.",
          "Check the ears weekly for redness, odor, discharge, or signs of discomfort. Healthy ears are pale pink and mostly clean, with no strong smell. If the ears look dirty, use a vet-approved ear cleaner on a cotton ball, wipe only the visible part, and let your dog shake its head.",
          "Never push cotton swabs into the ear canal. Dry the ears thoroughly after bathing and swimming. Lift the ear flap regularly to let air circulate, and check for ticks, burrs, and grass seeds after walks in fields and long grass.",
          "See your vet if your dog shakes its head often, scratches its ears, holds its head tilted, or has redness, discharge, or a bad smell. Ear infections need a proper diagnosis, because the wrong treatment can make things worse, and recurring infections should prompt a check for underlying allergies.",
        ],
      },
      {
        id: "dental",
        title: "Dental care",
        paragraphs: [
          "Dental disease is a problem for dogs of every breed. Plaque hardens into tartar, which can lead to gum disease, painful teeth, and infection that spreads to other organs. Starting care early is the best prevention.",
          "Brush your dog's teeth daily if you can, or at least several times a week, using a dog toothbrush and dog toothpaste. Never use human toothpaste. Start while your dog is young, and make it a calm routine with praise and a reward. A food-motivated Beagle often takes to tooth brushing well.",
          "Dental chews and toys can help reduce plaque but do not replace brushing. Look for products approved by a recognized veterinary dental council, and avoid very hard items such as bones and antlers, which can break teeth. Because Beagles are enthusiastic eaters, choose chews that suit their calorie allowance.",
          "Your vet will check the mouth at each visit and may recommend a professional cleaning. See a vet if you notice bad breath, red or bleeding gums, a broken tooth, drooling, or reluctance to eat.",
        ],
      },
      {
        id: "health",
        title: "Health and lifespan",
        paragraphs: [
          "Beagles typically live about 12 to 15 years, and many are healthy, hardy dogs. They are prone to some inherited and common conditions, including obesity, epilepsy, ear infections, back problems, and a few conditions specific to the breed. Knowing what to watch for helps you catch problems early.",
          "Regular veterinary checkups, a lean body weight, careful ear care, and early attention to changes in behavior, mobility, or appetite make the biggest difference. Choosing a breeder who health-tests their dogs also matters a great deal.",
          "See a vet promptly for seizures, yelping or reluctance to move, weakness in the legs, red or painful eyes, persistent ear scratching, limping, increased thirst, or any lump that is growing.",
        ],
        lists: [
          {
            title: "Conditions to know about",
            items: [
              "Obesity: the most common preventable problem in the breed",
              "Epilepsy: recurring seizures that may be inherited",
              "Intervertebral disc disease: spinal disc problems",
              "Hypothyroidism: an underactive thyroid gland",
              "Eye conditions: cherry eye, glaucoma, and dry eye",
              "Ear infections and skin allergies",
              "Musladin-Lueke syndrome: an inherited condition affecting connective tissue",
              "Lafora disease: an inherited seizure disorder",
              "Hip dysplasia and patellar luxation",
              "Beagle pain syndrome: an inflammatory condition of the blood vessels around the spinal cord",
            ],
          },
        ],
      },
      {
        id: "conditions",
        title: "Health conditions explained",
        paragraphs: [
          "Obesity is the biggest health concern in the breed. Overweight Beagles develop arthritis earlier, are more prone to back problems and diabetes, and live shorter lives. Their appetite is strong, and many are experts at begging and stealing food. Managing weight needs careful measuring of food, regular weighing, and plenty of exercise. Talk to your vet if your dog is overweight, and set a target weight together.",
          "Epilepsy causes recurring seizures. During a seizure a dog may collapse, paddle its legs, drool, and lose awareness for a minute or two. If your dog has a seizure, stay calm, keep the dog away from hazards, do not put anything in its mouth, note the time, and call your vet. Many dogs live well on daily anti-seizure medication. Lafora disease is an inherited form of epilepsy that begins in adult dogs, and a DNA test is available.",
          "Intervertebral disc disease occurs when a disc in the spine bulges or bursts and presses on the spinal cord. The breed's long body and short legs put it at risk. Signs include a hunched back, pain, reluctance to move, yelping, wobbliness, and weakness or paralysis in the back legs. It can come on suddenly. A vet diagnoses it with an examination and imaging, and treatment ranges from strict rest and pain relief to surgery. Prevention includes keeping the dog lean, avoiding jumping, and lifting the dog with proper support.",
          "Hypothyroidism develops when the thyroid gland does not make enough hormone. Signs include weight gain, lethargy, hair thinning, dry skin, and sensitivity to cold. It is diagnosed with a blood test and is managed well with daily medication.",
          "Musladin-Lueke syndrome is an inherited condition in which connective tissue is abnormal, causing tight skin, stiff joints, and a characteristic walk on tiptoes and a stiff, upright look to the face. A DNA test is available, and responsible breeders use it. Beagle pain syndrome, also called steroid-responsive meningitis-arteritis, is an inflammatory condition that causes fever, neck pain, and reluctance to move in young dogs. It responds to treatment with immune-suppressing medication, and early diagnosis matters.",
          "Cherry eye is a red swelling in the corner of the eye and is treated with surgery. Ear infections are common and need prompt treatment. Hip dysplasia and patellar luxation also occur, and a vet can diagnose them with an exam and X-rays. Skin allergies show up as itching, paw licking, and red skin, and may need long-term management.",
        ],
        note: {
          title: "Important",
          text: "This is general information, not a diagnosis. Always speak to your veterinarian if you are worried about your dog's health, and treat a seizure, sudden back pain, or a painful eye as an emergency.",
        },
      },
      {
        id: "genetics",
        title: "Health testing and choosing a puppy",
        paragraphs: [
          "The breeder you choose has more influence on your Beagle's health and temperament than almost anything else. A responsible breeder tests breeding dogs for inherited conditions, selects for stable, friendly temperaments, raises puppies in a home environment, socializes them early, and carefully screens buyers.",
          "Ask to see written proof of testing for both parents. Key checks for Beagles include DNA tests for Musladin-Lueke syndrome and Lafora disease, an eye examination by a veterinary ophthalmologist, thyroid testing, hip evaluations, and, where available, DNA tests for other inherited conditions. Ask about the family history of epilepsy, back problems, and ear problems.",
          "Be cautious about breeders who sell puppies with no health information, who say the breed has no health problems, who sell very young puppies, or who sell through unregulated online listings. Be wary of unusual colors or sizes sold as rare. A good breeder will ask you many questions about your home, your fencing, and your lifestyle, and may refuse to sell to an unsuitable home.",
          "Adoption is also an excellent route, and Beagles are common in breed rescues and shelters, including dogs retired from research and from hunting packs. A rescue can tell you about the dog's personality, energy, and how it behaves with other dogs, cats, and children. Dogs that have lived in kennels may need extra patience with house training and everyday life.",
        ],
        lists: [
          {
            title: "Questions to ask a breeder",
            items: [
              "Have the parents been DNA tested for Musladin-Lueke syndrome and Lafora disease?",
              "Can I see eye, thyroid, and hip test results for both parents?",
              "Is there a family history of epilepsy, back problems, or ear problems?",
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
          "A Beagle's needs shift across a long life. Planning for each stage helps you avoid problems and keep your dog healthy and happy.",
        ],
        lists: [
          {
            title: "Life stages",
            items: [
              "Puppy (to about 12 months): rapid growth, vaccinations as your vet advises, intensive socialization, house training, and puppy-proofing the house and yard",
              "Adolescent (about 6 to 24 months): a boisterous, testing phase, with chewing, selective hearing, and escape attempts, so keep training going and stay vigilant",
              "Adult (about 2 to 8 years): peak energy, daily exercise and scent games, annual checkups, and strict weight management",
              "Senior (from about 9 years): a slower pace, possible joint and back stiffness, twice-yearly checkups, softer bedding, gentler exercise, and regular checks for vision, hearing, and teeth",
            ],
          },
          {
            title: "Caring for an older Beagle",
            items: [
              "Keep exercising, but choose lower-impact options such as gentle sniffing walks",
              "Ask your vet about joint support and pain management",
              "Keep your dog at a healthy weight and warm in cold weather",
              "Use ramps and non-slip rugs to help a stiff dog get around",
              "Watch for changes in vision, hearing, or behavior, and report them promptly",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are Beagles good family dogs?",
        a: "Yes. They are friendly, patient, and playful, and they do well with children, though they need secure fencing, exercise, and training.",
      },
      {
        q: "How much exercise does a Beagle need?",
        a: "About 45 to 90 minutes a day, including brisk walks, sniffing time, and play, plus mental stimulation.",
      },
      {
        q: "Do Beagles shed?",
        a: "Yes, moderately all year, with heavier shedding in some seasons. Weekly brushing helps.",
      },
      {
        q: "Why do Beagles howl so much?",
        a: "Baying is part of their scent-hound heritage. They howl when following a scent, when excited, and when bored or lonely. Exercise, company, and training help.",
      },
      {
        q: "Can a Beagle be trusted off the lead?",
        a: "Generally no. Once they pick up a scent, they may ignore calls and follow it for miles, so they should only run off the lead in securely fenced areas.",
      },
      {
        q: "Why are Beagles always hungry?",
        a: "They are highly food-motivated scent hounds and are prone to obesity. Careful measuring of meals, secure storage, and plenty of exercise help.",
      },
      {
        q: "Are Beagles easy to train?",
        a: "They are intelligent but independent and easily distracted by smells. Short, varied, food-reward-based sessions work best.",
      },
      {
        q: "How long do Beagles live?",
        a: "Usually about 12 to 15 years. Good breeding, a lean weight, and regular veterinary care help them live well.",
      },
    ],
  },
};
