// Long-form editorial content, keyed by breed slug.
// Breeds without an entry here fall back to a quick-facts page.
// Set vetReviewed to true (and fill reviewedBy) only after a licensed vet has signed off.

export const breedProfiles = {
  "golden-retriever": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Scotland",
    summary:
      "Friendly, devoted, and eager to please, the Golden retriever is one of the most popular family dogs in the world, and one of the most active.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        paragraphs: [
          "The Golden retriever was developed in Scotland in the second half of the 19th century. The breed is widely credited to Dudley Marjoribanks, Lord Tweedmouth, who wanted a dependable retriever for waterfowl and game shooting on his Highland estate.",
          "Accounts of the breed's development describe crosses between yellow retrievers and the now-extinct Tweed Water Spaniel, with other gundog breeds introduced later to refine its working ability and temperament.",
          "The Kennel Club in Britain recognized the breed in 1911, and the American Kennel Club followed in 1925. Today the Golden retriever works as a hunting companion, guide dog, therapy dog, and search-and-rescue partner, as well as a family pet.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance",
        paragraphs: [
          "Goldens are well-balanced, medium-large dogs with a dense, water-repellent double coat. The outer coat is flat or wavy with feathering on the chest, legs, and tail, and colors range from pale cream to deep golden.",
          "Adult males typically stand about 23 to 24 inches (58 to 61 cm) at the shoulder and weigh 65 to 75 lb (29 to 34 kg). Females are slightly smaller, at roughly 21.5 to 22.5 inches and 55 to 65 lb.",
        ],
      },
      {
        id: "temperament",
        title: "Temperament",
        paragraphs: [
          "Goldens are known for being friendly, patient, and eager to please. They generally do well with children and other pets, and tend to greet strangers warmly, which makes them poor guard dogs.",
          "They are people-oriented and do not thrive when left alone for long stretches. Boredom and loneliness can show up as chewing, digging, or separation distress. Expect a mouthy, retrieval-driven dog that carries toys and shoes around, and stays playful well into adulthood.",
        ],
      },
      {
        id: "care",
        title: "Exercise and care",
        paragraphs: [
          "This is an active sporting breed. Plan for at least an hour of exercise a day, such as fetch, long walks, or swimming, plus mental work like scent games and training sessions.",
          "Goldens mature slowly and often behave like puppies for two to three years, so patience with energy levels during adolescence matters.",
        ],
      },
      {
        id: "feeding",
        title: "Feeding",
        paragraphs: [
          "Large-breed puppy formulas support steady, controlled growth, which is important for developing joints. Adults should be fed measured portions adjusted for weight, age, and activity level.",
          "The breed gains weight easily and is highly food-motivated, so measure meals rather than free-feeding, and ask your veterinarian for a target weight and portion plan.",
        ],
      },
      {
        id: "training",
        title: "Training",
        paragraphs: [
          "Goldens are intelligent and highly trainable, and respond best to positive reinforcement with praise, play, and treats. Harsh methods tend to backfire with this sensitive breed.",
          "Start socialization and basic manners early. Jumping up and mouthing are the most common issues to address while the dog is still young and manageable.",
        ],
      },
      {
        id: "grooming",
        title: "Grooming",
        paragraphs: [
          "Expect regular shedding, with heavier coat blows in spring and autumn. Brush several times a week, and daily during heavy shedding.",
          "Bathe as needed, check and clean the ears routinely since floppy ears trap moisture, trim nails, and keep up with dental care.",
        ],
      },
      {
        id: "health",
        title: "Health",
        paragraphs: [
          "Golden retrievers have a typical lifespan of 10 to 12 years. The breed is predisposed to hip and elbow dysplasia, certain cancers, heart conditions such as subvalvular aortic stenosis, skin allergies, and eye disease.",
          "Responsible breeders screen breeding dogs for hips, elbows, heart, and eyes. Regular veterinary checkups, a healthy weight, and early attention to changes in behavior or mobility make the biggest difference.",
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
    ],
  },
    "labrador-retriever": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Canada and the United Kingdom",
    summary:
      "Outgoing, even-tempered, and endlessly eager to work, the Labrador retriever is a versatile gundog, service dog, and family favorite.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        paragraphs: [
          "The Labrador's ancestors were working water dogs in Newfoundland, Canada, where fishermen relied on them to haul nets and retrieve fish that slipped off the line. Despite the name, the modern breed was shaped in Britain rather than in Labrador.",
          "In the early 19th century, British aristocrats, including the Earls of Malmesbury and the Dukes of Buccleuch, imported these dogs and bred them selectively as retrievers for shooting. The Kennel Club recognized the breed in 1903, and the American Kennel Club followed in 1917.",
          "Today Labradors are among the most widely kept dogs in the world and are used as guide dogs, detection dogs, and search-and-rescue partners.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance",
        paragraphs: [
          "Labradors are sturdy, athletic dogs with a short, dense, water-resistant double coat in black, yellow, or chocolate. The thick, tapering 'otter' tail and broad head are breed hallmarks.",
          "Males typically stand about 22.5 to 24.5 inches at the shoulder and weigh 65 to 80 lb (29 to 36 kg). Females are slightly smaller, at roughly 21.5 to 23.5 inches and 55 to 70 lb (25 to 32 kg).",
        ],
      },
      {
        id: "temperament",
        title: "Temperament",
        paragraphs: [
          "Labs are famously friendly, outgoing, and good with children, other dogs, and strangers. They are eager to please and rarely aggressive, which is why they are so common as assistance and therapy dogs.",
          "That enthusiasm comes with energy. Young Labs are boisterous, mouthy, and prone to chewing, and the breed can stay puppyish for two or three years. Without enough exercise and attention, they can become destructive.",
        ],
      },
      {
        id: "care",
        title: "Exercise and care",
        paragraphs: [
          "Plan for at least an hour of vigorous activity a day. Fetch, swimming, and long walks suit the breed, and many Labs enjoy dog sports such as agility, scent work, and dock diving.",
          "Because they were bred to work alongside people, Labs do best when included in family life rather than left alone for long periods.",
        ],
      },
      {
        id: "feeding",
        title: "Feeding",
        paragraphs: [
          "Labradors are enthusiastic eaters and among the breeds most prone to obesity. Measure portions, limit treats, and keep them lean, since extra weight is linked to joint problems and a shorter lifespan.",
          "Large-breed puppy formulas help control growth rate. Ask your veterinarian to set a target weight and a feeding plan that adjusts as your dog ages.",
        ],
      },
      {
        id: "training",
        title: "Training",
        paragraphs: [
          "Labs are intelligent, motivated by food and praise, and quick to learn, which makes them well suited to first-time owners who commit to consistent training. Reward-based methods work best.",
          "Work early on impulse control, loose-leash walking, and a reliable recall, since a Lab's enthusiasm can turn into pulling and jumping.",
        ],
      },
      {
        id: "grooming",
        title: "Grooming",
        paragraphs: [
          "The short coat is easy to care for but sheds year-round, with heavier shedding in spring and autumn. Weekly brushing, and more often during heavy shedding, keeps it under control.",
          "Check the ears regularly, especially after swimming, since trapped moisture can lead to infections. Trim nails and keep up with dental care.",
        ],
      },
      {
        id: "health",
        title: "Health",
        paragraphs: [
          "Labrador retrievers typically live 10 to 12 years. Common concerns include hip and elbow dysplasia, obesity, ear infections, eye conditions such as progressive retinal atrophy, and a genetic condition called exercise-induced collapse.",
          "Ask breeders about health screening for hips, elbows, eyes, and known genetic conditions, and schedule regular veterinary checkups.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are Labradors good for first-time owners?",
        a: "Often, yes. They are friendly, trainable, and forgiving, but they need plenty of exercise and consistent training while young.",
      },
      {
        q: "Do Labs shed a lot?",
        a: "Yes. They have a double coat and shed year-round, more heavily in spring and autumn.",
      },
      {
        q: "Are Labradors good with children?",
        a: "Generally yes. They are patient and playful, though a young Lab's exuberance can knock over small children, so supervise interactions.",
      },
      {
        q: "What colors do Labradors come in?",
        a: "The three recognized colors are black, yellow, and chocolate.",
      },
    ],
  },

  "german-shepherd": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Germany",
    summary:
      "Intelligent, confident, and fiercely loyal, the German shepherd is a versatile working dog that excels in police, military, and service roles as well as family life.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        paragraphs: [
          "The German shepherd was developed in Germany in the late 19th century. Captain Max von Stephanitz is credited as the breed's founder: in 1899 he acquired a dog named Horand von Grafrath and helped found the Verein für Deutsche Schäferhunde (SV) to standardize the breed.",
          "Von Stephanitz valued working ability above appearance and bred dogs from regional herding stock for intelligence, strength, and trainability. As herding declined with industrialization, the breed moved into police and military work.",
          "The American Kennel Club recognized the breed in 1908. In Britain it was renamed 'Alsatian' after the First World War because of anti-German sentiment, and the original name was restored later in the 20th century.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance",
        paragraphs: [
          "German shepherds are medium-to-large, athletic dogs with a sloping topline, a domed forehead, and erect ears. The double coat is medium length and comes in several colors, most commonly black and tan, sable, or solid black.",
          "Males stand about 24 to 26 inches at the shoulder and weigh roughly 65 to 90 lb (30 to 40 kg). Females are around 22 to 24 inches and 50 to 70 lb (22 to 32 kg).",
        ],
      },
      {
        id: "temperament",
        title: "Temperament",
        paragraphs: [
          "The breed is confident, courageous, and intensely loyal to its family, with a natural protective instinct. Well-socialized shepherds are calm and discerning with strangers, while poorly socialized ones can become fearful or reactive.",
          "They are highly intelligent and need a job. Without regular mental and physical stimulation, they can become anxious, destructive, or develop obsessive behaviors.",
        ],
      },
      {
        id: "care",
        title: "Exercise and care",
        paragraphs: [
          "German shepherds need at least one to two hours of activity each day, combining exercise with mental work such as obedience, scent games, or dog sports like herding and tracking.",
          "They bond closely with their people and do best living inside with the family rather than being left in a yard for long periods.",
        ],
      },
      {
        id: "feeding",
        title: "Feeding",
        paragraphs: [
          "Feed a high-quality large-breed diet in measured portions. Deep-chested breeds like the German shepherd are at risk of bloat, a life-threatening stomach emergency, so many vets suggest smaller, more frequent meals and avoiding vigorous exercise right before and after eating.",
          "Puppies grow quickly, and a large-breed puppy formula helps support steady growth, which is important for developing hips and elbows.",
        ],
      },
      {
        id: "training",
        title: "Training",
        paragraphs: [
          "German shepherds are among the most trainable breeds and respond well to firm, consistent, reward-based training. Start socialization early, exposing puppies safely to people, places, sounds, and other dogs.",
          "Their intelligence and strong drive mean they need clear routines. Puppy classes are a good investment for first-time shepherd owners.",
        ],
      },
      {
        id: "grooming",
        title: "Grooming",
        paragraphs: [
          "German shepherds shed heavily, and 'shepherd hair' is a well-known feature of owning one. Brush at least two or three times a week, and daily during seasonal coat blows.",
          "Bathe only as needed to protect the coat's natural oils, and keep up with nail trims, ear checks, and dental care.",
        ],
      },
      {
        id: "health",
        title: "Health",
        paragraphs: [
          "The typical lifespan is 9 to 13 years. Common concerns include hip and elbow dysplasia, degenerative myelopathy, bloat, allergies and skin problems, and exocrine pancreatic insufficiency.",
          "Choose breeders who screen for hip and elbow dysplasia and relevant genetic conditions, and keep your dog lean to ease the strain on joints.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are German shepherds good family dogs?",
        a: "They can be excellent family dogs when well socialized and trained. They are loyal and protective, but they suit active households and need supervision around young children.",
      },
      {
        q: "Are German shepherds aggressive?",
        a: "Not by nature. They are protective and confident, and problem behavior usually comes from poor socialization, lack of training, or fear. Early socialization is essential.",
      },
      {
        q: "How much do German shepherds shed?",
        a: "A lot. They shed year-round with heavy seasonal blows, so expect regular brushing and vacuuming.",
      },
      {
        q: "Can German shepherds live in apartments?",
        a: "It is possible if their exercise and mental needs are met every day, but they generally do best with space and an active owner.",
      },
    ],
  },

  "french-bulldog": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "England and France",
    summary:
      "Playful, affectionate, and adaptable, the French bulldog is a compact companion breed that has become one of the most popular dogs in the world.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        paragraphs: [
          "The French bulldog descends from small bulldogs bred in England in the 19th century, particularly around Nottingham, where lace makers kept them as companions. When the Industrial Revolution displaced many lace workers, some moved to northern France and took their small bulldogs with them.",
          "In France the dogs were crossed with local types, reportedly including terriers, and became fashionable in Paris, where the upright 'bat ears' became their signature trait. The breed reached the United States in the late 19th century, and the American Kennel Club recognized it in 1898.",
          "In recent years the French bulldog has risen to the top of popularity rankings in several countries, which has also drawn attention to the breed's health challenges.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance",
        paragraphs: [
          "French bulldogs are small, muscular dogs with a short, smooth coat, a flat face, a stocky build, and large, upright bat ears. Common coat colors include brindle, fawn, cream, and pied.",
          "They typically stand 11 to 13 inches tall, and the American Kennel Club standard sets a maximum weight of 28 lb (about 13 kg). Most adults weigh roughly 16 to 28 lb (7 to 13 kg).",
        ],
      },
      {
        id: "temperament",
        title: "Temperament",
        paragraphs: [
          "Frenchies are affectionate, alert, and clownish, and they bond strongly with their families. They are generally good with children and other pets and are not big barkers, which makes them popular in apartments.",
          "They can be stubborn and sensitive, and many dislike being left alone for long stretches. Expect a dog that wants to be near you.",
        ],
      },
      {
        id: "care",
        title: "Exercise and care",
        paragraphs: [
          "French bulldogs need only moderate exercise, and short walks and play sessions are usually enough. Their short airways make them poor at cooling down, so avoid vigorous activity in hot or humid weather.",
          "Always provide shade, water, and a cool place to rest, and never leave them in a parked car, since heatstroke can develop quickly. Supervise closely around water, as the breed's build makes swimming difficult.",
        ],
      },
      {
        id: "feeding",
        title: "Feeding",
        paragraphs: [
          "French bulldogs gain weight easily, and excess weight makes breathing problems worse. Feed measured portions of a quality adult or small-breed formula and keep treats limited.",
          "Many Frenchies have sensitive stomachs or food-related skin allergies. If your dog has digestive or skin issues, talk to your vet before changing diets.",
        ],
      },
      {
        id: "training",
        title: "Training",
        paragraphs: [
          "Frenchies are intelligent but can be willful. Short, upbeat, reward-based sessions work better than long drills, and housetraining can take patience.",
          "Early socialization helps prevent shyness or excessive attachment, and crate training can ease separation anxiety.",
        ],
      },
      {
        id: "grooming",
        title: "Grooming",
        paragraphs: [
          "The short coat is easy to care for: brush weekly and bathe occasionally. Shedding is moderate.",
          "The facial folds need regular attention. Clean and dry the wrinkles to prevent skin infections, and check ears, nails, and teeth routinely.",
        ],
      },
      {
        id: "health",
        title: "Health",
        paragraphs: [
          "French bulldogs typically live 10 to 12 years. As a flat-faced (brachycephalic) breed, many have brachycephalic obstructive airway syndrome, which makes breathing difficult. Other concerns include overheating, skin fold infections, allergies, eye problems, and spinal disorders such as intervertebral disc disease.",
          "Because of their narrow hips, many litters are delivered by cesarean section. Choose a breeder who prioritizes health and breathing function over extreme features, and consider pet insurance, since veterinary costs for the breed can be high.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are French bulldogs good for apartments?",
        a: "Yes. They are small, fairly quiet, and need only moderate exercise, but they must be kept cool and comfortable.",
      },
      {
        q: "Do French bulldogs have health problems?",
        a: "Many do. Breathing difficulties, skin issues, and spinal problems are common, so choose breeders carefully and see a vet regularly.",
      },
      {
        q: "Can French bulldogs swim?",
        a: "Most cannot swim well because of their heavy front end and flat face. Never leave one unattended near water, and consider a canine life vest.",
      },
      {
        q: "How much exercise does a French bulldog need?",
        a: "Around 30 minutes a day of gentle activity is typical, adjusted for temperature and how well the individual dog breathes.",
      },
    ],
  },

  "poodle": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "Germany and France",
    summary:
      "Intelligent, active, and elegant, the Poodle is a versatile retriever and companion that comes in three sizes. This profile focuses on the Standard Poodle.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        paragraphs: [
          "Although the Poodle is strongly associated with France, where it is the national dog, the breed is believed to have originated in Germany as a water retriever. The name is thought to come from the German word 'Pudel,' meaning to splash.",
          "The Standard Poodle came first. The smaller Miniature and Toy varieties were later bred down from it, valued as companions and popular as circus performers.",
          "The traditional show clip is often explained as a working haircut that kept joints and organs warm while leaving the legs free for swimming. The American Kennel Club recognized the breed in 1887.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance",
        paragraphs: [
          "Poodles are elegant, athletic dogs with a dense, curly coat, a long muzzle, and a proud carriage. Coats come in solid colors such as black, white, brown, apricot, silver, and cream.",
          "Standard Poodles stand more than 15 inches at the shoulder and typically weigh about 40 to 70 lb (18 to 32 kg). Miniature Poodles stand 10 to 15 inches, and Toy Poodles are 10 inches or under.",
        ],
      },
      {
        id: "temperament",
        title: "Temperament",
        paragraphs: [
          "Poodles are among the most intelligent dog breeds. They are lively, eager to please, and sensitive, forming close bonds with their families. Standards in particular are known for being steady, playful, and good with children.",
          "They need mental stimulation as much as physical exercise, and can become anxious or bored if left without engagement.",
        ],
      },
      {
        id: "care",
        title: "Exercise and care",
        paragraphs: [
          "Standard Poodles are athletic and need about an hour of activity a day. Swimming, fetch, long walks, and training games suit them, and they are strong candidates for sports such as agility and obedience.",
          "Smaller varieties need less exercise but still benefit from daily play and walks.",
        ],
      },
      {
        id: "feeding",
        title: "Feeding",
        paragraphs: [
          "Feed a balanced adult diet in measured portions suited to size and activity level. Standard Poodles have deep chests and are at risk of bloat, so avoid heavy exercise around mealtimes and ask your vet about smaller, more frequent meals.",
          "Toy and Miniature Poodles are prone to dental disease, so appropriate food and regular dental care matter.",
        ],
      },
      {
        id: "training",
        title: "Training",
        paragraphs: [
          "Poodles are highly trainable and learn quickly. Positive reinforcement works best, and varied activities keep them engaged. Start socialization early to build confidence.",
          "Their sensitivity means harsh corrections can backfire.",
        ],
      },
      {
        id: "grooming",
        title: "Grooming",
        paragraphs: [
          "The Poodle's curly coat sheds very little but grows continuously and mats if neglected. Plan for brushing several times a week and professional grooming roughly every four to six weeks.",
          "Many people sensitive to dander find Poodles easier to live with, but no dog is truly hypoallergenic. Spend time with the breed before committing if allergies are a concern.",
        ],
      },
      {
        id: "health",
        title: "Health",
        paragraphs: [
          "Standard Poodles generally live 12 to 15 years, and smaller varieties often live longer. Health concerns in the breed include hip dysplasia, Addison's disease, bloat, sebaceous adenitis, eye conditions such as progressive retinal atrophy, and epilepsy. Smaller varieties are prone to patellar luxation and dental disease.",
          "Choose breeders who health-test their dogs, and schedule regular checkups, especially as your Poodle ages.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are Poodles hypoallergenic?",
        a: "No dog is completely hypoallergenic, but Poodles shed very little, which can reduce allergens in the home for some people.",
      },
      {
        q: "What sizes do Poodles come in?",
        a: "Standard (over 15 inches), Miniature (10 to 15 inches), and Toy (10 inches or under). They share similar traits, though exercise and health needs vary.",
      },
      {
        q: "Are Poodles good family dogs?",
        a: "Yes. They are intelligent, affectionate, and playful, and Standards in particular tend to do well with children.",
      },
      {
        q: "How often does a Poodle need grooming?",
        a: "Every four to six weeks professionally, with regular brushing at home between visits.",
      },
    ],
  },

  "beagle": {
    vetReviewed: false,
    reviewedBy: "",
    origin: "England",
    summary:
      "Merry, curious, and friendly, the Beagle is a small scent hound with a big personality and an even bigger nose.",
    sections: [
      {
        id: "history",
        title: "History and origin",
        paragraphs: [
          "Small scent hounds used for hunting hare and rabbit have existed in England for centuries, and the Beagle's roots can be traced to those packs. The modern breed took shape in the 19th century.",
          "Breeders in England, including those around the Reverend Phillip Honeywood's pack in the 1830s, are credited with establishing the breed type. The American Kennel Club recognized the Beagle in 1885.",
          "Beagles remain working dogs in many countries and are used as detection dogs, including by agricultural inspection teams at airports, where their noses are put to work sniffing out prohibited food items.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance",
        paragraphs: [
          "Beagles are small, sturdy hounds with a short, dense coat, long drooping ears, and large, expressive brown or hazel eyes. The classic coat is tricolor, but lemon and red-and-white are also seen.",
          "The breed has two height varieties: those under 13 inches, and those over 13 and up to 15 inches. Weight typically ranges from about 20 to 30 lb (9 to 14 kg).",
        ],
      },
      {
        id: "temperament",
        title: "Temperament",
        paragraphs: [
          "Beagles are friendly, gentle, and good with children and other dogs, which makes them popular family pets. They are pack animals and generally prefer company.",
          "Their scent drive is strong. Once a Beagle picks up an interesting smell, it may ignore commands, so they are rarely trustworthy off-leash in unfenced areas. They are also vocal, with a distinctive bay or howl.",
        ],
      },
      {
        id: "care",
        title: "Exercise and care",
        paragraphs: [
          "Beagles need about an hour of exercise daily. Sniff-focused walks, scent games, and secure play areas satisfy their instincts.",
          "Use a secure, tall fence, since many Beagles dig or climb to follow a scent, and keep them leashed in open areas.",
        ],
      },
      {
        id: "feeding",
        title: "Feeding",
        paragraphs: [
          "Beagles love food and are prone to obesity, which can lead to joint and back problems. Measure meals, limit treats, and secure the pantry and trash, since they are skilled at finding food.",
          "Ask your veterinarian for a target weight, and use part of the daily ration for training or puzzle feeders.",
        ],
      },
      {
        id: "training",
        title: "Training",
        paragraphs: [
          "Beagles are intelligent but independent and easily distracted by smells. Food rewards work well, and patience is essential. Recall training takes time and consistency, and may never be perfect.",
          "Crate training and early housetraining routines help, and early socialization builds confidence.",
        ],
      },
      {
        id: "grooming",
        title: "Grooming",
        paragraphs: [
          "The short coat is low-maintenance. Brush weekly to remove loose hair, as Beagles shed moderately year-round.",
          "Their long, floppy ears trap moisture and wax, so check and clean them regularly to prevent infections. Trim nails and care for teeth routinely.",
        ],
      },
      {
        id: "health",
        title: "Health",
        paragraphs: [
          "Beagles typically live 12 to 15 years. Common concerns include obesity, ear infections, epilepsy, hypothyroidism, intervertebral disc disease, and eye conditions such as cherry eye and glaucoma.",
          "Keep your Beagle at a healthy weight, schedule regular checkups, and work with breeders who screen for known hereditary conditions.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are Beagles good with children?",
        a: "Generally yes. They are gentle, playful, and sturdy, though they can be exuberant and should be supervised with very young children.",
      },
      {
        q: "Do Beagles bark a lot?",
        a: "They are vocal dogs. Baying and howling are part of their hound heritage, which is worth considering if you have close neighbors.",
      },
      {
        q: "Can Beagles be let off-leash?",
        a: "It is risky in unfenced areas. Their strong scent drive can lead them to follow a smell and ignore recall.",
      },
      {
        q: "Are Beagles easy to train?",
        a: "They are smart but stubborn and easily distracted. Patient, food-motivated, consistent training works best.",
      },
    ],
  },
};