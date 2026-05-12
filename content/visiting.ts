export type Phrase = {
  chewa: string;
  pronunciation: string;
  english: string;
};

export const phrases: Phrase[] = [
  {
    chewa: 'Muli bwanji?',
    pronunciation: 'moo-lee BWAHN-jee',
    english: 'How are you?',
  },
  {
    chewa: 'Ndili bwino, kaya inu?',
    pronunciation: 'n-DEE-lee BWEE-noh, KYE-ah ee-NOO',
    english: 'I’m well, and you?',
  },
  {
    chewa: 'Zikomo',
    pronunciation: 'zee-KOH-moh',
    english: 'Thank you / hello — it does a lot of work',
  },
  {
    chewa: 'Zikomo kwambiri',
    pronunciation: 'zee-KOH-moh kwahm-BEE-ree',
    english: 'Thank you very much',
  },
  {
    chewa: 'Tionana',
    pronunciation: 'tee-oh-NAH-nah',
    english: 'Until we meet again',
  },
];

export const quickPhrases: Phrase[] = [phrases[0], phrases[2]];

export const visiting = {
  kicker: 'Before the doorstep',
  title: 'As a guest.',

  sections: [
    {
      heading: 'You are the guest.',
      body: 'Our customers are excited to welcome you — many will have looked forward to your visit for days. Feel comfortable being invited in, and comfortable taking the chair you are offered.',
    },
    {
      heading: 'The greeting.',
      body: 'Greetings matter here. Shake with the right hand, with your left hand resting lightly on your right forearm — a small gesture of respect recognised across Malawi. Take a moment to greet each person in the room, starting with the eldest. A handshake here is unhurried.',
    },
    {
      heading: 'Ask before the camera.',
      body: 'Always ask before you take a photo — a phone gesture and a smile is enough.',
    },
  ],
};
