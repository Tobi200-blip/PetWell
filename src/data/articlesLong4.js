// Long-form articles, batch 4. Same shape as articlesLong.js.
// An entry here replaces any article in articles.js with the same slug.
// Read time is calculated automatically from the word count.

export const longArticles4 = [
  {
    slug: "grooming-your-dog-at-home",
    title: "Grooming your dog at home: the complete guide",
    category: "Grooming",
    excerpt:
      "Brushing, bathing, drying, nails, ears, eyes, teeth, and paws, with a simple routine for every coat type and for every Canadian season.",
    date: "Nov 2026",
    featured: true,
    vetReviewed: false,
    reviewedBy: "",
    intro: [
      "Grooming is easy to dismiss as a cosmetic extra, something for show dogs and fluffy breeds. In reality it is one of the most practical forms of preventive care you can give your dog. A few minutes of brushing each week keeps the coat and skin healthy, trimmed nails keep the feet and joints comfortable, and a quick look at the ears, eyes, teeth, and paws catches small problems before they turn into expensive ones. It also builds trust, because a dog that is used to being handled all over is far easier for you, your groomer, and your vet to work with.",
      "This guide covers everything you need to groom a dog at home. We cover the tools to buy, how to work out your dog's coat type, brushing and mats, shedding, bathing and drying, skin checks, nails, ears, eyes, teeth, and paws. We also cover how to do it through a Canadian year, with its road salt, dry winter air, and ticks, how to help puppies and nervous dogs get comfortable, when to use a professional groomer, and when to call your vet. Everything here is general information, not veterinary advice. Dogs differ, and your own vet or groomer can show you what suits yours.",
    ],
    keyPoints: [
      "Regular brushing is the foundation: how often depends on the coat, from weekly for short coats to nearly daily for long or curly ones.",
      "Bathe only as often as your dog needs it, use a shampoo made for dogs, and dry your dog thoroughly, especially in winter.",
      "Never shave a double-coated dog, and never cut a mat out with scissors close to the skin.",
      "Grooming doubles as a weekly health check: look for lumps, sore skin, ticks, cracked paw pads, and ear or dental problems.",
      "Go slowly with puppies and nervous dogs, use treats, and stop before your dog gets stressed.",
    ],
    sections: [
      {
        heading: "Why grooming is about health, not just looks",
        paragraphs: [
          "A coat that is brushed regularly is healthier than one that is not. Brushing removes loose hair, dirt, and dead skin, and it spreads the natural oils that keep the skin supple and the coat in good condition. It also stops loose hair from tangling into mats, which can pull painfully on the skin, trap moisture, and cause sores.",
          "Other parts of grooming protect the body in less obvious ways. Overgrown nails change the way a dog stands and walks, which strains the joints and can make walking painful. Dirty ears can become infected. Dental disease is one of the most common health problems in dogs and can affect the whole body if left alone. A few minutes of attention each week is far easier than treating any of these once they have taken hold.",
          "Grooming is also a hands-on health check. Because you are touching every part of your dog, you notice lumps, scabs, ticks, cracked paw pads, and changes in smell much earlier than you would otherwise. Many owners find their dog's first problem during a brushing session.",
        ],
        lists: [
          {
            title: "What regular grooming helps with",
            items: [
              "Healthy skin and coat, through brushing and the right bathing routine",
              "Preventing painful mats and skin irritation",
              "Keeping nails at a healthy length, which protects the joints",
              "Spotting lumps, parasites, and skin changes early",
              "Reducing ear infections and dental disease",
              "Making vet and groomer visits less stressful",
              "Keeping loose hair off your furniture and floors",
            ],
          },
        ],
      },
      {
        heading: "Your home grooming kit",
        paragraphs: [
          "You do not need much equipment, but the right tools make the job quicker and kinder for your dog. Start with the basics, and add more as you learn what your dog's coat needs. Your vet or groomer can tell you which brush and shampoo suit your dog, and it is worth asking before you buy a pile of gadgets you will not use.",
        ],
        lists: [
          {
            title: "A sensible starter kit",
            items: [
              "A brush or comb that suits your dog's coat (see the next section)",
              "A shampoo made for dogs, and a conditioner if the coat tangles easily",
              "A non-slip mat for the tub or shower",
              "Several absorbent towels",
              "Dog nail clippers or a nail grinder, and styptic powder for emergencies",
              "A veterinarian-approved ear cleaner, with cotton balls or gauze squares",
              "A dog toothbrush and dog toothpaste",
              "Blunt-tipped scissors for small trims around the paws",
              "Fine-tipped tweezers or a tick remover",
              "Plenty of small treats",
            ],
          },
        ],
        callout: {
          title: "Never use human products on your dog",
          text: "Human shampoo is not made for a dog's skin and can irritate it. Human toothpaste is not meant to be swallowed, and some products contain xylitol, a sweetener that is toxic to dogs. Use medicated shampoos only when your vet recommends them.",
        },
      },
      {
        heading: "Know your dog's coat type",
        paragraphs: [
          "Grooming needs depend heavily on the coat, so the first step is knowing what kind your dog has. Most coats fall into a handful of types. Mixed breeds can combine more than one, and your vet or groomer can help if you are not sure. Our breed guides also list the grooming needs of each breed.",
        ],
        lists: [
          {
            title: "Common coat types and what they need",
            items: [
              "Short, smooth coats (Beagle, Boxer, Whippet): low maintenance. Brush weekly with a rubber curry brush or soft bristle brush to remove loose hair. They still shed",
              "Double coats (Golden retriever, Siberian husky, German shepherd): a dense, soft undercoat beneath longer guard hairs. They shed year-round and heavily once or twice a year, and need regular brushing with an undercoat rake or similar tool",
              "Long, silky coats (Shih Tzu, Yorkshire terrier, Maltese): they tangle easily and often need brushing nearly every day, plus regular trims",
              "Curly or wavy coats (Poodle, Bichon frise): they shed very little but grow continuously and mat easily, so they need thorough brushing several times a week and professional grooming every few weeks",
              "Wiry or rough coats (West Highland white terrier, wirehaired Dachshund): a harsh texture that sheds little but may need hand-stripping or trimming to keep its shape",
            ],
          },
        ],
      },
      {
        heading: "Brushing: tools, technique, and how often",
        paragraphs: [
          "Brushing is the single most useful grooming habit. How often depends on the coat. Short coats may need only a weekly session, double coats a few times a week, and long, silky, or curly coats a short session nearly every day. When in doubt, brush a little more often than you think you need to, since regular short sessions are easier on your dog than rare long ones.",
          "Technique matters as much as the tool. Many dogs have a slicked-over top layer that looks tidy while mats form underneath, so brush down to the skin. A method called line brushing, where you part the hair and brush one thin layer at a time, makes sure you reach the whole coat.",
        ],
        lists: [
          {
            title: "Matching the tool to the coat",
            items: [
              "Rubber curry brush or grooming mitt: short, smooth coats, to lift loose hair",
              "Bristle brush: short coats, to add shine and smooth the hair",
              "Slicker brush: medium and long coats, and curly coats, to remove tangles and loose hair",
              "Pin brush: long, silky coats, for a gentler finishing brush",
              "Undercoat rake or deshedding tool: double coats, to remove dead undercoat, used gently and not too often",
              "Metal comb: all long or thick coats, to check that no tangles remain close to the skin",
            ],
          },
          {
            title: "Line brushing, step by step",
            ordered: true,
            items: [
              "Let your dog sniff the brush, and begin with a few gentle strokes on an easy area such as the back.",
              "Part the coat with your hand or a comb, and brush one small layer at a time, working from the skin outwards.",
              "Brush in the direction the hair grows, holding the hair near the skin so that you do not pull.",
              "Give extra time to friction areas: behind the ears, under the collar or harness, the armpits, belly, groin, base of the tail, and the backs of the legs.",
              "Finish by running a comb through the coat to check there are no tangles left near the skin.",
              "Praise your dog and give a treat, so that grooming ends on a good note.",
            ],
          },
        ],
      },
      {
        heading: "Dealing with mats and tangles",
        paragraphs: [
          "A mat is a tight clump of hair, dead undercoat, and debris. Mats pull on the skin, trap moisture and dirt, hide parasites, and can lead to sores and infection. They form most often in places where hair rubs: behind the ears, under the collar or harness, in the armpits, and around the hindquarters. Dogs that swim, play in snow, or roll in mud also mat more easily.",
          "Small tangles can usually be worked out at home. Hold the hair close to the skin so that you do not pull, tease the mat apart gently with your fingers, and then comb it out a little at a time, starting at the outer edge and working inwards. A detangling spray made for dogs can help. Keep sessions short and patient, and stop if your dog becomes distressed.",
          "Do not bathe a matted dog, because water tightens mats. Do not cut a mat out with scissors, since a dog's skin is easily pulled up into the mat and cut. Large, tight, or painful mats are a job for a professional groomer or your vet. Sometimes the kindest option is to clip the coat short, which is far better for your dog than hours of pulling at a badly matted coat. Severe matting can cause skin damage, so if the skin looks red, sore, or broken, see your vet.",
        ],
        callout: {
          title: "Prevention beats repair",
          text: "Brush regularly, brush before baths, and brush after swimming, snow, or muddy walks. A few minutes after a wet walk can save a long, unpleasant session later.",
        },
      },
      {
        heading: "Shedding and seasonal coat blows",
        paragraphs: [
          "Shedding is normal, and most dogs lose hair all year round. Double-coated dogs, such as huskies, retrievers, and shepherds, also 'blow' their undercoat once or twice a year, usually in spring and autumn, when large amounts of soft hair come out in clumps. During a coat blow, brushing daily with an undercoat rake or deshedding tool, used gently, speeds the process and keeps your home manageable.",
          "Shaving does not reduce shedding, and it can damage a double coat. Good brushing is what controls loose hair. A balanced, complete diet also supports skin and coat health, and our feeding guide explains what to look for.",
          "Normal shedding is different from a skin or health problem. If you notice bald patches, thinning, red or flaky skin, constant scratching, or a sudden change in coat texture, talk to your vet, since allergies, parasites, hormonal conditions, and other illnesses can all cause coat changes.",
        ],
        lists: [
          {
            title: "Signs that shedding may be more than normal",
            items: [
              "Bald patches or thinning areas",
              "Red, flaky, or greasy skin",
              "Constant scratching, licking, or chewing at the skin",
              "A dull, brittle coat, especially with weight change or low energy",
              "A sudden change in coat texture or color",
            ],
          },
        ],
      },
      {
        heading: "Bath time: how often and how to do it",
        paragraphs: [
          "Most dogs do not need frequent baths. Many do well with a bath every four to eight weeks, and some, such as double-coated dogs that stay clean, need them far less often. Washing too often can strip the natural oils from the skin and make it dry and itchy. Bathe your dog when it is dirty or smelly, after it rolls in something unpleasant, or when your vet recommends it for a skin condition. Dogs with skin problems may need a particular schedule and shampoo, so follow your vet's advice.",
          "A calm, well-prepared bath makes the experience much more pleasant. Gather everything before you start, and keep a hand on your dog the whole time.",
        ],
        lists: [
          {
            title: "A simple bathing routine",
            ordered: true,
            items: [
              "Brush your dog first and remove any mats, because water tightens them.",
              "Put a non-slip mat in the tub, and have your shampoo, towels, and treats within reach.",
              "Use lukewarm water, never hot, and test it on your wrist.",
              "Wet the coat thoroughly, working from the neck down, and keep water out of the eyes, ears, and nose.",
              "Work in a dog shampoo, massaging down to the skin, and wash the face last with a damp cloth.",
              "Rinse until the water runs clear. Shampoo left in the coat can irritate the skin.",
              "Squeeze excess water from the coat, wrap your dog in a towel, and let it shake.",
            ],
          },
        ],
        callout: {
          title: "Keep water out of the ears",
          text: "Water trapped in the ears can lead to infections, especially in dogs with floppy ears. Some owners place a cotton ball loosely at the entrance of the ear during a bath, but ask your vet whether that suits your dog, and never push anything deep into the ear canal.",
        },
      },
      {
        heading: "Drying your dog properly",
        paragraphs: [
          "Thorough drying is as important as the bath itself. A damp coat that is left to dry slowly can cause hot spots, odor, and skin irritation, especially in thick coats, in skin folds, and under the ears. Start by towel-drying, squeezing and blotting rather than rubbing hard, which can tangle the coat.",
          "A dryer made for dogs, or a hair dryer on the lowest, coolest setting, can speed things up for thick coats. Keep it moving and at a distance, never aim hot air at the skin, and introduce the noise gradually, since many dogs find it frightening. Brush the coat as you dry it, which helps stop tangles and mats from forming.",
          "In cold weather, drying matters even more. A damp dog that goes outside in freezing temperatures chills quickly, so keep your dog indoors until it is completely dry, which can take a long time with a dense coat. In winter it also helps to bathe at the warmest part of the day, and to avoid bathing just before a long outing.",
        ],
      },
      {
        heading: "Check the skin as you groom",
        paragraphs: [
          "Grooming is the best time to check your dog's skin. Part the coat in several places and look at the skin, and run your hands over the whole body, including the legs, belly, and tail. Over time you learn what is normal for your dog, which makes changes easier to spot.",
          "Most lumps are harmless, such as fatty lumps in older dogs, but you cannot tell by touch alone. Note the size and position of any lump, and have your vet check anything that is new, growing, or changing.",
        ],
        lists: [
          {
            title: "What to look for",
            items: [
              "Lumps, bumps, or swellings",
              "Red, flaky, greasy, or darkened skin",
              "Scabs, sores, or hot spots (moist, red, painful patches)",
              "Fleas, or flea dirt (small dark specks that turn red when wet)",
              "Ticks, especially in the ears, armpits, groin, and between the toes",
              "Hair loss or thinning",
              "A strong or unusual smell",
              "Weight loss or gain, or changes in body shape",
            ],
          },
        ],
        callout: {
          title: "How to remove a tick",
          text: "Use fine-tipped tweezers or a tick remover, grasp the tick as close to the skin as possible, and pull straight out with steady pressure. Do not squeeze, twist, burn, or smother it. Clean the area, note the date, and tell your vet. Blacklegged ticks that can carry Lyme disease are found in parts of Canada, so ask your vet about tick prevention and local risk.",
        },
      },
      {
        heading: "Trimming nails safely",
        paragraphs: [
          "Nails that are too long change the way your dog stands and walks, can split or tear, and can be painful. As a rough guide, most dogs need a trim every three to four weeks, and if you hear your dog's nails clicking on a hard floor, they are probably too long. Dogs that walk on pavement wear their nails down more than dogs that mostly walk on grass or snow.",
          "Inside each nail is the quick, a bundle of blood vessels and nerves. Cutting it hurts and bleeds. In pale nails the quick shows as a pink area, and you can trim a few millimetres before it. In dark nails you cannot see it, so trim a very small sliver at a time and stop when you see a dark dot appear in the center of the cut surface, which signals that the quick is near.",
          "Clippers and grinders both work. A grinder is slower, but gives a smoother result and makes it easier to avoid the quick, though some dogs dislike the noise and the vibration. Either way, introduce the tool slowly, with treats. Do not forget the dewclaws, the small nails higher up the inside of the leg, which do not wear down and can grow into the skin.",
        ],
        lists: [
          {
            title: "A safe approach",
            items: [
              "Introduce the clippers or grinder gradually, rewarding your dog for staying calm",
              "Hold the paw firmly but gently, and trim one nail at a time",
              "Cut or grind a little at a time, especially on dark nails",
              "Keep styptic powder nearby in case of bleeding",
              "Stop if your dog becomes stressed, and finish another day",
              "Reward after each nail, or after each paw, depending on your dog",
            ],
          },
        ],
        callout: {
          title: "If you cut the quick",
          text: "Stay calm. Apply styptic powder, or press cornstarch against the nail, and hold gentle pressure. If the bleeding does not stop within several minutes, or you are worried, call your vet. Many dogs are nervous about nails, so if yours is very fearful, a groomer or vet clinic can do it for you.",
        },
      },
      {
        heading: "Cleaning ears",
        paragraphs: [
          "A healthy ear is pale pink, clean, and nearly odor-free. Check your dog's ears weekly. Not every dog needs regular cleaning, and over-cleaning can irritate the ear, so ask your vet how often to clean. Dogs with floppy ears, dogs that swim, dogs with hairy ear canals, and dogs with allergies are more prone to ear problems and often need more attention.",
          "Use a cleaner made for dogs and recommended by your vet, and never push anything deep into the canal. Cotton swabs can pack debris further in, or injure the eardrum, so use them only on the visible outer parts of the ear if at all.",
        ],
        lists: [
          {
            title: "A gentle cleaning method",
            ordered: true,
            items: [
              "Hold the ear flap up and squeeze enough cleaner into the ear to fill the canal, following the product's directions.",
              "Massage the base of the ear gently for about half a minute. You should hear a squelching sound.",
              "Let your dog shake its head, then wipe the visible parts of the ear with cotton or gauze.",
              "Reward your dog, and dry the ear thoroughly.",
            ],
          },
          {
            title: "Signs of an ear infection",
            items: [
              "Redness or swelling",
              "A strong or sour smell",
              "Dark, yellow, or bloody discharge",
              "Head shaking, head tilting, or scratching at the ear",
              "Pain when the ear is touched",
            ],
          },
        ],
        callout: {
          title: "Do not clean a painful ear",
          text: "If an ear is red, sore, or smelly, see your vet before cleaning it. Cleaning an infected or damaged ear can make it worse, and your dog may need medication.",
        },
      },
      {
        heading: "Eyes and face",
        paragraphs: [
          "Look at your dog's eyes during every grooming session. A little discharge in the corners is normal, and you can wipe it away with a clean, damp cloth or soft pad, using a separate one for each eye. Tear staining, the reddish-brown marks under the eyes, is common in dogs with light coats and can be wiped away daily, though persistent heavy staining is worth mentioning to your vet.",
          "Dogs with facial folds, such as Bulldogs, French bulldogs, and Pugs, need those folds cleaned and dried regularly to prevent skin infections. Hair that grows into the eyes can irritate them, and can be trimmed carefully with blunt-tipped scissors, or by a groomer if your dog will not hold still.",
          "See your vet promptly for redness, cloudiness, squinting, heavy or colored discharge, or if your dog is pawing at an eye. Eye problems can get worse quickly.",
        ],
      },
      {
        heading: "Dental care",
        paragraphs: [
          "Dental disease is one of the most common health problems in dogs. Plaque hardens into tartar, the gums become inflamed, and in advanced cases teeth loosen and bacteria can affect other organs. Small breeds are particularly prone. The best protection is regular brushing, backed by regular veterinary dental checks.",
          "Aim to brush as often as you can. Daily is best, and several times a week is much better than never. Use a toothpaste made for dogs, which comes in flavors dogs like and is safe to swallow, and a soft dog toothbrush or a finger brush.",
        ],
        lists: [
          {
            title: "Getting started with brushing",
            ordered: true,
            items: [
              "Let your dog lick a little dog toothpaste from your finger, so that it learns to like the taste.",
              "Gently rub a finger along the outside of the gums and teeth, for a few seconds at a time.",
              "Introduce the brush, and move in small circles along the outer surfaces of the teeth, where plaque builds up most.",
              "Gradually lengthen the sessions, and always end with praise or a treat.",
            ],
          },
          {
            title: "Signs of dental problems",
            items: [
              "Bad breath that is strong or getting worse",
              "Red, swollen, or bleeding gums",
              "Yellow or brown tartar on the teeth",
              "Drooling, or dropping food",
              "Reluctance to chew, or pawing at the mouth",
              "Loose or broken teeth",
            ],
          },
        ],
        callout: {
          title: "Chews are an extra, not a replacement",
          text: "Some dental chews and diets carry the seal of the Veterinary Oral Health Council, which means they have met standards for reducing plaque or tartar. They can help, but they do not replace brushing. Ask your vet about professional dental cleanings, which are done under anesthesia.",
        },
      },
      {
        heading: "Paw care",
        paragraphs: [
          "Paws take a lot of punishment. Check them after walks, and make it part of your weekly grooming routine. Look at the pads and between the toes for cracks, cuts, blisters, burrs, thorns, grass seeds, and stones, and check that nothing is stuck in the fur between the pads.",
          "In dogs with hair between the pads, snow, ice, and mud can ball up and become painful. Trim the hair level with the pads, using blunt-tipped scissors and taking great care, or ask a groomer to do it. Keep nails at a healthy length, since long nails push the toes out of position.",
        ],
        lists: [
          {
            title: "A quick paw check",
            items: [
              "Look at each pad for cuts, cracks, or blisters",
              "Spread the toes and check between them for burrs, thorns, grass seeds, or ice",
              "Feel for heat, swelling, or tenderness",
              "Check the nails and dewclaws",
              "Watch for limping, licking, or chewing at the feet",
            ],
          },
        ],
      },
      {
        heading: "Grooming through the seasons in Canada",
        paragraphs: [
          "Canadian weather affects grooming more than owners expect. A routine that works in July may not suit February, so it helps to adjust through the year.",
          "In winter, road salt and de-icing products are the biggest paw hazard. They can irritate the pads, and dogs that lick them off their paws can be made ill, so rinse or wipe your dog's paws after walks. A paw balm designed for dogs can protect the pads before a walk, and boots help some dogs. Antifreeze has a sweet taste and is extremely poisonous to dogs, so clean up any spills, and call a vet immediately if you think your dog has had any. Indoor heating also dries the air and can make skin itchy and the coat static, so brush regularly, avoid over-bathing, and consider a humidifier. Snow and ice can ball up in long coats and between the toes, so brush it out and dry your dog fully when you get inside.",
          "In spring and summer, ticks, burrs, and grass seeds become the main concern. Check your dog all over after walks in long grass, woods, and brush, paying attention to the ears, armpits, groin, and between the toes. Do not shave a double-coated dog to keep it cool, since the coat helps regulate temperature and protects against sunburn. Instead, brush out loose undercoat, provide shade and water, and exercise at cooler times of the day. Dogs with thin coats or pale skin can sunburn, so ask your vet about protection. In autumn, wet leaves and burrs can mat the coat, so brush after outings.",
        ],
        lists: [
          {
            title: "Winter checklist",
            items: [
              "Wipe or rinse paws after every walk to remove salt and de-icer",
              "Check between the toes for snow and ice balls",
              "Dry your dog thoroughly after baths, and keep it indoors until dry",
              "Brush regularly, since dry indoor air can make the coat and skin dull and itchy",
              "Trim the hair between the pads if it collects ice",
              "Use a coat for short-haired or small dogs on cold days",
            ],
          },
          {
            title: "Spring, summer, and autumn checklist",
            items: [
              "Check for ticks after walks in grass, brush, and woods, and ask your vet about tick prevention",
              "Look for burrs, grass seeds, and thorns, especially in the ears, paws, and armpits",
              "Never shave a double coat, and brush out loose undercoat instead",
              "Provide shade and fresh water, and avoid hot pavement for the paws",
              "Brush after swimming, since wet coats mat quickly",
              "Rinse off salt water or pond water after swims",
            ],
          },
        ],
      },
      {
        heading: "Getting puppies and nervous dogs comfortable with grooming",
        paragraphs: [
          "Dogs that learn early that grooming is pleasant are far easier to care for throughout their lives. With a puppy, start the day you bring it home. Handle the paws, ears, mouth, tail, and belly every day, for a few seconds at a time, and reward calm behavior with treats.",
          "Introduce each tool gradually. Let your puppy sniff the brush and the nail clippers, touch them gently to its body without using them, and reward it. Run the hair dryer in another room, then in the same room, then near your puppy, so that the noise becomes familiar. Keep early sessions very short, and always end on a good note.",
          "The same approach works for adult and rescue dogs that are afraid of being handled. Go slowly, and work below the point where your dog gets stressed. A lick mat spread with something tasty can keep a dog busy during brushing. If your dog growls, snaps, or panics, stop, since forcing the issue can make fear worse. A trainer, a patient groomer, or your vet can help with dogs that are very fearful.",
        ],
        lists: [
          {
            title: "Signs your dog needs a break",
            items: [
              "Lip licking, yawning, or turning the head away",
              "Stiffening, or trying to move away",
              "Whale eye (showing the whites of the eyes)",
              "Tucked tail or flattened ears",
              "Growling, snapping, or biting",
              "Refusing treats",
            ],
          },
        ],
      },
      {
        heading: "Haircuts, clipping, and when to use a groomer",
        paragraphs: [
          "Some coats need regular professional care. Poodles, Bichon frises, Shih Tzu, and many poodle crosses have coats that keep growing and need clipping every four to eight weeks. You can do a lot at home between visits, such as brushing, bathing, nails, ears, and teeth, but cutting and clipping take skill. Clippers can burn or nick the skin, and a dog that struggles during a home haircut can be injured.",
          "Never shave a double-coated breed, such as a Husky, Golden retriever, or German shepherd, just to keep it cool or reduce shedding. The undercoat insulates against both cold and heat, and shaved coats may grow back patchy, change texture, or leave the skin exposed to sunburn. A vet may occasionally recommend clipping for a medical reason, and in that case follow their advice.",
          "A good groomer is a valuable partner in your dog's health. They see your dog regularly and may spot lumps, skin problems, or ear and dental issues. Ask other dog owners, your vet, or local trainers for recommendations.",
        ],
        lists: [
          {
            title: "Questions to ask a groomer",
            items: [
              "What training and experience do you have, and with which breeds?",
              "Which vaccinations do you require?",
              "How do you handle nervous dogs, or dogs that are matted?",
              "Are dogs crated, and for how long, and how are they dried?",
              "What does the price include, and are there extra charges, such as for matting?",
              "Can I see the salon, or stay during the appointment?",
              "How will you tell me if you find a lump, a skin problem, or any injury?",
            ],
          },
        ],
      },
      {
        heading: "Common grooming mistakes",
        paragraphs: [
          "Most grooming problems come from a small number of avoidable mistakes.",
        ],
        lists: [
          {
            items: [
              "Bathing too often, which dries out the skin",
              "Using human shampoo, toothpaste, or other products",
              "Bathing a matted dog, or cutting a mat out with scissors",
              "Leaving shampoo in the coat, or not drying the dog properly",
              "Shaving a double-coated dog",
              "Cutting the quick when trimming nails, or skipping the dewclaws",
              "Pushing cotton swabs deep into the ears",
              "Skipping teeth brushing and going straight to dental chews",
              "Forcing a frightened dog, instead of going slowly",
              "Ignoring lumps, odor, or skin changes noticed during grooming",
            ],
          },
        ],
      },
      {
        heading: "When to call your vet",
        paragraphs: [
          "Most grooming is routine, but sometimes it reveals something that needs professional help. Contact your vet if you notice any of the following.",
        ],
        lists: [
          {
            items: [
              "A new lump that is growing, changing, or painful",
              "Red, sore, scabby, or weeping skin, or a hot spot that is spreading",
              "Constant scratching, licking, or chewing at the skin",
              "Patches of hair loss",
              "Fleas, or a tick bite, particularly if your dog becomes unwell afterwards",
              "A smelly, red, swollen, or painful ear, or a head tilt",
              "Red, cloudy, or squinting eyes",
              "Bad breath with red gums, drooling, or reluctance to eat",
              "Severe matting, or mats against the skin that look sore",
              "Scooting along the floor, or licking at the rear, which can signal anal gland problems",
              "A bleeding nail that will not stop, or a nail that has torn or grown into the pad",
            ],
          },
        ],
        callout: {
          title: "Leave anal glands to the professionals",
          text: "Do not try to express your dog's anal glands unless your vet or groomer has shown you how. Done incorrectly it can cause pain and injury, and repeated scooting is a reason for a vet check.",
        },
      },
      {
        heading: "A simple weekly grooming routine",
        paragraphs: [
          "You do not need to do everything every day. A short, regular routine is easier to keep up, and it spreads the work across the week. This is a general outline that you can adapt to your dog's coat and needs.",
        ],
        lists: [
          {
            ordered: true,
            items: [
              "Several times a week: brush your dog, and check the skin as you go. Brush daily if your dog has a long, curly, or double coat during shedding.",
              "Daily or several times a week: brush your dog's teeth, and check the gums.",
              "Weekly: look in the ears and eyes, wipe away any discharge, and check the paws.",
              "Every three to four weeks: trim the nails, and check the dewclaws.",
              "Every four to eight weeks, or as needed: bathe your dog, and dry it thoroughly.",
              "After walks: wipe the paws in winter, and check for ticks in tick season.",
              "Every four to eight weeks, for coats that need it: book a professional groom.",
              "At every checkup: ask your vet about your dog's skin, coat, ears, and teeth.",
            ],
          },
        ],
        callout: {
          title: "The bottom line",
          text: "Grooming works best when it is short, regular, and rewarding. A few calm minutes each week keeps your dog comfortable, helps you spot problems early, and makes every vet and groomer visit easier.",
        },
      },
    ],
    faqs: [
      {
        q: "How often should I bathe my dog?",
        a: "It varies, but many dogs do well with a bath every four to eight weeks. Some need them less often, and dogs with skin conditions may need a schedule from their vet. Washing too often can dry out the skin.",
      },
      {
        q: "How often should I brush my dog?",
        a: "Short coats may need only a weekly brush, double coats a few times a week, and long, silky, or curly coats a short session nearly every day. Brush more during shedding seasons.",
      },
      {
        q: "Can I use human shampoo on my dog?",
        a: "It is not recommended. Human shampoo is not made for a dog's skin and can irritate it, so use a shampoo made for dogs, and a medicated one only if your vet recommends it.",
      },
      {
        q: "Should I shave my dog in summer?",
        a: "Not if it has a double coat, such as a Husky, Golden retriever, or German shepherd. The coat helps regulate temperature and protects against sunburn. Brush out loose undercoat, and provide shade, water, and cooler exercise times instead.",
      },
      {
        q: "How do I know when my dog's nails are too long?",
        a: "If you hear them clicking on a hard floor, or they touch the ground when your dog stands, they are probably too long. Most dogs need a trim every three to four weeks.",
      },
      {
        q: "Do I really need to brush my dog's teeth?",
        a: "Yes, if you can. Brushing is the most effective way to slow plaque and tartar, and dental disease is very common in dogs. Use dog toothpaste, aim for daily or several times a week, and ask your vet about dental checks.",
      },
      {
        q: "My dog hates being groomed. What can I do?",
        a: "Go slowly, use treats, keep sessions very short, and introduce tools gradually. Stop before your dog gets stressed. If the fear is strong, ask a trainer, a patient groomer, or your vet for help.",
      },
    ],
  },
];