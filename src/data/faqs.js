// Site-wide FAQs. Only state things that are true today. Update as features go live.
export const faqCategories = [
  {
    id: 'about',
    title: 'About AllPetsLoft',
    items: [
      {
        q: 'What is AllPetsLoft?',
        a: 'AllPetsLoft is a free place to learn about pets before and after you bring one home. You can read breed guides, browse our learning hub of pet care articles, and look through pet insurance and services information as it grows.',
        link: { to: '/about', label: 'More about us' },
      },
      {
        q: 'Which pets do you cover?',
        a: 'Dog and cat breed guides are live. We plan to add more pet types over time, and we will announce them on the site as they are ready.',
      },
      {
        q: 'Is AllPetsLoft only for one country?',
        a: 'No. The site is written for pet owners anywhere in the world. Rules, costs and available services differ from place to place, so always check local requirements with your own vet or authorities.',
      },
    ],
  },
  {
    id: 'breeds',
    title: 'Breed guides',
    items: [
      {
        q: 'What is in a breed guide?',
        a: 'Each guide covers the breed’s history, appearance, temperament, who it suits, daily care, feeding, training, grooming, common health conditions and life stages, plus a short list of frequently asked questions. Cat guides currently show the key facts, with full guides being added breed by breed.',
        link: { to: '/breeds', label: 'Browse dog breeds' },
      },
      {
        q: 'Can I trust that every dog of a breed will match its guide?',
        a: 'No. A guide describes what is typical for a breed, but every animal is an individual. Temperament, size and health depend on genetics, upbringing and environment, and mixed-breed pets can differ a lot.',
      },
      {
        q: 'The photo looks like the wrong breed. What should I do?',
        a: 'Please tell us through the contact page with the breed name and we will replace it. Photos are chosen to illustrate a breed, and we want them to be accurate.',
        link: { to: '/contact', label: 'Contact us' },
      },
      {
        q: 'Where do your photos come from?',
        a: 'Most photos are free-to-use images shared by photographers on Pixabay. You can read about this, and how to request a credit or a removal, on our image credits page.',
        link: { to: '/image-credits', label: 'Image credits' },
      },
    ],
  },
  {
    id: 'health',
    title: 'Health and safety',
    items: [
      {
        q: 'Is the information on AllPetsLoft veterinary advice?',
        a: 'No. Our guides and articles are general information to help you learn. They are not a diagnosis and not a substitute for a licensed veterinarian who can examine your pet.',
      },
      {
        q: 'Have your guides been reviewed by a vet?',
        a: 'Not yet. We do not show a “vet-reviewed” label on anything that has not been reviewed. If that changes, the review will be shown clearly on the guide itself.',
      },
      {
        q: 'My pet seems unwell. What should I do?',
        a: 'Contact a veterinarian or your nearest emergency animal clinic. Do not wait for a website to confirm a problem, especially for breathing trouble, collapse, poisoning, severe pain, or not eating or drinking.',
      },
      {
        q: 'Which foods are dangerous for dogs?',
        a: 'Several common foods can be harmful, including chocolate, grapes and raisins, onions and garlic, and anything sweetened with xylitol. Our learning hub has a full guide to foods dogs should never eat.',
        link: { to: '/articles/foods-dogs-should-never-eat', label: 'Read the guide' },
      },
    ],
  },
  {
    id: 'hub',
    title: 'Learning hub',
    items: [
      {
        q: 'What can I read in the learning hub?',
        a: 'Pet care articles on topics such as training, feeding, house training, separation anxiety and pet insurance. We keep adding new guides.',
        link: { to: '/articles', label: 'Open the learning hub' },
      },
      {
        q: 'Do you have a guide for new puppy owners?',
        a: 'Yes, there are guides on house training a puppy, positive reinforcement training and puppy-proofing your home. Start with house training if your puppy is new to your home.',
        link: { to: '/articles/how-to-house-train-a-puppy', label: 'House training guide' },
      },
    ],
  },
  {
    id: 'services',
    title: 'Insurance and pet services',
    items: [
      {
        q: 'Can I buy pet insurance on AllPetsLoft?',
        a: 'Not yet. Insurance is coming soon. For now you can read how pet insurance works so you know what to look for when you compare policies.',
        link: { to: '/insurance', label: 'Pet insurance' },
      },
      {
        q: 'Can I find vets, groomers or trainers near me?',
        a: 'Local listings are coming soon. We are waiting to include real providers rather than showing placeholder listings.',
        link: { to: '/services', label: 'Pet services' },
      },
      {
        q: 'I run a pet business. Can I be listed?',
        a: 'We would like to hear from you. Send us a message with your business details and the area you serve.',
        link: { to: '/contact', label: 'Get in touch' },
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact and privacy',
    items: [
      {
        q: 'How can I contact AllPetsLoft?',
        a: 'Use the contact page for questions, corrections, feedback or partnership enquiries.',
        link: { to: '/contact', label: 'Contact us' },
      },
      {
        q: 'What happens to my personal information?',
        a: 'Our privacy policy explains what we collect and how it is used. Please read it if you plan to send us a message.',
        link: { to: '/privacy', label: 'Privacy policy' },
      },
    ],
  },
];
