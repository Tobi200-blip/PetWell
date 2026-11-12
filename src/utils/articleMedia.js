// Which photo appears where in each long article.
// "file" is the image's file name in src/assets/articles/, without the extension.
// Section keys must match the section heading exactly.

export const articleMedia = {
  "how-much-to-feed-your-dog": {
    hero: {
      file: "feeding-hero",
      alt: "A dog eating from a food bowl",
    },
    sections: {
      "Feeding puppies": {
        file: "feeding-puppy",
        alt: "A puppy eating from a bowl",
        caption: "Puppies need small, frequent meals of a food made for growth.",
      },
      "Feeding senior dogs": {
        file: "feeding-senior",
        alt: "An older dog with a graying muzzle resting at home",
        caption: "Older dogs often need adjusted portions and more frequent checkups.",
      },
      "How to check your dog's body condition": {
        file: "feeding-body-condition",
        alt: "A healthy, lean dog standing in profile",
        caption: "Feel the ribs and look for a waist: body condition tells you more than the scale.",
      },
      "How to measure food properly": {
        file: "feeding-scale",
        alt: "Dog food being measured out",
        caption: "Weighing food is more accurate than using a scoop.",
      },
      "Treats, chews, and table scraps": {
        file: "feeding-treats",
        alt: "A dog taking a treat during training",
        caption: "Count treats as part of the daily total.",
      },
    },
  },

  "choosing-pet-insurance": {
    hero: {
      file: "insurance-hero",
      alt: "A person hugging their dog",
    },
    sections: {
      "What pet insurance is, and what it is not": {
        file: "insurance-vet",
        alt: "A veterinarian examining a dog",
        caption: "Insurance helps with the cost of unexpected treatment. It does not replace regular veterinary care.",
      },
      "How a claim usually works": {
        file: "insurance-claim",
        alt: "A person reviewing paperwork at a desk",
        caption: "Keep invoices and vet notes together, since claims go faster with complete paperwork.",
      },
      "Why starting young helps": {
        file: "insurance-puppy",
        alt: "A healthy puppy",
        caption: "Young, healthy pets are usually cheaper to insure and have less history that could be excluded.",
      },
      "How to compare policies": {
        file: "insurance-compare",
        alt: "A person comparing documents at a laptop",
        caption: "Compare policies on the same limits and test them with realistic scenarios.",
      },
      "If pet insurance is not available, or not right for you": {
        file: "insurance-savings",
        alt: "A piggy bank with coins",
        caption: "A dedicated pet fund can help cover emergencies, as long as you start before you need it.",
      },
    },
  },
};