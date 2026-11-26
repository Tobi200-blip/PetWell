// Expanded long-form breed profiles, batch 27 (deep-dive standard): Siberian Husky and Border Collie.
// These replace the older, shorter profiles for the same slugs (later batches override earlier ones in breedService.js).
// Same shape as breedProfilesExpanded26.js. A section may carry a `figure` ({ n, alt, caption }),
// which shows src/assets/breeds/<slug>-<n>.jpg as a small photo card (nothing shows if the file is missing).
// Keep vetReviewed false until a licensed vet has signed off on the profile.

export const breedProfilesExpanded27 = {
  "siberian-husky": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Northeastern Siberia, Russia",
    summary:
      "Striking, energetic, and endlessly independent, the Siberian Husky is a sled dog bred for stamina and teamwork, and it needs vast amounts of exercise, secure fencing, and an owner who enjoys a clever, mischievous escape artist.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        figure: {
          n: 1,
          alt: "A gray and white Siberian Husky with blue eyes standing in snow",
          caption: "The Siberian Husky was bred to pull light loads over long distances in extreme cold.",
        },
        paragraphs: [
          "The Siberian Husky was developed by the Chukchi people of northeastern Siberia, who lived in one of the coldest regions on earth. They bred their dogs over many centuries to work as sled dogs, hauling light loads across long distances at moderate speed on very little food, and to live closely with the family, even sleeping with children to keep them warm. Dogs that were friendly, hardy, and willing to work in a team were kept for breeding, which shaped the breed's cooperative, people-loving nature.",
          "The breed first reached North America in the early 1900s, when fur traders brought Siberian dogs to Alaska. They became known in sled dog racing in 1909, when teams of small, fast Siberian dogs began winning races such as the All Alaska Sweepstakes, a long-distance race that attracted enormous attention. Their speed and endurance impressed mushers, and more dogs were imported.",
          "The breed's greatest fame came in 1925, when a diphtheria outbreak threatened the town of Nome in Alaska, and the antitoxin had to be carried over hundreds of miles of frozen country by relays of dog teams. The famous serum run is often associated with a dog named Balto, who led the final leg, although another dog, Togo, led the team that covered the longest and most dangerous stretch, under the musher Leonhard Seppala. Both dogs became celebrated, and the story helped make the breed famous worldwide.",
          "The American Kennel Club recognized the Siberian Husky in 1930, and the breed's popularity has grown steadily. Today it is kept as a companion, a show dog, and a sled racing dog. Its striking looks have made it popular, but its energy, independence, and escape skills mean many are surrendered to rescues, so it is a breed to choose with open eyes.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance and size",
        paragraphs: [
          "The Siberian Husky is a medium-sized, athletic, and graceful working dog, built for speed and endurance rather than raw power. Males typically stand about 21 to 23.5 inches at the shoulder and weigh roughly 45 to 60 pounds, while females stand about 20 to 22 inches and weigh about 35 to 50 pounds. The body is slightly longer than tall, with a deep chest, a firm back, and well-muscled legs.",
          "The head is medium-sized and slightly rounded, with a tapering muzzle and a black, liver, or flesh-colored nose. The eyes are almond-shaped and can be brown, blue, or one of each, and sometimes parti-colored, which is one of the breed's best-known features. The erect, triangular ears are set high and are well furred. The tail is a thick, bushy brush, usually carried in a sickle curve over the back, and the dog may curl it over its nose to keep warm when sleeping.",
          "The coat is a thick, dense double coat, with a soft, insulating undercoat and a straight, smooth outer coat of medium length. It comes in many colors and patterns, including black and white, gray and white, red and white, sable, agouti, and pure white, often with a facial mask and distinctive markings. The coat sheds heavily, particularly twice a year, when the undercoat is blown in large clumps.",
        ],
        lists: [
          {
            title: "Quick breed snapshot",
            items: [
              "Height: about 20 to 23.5 inches",
              "Weight: about 35 to 60 pounds",
              "Coat: thick, dense double coat of medium length",
              "Colors: many colors and patterns, with brown, blue, or mixed eyes",
              "Lifespan: roughly 12 to 14 years",
            ],
          },
        ],
      },
      {
        id: "temperament",
        title: "Temperament and personality",
        paragraphs: [
          "Siberian Huskies are friendly, outgoing, and playful. They tend to love people, including strangers, and they are rarely suspicious, which makes them poor guard dogs. A Husky greets visitors with enthusiasm, and many are affectionate and mischievous with their families, with a sense of humor that owners find either delightful or exhausting.",
          "They are also very independent and strong-willed. Huskies were bred to run and make decisions on their own, and many do not feel a strong need to obey. They are intelligent and learn quickly, but they are easily bored and will ask what is in it for them. Training takes patience, consistency, and a sense of humor.",
          "The breed is extremely energetic, with a lot of stamina. A Husky that does not get enough exercise can be destructive, noisy, and hard to manage. They are also famous for their voices. Huskies rarely bark much, but they howl, talk, and woo, often in a long, dramatic conversation with their owners or the neighbors.",
          "Huskies are pack animals, and they usually enjoy the company of other dogs. They have a strong prey drive, and many will chase and kill cats, rabbits, chickens, and other small animals, even if they get on well with the family cat. They are also notorious escape artists, able to dig, jump, and squeeze through very small gaps, and a loose Husky may run for miles.",
        ],
        lists: [
          {
            title: "Personality in a few words",
            items: [
              "Friendly, outgoing, and playful",
              "Independent and strong-willed",
              "Extremely energetic",
              "A talker and a howler",
              "A strong prey drive and an escape artist",
            ],
          },
        ],
      },
      {
        id: "suitability",
        title: "Is a Siberian Husky right for you?",
        paragraphs: [
          "The Siberian Husky is a wonderful companion for active, experienced owners who love outdoor activity and can meet the breed's demands. It is not a good choice for first-time owners who are unprepared, for people who want an obedient, off-lead dog, or for people who live in a hot climate or cannot give the dog hours of exercise every day.",
          "With family, Huskies are generally friendly, affectionate, and playful, and many love children. They are sturdy and energetic, but they can be too boisterous for small children, so supervision is important. Never leave any dog alone with young children. They are not guard dogs, since they tend to welcome strangers.",
          "With other pets, many Huskies enjoy the company of other dogs, and they often do best in a home with another dog for company. Their prey drive makes them risky around cats, rabbits, birds, and other small animals, even if they have been raised with them, and they should never be left unsupervised with small pets.",
          "Huskies need a securely fenced yard with a high, solid fence, ideally buried or reinforced at the base, since they dig, jump, and climb. Even so, they should not be left unsupervised outdoors for long. They are not suited to apartments unless their exercise needs are fully met, and their howling can bother neighbors.",
          "The breed's thick coat is designed for cold, and Huskies can overheat in warm weather. They are best suited to cool climates, and owners in hot areas need air conditioning, shade, water, and exercise in the cool hours. Owners should also be prepared for heavy shedding and a lifetime of vigilance about escapes.",
        ],
        lists: [
          {
            title: "A Siberian Husky may suit you if you:",
            items: [
              "Lead a very active life and enjoy running, hiking, or sledding",
              "Can provide high, secure fencing and hours of exercise every day",
              "Are patient, consistent, and have a sense of humor",
              "Live in a cool climate, or can keep your dog cool",
            ],
          },
          {
            title: "Think twice if you:",
            items: [
              "Want a dog that is reliably obedient off the lead",
              "Have cats, rabbits, birds, or other small pets that are hard to separate",
              "Live in a hot climate without air conditioning",
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
          alt: "A Siberian Husky running with a harness on a trail",
          caption: "Huskies are born to run, and they need hours of vigorous exercise every day.",
        },
        paragraphs: [
          "Siberian Huskies are among the most energetic of all breeds and need a lot of exercise. Most healthy adults need at least 90 to 120 minutes of vigorous activity a day, and many need more. A short walk around the block is nowhere near enough, and a Husky that does not get enough exercise is likely to become destructive and noisy.",
          "Huskies love to run, and many enjoy activities such as jogging, cycling alongside a bike with a proper attachment, skijoring, canicross, bikejoring, and sledding or carting, which let them use their natural pulling instincts. Hiking, fetch, and long, brisk walks also suit the breed. Build up distances gradually, and avoid long, intense runs in warm weather.",
          "Never trust a Husky off the lead in an unfenced area. The breed's prey drive, speed, and independence mean that when something interesting appears, the dog may run off and ignore your calls, and Huskies are known to run for miles and into traffic. Use a secure harness and a lead on walks, and let your dog run only in securely fenced spaces. Microchip your dog and keep identification tags up to date.",
          "Mental stimulation is just as important. Huskies are clever and easily bored, so puzzle feeders, scent games, new tricks, and short training sessions keep their minds busy. A Husky that has nothing to do will dig, chew, and howl.",
          "Be very careful in warm weather. The thick coat makes Huskies prone to overheating, so exercise only in the cool parts of the day, bring plenty of water, and rest often. Never leave a Husky in a parked car, and watch for heavy panting, drooling, and weakness. Provide shade and cool resting places at home, and do not exercise a Husky hard in the heat.",
        ],
        lists: [
          {
            title: "A sample day for an adult Siberian Husky",
            items: [
              "Morning: a 45 to 60 minute run or brisk walk in cool conditions, followed by breakfast",
              "Midday: a puzzle feeder or chew in a cool place while you are busy",
              "Afternoon: a training session, scent game, or play in a securely fenced area",
              "Evening: a second long walk or run, dinner, and rest with the family",
            ],
          },
        ],
      },
      {
        id: "feeding",
        title: "Feeding and nutrition",
        paragraphs: [
          "A complete and balanced dog food made for the dog's life stage is the best starting point for a Siberian Husky. Many do well on a good-quality food made for medium, active breeds. Huskies are often described as efficient eaters that need less food than other dogs of the same size, but this varies, so adjust to your dog's condition and activity, and ask your vet to help you choose a food.",
          "How much to feed depends on the dog's weight, age, activity level, and metabolism, and the feeding guide on the label is only a starting point. The table below gives rough daily calorie ranges for healthy adults with moderate activity. Dogs that run or pull regularly, particularly in cold weather, may need considerably more. Many dry foods contain roughly 350 to 450 calories per cup, so a typical adult Husky may eat around two to three cups a day, split into two meals.",
          "Puppies need a food formulated for growth, ideally one suited to medium or large breeds. Feed three to four small meals a day for young puppies, moving to two meals by about six months. Ask your vet when to switch to an adult diet, usually around 12 months.",
          "Many Huskies are lean and athletic, and some are picky eaters, but others gain weight easily when they are under-exercised. Measure every meal, limit treats, and avoid feeding from the table. Use small pieces of the daily kibble as training rewards. Huskies are also clever food thieves and can raid bins, open cupboards, and clear counters, so store food securely.",
          "Some Huskies guard their food. Teach your dog from puppyhood that people approaching its bowl is a good thing, feed it away from children and other pets, and never let children take food from the dog. Foods toxic to dogs, including chocolate, grapes, raisins, onions, garlic, and xylitol, must be kept out of reach. Fresh water should always be available.",
        ],
        lists: [
          {
            title: "Rough daily calories for a healthy adult (moderate activity)",
            items: [
              "About 35 pounds: roughly 760 to 1,025 calories",
              "About 45 pounds: roughly 915 to 1,235 calories",
              "About 50 pounds: roughly 990 to 1,340 calories",
              "About 60 pounds: roughly 1,130 to 1,530 calories",
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
          text: "You should be able to feel your dog's ribs under the thick coat without pressing hard and see a waist from above. Because the coat hides the body, feel your dog regularly rather than relying on how it looks.",
        },
      },
      {
        id: "training",
        title: "Training and socialization",
        paragraphs: [
          "Siberian Huskies are intelligent, but they are not naturally obedient, and training needs patience, creativity, and a sense of humor. They learn quickly but tend to ask what is in it for them, and they lose interest in repetition. Many owners find that they respond best to training that is fast, fun, and varied.",
          "Use positive, reward-based methods, with tasty treats, toys, and praise. Harsh corrections, shouting, or physical punishment backfire, damaging trust and making the dog stubborn or fearful. Keep sessions short, varied, and rewarding, and end on a success. Because the breed is easily distracted, train in a quiet place first and add distractions gradually.",
          "Start early. Begin training and socialization the day your puppy comes home. Introduce your puppy gently to many people, places, surfaces, sounds, and well-mannered dogs, always at a pace the puppy can handle. Huskies are usually friendly, but a poorly socialized dog can become shy or reactive. Ask your vet when it is safe to begin outings after vaccinations, and consider a well-run puppy class.",
          "Recall is the hardest skill. Practice it with high-value rewards, such as small pieces of meat or cheese, always on a long line in safe areas, but accept that a Husky should never be trusted off the lead in unsecured areas. Teach a strong leave it and wait at doors and gates, since a Husky that bolts through an open door can be gone in seconds.",
          "Teach loose-leash walking early. Huskies pull hard, since pulling is what they were bred for, and a well-fitted harness gives you more control and protects the dog's neck. Practice calm greetings, and give your Husky a job, such as canicross, skijoring, or pulling a cart, which channel its drive and strengthen your bond. Practice handling from puppyhood, so that grooming and veterinary care are easy.",
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
              "Settle on a mat and relax on cue",
              "Calm acceptance of handling, grooming, and vet care",
            ],
          },
        ],
      },
      {
        id: "behavior",
        title: "Behavior and common problems",
        paragraphs: [
          "Most Siberian Husky behavior problems come from the breed's energy, intelligence, and independence, combined with too little exercise or mental work. Understanding the cause helps you respond early.",
          "Escaping is the best-known problem. A Husky can climb, dig, and squeeze through tiny gaps, and it may bolt through open doors and gates. Use a high, secure fence, reinforce the base to stop digging, supervise time in the yard, and keep gates latched. A microchip and identification tags are essential.",
          "Digging is common, particularly in hot weather, when Huskies dig cool hollows to lie in. Provide a designated digging spot and shade, increase exercise, and do not leave the dog alone in the yard for long periods.",
          "Howling is natural for the breed. Huskies howl when they are lonely, bored, excited, or answering sirens and other dogs. Increase exercise and mental work, provide company, and accept that some howling is part of the package. Consider your neighbors before getting a Husky.",
          "Destructive behavior is common in bored, under-exercised dogs. A Husky can destroy furniture, doors, walls, and gardens with surprising speed. Increase exercise and mental work, provide durable chews and puzzle toys, and use a crate or a secure area when you cannot supervise. Separation anxiety can also occur, so build alone-time gradually.",
          "Chasing and prey drive are strong. Huskies may chase and kill cats, rabbits, chickens, and wildlife, and they should be kept on a lead near other animals. Pulling on the lead is also typical, so teach loose-leash walking early and use a well-fitted harness.",
        ],
        lists: [
          {
            title: "Common issues and first steps",
            items: [
              "Escaping: use high, secure fencing and supervise outdoor time",
              "Digging: provide a designated digging area and shade",
              "Howling: increase exercise and mental work, and provide company",
              "Destructive behavior: increase exercise and provide durable chews and puzzle toys",
              "Prey drive: keep on a lead near small animals and wildlife",
            ],
          },
        ],
      },
      {
        id: "grooming",
        title: "Grooming and coat care",
        figure: {
          n: 3,
          alt: "A Siberian Husky's thick coat being brushed with an undercoat rake",
          caption: "Regular brushing is essential, especially during the twice-yearly coat blow.",
        },
        paragraphs: [
          "The Siberian Husky's thick double coat is naturally clean and has little doggy odor, but it sheds heavily. Huskies shed moderately all year, and twice a year, usually in spring and autumn, they blow their coat, losing the undercoat in huge clumps over two to four weeks. Owners often describe it as a snowstorm of fur.",
          "Brush at least once or twice a week, and daily during coat blows, using an undercoat rake, a slicker brush, and a metal comb. Work in sections, brushing down to the skin, and pay attention to the thick hair behind the ears, on the legs, and on the tail, where mats form. A bath followed by a thorough brushing and blow-drying with a high-velocity dryer helps release loose undercoat during a blowout.",
          "Bathe only a few times a year, or when the dog is dirty or smelly, because Huskies have a self-cleaning coat and too-frequent bathing can strip natural oils. Use a gentle dog shampoo, rinse thoroughly, and dry the coat completely, particularly the undercoat, to prevent skin problems.",
          "Do not shave a Siberian Husky. The double coat insulates against both cold and heat, and it protects the skin from the sun. Shaving can damage the coat, change its texture and color when it grows back, and increase the risk of sunburn and overheating. Brushing out the undercoat is the best way to keep a Husky cool.",
          "Trim the nails every two to three weeks, and keep the hair between the paw pads trimmed. Check the paws for cuts, cracks, and ice balls in winter. Use grooming time as a health check, feeling for lumps and checking the skin, eyes, ears, and teeth. Practice handling from puppyhood, so that grooming and veterinary care are easy.",
        ],
        lists: [
          {
            title: "A simple grooming schedule",
            items: [
              "Brush: once or twice a week, daily during coat blows",
              "Bathe: a few times a year, or when needed",
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
          "Siberian Huskies can suffer from several inherited eye conditions. The best known are juvenile cataracts, corneal dystrophy, and progressive retinal atrophy, which causes gradual loss of vision. Glaucoma and, less commonly, uveodermatologic syndrome, an immune-related condition affecting the eyes and skin, also occur.",
          "Check the eyes every day. Wipe away normal discharge with a clean, damp cloth or cotton pad, using a fresh one for each eye. Do not use human eye drops unless your vet recommends them. Huskies with blue eyes or pale pigment may be more sensitive to bright light, so watch for squinting in strong sun.",
          "Contact your vet if you see redness, squinting, cloudiness, thick or colored discharge, rubbing at the eye, or any change in vision, such as bumping into objects or hesitating in dim light. Dogs with progressive retinal atrophy often lose night vision first. Glaucoma is painful and can cause permanent blindness, so treat any painful, red, or cloudy eye as an emergency.",
          "Yearly eye exams are a good idea, and responsible breeders have their dogs examined by a veterinary ophthalmologist before breeding. A DNA test is available for one form of progressive retinal atrophy in the breed, and good breeders use it.",
        ],
      },
      {
        id: "ears",
        title: "Ear care",
        paragraphs: [
          "Siberian Huskies have erect, well-furred ears that allow good air circulation, so ear infections are less common than in dogs with heavy, hanging ears. They can still collect wax, dirt, and moisture, and allergies may cause ear problems.",
          "Check the ears weekly for redness, odor, discharge, or signs of discomfort. Healthy ears are pale pink and mostly clean, with no strong smell. If the ears look dirty, use a vet-approved ear cleaner on a cotton ball, wipe only the visible part, and let your dog shake its head.",
          "Never push cotton swabs into the ear canal. Dry the ears after bathing or swimming. Check the ears for ticks, burrs, and grass seeds after walks in fields and long grass, and watch for frostbite on the ear tips in very cold weather.",
          "See your vet if your dog shakes its head often, scratches its ears, holds its head tilted, or has redness, discharge, or a bad smell. Ear infections need a proper diagnosis, because the wrong treatment can make things worse.",
        ],
      },
      {
        id: "dental",
        title: "Dental care",
        paragraphs: [
          "Dental disease is a problem for dogs of every breed. Plaque hardens into tartar, which can lead to gum disease, painful teeth, and infection that spreads to other organs. Starting care early is the best prevention.",
          "Brush your dog's teeth daily if you can, or at least several times a week, using a dog toothbrush and dog toothpaste. Never use human toothpaste. Start while your dog is young, and make it a calm routine with praise and a reward.",
          "Dental chews and toys can help reduce plaque but do not replace brushing. Look for products approved by a recognized veterinary dental council, and avoid very hard items such as bones, antlers, and hard nylon toys, which can break teeth. Huskies are enthusiastic chewers, so choose durable items and check them for wear.",
          "Your vet will check the mouth at each visit and may recommend a professional cleaning. See a vet if you notice bad breath, red or bleeding gums, a broken tooth, drooling, or reluctance to eat or carry things.",
        ],
      },
      {
        id: "health",
        title: "Health and lifespan",
        paragraphs: [
          "Siberian Huskies typically live about 12 to 14 years, and many are healthy, hardy dogs. The breed is relatively free of many of the problems that affect other large breeds, but it is prone to some inherited eye conditions, skin problems, and a few other conditions. Knowing what to watch for helps you catch problems early.",
          "Regular veterinary checkups, a lean body weight, careful heat management, and early attention to changes in vision, skin, or mobility make the biggest difference. Choosing a breeder who health-tests their dogs also matters a great deal.",
          "See a vet promptly for cloudy or red eyes, bumping into objects, limping, difficulty rising, hair loss or crusting skin, a change in bark or breathing, heavy panting and weakness in the heat, or any lump that is growing.",
        ],
        lists: [
          {
            title: "Conditions to know about",
            items: [
              "Cataracts, corneal dystrophy, and progressive retinal atrophy: eye diseases",
              "Hip dysplasia: an inherited malformation of the hip joint",
              "Hypothyroidism: an underactive thyroid gland",
              "Zinc-responsive dermatosis: a skin condition linked to zinc metabolism",
              "Follicular dysplasia and other coat problems",
              "Laryngeal paralysis: weakness of the voice box, in older dogs",
              "Heatstroke: a serious risk in warm weather",
              "Autoimmune conditions, including uveodermatologic syndrome",
              "Allergies and skin problems",
              "Gastric problems and, less commonly, bloat",
            ],
          },
        ],
      },
      {
        id: "conditions",
        title: "Health conditions explained",
        paragraphs: [
          "Eye diseases are the best-known inherited problem in the breed. Juvenile cataracts cloud the lens in young dogs and can lead to vision loss, and corneal dystrophy causes cloudy spots on the surface of the eye. Progressive retinal atrophy is a disease in which the cells at the back of the eye slowly break down, usually starting with night blindness, and there is no cure, though dogs often cope well in familiar surroundings. A DNA test is available for one form, and responsible breeders also use regular eye examinations.",
          "Hip dysplasia is less common in Huskies than in some other breeds, but it does occur. In dysplasia the joint does not fit together properly, which causes wear, pain, and arthritis. Signs include stiffness after rest, difficulty rising, limping, and reluctance to climb stairs. A vet diagnoses it with a physical exam and X-rays. Management includes keeping the dog lean, controlled exercise, pain relief, and sometimes surgery.",
          "Hypothyroidism develops when the thyroid gland does not make enough hormone. Signs include weight gain, lethargy, hair thinning, dry skin, and sensitivity to cold. It is diagnosed with a blood test and is managed well with daily medication.",
          "Zinc-responsive dermatosis is a skin condition in which the dog cannot absorb or use zinc properly, leading to crusting, scaling, and hair loss around the eyes, mouth, ears, and feet. It is diagnosed by a vet, who may use a skin biopsy, and it is managed with zinc supplements, and sometimes with diet changes. Follicular dysplasia causes patchy hair loss and a dull, brittle coat. Skin allergies show up as itching, paw licking, and red skin.",
          "Laryngeal paralysis is a condition seen in older Huskies, in which the muscles that open the voice box weaken, so the dog has trouble breathing in. Signs include a change in the bark, noisy breathing, coughing, and tiring easily, particularly in heat. It can become an emergency, and treatment is often surgery.",
          "Heatstroke is a serious risk because of the thick coat. Signs include heavy panting, drooling, bright red gums, vomiting, weakness, and collapse. Move the dog to a cool place, offer small amounts of cool water, wet the body with cool water, and go to a vet at once. Prevent it by avoiding exertion in the heat, keeping the home cool, and never leaving the dog in a car. Uveodermatologic syndrome is an immune-related condition that causes eye inflammation and loss of pigment in the skin and nose, and it needs prompt veterinary treatment.",
        ],
        note: {
          title: "Important",
          text: "This is general information, not a diagnosis. Always speak to your veterinarian if you are worried about your dog's health, and treat heatstroke, collapse, and a painful eye as emergencies.",
        },
      },
      {
        id: "genetics",
        title: "Health testing and choosing a puppy",
        paragraphs: [
          "The breeder you choose has more influence on your Siberian Husky's health and temperament than almost anything else. A responsible breeder tests breeding dogs for inherited conditions, selects for stable, friendly temperaments, raises puppies in a home environment, socializes them early, and carefully screens buyers.",
          "Ask to see written proof of testing for both parents. Key checks for Siberian Huskies include an eye examination by a veterinary ophthalmologist, a DNA test for progressive retinal atrophy where available, hip evaluations, and thyroid testing. Ask about the family history of eye disease, skin problems, and other inherited conditions, and about the working or show background of the parents, since energy levels can differ between lines.",
          "Be cautious about breeders who sell puppies with no health information, who say the breed has no health problems, who advertise unusual colors, sizes, or wolf-like looks as rare or more valuable, who sell very young puppies, or who sell through unregulated online listings. A good breeder will ask you many questions about your home, your fencing, and your lifestyle, and may refuse to sell to an unsuitable home.",
          "Adoption is also an excellent route, and Siberian Huskies are common in breed rescues and shelters, often because owners underestimated the breed's energy and escape skills. A rescue can tell you about the dog's personality, energy, and how it behaves with other dogs, cats, and children.",
        ],
        lists: [
          {
            title: "Questions to ask a breeder",
            items: [
              "Can I see eye test results for both parents, including any DNA tests?",
              "Can I see hip and thyroid test results?",
              "Is there a family history of eye or skin problems?",
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
          "A Siberian Husky's needs shift across a long life. Planning for each stage helps you avoid problems and keep your dog healthy and happy.",
        ],
        lists: [
          {
            title: "Life stages",
            items: [
              "Puppy (to about 12 months): rapid growth, vaccinations as your vet advises, intensive socialization, house training, and puppy-proofing the house and yard",
              "Adolescent (about 6 to 30 months): a boisterous, testing phase, with chewing, selective hearing, and escape attempts, so keep training going and stay vigilant",
              "Adult (about 3 to 8 years): peak energy, hours of daily exercise, annual checkups, and careful weight management",
              "Senior (from about 9 years): many stay active, but a slower pace, possible joint stiffness, twice-yearly checkups, softer bedding, gentler exercise, and regular checks for vision, breathing, and teeth",
            ],
          },
          {
            title: "Caring for an older Husky",
            items: [
              "Keep exercising, but choose lower-impact options such as gentle walks",
              "Ask your vet about joint support and pain management",
              "Keep your dog at a healthy weight and cool in warm weather",
              "Provide soft bedding and non-slip rugs for stiff joints",
              "Watch for changes in bark, breathing, or vision, and report them promptly",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are Siberian Huskies good family dogs?",
        a: "They can be, for active families. They are friendly and playful, but their energy, independence, and prey drive mean they need experienced owners, secure fencing, and lots of exercise.",
      },
      {
        q: "How much exercise does a Siberian Husky need?",
        a: "At least 90 to 120 minutes a day of vigorous activity, plus mental stimulation. Many need more.",
      },
      {
        q: "Do Huskies shed a lot?",
        a: "Yes, moderately all year and very heavily twice a year, when they blow their undercoat. Regular brushing helps, and the coat should never be shaved.",
      },
      {
        q: "Can Huskies live in hot climates?",
        a: "With great care. Their thick coat makes them prone to overheating, so they need air conditioning, shade, water, and exercise in the cool parts of the day.",
      },
      {
        q: "Can a Husky be trusted off the lead?",
        a: "Generally no. Their prey drive, speed, and independence mean they should only run off the lead in securely fenced areas.",
      },
      {
        q: "Why do Huskies howl?",
        a: "Howling is part of the breed's pack heritage. They howl to communicate, when bored or lonely, and in response to sounds such as sirens.",
      },
      {
        q: "Are Huskies easy to train?",
        a: "They are intelligent but independent and easily bored. Short, varied, reward-based sessions work best, and they take patience.",
      },
      {
        q: "How long do Siberian Huskies live?",
        a: "Usually about 12 to 14 years. Good breeding, a lean weight, careful heat management, and regular veterinary care help them live well.",
      },
    ],
  },

  "border-collie": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Border region of England and Scotland, United Kingdom",
    summary:
      "Brilliant, intense, and tireless, the Border Collie is the world's premier sheepherding dog, and it needs an active, committed owner, hours of daily exercise and mental work, and a job to do.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        figure: {
          n: 1,
          alt: "A black and white Border Collie crouching alertly in a field",
          caption: "The Border Collie was bred to herd sheep with intense focus, a style known as the eye.",
        },
        paragraphs: [
          "The Border Collie takes its name from the border region between England and Scotland, where the breed developed as a herding dog over several centuries. Shepherds in these hills needed dogs that could gather and move sheep over rough, open country, often at a distance and with little guidance, and they bred dogs for intelligence, stamina, and a unique herding style. The word collie is thought to come from an old word for sheepdog.",
          "The breed's foundation is often traced to a dog named Old Hemp, born in 1893 in Northumberland and owned by a shepherd named Adam Telfer. Old Hemp was known for a quiet, intense style of working sheep, with a fixed stare, called the eye, and a low, stalking approach, and he sired a great many puppies. Many modern Border Collies trace their ancestry to him, and his style became the model for the breed.",
          "The breed was given its current name in the early 1900s by the secretary of the International Sheep Dog Society, which was formed in 1906 to organize sheepdog trials and to register working dogs. The society promoted working ability over appearance, which is why Border Collies vary in looks even today. Sheepdog trials became popular events, showing off the dogs' skill, and the breed spread across the world, including to Australia and New Zealand.",
          "Border Collies were recognized by kennel clubs in the show world much later, with the American Kennel Club recognizing the breed in 1995, after a long debate among enthusiasts who feared that show breeding would harm working ability. Today the Border Collie is widely considered the most intelligent of all breeds. It still works on farms, and it excels in agility, obedience, flyball, and frisbee. One celebrated Border Collie named Chaser was taught the names of over a thousand objects by her owner, a psychologist, which showed how much the breed can learn.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance and size",
        paragraphs: [
          "The Border Collie is a medium-sized, athletic, and agile dog, built for speed, endurance, and quick changes of direction. It typically stands about 18 to 22 inches at the shoulder and weighs roughly 30 to 55 pounds, with females slightly smaller. The body is slightly longer than tall, with a deep chest, a flexible back, and a smooth, athletic stride.",
          "The head is moderately broad, with a distinct stop and a tapering muzzle. The eyes are oval and set well apart, usually brown, though blue eyes or one blue eye occur in some dogs, and they have an intense, intelligent expression. The ears are medium-sized and may be erect, semi-erect, or tipped, and often change position with the dog's mood. The tail is low-set, with a slight upward curve at the tip, and it is used as a rudder when the dog turns.",
          "The coat comes in two types: rough, which is medium length and slightly wavy with feathering, and smooth, which is short and coarse. Both have a dense, weather-resistant undercoat. The most familiar color is black and white, but the breed comes in many colors and patterns, including red, blue, merle, tricolor, and sable, often with white markings. The coat sheds moderately all year, with heavier shedding in spring and autumn.",
        ],
        lists: [
          {
            title: "Quick breed snapshot",
            items: [
              "Height: about 18 to 22 inches",
              "Weight: about 30 to 55 pounds",
              "Coat: rough or smooth double coat",
              "Colors: black and white, red, blue, merle, tricolor, and others",
              "Lifespan: roughly 12 to 15 years",
            ],
          },
        ],
      },
      {
        id: "temperament",
        title: "Temperament and personality",
        paragraphs: [
          "Border Collies are extremely intelligent, energetic, and focused. They are among the quickest learners of any breed, and they pick up commands, routines, and tricks at astonishing speed. They are also sensitive, perceptive, and intensely devoted to their people, and many seem to read their owners' moods and intentions.",
          "The breed is driven by an overwhelming desire to work. A Border Collie needs a job, whether it is herding, agility, obedience, or another task, and a dog without one can become anxious, obsessive, and destructive. They are not couch potatoes, and they are poorly suited to a home where they are treated as a decoration.",
          "Border Collies have strong herding instincts that show up in everyday life. They may stare at, stalk, circle, and nip at moving things, including children, other pets, cars, and bicycles, and they may try to round up their family. These instincts can be managed with training and outlets, but they never disappear, and they can cause problems if ignored.",
          "With strangers, many Border Collies are reserved and watchful, and they can be sensitive to noise and sudden movements. With other dogs, they are usually friendly, though some are bossy or intense. Early socialization is important, and the breed does best with owners who are calm, consistent, and committed.",
        ],
        lists: [
          {
            title: "Personality in a few words",
            items: [
              "Extremely intelligent and quick to learn",
              "Energetic, focused, and driven to work",
              "Sensitive and devoted to their people",
              "Strong herding instincts",
              "Reserved with strangers",
            ],
          },
        ],
      },
      {
        id: "suitability",
        title: "Is a Border Collie right for you?",
        paragraphs: [
          "The Border Collie is a brilliant companion for very active, committed owners who enjoy training, sport, and giving a clever dog a job to do. It is a good choice for people who want to compete in agility, obedience, or herding, or who have a farm or ranch. It is not a good choice for people who want a relaxed pet, who are away from home for long hours, or who cannot provide hours of exercise and mental work every day.",
          "With family, a well-socialized Border Collie can be a loyal and affectionate companion, but its herding instinct means it may nip at children's heels and try to control their movements. Supervision around young children is important, and training is essential. Border Collies are often best suited to families with older, active children.",
          "With other pets, many Border Collies get along well with other dogs, though they may try to herd them. They may chase or herd cats and small animals, and some have a strong prey drive. Introduce new pets carefully, and never leave a Border Collie alone with small animals.",
          "Border Collies can live in a house with a yard, and they can adapt to apartments if their exercise needs are fully met, but this is rare, and they do best with space and activity. They are not suited to being left alone for long hours, and they are not a breed for owners who lack the time or energy.",
          "Owners should also be ready for the breed's intensity. A bored Border Collie may develop obsessive behaviors, such as shadow chasing, fixating on lights, or spinning, and may become anxious or reactive. The breed's mental needs are as great as its physical ones, and the demands are lifelong.",
        ],
        lists: [
          {
            title: "A Border Collie may suit you if you:",
            items: [
              "Lead a very active life and enjoy training and dog sports",
              "Can provide hours of exercise and mental work every day",
              "Are consistent, calm, and committed",
              "Have a farm, a large space, or time for a demanding dog",
            ],
          },
          {
            title: "Think twice if you:",
            items: [
              "Want a relaxed, low-energy pet",
              "Are away from home for long hours most days",
              "Have young children and want a tolerant, easy-going dog",
              "Cannot provide a job and mental challenge every day",
            ],
          },
        ],
      },
      {
        id: "care",
        title: "Exercise and daily care",
        figure: {
          n: 2,
          alt: "A Border Collie leaping through an agility hoop",
          caption: "Border Collies thrive on agility, herding, and other activities that challenge body and mind.",
        },
        paragraphs: [
          "Border Collies are among the most energetic of all breeds and need a lot of exercise. Most healthy adults need at least 90 to 120 minutes of vigorous activity a day, and many need more. A short walk is not enough, and a Border Collie that does not get enough exercise will find its own, often destructive, ways to burn energy.",
          "Mix up the activities. Fetch, frisbee, running, hiking, swimming, and agility all suit the breed, and many Border Collies excel at obedience, flyball, dock diving, herding, tracking, and scent work. Structured activities that combine physical and mental effort tire a Border Collie better than simple running.",
          "Mental stimulation is as important as physical exercise, and it may be more important. Puzzle feeders, scent games, new tricks, and training sessions keep a clever mind occupied. Learning new things, such as the names of toys or complex tricks, suits the breed well. A Border Collie that is mentally under-challenged may develop obsessive behaviors.",
          "Be careful not to create an obsessive ball-chasing dog. Repetitive fetch can build an addiction to the chase, and some dogs become unable to relax. Mix in calm activities, teach an off switch, and give your dog regular rest days. Protect growing joints by avoiding repetitive high-impact activity and jumping from heights until about 12 to 18 months.",
          "Keep your dog on a lead or in a secure area when in public unless its recall is truly reliable. A Border Collie that sees a moving car, bicycle, or runner may fixate and chase, and it can be hurt. In hot weather, exercise in the cool parts of the day, bring water, and rest often.",
        ],
        lists: [
          {
            title: "A sample day for an adult Border Collie",
            items: [
              "Morning: a 45 to 60 minute run, walk, or training session, followed by breakfast",
              "Midday: a puzzle feeder or a new trick to learn while you are busy",
              "Afternoon: a sport session, such as agility or frisbee, or scent games",
              "Evening: a second walk, dinner, and a calm period to settle with the family",
            ],
          },
        ],
      },
      {
        id: "feeding",
        title: "Feeding and nutrition",
        paragraphs: [
          "A complete and balanced dog food made for the dog's life stage is the best starting point for a Border Collie. Many do well on a good-quality food made for medium, active breeds. Working and sporting dogs may need higher-calorie foods, and ask your vet to help you choose a food that suits your dog's activity.",
          "How much to feed depends on the dog's weight, age, activity level, and metabolism, and the feeding guide on the label is only a starting point. The table below gives rough daily calorie ranges for healthy adults with moderate activity. Working and very active dogs may need considerably more. Many dry foods contain roughly 350 to 450 calories per cup, so a typical adult Border Collie may eat around two to three cups a day, split into two meals.",
          "Puppies need a food formulated for growth, ideally one suited to medium breeds. Feed three to four small meals a day for young puppies, moving to two meals by about six months. Ask your vet when to switch to an adult diet, usually around 12 months.",
          "Border Collies are usually lean and athletic, but pet dogs that get less exercise than they need can gain weight, and extra weight strains the joints. Measure every meal, limit treats, and avoid feeding from the table. Use small pieces of the daily kibble as training rewards, which suits a food-motivated learner.",
          "Some Border Collies are sensitive eaters, with sensitive stomachs or allergies, so talk to your vet about persistent digestive or skin problems. Foods toxic to dogs, including chocolate, grapes, raisins, onions, garlic, and xylitol, must be kept out of reach. Fresh water should always be available, particularly after exercise.",
        ],
        lists: [
          {
            title: "Rough daily calories for a healthy adult (moderate activity)",
            items: [
              "About 30 pounds: roughly 675 to 910 calories",
              "About 40 pounds: roughly 835 to 1,130 calories",
              "About 50 pounds: roughly 990 to 1,340 calories",
              "About 55 pounds: roughly 1,060 to 1,435 calories",
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
          text: "You should be able to feel your dog's ribs easily and see a waist from above. A Border Collie is a lean athlete, and a trim body is healthiest, particularly for the joints.",
        },
      },
      {
        id: "training",
        title: "Training and socialization",
        paragraphs: [
          "Border Collies are among the easiest breeds to train in terms of learning speed, but they are not easy to live with, because they learn everything, including unwanted behaviors, very quickly. They respond best to calm, consistent, reward-based training, and they are sensitive, so harsh corrections, shouting, or physical punishment can cause anxiety or shutdown.",
          "Start early. Begin training and socialization the day your puppy comes home. Teach manners from the first day, including loose-leash walking, waiting at doors, not nipping, and settling calmly. Keep sessions short, varied, and rewarding, and always end on a success. Work with a qualified trainer, particularly if you are a first-time Border Collie owner.",
          "Socialization is very important. From the earliest weeks, introduce your puppy gently to many people, places, surfaces, sounds, and well-mannered dogs, always at a pace the puppy can handle. Border Collies can be sensitive to noise and movement, and a poorly socialized dog can become fearful, reactive, or obsessive. Ask your vet when it is safe to begin outings after vaccinations, and consider a well-run puppy class. Introduce traffic, bicycles, and other moving objects gently and from a distance, rewarding calm behavior.",
          "Teach impulse control and an off switch. Skills such as waiting for food, leaving things alone, settling on a mat, and calm behavior around movement are essential for an intense dog. Teach a reliable recall, practiced on a long line, and a strong leave it. Teach the dog to relax when nothing is happening, which is a skill many Border Collies must learn.",
          "Give your Border Collie a job. Many dogs benefit from structured activities such as obedience, agility, herding, tracking, or scent work, which channel their intelligence and energy. Practice handling from puppyhood, so that grooming and veterinary care are easy, and redirect herding behavior, such as nipping heels, into appropriate games.",
        ],
        lists: [
          {
            title: "Skills worth teaching early",
            ordered: true,
            items: [
              "Name recognition and eye contact",
              "Sit, down, and stay",
              "Settle on a mat and relax on cue, the off switch",
              "Loose-leash walking on a secure harness",
              "Leave it and drop it, including trading food or toys for treats",
              "Come when called, practiced with high-value rewards, always on a long line outdoors",
              "Calm behavior around moving objects such as cars and bicycles",
              "Calm acceptance of handling, grooming, and vet care",
            ],
          },
        ],
      },
      {
        id: "behavior",
        title: "Behavior and common problems",
        paragraphs: [
          "Most Border Collie behavior problems come from the breed's intelligence, intensity, and herding instinct, combined with too little exercise, mental work, or structure. Understanding the cause helps you respond early.",
          "Herding behavior is natural. A Border Collie may stare, stalk, circle, and nip at heels, children, other pets, cars, and bicycles. Redirect the behavior with games and tasks, teach a calm response to moving things, and never let the dog herd children. Chasing cars and bikes is dangerous, so manage the dog on a lead and train carefully.",
          "Obsessive and compulsive behaviors are seen in bored or frustrated Border Collies. Examples include shadow and light chasing, spinning, tail chasing, fence running, and fixating on balls. Increase exercise and mental work, avoid encouraging fixations, teach calm behavior, and ask your vet or a qualified behavior professional for help if the behavior is strong.",
          "Noise sensitivity and anxiety are common. Many Border Collies are afraid of thunder, fireworks, and loud noises, and some develop general anxiety. Introduce sounds gradually and positively, provide a quiet safe space, and consult your vet if your dog shows strong fear.",
          "Destructive behavior and separation anxiety occur in bored, lonely dogs. A Border Collie can destroy furniture, dig, and howl. Increase exercise and mental work, provide durable chews and puzzle toys, and build alone-time gradually. Ask your vet or a qualified trainer for help if the problem is serious.",
          "Barking and nipping can be frustrating. Teach a quiet cue, reward calm behavior, and give the dog appropriate outlets for its energy. Reactivity on the lead occurs in some dogs, particularly when frustrated by the sight of moving things, so avoid unplanned meetings, reward calm behavior at a distance, and seek professional help early.",
        ],
        lists: [
          {
            title: "Common issues and first steps",
            items: [
              "Herding and nipping: redirect with games and never allow herding of children",
              "Obsessive behaviors: increase exercise and mental work and avoid encouraging fixations",
              "Noise sensitivity: introduce sounds gradually and provide a quiet safe space",
              "Destructive behavior and separation anxiety: increase exercise and build alone-time gradually",
              "Reactivity on the lead: avoid unplanned meetings and seek professional help early",
            ],
          },
        ],
      },
      {
        id: "grooming",
        title: "Grooming and coat care",
        figure: {
          n: 3,
          alt: "A rough-coated Border Collie being brushed with a slicker brush",
          caption: "Regular brushing keeps the feathering free of tangles and controls shedding.",
        },
        paragraphs: [
          "The Border Collie's double coat is easy to care for compared with many herding breeds, but it sheds moderately all year and heavily in spring and autumn, when the undercoat comes out in clumps. Rough-coated dogs need more brushing than smooth-coated ones, because the longer hair on the chest, legs, belly, and tail tangles easily.",
          "Brush at least once or twice a week, and daily during heavy shedding, using a slicker brush, an undercoat rake, and a metal comb. Work in sections, brushing down to the skin, and pay attention to the feathering behind the ears, on the legs, under the tail, and on the chest, where mats form. Active dogs pick up burrs, twigs, and mud, so comb the coat after outdoor activity.",
          "Bathe every two to three months, or as needed, using a gentle dog shampoo, and rinse thoroughly. Too-frequent bathing can strip natural oils and irritate the skin. Dry the coat well, particularly the undercoat, to prevent hot spots.",
          "Do not shave a Border Collie. The double coat helps regulate temperature and protects the skin from sun and rough vegetation, and shaving can damage the coat and increase the risk of sunburn and overheating. Tidying the feathering and trimming the hair between the paw pads is enough.",
          "Trim the nails every two to three weeks, and check the paws for cuts, cracks, and foreign objects. Active working dogs can injure their pads, so check them after exercise. Use grooming time as a health check, feeling for lumps, checking the skin for redness, hot spots, or parasites, and looking at the eyes, ears, and teeth. Practice handling from puppyhood, so that grooming and veterinary care are easy.",
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
              "Skin and body check: during every grooming session, and after outdoor activity",
            ],
          },
        ],
      },
      {
        id: "eyes",
        title: "Eye care",
        paragraphs: [
          "Border Collies can suffer from several inherited eye conditions. The best known is collie eye anomaly, a developmental condition affecting the retina and other structures of the eye, which can range from mild to severe vision loss. Other problems include progressive retinal atrophy, cataracts, and glaucoma.",
          "Check the eyes every day. Wipe away normal discharge with a clean, damp cloth or cotton pad, using a fresh one for each eye. Do not use human eye drops unless your vet recommends them. Dogs that work outdoors can get grass seeds and dust in their eyes, so check after exercise.",
          "Contact your vet if you see redness, squinting, cloudiness, thick or colored discharge, rubbing at the eye, or any change in vision, such as bumping into objects or hesitating in dim light. Glaucoma is painful and can cause permanent blindness within hours or days, so treat any painful, red, or cloudy eye as an emergency.",
          "Yearly eye exams are a good idea, and responsible breeders have their dogs examined by a veterinary ophthalmologist before breeding. A DNA test is available for collie eye anomaly and for some forms of progressive retinal atrophy, and good breeders use them.",
        ],
      },
      {
        id: "ears",
        title: "Ear care",
        paragraphs: [
          "Border Collies have medium-sized ears that may be erect, semi-erect, or folded, depending on the dog. Those with folded or hanging ears have less air circulation, so ear infections are more likely, particularly in dogs that swim or have allergies.",
          "Check the ears weekly for redness, odor, discharge, or signs of discomfort. Healthy ears are pale pink and mostly clean, with no strong smell. If the ears look dirty, use a vet-approved ear cleaner on a cotton ball, wipe only the visible part, and let your dog shake its head.",
          "Never push cotton swabs into the ear canal. Dry the ears after bathing or swimming. Check the ears for ticks, burrs, and grass seeds after walks in fields and long grass. Hearing loss is also seen in the breed, particularly in dogs with a lot of white or merle coloring, and it can affect one or both ears. Puppies can be tested before they go to their new homes.",
          "See your vet if your dog shakes its head often, scratches its ears, holds its head tilted, or has redness, discharge, or a bad smell. Ear infections need a proper diagnosis, because the wrong treatment can make things worse.",
        ],
      },
      {
        id: "dental",
        title: "Dental care",
        paragraphs: [
          "Dental disease is a problem for dogs of every breed. Plaque hardens into tartar, which can lead to gum disease, painful teeth, and infection that spreads to other organs. Starting care early is the best prevention.",
          "Brush your dog's teeth daily if you can, or at least several times a week, using a dog toothbrush and dog toothpaste. Never use human toothpaste. Start while your dog is young, and make it a calm routine with praise and a reward. A clever, trainable Border Collie usually accepts tooth brushing well.",
          "Dental chews and toys can help reduce plaque but do not replace brushing. Look for products approved by a recognized veterinary dental council, and avoid very hard items such as bones, antlers, and hard nylon toys, which can break teeth. Check balls and toys for wear, since a dog that chases balls all day can wear down its teeth.",
          "Your vet will check the mouth at each visit and may recommend a professional cleaning. See a vet if you notice bad breath, red or bleeding gums, a broken tooth, drooling, or reluctance to eat or carry things.",
        ],
      },
      {
        id: "health",
        title: "Health and lifespan",
        paragraphs: [
          "Border Collies typically live about 12 to 15 years, and many are healthy, hardy dogs. The breed has been selected for working ability, which has kept it relatively sound, but it is prone to several inherited conditions, particularly eye, joint, and neurological problems. Knowing what to watch for helps you catch problems early.",
          "Regular veterinary checkups, a lean body weight, sensible conditioning, and early attention to changes in vision, mobility, or behavior make the biggest difference. Choosing a breeder who health-tests their dogs also matters a great deal.",
          "See a vet promptly for limping, difficulty rising, seizures, collapse after exercise, red or painful eyes, bumping into objects, persistent scratching, or any lump that is growing.",
        ],
        lists: [
          {
            title: "Conditions to know about",
            items: [
              "Collie eye anomaly, progressive retinal atrophy, and cataracts: eye diseases",
              "Hip dysplasia and elbow dysplasia: inherited joint malformations",
              "Epilepsy: recurring seizures that may be inherited",
              "Neuronal ceroid lipofuscinosis: a fatal inherited nervous system disease",
              "Trapped neutrophil syndrome: an inherited immune disorder",
              "MDR1 gene mutation: sensitivity to certain drugs",
              "Deafness: congenital hearing loss",
              "Exercise-induced collapse and Border Collie collapse",
              "Osteochondritis dissecans: a joint cartilage problem",
              "Allergies and skin problems",
            ],
          },
        ],
      },
      {
        id: "conditions",
        title: "Health conditions explained",
        paragraphs: [
          "Collie eye anomaly is a developmental condition in which parts of the eye do not form normally. Mild cases cause little or no problem, while severe cases can cause retinal detachment and blindness. It is present from birth and does not get worse, and a DNA test is available. Progressive retinal atrophy causes gradual loss of vision, often starting with night blindness, and there is no cure, but dogs often cope well in familiar surroundings.",
          "Hip and elbow dysplasia are common orthopedic conditions. In dysplasia the joint does not fit together properly, which causes wear, pain, and arthritis. Signs include stiffness after rest, difficulty rising, limping, bunny-hopping, and reluctance to climb stairs or jump. A vet diagnoses them with a physical exam and X-rays. Management includes keeping the dog lean, controlled exercise, pain relief, physical therapy, and sometimes surgery. Responsible breeders have the hips of breeding dogs evaluated.",
          "Neuronal ceroid lipofuscinosis is an inherited, progressive nervous system disease in which waste material builds up in nerve cells. Signs, which usually start between about one and two years of age, include behavior changes, loss of coordination, vision loss, and seizures, and there is no cure. A DNA test is available, and responsible breeders use it. Trapped neutrophil syndrome is an inherited immune disorder in which white blood cells are trapped in the bone marrow, leaving puppies prone to infections and poor growth, and a DNA test is also available.",
          "The MDR1 gene mutation, found in many herding breeds, makes dogs sensitive to certain drugs, including some anti-parasite medications, anti-diarrheal drugs, and chemotherapy drugs, which can build up in the body and cause serious illness. A simple DNA test shows whether a dog carries the mutation, and it is wise to test before any drug treatment and to tell every vet about the result.",
          "Epilepsy causes recurring seizures. During a seizure a dog may collapse, paddle its legs, drool, and lose awareness for a minute or two. If your dog has a seizure, stay calm, keep the dog away from hazards, do not put anything in its mouth, note the time, and call your vet. Many dogs live well on daily anti-seizure medication. Some Border Collies also suffer from collapse after intense exercise, with signs such as weakness, wobbliness, and confusion, and a DNA test is available for one inherited form. Stop exercise at the first signs, and talk to your vet.",
          "Deafness is more common in dogs with a lot of white or merle coloring, and it can affect one or both ears. It can be tested with a hearing test, called a BAER test, in puppies. A deaf dog can live a full life with training adapted to hand signals and vibrations. Osteochondritis dissecans is a developmental problem of joint cartilage in young dogs, causing lameness, and it may need surgery. Allergies can show up as itching, paw licking, red skin, and ear problems.",
        ],
        note: {
          title: "Important",
          text: "This is general information, not a diagnosis. Always speak to your veterinarian if you are worried about your dog's health, and treat a seizure, collapse, or a painful eye as an emergency.",
        },
      },
      {
        id: "genetics",
        title: "Health testing and choosing a puppy",
        paragraphs: [
          "The breeder you choose has more influence on your Border Collie's health and temperament than almost anything else. A responsible breeder tests breeding dogs for inherited conditions, selects for stable, sound temperaments and working ability, raises puppies in a home environment, socializes them early, and carefully screens buyers.",
          "Ask to see written proof of testing for both parents. Key checks for Border Collies include hip and elbow evaluations, an eye examination by a veterinary ophthalmologist, DNA tests for collie eye anomaly, neuronal ceroid lipofuscinosis, trapped neutrophil syndrome, and the MDR1 mutation, and hearing tests. Ask about the working, sport, or show background of the parents, the family history of epilepsy and anxiety, and the temperaments of the parents, since the breed's energy and intensity can differ between lines.",
          "Be cautious about breeders who sell puppies with no health information, who say the breed has no health problems, who advertise unusual colors as rare or more valuable, who sell very young puppies, or who sell through unregulated online listings. A good breeder will ask you many questions about your home, your lifestyle, and your plans for the dog's job, and may refuse to sell to an unsuitable home.",
          "Adoption is also an excellent route, and Border Collies are common in breed rescues and shelters, often because owners underestimated the breed's needs. A rescue can tell you about the dog's personality, energy, and how it behaves with other dogs, cats, and children.",
        ],
        lists: [
          {
            title: "Questions to ask a breeder",
            items: [
              "Can I see hip, elbow, and eye test results for both parents?",
              "Have the parents been DNA tested for collie eye anomaly, neuronal ceroid lipofuscinosis, trapped neutrophil syndrome, and MDR1?",
              "Is there a family history of epilepsy or anxiety?",
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
          "A Border Collie's needs shift across a long life. Planning for each stage helps you avoid problems and keep your dog healthy and happy.",
        ],
        lists: [
          {
            title: "Life stages",
            items: [
              "Puppy (to about 12 months): rapid growth, vaccinations as your vet advises, intensive socialization, house training, and early introduction to moving objects at a distance",
              "Adolescent (about 12 to 30 months): an intense, testing phase, with lots of energy and possible fear periods, so keep training and exercise going",
              "Adult (about 3 to 8 years): a focused, driven working companion, hours of daily exercise and mental work, annual checkups, and careful weight management",
              "Senior (from about 9 years): many stay active, but a slower pace, possible joint stiffness, twice-yearly checkups, softer bedding, gentler exercise, and regular checks for vision, hearing, and mobility",
            ],
          },
          {
            title: "Caring for an older Border Collie",
            items: [
              "Keep exercising, but choose lower-impact options such as gentle walks and scent games",
              "Ask your vet about joint support and pain management",
              "Keep your dog at a healthy weight and warm in cold weather",
              "Keep the mind busy with gentle puzzles and training, which also helps cognitive health",
              "Watch for changes in vision, hearing, or behavior, and report them promptly",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are Border Collies good family dogs?",
        a: "They can be for very active families, but their herding instinct, intensity, and need for exercise and mental work mean they suit experienced, committed owners best.",
      },
      {
        q: "How much exercise does a Border Collie need?",
        a: "At least 90 to 120 minutes a day of vigorous activity, plus plenty of mental stimulation and training. Many need more.",
      },
      {
        q: "Do Border Collies shed?",
        a: "Yes, moderately all year and heavily in spring and autumn. Regular brushing helps, and the coat should not be shaved.",
      },
      {
        q: "Are Border Collies the smartest dogs?",
        a: "They are widely regarded as the most intelligent breed, and they learn commands and tricks very quickly. That intelligence also means they need constant mental challenge.",
      },
      {
        q: "Can Border Collies live in apartments?",
        a: "Rarely well. They can adapt only if their exercise and mental needs are fully met every day, which is very demanding.",
      },
      {
        q: "Why does my Border Collie nip at heels?",
        a: "Herding is instinctive. Redirect the behavior with games and tasks, teach a calm response to movement, and never allow herding of children.",
      },
      {
        q: "What is the MDR1 mutation?",
        a: "It is a gene mutation found in many herding breeds that makes dogs sensitive to certain drugs. A simple DNA test shows whether a dog carries it.",
      },
      {
        q: "How long do Border Collies live?",
        a: "Usually about 12 to 15 years. Good breeding, a lean weight, and regular veterinary care help them live well.",
      },
    ],
  },
};
