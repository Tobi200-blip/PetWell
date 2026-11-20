// Expanded long-form breed profiles, batch 5 (deep-dive standard): Great Dane and Dobermann.
// Same shape as breedProfilesExpanded4.js. A section may carry a `figure` ({ n, alt, caption }),
// which shows src/assets/breeds/<slug>-<n>.jpg as a small photo card (nothing shows if the file is missing).
// Keep vetReviewed false until a licensed vet has signed off on the profile.

export const breedProfilesExpanded5 = {
  "great-dane": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Germany",
    summary:
      "One of the tallest dog breeds in the world, the Great Dane is a gentle, affectionate giant that needs space, careful growth management, and an owner who understands the health risks of a very large body.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        figure: {
          n: 1,
          alt: "A Great Dane standing tall in a garden",
          caption: "Once bred to hunt boar, today's Great Dane is best known as a gentle family companion.",
        },
        paragraphs: [
          "Despite its name, the Great Dane has nothing to do with Denmark. The breed was developed in Germany, where it is called the Deutsche Dogge, or German mastiff. Its ancestors were large, powerful mastiff-type dogs, probably crossed with sighthounds such as the Irish wolfhound, and similar giant dogs appear in European art and writing going back several centuries.",
          "From about the 1500s, German nobles kept these dogs to hunt wild boar, a dangerous animal that required size, courage, and speed. The dogs would hold the boar until the hunters arrived. When boar hunting declined, the same dogs were kept as estate guardians and as status symbols, often living inside the homes of wealthy families and sleeping in their bedchambers.",
          "In the 1800s, German breeders worked to refine the breed into a more elegant, even-tempered dog. Germany adopted it as a national breed in 1876, and a breed club was formed soon afterward. The breed reached the United States in the late 1800s and was recognized by the American Kennel Club in 1887, and it is now known around the world, often described as the Apollo of dogs for its noble, balanced appearance.",
          "Today the Great Dane is almost entirely a companion animal. Its soft nature and calm indoor behavior have made it popular in homes that have room for it, and individual Danes have worked as therapy dogs. The breed also has a famous place in popular culture, which has brought many people to it who were not prepared for the realities of living with a giant dog.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance and size",
        paragraphs: [
          "The Great Dane is a truly giant breed. Adult males commonly stand 30 to 34 inches at the shoulder and weigh around 140 to 175 pounds, while females are typically 28 to 32 inches and about 110 to 140 pounds. Standing on its hind legs, a Dane can look an adult in the eye or look down on them. Despite the size, a well-bred Dane is meant to look balanced and elegant, with a long, strong neck, a deep chest, and a tucked-up waist.",
          "The head is long and rectangular with a strong muzzle and a distinct stop. The ears are naturally folded forward and hang close to the cheeks. In the past, ears were often cropped to stand upright, but cropping is now banned or restricted in many countries, and natural ears are perfectly normal and healthy.",
          "The coat is short, smooth, and glossy. Recognized colors include fawn, brindle, blue, black, harlequin, and mantle. Harlequin dogs are white with irregular black patches, and mantle dogs have a black blanket over the body with white on the chest, muzzle, and legs. Some colors are linked to the merle gene, which carries health risks if two merle dogs are bred together, a point covered in the health testing section below.",
        ],
        lists: [
          {
            title: "Quick breed snapshot",
            items: [
              "Height: about 28 to 34 inches",
              "Weight: about 110 to 175 pounds",
              "Coat: short, smooth, and glossy",
              "Colors: fawn, brindle, blue, black, harlequin, and mantle",
              "Lifespan: roughly 7 to 10 years",
            ],
          },
        ],
      },
      {
        id: "temperament",
        title: "Temperament and personality",
        paragraphs: [
          "Great Danes are known as gentle giants, and the nickname is deserved. A well-bred, well-raised Dane is calm, affectionate, patient, and deeply attached to its family. Many are happiest simply lying near their people, and they often try to sit in laps, lean against legs, and follow family members from room to room.",
          "They are generally friendly with strangers, although some are reserved, and their sheer size is a natural deterrent. Danes are not usually aggressive, but they are alert and may bark to announce visitors. A deep Dane bark is impressive, and most visitors do not need to hear it twice.",
          "Danes are sensitive dogs. They respond poorly to harsh words or rough handling, and they can become anxious or fearful if treated unkindly. They also tend to form strong bonds and do not like being left alone for long periods. A lonely Dane can become distressed, and a distressed Dane is capable of causing a great deal of damage.",
          "Young Danes can be clumsy and boisterous, and many stay playful well into adulthood. Because they do not know their own size, they may knock over small children, furniture, or coffee tables with a happy tail. Teaching manners from the very first day matters far more with a dog that can weigh more than many adults.",
        ],
        lists: [
          {
            title: "Personality in a few words",
            items: [
              "Gentle, patient, and affectionate",
              "Deeply attached to family",
              "Usually calm indoors once mature",
              "Sensitive to harsh tones and treatment",
              "Clumsy and unaware of their own size, especially when young",
            ],
          },
        ],
      },
      {
        id: "suitability",
        title: "Is a Great Dane right for you?",
        paragraphs: [
          "Great Danes can be wonderful companions, but they are a major commitment. Everything about a Dane is bigger: the food bill, the vet bill, the bed, the car, the crate, and the effect on your living space. Before choosing a Dane, think honestly about whether your life and your budget can handle a dog this size.",
          "Space matters, but not in the way many people expect. Danes do not need a huge yard, and many are surprisingly calm indoors. What they do need is room to stretch out, move without knocking things over, and lie down comfortably. A cramped home can be hard on a giant dog, and stairs can be a problem for joints, so ground-floor or ramp-friendly living helps.",
          "Cost is a real factor. A Dane eats a great deal, and medications, anesthetics, and flea and worming treatments are all dosed by weight, so they cost more. Pet insurance, where it is available, is worth serious consideration, because emergency surgery for bloat or other conditions can be very expensive.",
          "Great Danes are usually good with children, but small children can be knocked over accidentally, and a Dane leaning on a toddler is a safety issue. With other pets, they often get along well, especially when raised together, though their size means careful introductions are wise.",
          "For first-time owners, a Dane can work if the owner is prepared, committed to training from day one, and ready for the health risks. Be aware that this is a short-lived breed, and many owners find the shorter lifespan emotionally difficult.",
        ],
        lists: [
          {
            title: "A Great Dane may suit you if you:",
            items: [
              "Have enough room indoors and a vehicle that can carry a giant dog",
              "Can budget for food, veterinary care, and possibly insurance",
              "Are home often, or can give a lot of company",
              "Are committed to gentle, consistent training from puppyhood",
            ],
          },
          {
            title: "Think twice if you:",
            items: [
              "Live in a small or cramped space with many stairs",
              "Want a long-lived breed",
              "Cannot afford large veterinary bills",
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
          alt: "A Great Dane walking on a lead outdoors",
          caption: "Daily walks keep a Dane fit, but hard exercise should wait until the joints have matured.",
        },
        paragraphs: [
          "For their size, adult Great Danes need only moderate exercise. Most are happy with one to two hours of activity a day, usually in the form of a couple of good walks and some play. They are sprinters rather than marathon runners, and many are quite happy to lounge on the sofa afterward.",
          "Puppies and adolescents need special care. A Dane puppy grows at an extraordinary rate, and its joints and bones are soft and vulnerable. Avoid forced running, jumping, long hikes, and rough play on hard surfaces until the dog is fully grown, usually at around 18 to 24 months. Short, gentle walks and free play on soft ground are best.",
          "Mental exercise is also useful. Danes enjoy training games, scent games, and short outings that let them explore. They are not usually high-drive dogs, but boredom and loneliness can still cause problems.",
          "Danes feel temperature extremes. Their short coats offer little insulation, so they get cold easily and may need a coat in winter. Their large body mass also means they can overheat in hot weather, so exercise in the cool parts of the day and always provide shade and fresh water.",
          "Provide a big, supportive bed that is thick enough to protect the elbows and hips. Giant dogs often develop pressure sores on hard floors, called hygromas, so soft bedding is important.",
        ],
        lists: [
          {
            title: "A sample day for an adult Dane",
            items: [
              "Morning: a 30 to 40 minute walk, followed by a small breakfast",
              "Midday: rest and company, with a chew or puzzle toy",
              "Afternoon: a play session or training in a safe space",
              "Evening: a second walk, a small dinner, and a long sleep on a supportive bed",
            ],
          },
        ],
      },
      {
        id: "feeding",
        title: "Feeding and nutrition",
        paragraphs: [
          "Feeding a Great Dane is a careful balancing act, especially during puppyhood. These dogs grow extremely quickly, and growing too fast can contribute to developmental bone and joint problems. The goal is slow, steady growth rather than the largest possible puppy.",
          "Choose a food made specifically for large or giant breed puppies. These foods contain controlled levels of calories and calcium. Do not add calcium or other supplements unless your vet tells you to, because too much can disrupt bone development. Feed three to four measured meals a day to young puppies, moving to two meals by about six months, and keep your puppy lean, never plump.",
          "Adult Danes are often fed a complete large-breed adult food, though many vets suggest keeping adults on a large-breed formula for life. The table below gives rough daily calorie ranges for healthy adults of moderate activity. Many dry foods contain roughly 350 to 400 calories per cup, so a typical adult Dane may eat around five to eight cups a day, but the label and your vet's advice should set the real figure.",
          "Bloat, medically called gastric dilatation-volvulus, is a life-threatening emergency that Danes are at particularly high risk of. To reduce the risk, feed two or three smaller meals rather than one large one, avoid vigorous exercise for at least an hour before and after eating, and discourage fast eating. Studies have linked raised food bowls with a higher risk in giant breeds, so speak to your vet before using one.",
          "Fresh water should always be available. Treats should count toward the daily total, and foods toxic to dogs, including chocolate, grapes, raisins, onions, and the sweetener xylitol, must be kept out of reach. Because Danes can reach counters easily, store food securely.",
        ],
        lists: [
          {
            title: "Rough daily calories for a healthy adult (moderate activity)",
            items: [
              "About 100 pounds: roughly 1,700 to 2,200 calories",
              "About 120 pounds: roughly 1,950 to 2,500 calories",
              "About 140 pounds: roughly 2,200 to 2,800 calories",
              "About 160 pounds: roughly 2,400 to 3,100 calories",
            ],
          },
          {
            title: "Feeding habits that help",
            items: [
              "Use a large-breed or giant-breed puppy food until your vet advises a change",
              "Feed two or three smaller meals, never one large meal",
              "Rest quietly for an hour after eating",
              "Check body condition monthly and keep your dog lean",
            ],
          },
        ],
        note: {
          title: "A quick weight check",
          text: "You should be able to feel your dog's ribs easily and see a clear tuck at the waist. A lean Dane puts far less strain on its joints and heart.",
        },
      },
      {
        id: "training",
        title: "Training and socialization",
        paragraphs: [
          "Great Danes are intelligent and eager to please, but they can also be slow to mature and somewhat stubborn. Start training the day your puppy comes home. A dog that is cute and manageable at 20 pounds becomes a serious problem if it has learned to jump up, pull, or ignore commands by the time it weighs 120.",
          "Use gentle, reward-based methods. Praise, treats, and calm encouragement work much better than scolding, and harsh corrections can damage a Dane's trust. Keep sessions short and positive, because young Danes tire quickly and their attention can drift.",
          "Socialization is vital. Introduce your puppy to many people, places, sounds, and well-behaved dogs while it is young, always at a pace the puppy enjoys. A confident, well-socialized Dane is a delight, while a fearful giant can be a challenge. Ask your vet when it is safe to begin outings, and consider a good puppy class.",
          "Focus on the manners that matter most for a very large dog: not jumping up, walking calmly on a loose leash, waiting at doors, staying off furniture if you prefer, and coming when called. Teach a solid leave it and drop it, since a Dane can reach almost anything.",
          "Never use a leash to jerk a Dane's neck, and avoid exercises that put stress on growing joints, such as jumping.",
        ],
        lists: [
          {
            title: "Skills worth teaching early",
            ordered: true,
            items: [
              "Name recognition and eye contact",
              "Sit, down, and stay",
              "Loose-leash walking, before the dog is too strong to manage",
              "Four paws on the floor when greeting people",
              "A reliable recall",
              "Leave it and drop it",
              "Calm handling of paws, ears, and mouth for vet visits",
            ],
          },
        ],
      },
      {
        id: "behavior",
        title: "Behavior and common problems",
        paragraphs: [
          "Most Great Dane behavior issues come from size, loneliness, or lack of early training. Understanding the cause makes it easier to fix.",
          "Jumping and leaning are common and can be dangerous. Dogs that are rewarded with attention when they jump will keep doing it. Teach an alternative such as sitting to greet, and ask visitors to ignore a jumping dog until all four paws are on the floor.",
          "Separation anxiety is common because Danes bond so closely. Signs include destructive chewing, howling, drooling, and toileting accidents. Build alone-time gradually, provide company where you can, and ask your vet or a qualified trainer for help if the problem is serious.",
          "Chewing is natural, especially during teething and adolescence, and a giant dog can destroy furniture quickly. Provide strong, safe chews, supervise, and keep tempting objects out of reach. Counter surfing is another habit that is hard to stop once learned, so manage the environment from the start.",
          "Drooling, flatulence, and loud snoring are more a matter of life with the breed than behavior problems, but they are worth knowing about. Keep a towel handy and ask your vet about diet if gas is excessive.",
        ],
        lists: [
          {
            title: "Common issues and first steps",
            items: [
              "Jumping up: reward four paws on the floor and ignore jumping",
              "Separation anxiety: build alone-time gradually and seek help if severe",
              "Destructive chewing: provide strong chews and manage access to tempting items",
              "Counter surfing: keep food out of reach and reward calm behavior",
              "Fearfulness: socialize early and gently, and consult a behaviorist if it persists",
            ],
          },
        ],
      },
      {
        id: "grooming",
        title: "Grooming and coat care",
        figure: {
          n: 3,
          alt: "A Great Dane with a short, glossy coat",
          caption: "The short coat is easy to care for, but skin, nails, and elbows need regular attention.",
        },
        paragraphs: [
          "The Great Dane's short coat is easy to care for. Brush weekly with a rubber curry comb or a soft bristle brush to remove loose hair and keep the coat glossy. Danes shed moderately all year, and the amount can surprise owners of such a short-haired dog.",
          "Bathe your dog when it is dirty or smelly, usually every one to two months. Bathing a giant dog is a big job, so plan for a large tub, a non-slip surface, and plenty of towels. Use a dog shampoo and rinse thoroughly to avoid skin irritation.",
          "Nails grow quickly and are thick, so trim them every two to three weeks. Long nails change how a dog stands and put strain on the joints. Ask your vet or groomer to show you how to trim safely, as the quick can be hard to see in dark nails.",
          "Check the skin regularly. Look at the elbows for calluses and hygromas, which are fluid-filled swellings from lying on hard floors. Check lip folds and facial skin for dampness and irritation, since drool can cause skin infections.",
          "Grooming is also a quick health check. As you brush, feel for lumps, check for ticks and fleas, and look at the skin, ears, and eyes.",
        ],
        lists: [
          {
            title: "A simple grooming schedule",
            items: [
              "Brush: once a week",
              "Bathe: every one to two months, or as needed",
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
          "Great Danes have loose skin around the eyes, and this makes them prone to eyelid problems. Entropion is when the eyelid rolls inward and the lashes rub on the eye, while ectropion is when the lower lid droops outward and exposes the eye to dirt and dryness.",
          "Check your dog's eyes daily. Clean away normal discharge with a clean, damp cloth, using a fresh piece for each eye. Do not use human eye drops without veterinary advice.",
          "Contact your vet if you see redness, squinting, constant tearing, thick or colored discharge, a red swelling in the corner of the eye, or any sign of pain. A swelling in the corner of the eye can be a prolapsed gland, known as cherry eye, which needs veterinary treatment.",
          "Some conditions can be corrected surgically, and early treatment protects the surface of the eye from damage.",
        ],
      },
      {
        id: "ears",
        title: "Ear care",
        paragraphs: [
          "Great Danes with natural, folded ears can trap moisture and wax, which makes ear infections a possibility. Check the ears weekly for redness, odor, discharge, or signs of discomfort.",
          "Healthy ears are pale pink and mostly clean, with no strong smell. If they look dirty, use a vet-approved ear cleaner on a cotton ball, wipe the visible part, and let the dog shake. Never push cotton swabs into the ear canal.",
          "Dry the ears after bathing or swimming. Contact your vet if your dog shakes its head often, scratches its ears, or the ears smell or look red.",
          "Danes with a lot of white, especially harlequin and white-coated dogs, can be born deaf in one or both ears. If your dog does not respond to sounds, ask your vet about a hearing test.",
        ],
      },
      {
        id: "dental",
        title: "Dental care",
        paragraphs: [
          "Dental disease affects most dogs, and giant breeds are no exception. Plaque turns into tartar, which can cause gum disease, painful teeth, and infection that can affect other organs.",
          "Brush your dog's teeth daily if possible, or at least several times a week, using a dog toothbrush and dog toothpaste. Never use human toothpaste. Start gradually and reward your dog so it learns to accept brushing.",
          "Dental chews can help reduce plaque but do not replace brushing. Look for products approved by a recognized veterinary dental council, and avoid very hard items such as bones and antlers that can break teeth.",
          "Your vet will check your dog's mouth at each visit. Because anesthesia carries extra risk for giant breeds, regular home care that reduces the need for dental cleanings is especially valuable.",
        ],
      },
      {
        id: "health",
        title: "Health and lifespan",
        paragraphs: [
          "Great Danes typically live about 7 to 10 years, which is shorter than most breeds. Many are healthy through most of their lives, but the breed is prone to several serious conditions that owners need to know about before taking one home.",
          "Regular veterinary checkups, a lean body weight, careful feeding, and early attention to any change in behavior or mobility make the biggest difference. Choosing a breeder who health-tests their dogs also matters a great deal.",
          "See a vet immediately for a swollen or hard belly, unproductive retching, restlessness, or collapse, as these can signal bloat. Also seek prompt attention for limping, weakness in the back legs, coughing, fainting, or any lump that is growing.",
        ],
        lists: [
          {
            title: "Conditions to know about",
            items: [
              "Bloat (gastric dilatation-volvulus): a life-threatening twisting of the stomach",
              "Dilated cardiomyopathy: a heart muscle disease that weakens the heart",
              "Hip dysplasia: an inherited malformation of the hip joint",
              "Wobbler syndrome: compression of the neck spinal cord causing a wobbly gait",
              "Bone cancer: osteosarcoma is more common in giant breeds",
              "Hypothyroidism: an underactive thyroid gland",
              "Eyelid problems: entropion, ectropion, and cherry eye",
              "Hygromas and skin problems: pressure swellings and skin irritation",
              "Growth disorders: developmental bone problems in fast-growing puppies",
              "Deafness: especially in white and harlequin dogs",
            ],
          },
        ],
      },
      {
        id: "conditions",
        title: "Health conditions explained",
        paragraphs: [
          "Bloat is the condition most associated with the breed. The stomach fills with gas and may twist on itself, cutting off blood flow and putting pressure on the organs. Signs include a swollen belly, drooling, unproductive retching, restlessness, a rapid heartbeat, and collapse. It is an emergency, and a dog can die within hours. Treatment is surgery. Many vets recommend a preventive procedure called a gastropexy, which tacks the stomach in place, often performed at the same time as spaying or neutering. Ask your vet about it early.",
          "Dilated cardiomyopathy, or DCM, is a disease in which the heart muscle becomes thin and weak, so the heart enlarges and pumps poorly. Signs include tiredness, coughing, fainting, difficulty breathing, and a swollen abdomen, but some dogs show no signs until the disease is advanced. Diagnosis involves listening to the heart, an ultrasound, and sometimes heart rhythm monitoring. Medication can help dogs live more comfortably, and regular screening is worth discussing with your vet.",
          "Hip dysplasia occurs when the hip joint does not fit together properly, causing wear, pain, and arthritis. Signs include stiffness after rest, difficulty rising, bunny-hopping, and reluctance to climb stairs. A vet diagnoses it with an exam and X-rays. Management includes keeping the dog lean, controlled exercise, pain relief, physical therapy, joint support, and sometimes surgery.",
          "Wobbler syndrome, or cervical spondylomyelopathy, is a condition in which the bones of the neck put pressure on the spinal cord. Affected dogs often have an unsteady, wobbly gait in the back legs, may cross their feet, and can have a stiff neck. Diagnosis requires advanced imaging, and treatment ranges from rest and medication to surgery in more serious cases.",
          "Osteosarcoma is an aggressive bone cancer that is more common in large and giant breeds. The first sign is usually a persistent lameness or a swelling on a leg. It is diagnosed with X-rays and a biopsy, and treatment often involves amputation and chemotherapy. Any lameness that does not improve within a few days should be examined.",
          "Hypothyroidism is an underactive thyroid. Signs include weight gain, tiredness, hair thinning, dry skin, and cold intolerance. A blood test diagnoses it, and daily medication usually manages it very well.",
          "Eyelid disorders, such as entropion and ectropion, cause irritation, redness, and sometimes infection. Mild cases can be managed with eye drops, while more severe cases are corrected with surgery. Cherry eye, a prolapsed gland, is also treated surgically.",
          "Growth disorders in puppies include panosteitis, which causes shifting leg pain, and hypertrophic osteodystrophy, which causes swollen, painful joints and fever. Both are linked to rapid growth. Feeding a controlled-calorie, large-breed puppy food and avoiding supplements helps lower the risk.",
        ],
        note: {
          title: "Important",
          text: "This is general information, not a diagnosis. Always speak to your veterinarian if you are worried about your dog's health, and treat a swollen belly as an emergency.",
        },
      },
      {
        id: "genetics",
        title: "Health testing and choosing a puppy",
        paragraphs: [
          "The breeder you choose has more influence on your Great Dane's long-term health than almost anything else. A responsible breeder tests breeding dogs for inherited conditions, raises puppies in a clean home environment, socializes them early, and is happy to answer questions and show you results.",
          "Ask to see written proof of testing for both parents. Key checks for Great Danes include hip evaluations, a heart examination by a veterinary cardiologist, thyroid testing, and eye examinations. Ask the breeder about the lifespan of the dogs in the pedigree, since longevity within a line is a useful clue.",
          "Be very cautious about any breeder who deliberately breeds two merle or harlequin dogs together in a way that could produce double merle puppies, which are white and at high risk of deafness and blindness. A responsible breeder understands color genetics and avoids this.",
          "Adoption is also an excellent route. Giant breed rescues exist in many places, and a rescue Dane, often an adult, can be a wonderful companion. Rescue staff can tell you about the dog's temperament and any health needs.",
        ],
        lists: [
          {
            title: "Questions to ask a breeder",
            items: [
              "Can I see health test results, including heart and hip results, for both parents?",
              "How long did the dogs in the pedigree live, and what did they die of?",
              "Are the puppies raised in the home and socialized?",
              "What do you recommend about gastropexy to prevent bloat?",
              "Will you take the dog back at any age if I cannot keep it?",
            ],
          },
        ],
      },
      {
        id: "lifestages",
        title: "Puppy to senior: what changes",
        paragraphs: [
          "A Great Dane's life is shorter than most breeds, and each stage moves quickly. Planning ahead helps you give your dog the best possible years.",
        ],
        lists: [
          {
            title: "Life stages",
            items: [
              "Puppy (to about 12 months): rapid growth, vaccinations as your vet advises, socialization, house training, and a controlled-growth diet",
              "Adolescent (about 12 to 24 months): still growing in strength and joints, so continue careful exercise and consistent training",
              "Adult (about 2 to 5 years): a stable weight, moderate exercise, annual checkups, and a heart and weight watch",
              "Senior (from about 5 or 6 years): slower pace, possible joint stiffness, twice-yearly checkups, softer bedding, and close attention to heart health and lumps",
            ],
          },
          {
            title: "Caring for an older Dane",
            items: [
              "Choose lower-impact exercise, such as gentle walks",
              "Ask your vet about joint support and pain management",
              "Use ramps and non-slip rugs to help a stiff dog get around",
              "Watch for coughing, tiredness, or breathing changes and report them promptly",
              "Be mindful of quality of life, and talk to your vet openly as your dog ages",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are Great Danes good family dogs?",
        a: "Yes, they are usually gentle and patient with children, though their size means small kids need supervision, and the dog must be taught good manners early.",
      },
      {
        q: "How long do Great Danes live?",
        a: "Most live about 7 to 10 years, which is shorter than many breeds. Good breeding, a lean weight, and regular veterinary care give them the best chance.",
      },
      {
        q: "How much exercise does a Great Dane need?",
        a: "Adults usually need one to two hours of moderate activity a day. Puppies need gentle, limited exercise so their growing joints are protected.",
      },
      {
        q: "How much do Great Danes eat?",
        a: "A lot. Many adults eat roughly 5 to 8 cups of dry food a day, depending on the food, size, and activity. Your vet can help set the right amount.",
      },
      {
        q: "What is bloat and why is it a risk?",
        a: "Bloat is a twisting of the stomach that can kill within hours. Great Danes are at high risk, so learn the signs and ask your vet about a preventive gastropexy.",
      },
      {
        q: "Do Great Danes drool and shed?",
        a: "Many drool, especially after eating or drinking, and they shed moderately all year. Their short coat is easy to brush.",
      },
      {
        q: "Can a Great Dane live in an apartment?",
        a: "It is possible if the space allows the dog to move comfortably and the owner provides regular walks. Stairs and cramped spaces can be hard on giant dogs.",
      },
      {
        q: "Can Great Danes be left alone?",
        a: "Short periods are fine once trained, but they bond closely to their family and can become anxious or destructive if left for long hours.",
      },
    ],
  },

  "dobermann": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Germany",
    summary:
      "Athletic, intelligent, and fiercely loyal, the Dobermann is a protective companion that bonds deeply with its family and needs training, exercise, and responsible ownership.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        figure: {
          n: 1,
          alt: "A Dobermann standing alert outdoors",
          caption: "Developed in Germany in the 1800s, the Dobermann was bred as a protective companion.",
        },
        paragraphs: [
          "The Dobermann was created in Germany in the late 1800s by Karl Friedrich Louis Dobermann, who lived in the town of Apolda. He worked as a tax collector and also ran the local dog pound, and he wanted a dog that could protect him on his rounds. He set out to create a loyal, intelligent, and fearless guardian that would also be a close companion.",
          "The exact breeds behind the Dobermann are not recorded with certainty. Most breed historians believe the mix included the German Pinscher, the Rottweiler, and the Manchester Terrier, and some add the Greyhound, Weimaraner, and other breeds for speed, scent, and sleekness. After Dobermann's death in 1894, other breeders, notably Otto Goeller, continued to refine the breed and helped establish the first breed club and standard.",
          "The breed reached the United States in the early 1900s, and the American Kennel Club recognized it in 1908. Its name is spelled Dobermann in Germany and much of Europe, while in North America it has long been known as the Doberman Pinscher or simply the Doberman. All refer to the same breed.",
          "Dobermanns became famous as military and police dogs. The United States Marine Corps used them as war dogs in the Pacific during the Second World War, and they have since served in police, search, and protection work around the world. Today most live as family companions and sport dogs, and the breed is also a keen competitor in obedience and tracking.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance and size",
        paragraphs: [
          "The Dobermann is a medium-large, muscular, elegant dog that looks powerful and athletic. Males typically stand about 26 to 28 inches at the shoulder and weigh roughly 75 to 100 pounds. Females are smaller, usually 24 to 26 inches and about 60 to 90 pounds. The body is compact and square, with a deep chest, a tucked-up waist, and a proud, upright carriage.",
          "The head is long and wedge-shaped, with a strong muzzle and alert, almond-shaped eyes. In the past, the ears were cropped to stand upright and the tail was docked short. Both practices are banned or restricted in many countries, and natural ears and tails are healthy and increasingly common.",
          "The coat is short, smooth, and shiny, and it lies close to the body. Recognized colors are black, red, blue, and fawn, all with rust-colored markings above the eyes, on the muzzle, chest, and legs. The coat has very little undercoat, which is why the breed feels the cold.",
        ],
        lists: [
          {
            title: "Quick breed snapshot",
            items: [
              "Height: about 24 to 28 inches",
              "Weight: about 60 to 100 pounds",
              "Coat: short, smooth, and glossy",
              "Colors: black, red, blue, and fawn, with rust markings",
              "Lifespan: roughly 10 to 12 years",
            ],
          },
        ],
      },
      {
        id: "temperament",
        title: "Temperament and personality",
        paragraphs: [
          "The Dobermann is intelligent, energetic, and deeply loyal. Many owners describe it as a Velcro dog, one that wants to be physically close to its family at all times. Behind the formidable appearance is often a sensitive, affectionate, and surprisingly goofy companion.",
          "The breed was created to protect, and many Dobermanns are naturally alert and watchful. They notice everything, are wary of unfamiliar people, and will defend their home and family. A well-socialized dog can tell the difference between a friendly visitor and a genuine threat, but a poorly socialized one may become fearful or overprotective.",
          "Dobermanns are very quick learners and are eager to work with their person. They excel when given tasks and training. They are also sensitive, and harsh methods can damage trust and lead to anxiety or aggression. A calm, fair, consistent owner brings out the best in the breed.",
          "They need to be part of the family. A Dobermann left alone in a yard or kennel for long hours is likely to become bored, anxious, or destructive. This is a dog that needs to live indoors with its people.",
        ],
        lists: [
          {
            title: "Personality in a few words",
            items: [
              "Intelligent and eager to learn",
              "Loyal, affectionate, and strongly bonded to family",
              "Alert and naturally protective",
              "Athletic with plenty of energy",
              "Sensitive to harsh treatment",
            ],
          },
        ],
      },
      {
        id: "suitability",
        title: "Is a Dobermann right for you?",
        paragraphs: [
          "The Dobermann can be a superb companion for the right person, but it is not a casual choice. It needs training, exercise, company, and an owner who can handle a strong, intelligent, protective dog calmly and responsibly.",
          "Experience helps. First-time owners can succeed with this breed, but they need to be committed to training classes, reading, and early socialization. A Dobermann that has not been taught good manners and confidence can become a problem quickly, because of its strength and protective instinct.",
          "With children, a well-raised Dobermann can be loving and protective. Because of the dog's size, energy, and strength, supervision is essential with young children, and children should be taught how to interact respectfully with any dog. With other pets, many Dobermanns do well when raised with them, though some can be dominant with other dogs, especially of the same sex.",
          "A Dobermann needs a secure home. A fenced yard is helpful, though it does not replace exercise or company. Because of the breed's protective nature, gates should be locked and visitors introduced carefully.",
          "Remember also the health picture. The breed has a high rate of heart disease, and owners should be prepared for regular veterinary screening and the possibility of medication.",
        ],
        lists: [
          {
            title: "A Dobermann may suit you if you:",
            items: [
              "Want a loyal, close companion and a dog that lives indoors",
              "Enjoy training and can be calm, fair, and consistent",
              "Can provide daily exercise and mental work",
              "Are ready for regular heart screening and veterinary care",
            ],
          },
          {
            title: "Think twice if you:",
            items: [
              "Are away from home for long hours most days",
              "Want a dog that is relaxed about strangers",
              "Have very young children and little time to supervise",
              "Are not willing to invest in training and socialization",
            ],
          },
        ],
      },
      {
        id: "care",
        title: "Exercise and daily care",
        figure: {
          n: 2,
          alt: "A Dobermann running through a field",
          caption: "A Dobermann needs daily running, training, and play to stay balanced.",
        },
        paragraphs: [
          "Dobermanns are athletic dogs and need plenty of exercise. Most healthy adults need at least one to two hours of activity a day, including brisk walks, running, and play. They enjoy jogging, hiking, fetch, and swimming, and they are quick to join in any activity with their owner.",
          "Mental work is just as important. Training games, scent work, obedience, agility, and tracking all give a Dobermann the challenge it craves. Ten minutes of focused training can tire the dog as much as a long run.",
          "Puppies and adolescents should avoid repeated high-impact exercise such as long runs and jumping until the joints and bones have matured, usually at around 12 to 18 months. Short walks, play, and training sessions are better than long, intense ones.",
          "Because of the short, thin coat and low body fat, Dobermanns feel the cold quickly. In cool or wet weather, a well-fitting coat is a good idea, and the dog should sleep indoors in a warm bed. In hot weather, exercise in the cooler parts of the day and provide shade and water.",
          "Dobermanns are strong and fast, so a secure fence and a reliable recall matter. A sturdy harness or well-fitted collar and leash are useful for walks.",
        ],
        lists: [
          {
            title: "A sample day for an adult Dobermann",
            items: [
              "Morning: a brisk walk or run of 30 to 45 minutes, followed by breakfast",
              "Midday: a short training session or a puzzle toy while you work",
              "Afternoon: fetch or a play session in a secure space",
              "Evening: a calmer walk, then quiet time with the family and a chew",
            ],
          },
        ],
      },
      {
        id: "feeding",
        title: "Feeding and nutrition",
        paragraphs: [
          "A good diet supports the Dobermann's lean, muscular build and its heart health. Choose a complete and balanced dog food made for the dog's life stage, one that meets recognized nutritional standards, and ask your vet to help if you are unsure.",
          "How much to feed depends on weight, age, activity level, and metabolism, and the label's feeding guide is only a starting point. The table below gives rough daily calorie ranges for healthy adults with moderate activity. Dobermanns that train hard or work may need more, and neutered or less active dogs may need less.",
          "Many dry foods contain roughly 350 to 400 calories per cup, so a typical adult Dobermann may eat around three to five cups a day, split into two meals. Weigh or measure each meal, since estimating by eye tends to drift upward.",
          "Puppies need a food made for growth, ideally one suited to large breeds, with controlled calories and calcium. Feed three to four small meals a day for young puppies, moving to three meals by about three months and two meals by about six months. Ask your vet when to move to an adult diet, usually at around 12 to 18 months.",
          "Like other deep-chested dogs, Dobermanns are at risk of bloat, a dangerous twisting of the stomach. Feed two or more smaller meals rather than one large one, avoid vigorous exercise right before and after eating, and discourage gulping. Seek emergency care at once if you see a swollen belly, unproductive retching, or restlessness after eating.",
          "Because heart disease is common in the breed, ask your vet about diet and any supplements. Do not make major diet changes, especially to unusual or grain-free formulas, without veterinary advice. Foods toxic to dogs, including chocolate, grapes, raisins, onions, and xylitol, must be kept out of reach.",
        ],
        lists: [
          {
            title: "Rough daily calories for a healthy adult (moderate activity)",
            items: [
              "About 60 pounds: roughly 1,150 to 1,500 calories",
              "About 75 pounds: roughly 1,350 to 1,800 calories",
              "About 90 pounds: roughly 1,550 to 2,050 calories",
              "About 100 pounds: roughly 1,700 to 2,200 calories",
            ],
          },
          {
            title: "Feeding habits that help",
            items: [
              "Measure meals with a scale or measuring cup",
              "Feed two or more meals a day, never one large meal",
              "Rest quietly for an hour after eating",
              "Check body condition monthly and adjust portions with your vet",
            ],
          },
        ],
        note: {
          title: "A quick weight check",
          text: "You should be able to feel your dog's ribs under a thin layer of muscle and fat and see a clear waist from above. A lean Dobermann is healthier for its joints and its heart.",
        },
      },
      {
        id: "training",
        title: "Training and socialization",
        paragraphs: [
          "Dobermanns are among the most trainable breeds, and they thrive on learning. They pick up commands fast and want to please their owner. Start early, be consistent, and use positive, reward-based methods. Praise, play, and treats work far better than harsh corrections, which tend to make a sensitive Dobermann anxious.",
          "Socialization is the foundation of a safe, confident Dobermann. Expose your puppy gently to many people, places, surfaces, sounds, and well-mannered dogs, always at a pace the puppy can handle. A Dobermann that is not socialized can become suspicious or fearful, which is a poor combination in a strong dog. Ask your vet when outings are safe after vaccinations and consider a well-run puppy class.",
          "Keep training sessions short and varied. Five to ten minutes several times a day work well, and changing the exercises keeps this intelligent dog interested. End each session on a success.",
          "Teach a reliable recall, a calm settle, and loose-leash walking early. A strong dog that pulls or ignores commands is a safety issue. Also teach an off switch, so the dog learns to relax at home as well as work.",
          "Protective behavior should be managed, not encouraged. Do not train guard dog behavior unless you are working with a qualified professional, since it can create a dog that is hard to control. A well-trained companion is naturally watchful without needing extra encouragement.",
        ],
        lists: [
          {
            title: "Skills worth teaching early",
            ordered: true,
            items: [
              "Name recognition and eye contact",
              "Sit, down, and stay",
              "A reliable recall, practiced with high-value rewards",
              "Settle on a mat and relax on cue",
              "Loose-leash walking",
              "Leave it and drop it",
              "Calm greetings, so the dog does not jump or lunge",
            ],
          },
        ],
      },
      {
        id: "behavior",
        title: "Behavior and common problems",
        paragraphs: [
          "Most behavior problems in Dobermanns come from boredom, insufficient socialization, or a lack of clear leadership. Understanding the cause is the first step to fixing it.",
          "Separation anxiety is a frequent issue, because the breed bonds so closely. Signs include destructive chewing, howling, pacing, and toileting accidents when left alone. Build alone-time gradually, provide enrichment, and ask your vet or a qualified trainer for help if the problem is serious.",
          "Wariness of strangers and reactivity toward other dogs can develop if socialization is neglected. Early, positive exposure helps a great deal. If your dog lunges or barks at people or dogs, avoid punishment, which tends to make things worse, and seek help from a qualified behavior professional.",
          "Barking is common. Dobermanns are alert and will announce visitors and unusual sounds. Teach a quiet cue and avoid rewarding barking with attention. Also be aware that a bored Dobermann can chew, dig, and escape, so provide chews, puzzle feeders, and activity.",
          "Some Dobermanns can be mouthy and jumpy as young dogs. Teach calm greetings and give plenty of appropriate chews during teething.",
        ],
        lists: [
          {
            title: "Common issues and first steps",
            items: [
              "Separation anxiety: build alone-time gradually and seek help if severe",
              "Wariness of strangers: socialize early and positively",
              "Reactivity to other dogs: avoid punishment and consult a behavior professional",
              "Excessive barking: increase exercise, teach a quiet cue, and do not reward barking",
              "Destructive chewing: provide chews, puzzle feeders, and more activity",
            ],
          },
        ],
      },
      {
        id: "grooming",
        title: "Grooming and coat care",
        figure: {
          n: 3,
          alt: "A Dobermann with a short, glossy coat",
          caption: "The short coat needs little brushing, but nails, ears, and skin still need regular attention.",
        },
        paragraphs: [
          "The Dobermann's short, smooth coat is among the easiest to care for. Brush weekly with a rubber curry comb or a soft bristle brush to remove loose hair and keep the coat shiny. The breed sheds lightly all year, and the short hairs can cling to fabric.",
          "Bathe your dog when it is dirty or smelly, usually every one to two months. Too-frequent bathing can dry the skin. Use a gentle dog shampoo and rinse thoroughly.",
          "Trim the nails every two to three weeks. Long nails alter how a dog stands and walks, and they put strain on the joints. Check the paws for cuts, and keep the hair between the pads trimmed if needed.",
          "Check the skin regularly. Blue and fawn Dobermanns can be prone to color dilution alopecia, a condition that causes patchy hair loss and dry or irritated skin, so watch for thinning hair and talk to your vet if you notice it.",
          "Grooming sessions are also a quick health check. As you brush, feel for lumps, check for ticks and fleas, and look at the skin, ears, and eyes.",
        ],
        lists: [
          {
            title: "A simple grooming schedule",
            items: [
              "Brush: once a week",
              "Bathe: every one to two months, or as needed",
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
          "Dobermann eyes are usually healthy, but the breed can be prone to some eye conditions, including cataracts and, in some dogs, corneal problems. Check your dog's eyes daily for any change.",
          "Wipe away normal discharge with a clean, damp cloth, using a fresh one for each eye. Do not use human eye drops unless your vet recommends them.",
          "Contact your vet if you see cloudiness, redness, squinting, excessive tearing, thick or colored discharge, pawing at the eye, or any change in vision, such as bumping into objects. Eye problems can progress quickly and may be painful.",
          "Dobermanns that are white or very pale, a rare variant sometimes called albino, are sensitive to bright light and prone to skin problems from sun exposure. Provide shade and ask your vet about sun protection.",
        ],
      },
      {
        id: "ears",
        title: "Ear care",
        paragraphs: [
          "Dobermanns with natural ears have ears that fold forward, while those with cropped ears stand upright. Either way, check the ears weekly for redness, odor, discharge, or signs of discomfort.",
          "Healthy ears are pale pink and mostly clean, with no strong smell. If they look dirty, use a vet-approved ear cleaner on a cotton ball, wipe the visible part, and let the dog shake. Never push cotton swabs into the ear canal, which can cause damage.",
          "Dry the ears after bathing or swimming. Contact your vet if your dog shakes its head often, scratches its ears, or has a bad smell, redness, or discharge. Ear infections need proper diagnosis, because the wrong treatment can make things worse.",
          "If your Dobermann does not respond to sounds, ask your vet about a hearing test.",
        ],
      },
      {
        id: "dental",
        title: "Dental care",
        paragraphs: [
          "Dental disease is one of the most common health problems in dogs. Plaque builds up into tartar, which can lead to gum disease, painful teeth, and infection that may affect other organs. Starting care early is the best prevention.",
          "Brush your dog's teeth daily if you can, or at least several times a week, using a dog toothbrush and dog toothpaste. Never use human toothpaste. Introduce brushing gradually, with praise and treats, so your Dobermann learns to accept it.",
          "Dental chews and toys can help reduce plaque, but they are not a replacement for brushing. Look for products approved by a recognized veterinary dental council, and avoid very hard items such as bones and antlers.",
          "Your vet will check your dog's mouth at each checkup. Because heart disease is common in the breed, good dental health matters even more, since mouth infections can affect the heart.",
        ],
      },
      {
        id: "health",
        title: "Health and lifespan",
        paragraphs: [
          "Dobermanns typically live about 10 to 12 years. Many are healthy and active well into their senior years, but the breed has a higher risk of some serious inherited conditions, especially heart disease. Knowing what to watch for helps you catch problems early.",
          "Regular veterinary checkups, heart screening, a lean weight, and early attention to changes in behavior or mobility make the biggest difference. Choosing a breeder who health-tests their dogs also matters a great deal.",
          "See a vet promptly for fainting, coughing, tiredness, a swollen belly, unusual bleeding, a wobbly walk, or any lump that is growing.",
        ],
        lists: [
          {
            title: "Conditions to know about",
            items: [
              "Dilated cardiomyopathy: a heart muscle disease that is very common in the breed",
              "Von Willebrand disease: an inherited bleeding disorder",
              "Wobbler syndrome: compression of the neck spinal cord causing a wobbly gait",
              "Bloat (gastric dilatation-volvulus): a life-threatening twisting of the stomach",
              "Hypothyroidism: an underactive thyroid gland",
              "Hip dysplasia: an inherited malformation of the hip joint",
              "Liver disease: chronic hepatitis, sometimes linked to copper storage",
              "Color dilution alopecia: patchy hair loss in blue and fawn dogs",
              "Cataracts and other eye conditions",
              "Cancer: more common in older dogs",
            ],
          },
        ],
      },
      {
        id: "conditions",
        title: "Health conditions explained",
        paragraphs: [
          "Dilated cardiomyopathy, or DCM, is the most important health concern for the breed. The heart muscle becomes thin and weak, so the heart enlarges and pumps poorly. Dogs may look healthy for years, then develop fainting, coughing, tiredness, trouble breathing, or sudden death from an irregular heartbeat. Diagnosis uses an ultrasound of the heart and a heart rhythm recording over 24 hours. Many vets recommend regular screening from around two to three years of age. Medication can help many dogs live longer and more comfortably.",
          "Von Willebrand disease is an inherited disorder in which the blood does not clot properly because of a shortage of a clotting protein. Signs include prolonged bleeding after surgery or injury, nosebleeds, and bleeding gums. A DNA test can identify carriers and affected dogs, and vets can plan surgery safely when they know the dog's status.",
          "Wobbler syndrome occurs when the bones of the neck put pressure on the spinal cord. Affected dogs often have a wobbly, unsteady gait in the back legs, may cross their feet, and can have neck pain. Diagnosis requires advanced imaging, and treatment ranges from rest and medication to surgery in more serious cases.",
          "Bloat is a life-threatening emergency. The stomach fills with gas and may twist, cutting off blood flow. Signs include a swollen belly, drooling, unproductive retching, restlessness, and collapse. A dog can die within hours, and treatment is emergency surgery. A preventive procedure called a gastropexy, which fixes the stomach in place, can be done in advance, and many vets suggest it for deep-chested breeds.",
          "Hypothyroidism is an underactive thyroid gland. Signs include weight gain, tiredness, thinning coat, dry skin, and cold intolerance. A blood test diagnoses it, and daily medication usually manages it well.",
          "Hip dysplasia occurs when the hip joint does not fit together properly, causing wear, pain, and arthritis. Signs include stiffness, reluctance to jump, and bunny-hopping. A vet diagnoses it with an exam and X-rays, and management includes weight control, controlled exercise, pain relief, and sometimes surgery.",
          "Chronic hepatitis is a long-term inflammation of the liver, and the breed is predisposed to it, sometimes linked to copper accumulation. Early signs are subtle, such as reduced appetite, weight loss, increased drinking, or vomiting. Blood tests and sometimes a liver biopsy diagnose it, and diet and medication can slow the disease.",
          "Color dilution alopecia can affect blue and fawn dogs, causing patchy hair thinning, dry skin, and sometimes skin infections. It cannot be cured, but gentle skin care and treatment of infections keep dogs comfortable.",
        ],
        note: {
          title: "Important",
          text: "This is general information, not a diagnosis. Always speak to your veterinarian if you are worried about your dog's health, and treat fainting or a swollen belly as an emergency.",
        },
      },
      {
        id: "genetics",
        title: "Health testing and choosing a puppy",
        paragraphs: [
          "The breeder you choose has more influence on your Dobermann's long-term health than almost anything else. A responsible breeder tests breeding dogs for inherited conditions, raises puppies in a clean home environment, socializes them early, and is happy to answer questions and show you results.",
          "Ask to see written proof of testing for both parents. Key tests for Dobermanns include a heart examination by a veterinary cardiologist with a heart rhythm recording, DNA tests for von Willebrand disease and for known DCM gene variants, hip evaluations, and thyroid testing. Ask about the ages and causes of death of the dogs in the pedigree, because heart disease can shorten lives in some lines.",
          "Be cautious about breeders who sell puppies without any health testing, or who advertise rare colors or white puppies as a selling point. Rare colors are not a sign of quality and are sometimes linked to health problems.",
          "Adoption is also an excellent route. Dobermanns and Dobermann mixes end up in shelters and breed rescues, often because their owners underestimated their needs. A rescue can tell you about the dog's personality and energy level, and many are wonderful companions for the right home.",
        ],
        lists: [
          {
            title: "Questions to ask a breeder",
            items: [
              "Can I see heart and hip results for both parents?",
              "Have both parents been tested for von Willebrand disease and DCM gene variants?",
              "How long did the dogs in the pedigree live, and what did they die of?",
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
          "A Dobermann's needs shift a great deal across its life. Planning for each stage helps you avoid problems and keep your dog healthy and happy.",
        ],
        lists: [
          {
            title: "Life stages",
            items: [
              "Puppy (to about 12 months): vaccinations as your vet advises, socialization, house training, short play sessions, and a growth-appropriate diet",
              "Adolescent (about 6 to 24 months): lots of energy and testing of boundaries, so keep training consistent and limit high-impact exercise while joints mature",
              "Adult (about 2 to 7 years): peak fitness, daily exercise and mental work, annual checkups, and regular heart screening",
              "Senior (from about 7 years): a slower pace, possible joint stiffness, twice-yearly checkups, softer bedding, and close attention to heart health and lumps",
            ],
          },
          {
            title: "Caring for an older Dobermann",
            items: [
              "Keep exercising, but choose lower-impact options such as walking and swimming",
              "Ask your vet about joint support and pain management",
              "Continue mental games, which help keep an older mind sharp",
              "Watch for coughing, tiredness, or fainting, and report them promptly",
              "Use ramps and non-slip rugs to help a stiff dog get around",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are Dobermanns good family dogs?",
        a: "They can be loyal, affectionate family dogs when well socialized and trained. Their size and strength mean supervision around young children is important.",
      },
      {
        q: "Are Dobermanns aggressive?",
        a: "Not by nature. They are protective and alert, and a well-bred, well-socialized and well-trained Dobermann is stable and loving. Poor socialization or harsh handling can cause problems.",
      },
      {
        q: "How much exercise does a Dobermann need?",
        a: "Most adults need one to two hours of activity a day, plus mental stimulation such as training games, scent work, or dog sports.",
      },
      {
        q: "Do Dobermanns shed a lot?",
        a: "They shed lightly all year, and the short coat is easy to care for. Weekly brushing is usually enough.",
      },
      {
        q: "Why do Dobermanns get cold easily?",
        a: "They have a thin, short coat with little undercoat and low body fat, so a coat and a warm bed indoors are important in cool weather.",
      },
      {
        q: "What is the biggest health risk for Dobermanns?",
        a: "Dilated cardiomyopathy, a heart disease that is common in the breed. Regular heart screening and choosing a breeder who tests for it are the best protection.",
      },
      {
        q: "Are Dobermanns easy to train?",
        a: "They are highly intelligent and eager to please, which makes them very trainable. They are also sensitive, so positive, consistent methods work best.",
      },
      {
        q: "Can Dobermanns be left alone?",
        a: "Short periods are fine once trained and well exercised, but long hours alone often lead to anxiety, barking, and destructive behavior.",
      },
    ],
  },
};
