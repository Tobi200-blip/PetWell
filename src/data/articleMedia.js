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

  "positive-reinforcement-training": {
    hero: {
      file: "training-hero",
      alt: "A dog sitting and looking up at its owner during training",
    },
    sections: {
      "Essential skill 2: sit and down": {
        file: "training-sit",
        alt: "A dog sitting while its owner holds a treat",
        caption: "Lure the position with a treat, then mark and reward the moment your dog is in place.",
      },
      "Puppies: early learning and socialization": {
        file: "training-puppy",
        alt: "A puppy being trained with a treat",
        caption: "Keep puppy sessions short, gentle, and full of rewards.",
      },
    },
  },

  "foods-dogs-should-never-eat": {
    hero: {
      file: "foods-hero",
      alt: "A dog looking at food on a kitchen counter",
    },
    sections: {
      "Keeping the kitchen safe": {
        file: "foods-kitchen",
        alt: "A dog sitting politely in a kitchen",
        caption: "Teach your dog to settle on a mat while you prepare food.",
      },
      "Safe treats and foods your dog can enjoy": {
        file: "foods-safe",
        alt: "A dog eating a small, safe treat",
        caption: "Plain, dog-safe treats given in small amounts are the safest choice.",
      },
    },
  },

  "puppy-proofing-your-home": {
    hero: {
      file: "puppyproofing-hero",
      alt: "A puppy exploring a living room floor",
    },
    sections: {
      "Give your puppy safe things to chew": {
        file: "puppyproofing-chew",
        alt: "A puppy chewing a toy",
        caption: "Offer plenty of safe chew toys so your puppy has something better to chew.",
      },
      "Garden and outdoor areas": {
        file: "puppyproofing-garden",
        alt: "A puppy exploring a fenced garden",
        caption: "Check fences, gates, and plants before your puppy goes outside.",
      },
    },
  },

  "dog-dental-care": {
    hero: {
      file: "dental-hero",
      alt: "A dog showing its clean teeth",
    },
    sections: {
      "How to brush your dog's teeth": {
        file: "dental-brushing",
        alt: "A person brushing a dog's teeth",
        caption: "Use a toothbrush and toothpaste made for dogs, and go slowly.",
      },
      "Chews, toys, and diets": {
        file: "dental-chews",
        alt: "A dog chewing a dental chew",
        caption: "Dental chews can help, but they do not replace brushing.",
      },
    },
  },

  "how-to-house-train-a-puppy": {
    hero: {
      file: "housetraining-hero",
      alt: "A puppy sitting on grass outdoors",
    },
    sections: {
      "The basic routine": {
        file: "housetraining-outside",
        alt: "A puppy waiting outside on grass",
        caption: "Take your puppy to the same spot, wait quietly, and reward straight away.",
      },
      "Using a crate": {
        file: "housetraining-crate",
        alt: "A puppy resting in a crate",
        caption: "Introduce the crate with treats so it becomes a comfortable den.",
      },
    },
  },
};
