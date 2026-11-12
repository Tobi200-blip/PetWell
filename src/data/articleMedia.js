// Which photo appears where in each long article. Keep it to 3 images per article:
// one hero (the top banner) and up to two section photos.
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
      "How to check your dog's body condition": {
        file: "feeding-body-condition",
        alt: "A healthy, lean dog standing in profile",
        caption: "Feel the ribs and look for a waist: body condition tells you more than the scale.",
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
      "How to compare policies": {
        file: "insurance-compare",
        alt: "A person comparing documents at a laptop",
        caption: "Compare policies on the same limits and test them with realistic scenarios.",
      },
    },
  },

  "puppy-vaccination-basics": {
    hero: {
      file: "vaccination-hero",
      alt: "A young puppy at a veterinary clinic",
    },
    sections: {
      "A typical puppy vaccination schedule": {
        file: "vaccination-vet",
        alt: "A veterinarian holding a puppy",
        caption: "Your vet sets the schedule, based on your puppy's age, health, and local risks.",
      },
      "Socializing your puppy before the series is complete": {
        file: "vaccination-social",
        alt: "A puppy meeting a person at home",
        caption: "Safe, short, positive experiences at home are an important part of early socialization.",
      },
    },
  },

  "grooming-your-dog-at-home": {
    hero: {
      file: "grooming-hero",
      alt: "A dog being brushed",
    },
    sections: {
      "Brushing: tools, technique, and how often": {
        file: "grooming-brushing",
        alt: "A person brushing a dog's coat",
        caption: "Brush in thin layers, right down to the skin, so that no tangles hide underneath.",
      },
      "Bath time: how often and how to do it": {
        file: "grooming-bath",
        alt: "A dog being bathed",
        caption: "Use lukewarm water and a shampoo made for dogs, and rinse until the water runs clear.",
      },
    },
  },
};