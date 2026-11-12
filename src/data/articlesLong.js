// Long-form articles. An entry here replaces any article in articles.js with the same slug.
// Fields: slug, title, category, excerpt, date, featured, vetReviewed, reviewedBy,
//         intro[], keyPoints[], sections[], faqs[]
// Section fields: heading, paragraphs[], lists[{title, items[], ordered}], callout{title, text}
// Read time is calculated automatically from the word count.

export const longArticles = [
  {
    slug: "how-much-to-feed-your-dog",
    title: "How much should you feed your dog? The complete guide",
    category: "Nutrition",
    excerpt:
      "A practical, in-depth guide to portions, meal schedules, life stages, body condition, treats, and choosing a food, with a step-by-step plan you can start today.",
    date: "Nov 2026",
    featured: true,
    vetReviewed: false,
    reviewedBy: "",
    intro: [
      "Few questions come up as often among dog owners as how much to feed, and few have a more frustrating answer: it depends. A tiny toy puppy, a retired racing Greyhound, and a working Border collie can all weigh the same and need completely different amounts of food. Add age, health, climate, and the type of food, and a single number on the back of a bag stops being very helpful.",
      "This guide gives you a way to work out the right amount for your own dog, and to keep checking that it is still right. We cover how to read a feeding guide, what changes a dog's needs at each life stage, how to judge body condition with your hands, how to measure properly, how to handle treats and food changes, and when to bring in your vet. Take your time with it; the sections are written so you can come back to the one you need.",
    ],
    keyPoints: [
      "The feeding guide on the label is a starting point, not a prescription.",
      "Your dog's body condition, which you can feel and see, matters more than the number of cups.",
      "Puppies, adults, and seniors need different amounts and meal patterns, and large breeds need extra care while growing.",
      "Measure every meal, count treats, and change portions in small steps, checking the results.",
      "If your dog is gaining, losing, or has a health condition, build the plan with your vet.",
    ],
    sections: [
      {
        heading: "Why portions matter more than most owners expect",
        paragraphs: [
          "Food is the part of your dog's health that you control every single day. Over months and years, small daily surpluses add up. Dogs carrying extra weight are more likely to develop arthritis and other joint problems, breathing difficulty, diabetes, and heart strain, and they tend to tire faster and enjoy exercise less. A well-known long-term study of Labrador retrievers found that dogs kept lean throughout their lives lived, on average, nearly two years longer than littermates who were fed more freely.",
          "Underfeeding is a risk too, especially in growing puppies, working dogs, and seniors who have started losing muscle. But for most pet dogs the more common problem is gentle, gradual overfeeding, helped along by treats, table scraps, and measuring by eye. The good news is that it is also one of the easiest problems to prevent once you know what to look for.",
        ],
      },
      {
        heading: "Start with the label, but do not stop there",
        paragraphs: [
          "Every bag or tin of complete dog food carries a feeding guide, usually a table of daily amounts by body weight. It is a sensible starting point, because it is based on the calorie content of that particular food. It is also an average. The table cannot know whether your dog is neutered, a couch companion or a daily hiker, or naturally lean or stocky.",
          "Look for the statement that the food is complete and balanced for your dog's life stage, such as puppy, adult, or all life stages. Feed the amount that matches your dog's ideal weight, not necessarily today's weight if your dog is already overweight. Then watch the results for two to four weeks, because your dog's body is the real test of whether the amount is right.",
        ],
        callout: {
          title: "A simple adjustment rule",
          text: "If your dog is gaining weight or has lost the visible waist, reduce the daily portion by about 10 percent. If your dog is getting too thin, increase it by about 10 percent. Re-check body condition after two to four weeks before changing again.",
        },
      },
      {
        heading: "What changes how much your dog needs",
        paragraphs: [
          "Two dogs of the same weight can need very different amounts of energy. These are the main factors:",
          "The food itself matters as well. Calories per cup can differ widely between brands, and even between formulas from the same company, so a cup of one food is not equal to a cup of another. This is why it is risky to copy a friend's portion size, or to keep the same scoop when you switch foods.",
        ],
        lists: [
          {
            items: [
              "Age: puppies need far more food for their size than adults, and many seniors need less",
              "Breed and size: small dogs burn more energy per kilogram than large dogs, though large dogs eat more in total",
              "Activity level: a dog that runs for two hours needs more than one that takes two short walks",
              "Neutering: neutered dogs often need fewer calories and are more prone to weight gain",
              "Body condition: dogs who are overweight or underweight need a plan to reach a healthy weight",
              "Health conditions: thyroid disease, diabetes, kidney disease, and others change what and how much a dog should eat",
              "Temperature and season: some dogs eat less in hot weather and more in cold weather",
              "Pregnancy and nursing: mothers need substantially more energy for a period",
            ],
          },
        ],
      },
      {
        heading: "Feeding puppies",
        paragraphs: [
          "Puppies grow fast and need more calories per kilogram than they ever will again, delivered in small, frequent meals because their stomachs are small. Many vets suggest three to four meals a day for young puppies, moving to two meals a day at around six months, though the right schedule depends on the breed and your vet's advice.",
          "Choose a food made for puppies, and for large and giant breeds choose a large-breed puppy formula. These diets are designed to support steady growth and carefully controlled calcium levels, because growing too fast has been linked to developmental bone and joint problems in big dogs. A chubby large-breed puppy is not a healthy one.",
          "Toy and small-breed puppies have the opposite risk: they can develop dangerously low blood sugar if they go too long without eating, so they need regular small meals and should never be left hungry for long stretches. Weigh your puppy every week or two, and ask your vet to check that the growth curve looks right.",
        ],
      },
      {
        heading: "Feeding adult dogs",
        paragraphs: [
          "Most adult dogs do well on two measured meals a day, roughly twelve hours apart. Splitting the daily amount keeps hunger steadier, reduces the chance of an empty stomach causing bile vomiting in some dogs, and gives you two chances a day to check your dog's appetite. A few dogs do fine on one meal a day, but it is worth discussing with your vet, particularly for large or deep-chested breeds.",
          "Adjust to what your dog actually does. A dog that spends weekends hiking needs more than the same dog during a quiet week, and working or sporting dogs may need significantly more. The aim is to hold a steady, healthy body condition, not to hit a fixed number of cups.",
        ],
      },
      {
        heading: "Feeding senior dogs",
        paragraphs: [
          "As dogs age, their metabolism slows and many become less active, so older dogs often gain weight on the same portions they ate as adults. Others go the other way and lose muscle and weight, sometimes because of dental pain or underlying illness. Any unexplained weight loss in an older dog deserves a vet visit rather than simply more food.",
          "Senior diets vary, and not every older dog needs one. Some seniors benefit from foods adjusted for calories, protein, or joint support, while dogs with kidney, heart, or other conditions may need a prescription diet. Softer food or smaller, more frequent meals can help dogs with sore teeth. Fresh water matters even more with age, and twice-yearly checkups let your vet catch changes early.",
        ],
      },
      {
        heading: "Large and giant breeds",
        paragraphs: [
          "Large and deep-chested breeds, such as Great Danes, German shepherds, Weimaraners, and Boxers, face a particular risk called gastric dilatation-volvulus, or bloat, in which the stomach fills with gas and may twist. It is a life-threatening emergency. The causes are not fully understood, but vets commonly advise feeding two or more smaller meals a day, avoiding hard exercise and excitement just before and after meals, and discouraging very fast eating.",
          "Advice on raised food bowls has changed over the years and opinions differ, so ask your vet what they recommend for your dog. Know the warning signs: a swollen or hard belly, unproductive retching, drooling, restlessness, and a distressed look. If you see them, go to an emergency vet immediately.",
        ],
        callout: {
          title: "Bloat is an emergency",
          text: "Do not wait to see whether it passes. A swollen belly with unproductive retching in a large dog needs immediate veterinary care.",
        },
      },
      {
        heading: "Small and toy breeds",
        paragraphs: [
          "Small dogs burn more energy per kilogram, but they have small stomachs and eat very little in absolute terms, which makes accidental overfeeding easy. A handful of extra biscuits can be a significant percentage of a toy dog's daily calories, so measuring by weight matters even more.",
          "Small breeds are also more prone to dental disease, so ask your vet about dental care alongside the food you choose, and pick a kibble size that suits a small mouth.",
        ],
      },
      {
        heading: "How to check your dog's body condition",
        paragraphs: [
          "Vets use a nine-point body condition score, where about four to five is ideal. You do not need to be a vet to do a useful version at home. Fluffy coats hide a lot, so use your hands as well as your eyes.",
          "Do the check once a month and write down the result along with your dog's weight. Small, steady changes are much easier to correct than a big gain, and photos taken from above make useful comparisons.",
        ],
        lists: [
          {
            ordered: true,
            items: [
              "Feel the ribs. Run your hands along both sides of the chest. You should feel the ribs easily under a thin layer of fat. If you have to press hard, there is likely too much fat, and if the ribs stand out sharply, your dog may be too thin.",
              "Look from above. You should see a waist, a gentle narrowing behind the ribs. A straight or bulging outline suggests excess weight.",
              "Look from the side. The belly should tuck up from the chest toward the hind legs. A level or hanging belly is a warning sign.",
              "Check the base of the tail and the spine. A thick layer of fat here, or a spine that feels like a row of knuckles, are both signs to talk to your vet.",
            ],
          },
        ],
        callout: {
          title: "Breeds differ",
          text: "Some breeds are naturally lean, such as Greyhounds and Whippets, whose ribs can look more visible than in other breeds. Ask your vet what is ideal for your dog's breed and frame.",
        },
      },
      {
        heading: "How to measure food properly",
        paragraphs: [
          "Scoops and cups are easy, but they are also wildly inconsistent. The same cup can hold quite different weights of kibble depending on how it is filled, and a coffee mug is not a measuring cup. A cheap kitchen scale that measures in grams is the most accurate way to portion dry food, and many vets recommend it.",
        ],
        lists: [
          {
            items: [
              "Work out your dog's daily total in grams, using the label as a starting point and your dog's body condition as the check",
              "Weigh the full day's food each morning into a container, then feed from that container",
              "Take treats and training rewards from the same container, so extras are counted rather than added on top",
              "Make sure everyone in the household feeds from the same plan, so a dog is not fed twice",
              "Record your dog's weight regularly and adjust the plan when it changes",
            ],
          },
        ],
      },
      {
        heading: "Treats, chews, and table scraps",
        paragraphs: [
          "A commonly used guideline is to keep treats, chews, and extras to no more than about 10 percent of your dog's daily calories. It is easy to overshoot. Dental chews, bully sticks, and chewy treats can be surprisingly high in calories, and a few pieces of cheese or sausage can add up to a large share of a small dog's day.",
          "For training, use tiny, pea-sized pieces, or use part of your dog's regular kibble as rewards. Some owners use small pieces of dog-safe vegetables, such as carrot or green beans, as low-calorie treats, offered in moderation.",
          "Be careful with fatty scraps, since rich food can trigger pancreatitis, a painful and potentially serious condition. Several common foods are also toxic to dogs, including chocolate, grapes, raisins, onions, and anything containing xylitol, so check before sharing anything from your plate.",
        ],
      },
      {
        heading: "Choosing a food",
        paragraphs: [
          "The most important thing to check is that the food is labeled complete and balanced for your dog's life stage, meeting a recognized nutritional standard, such as those set by AAFCO in the United States or FEDIAF in Europe. That statement means the food can be fed as the main diet without supplements.",
          "Marketing words such as natural, premium, or holistic are not a reliable guide to quality, and neither is price. The World Small Animal Veterinary Association suggests looking at the company behind the food: whether it employs a qualified nutritionist, tests its products, and can answer your questions about quality control. You can ask the manufacturer directly, and your vet is a good source of advice.",
          "A few diet types deserve extra care. Grain-free and legume-heavy diets have been under investigation in the United States for a possible link to a type of heart disease in dogs, and many vets recommend not choosing them by default unless there is a medical reason. Raw diets are discouraged by several veterinary organizations because of the risk of bacteria such as Salmonella to both dogs and the people who handle the food. Homemade diets can work, but only when formulated by a veterinary nutritionist, because many recipes found online are missing essential nutrients.",
        ],
      },
      {
        heading: "Changing foods safely",
        paragraphs: [
          "Switching foods suddenly is a common cause of upset stomachs. Introduce a new food gradually, over seven to ten days, and more slowly for dogs with sensitive digestion.",
          "If your dog develops vomiting or diarrhea during the change, slow down and go back a step. If it lasts more than a day, or your dog seems unwell, contact your vet.",
        ],
        lists: [
          {
            ordered: true,
            items: [
              "Days 1 to 3: about a quarter new food mixed with three quarters of the old",
              "Days 4 to 6: half and half",
              "Days 7 to 9: three quarters new food and one quarter old",
              "Day 10: all new food, if the stool has stayed normal",
            ],
          },
        ],
      },
      {
        heading: "Meal schedules, bowls, and routines",
        paragraphs: [
          "Scheduled meals are generally better than leaving food out all day. They let you see at a glance how well your dog is eating, which is often the first sign of illness, they make house training easier, and they make portion control possible. Offer the meal, give your dog fifteen to twenty minutes, then pick up what is left.",
          "Dogs that gulp their food can benefit from a slow-feeder bowl or a puzzle toy, which slows eating and provides mental work. In homes with more than one dog, feed them separately so that no dog is guarding a bowl or finishing someone else's meal. Keep fresh water available at all times, wash bowls regularly, and keep mealtimes calm, particularly for deep-chested breeds.",
        ],
      },
      {
        heading: "Helping an overweight dog lose weight safely",
        paragraphs: [
          "If your dog is overweight, start with your vet. They can rule out medical causes such as an underactive thyroid, set a realistic target weight, and design a plan that supplies enough nutrients while reducing calories. Crash diets are dangerous, and simply cutting the portion of a regular food can leave a dog short of nutrients, which is why weight-management or prescription diets are often used.",
          "Be patient and be consistent. Dogs learn to beg, and a family member who gives in undoes everyone else's effort. Once your dog reaches the target weight, your vet can help you set a maintenance portion so the weight stays off.",
        ],
        lists: [
          {
            title: "A safe approach",
            items: [
              "Weigh your dog and agree a target weight with your vet",
              "Measure every meal by weight, and count all treats",
              "Replace high-calorie treats with small pieces of vegetables or part of the daily kibble",
              "Increase exercise gradually, with extra walks and gentle play, especially for dogs with sore joints",
              "Weigh every two weeks and track progress",
              "Expect steady, gradual loss; vets often aim for something in the region of 1 to 2 percent of body weight per week",
            ],
          },
        ],
      },
      {
        heading: "If your dog is underweight or a fussy eater",
        paragraphs: [
          "A dog whose ribs, spine, and hip bones are clearly visible, or who has lost weight without a change in diet, should see a vet. Intestinal parasites, dental pain, and many illnesses can cause weight loss or poor appetite, and these need treatment rather than more food. Once medical causes are ruled out, your vet may suggest a more calorie-dense food or additional meals.",
          "For healthy dogs who are simply fussy, consistency usually works better than variety. Stop offering extras and scraps, feed at set times, pick up uneaten food after fifteen to twenty minutes, and avoid swapping foods every time your dog turns up its nose. Warming wet food slightly can improve its aroma. If your dog's appetite changes suddenly, that is a reason to call the vet.",
        ],
      },
      {
        heading: "Feeding in hot and humid weather",
        paragraphs: [
          "Many dogs eat less when it is hot, which is normal as long as they remain bright and active and keep drinking. Feed in the cooler parts of the day, such as early morning and evening, and keep exercise away from mealtimes, especially for deep-chested breeds.",
          "Heat and humidity also affect the food itself. Wet or moistened food can spoil within a few hours and attract flies, so do not leave it sitting out. Store dry food in a cool, dry place in an airtight container, away from direct sun, and buy bag sizes you will finish within a few weeks, since the fats in kibble can turn rancid and damp food can grow mold. Check the expiry date, and throw away food that smells sour or looks clumped or moldy. Always keep plenty of cool, fresh water available.",
        ],
      },
      {
        heading: "Signs the food is not agreeing with your dog",
        paragraphs: [
          "Some changes are normal during a food switch, but persistent problems are worth investigating. Watch for the signs below.",
          "True food allergies are less common than people think, and environmental allergies to things like pollen and dust mites are more frequent causes of itching. If a food problem is suspected, vets usually use a carefully managed elimination diet lasting several weeks rather than trying one food after another. Changing diets at random can make it harder to find the cause.",
        ],
        lists: [
          {
            items: [
              "Ongoing soft stools, diarrhea, or constipation",
              "Frequent vomiting or regurgitation",
              "Excessive gas or a bloated belly",
              "Itchy skin, recurring ear infections, or paw licking",
              "A dull, flaky coat",
              "Low energy, or weight that keeps going up or down",
            ],
          },
        ],
      },
      {
        heading: "When to talk to your vet",
        paragraphs: [
          "Your vet knows your dog's history and can weigh them, score body condition, and recommend a food and portion that fits. If you are unsure, ask at the next visit, and ask for a target weight to write down. Contact your vet sooner if you notice any of the following.",
        ],
        lists: [
          {
            items: [
              "Your dog refuses food for more than a day, or sooner for puppies, small dogs, and dogs with health conditions",
              "Vomiting or diarrhea lasts more than a day, or comes with lethargy, blood, or severe pain",
              "Your dog is losing or gaining weight without an obvious reason",
              "Your dog is drinking and urinating much more than usual",
              "You notice a swollen, hard belly or unproductive retching, which can be an emergency",
              "Your dog is eating non-food items, or having trouble chewing or swallowing",
              "Your dog is pregnant, nursing, or has a medical condition that affects diet",
            ],
          },
        ],
      },
      {
        heading: "A simple feeding plan you can start today",
        paragraphs: [
          "Feeding well is not about perfection. It is about paying attention, measuring, and adjusting. A lean, active dog with a healthy appetite is usually a sign that you are getting it right.",
        ],
        lists: [
          {
            ordered: true,
            items: [
              "Weigh your dog and check body condition with your hands",
              "Choose a complete and balanced food that suits your dog's life stage and size",
              "Work out the daily amount using the label, and weigh it each morning",
              "Split it into two meals, and include treats in the total",
              "Re-check weight and body condition every two to four weeks, and adjust by about 10 percent if needed",
              "Review the plan with your vet at every checkup, and whenever your dog's health or lifestyle changes",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I feed my dog once a day?",
        a: "Some adult dogs do fine on one meal, but most do better on two smaller meals. Large and deep-chested breeds in particular are often better off with at least two. Ask your vet what suits your dog.",
      },
      {
        q: "Should I leave food out all day?",
        a: "Scheduled meals are generally better. They make it easier to spot appetite changes, control portions, and house train. Pick up uneaten food after fifteen to twenty minutes.",
      },
      {
        q: "Is it okay to feed my dog human food?",
        a: "Some plain foods, such as carrot or cooked plain chicken, are fine in small amounts, but several common foods are toxic to dogs and fatty scraps can cause illness. Keep extras small and count them in the daily total.",
      },
      {
        q: "How do I know if my dog is getting enough food?",
        a: "Check body condition rather than just looking at the bowl. You should be able to feel the ribs under a thin layer of fat and see a waist from above. A healthy appetite and steady energy are good signs too.",
      },
      {
        q: "Do puppies need special food?",
        a: "Yes. Puppy formulas are designed for growth, and large and giant breeds benefit from large-breed puppy formulas that support steady growth. Ask your vet when to switch to an adult diet.",
      },
    ],
  },
];