import type { Customer } from './types';

export const customers: Customer[] = [
  {
    slug: 'dezilata',
    firstName: 'Dezilata',
    fullName: 'Dezilata',
    role: 'customer',
    location: 'TA Chitukula',
    agentSlug: 'stanford',
    hero: {
      quote:
        'I now start my work as early as 3 AM and finish in time to sell the same day.',
    },
    stats: [
      { label: 'Household', value: 'Family of 4' },
      { label: 'Yellow customer since', value: 'April 2025' },
      { label: 'Product', value: 'BioLite 1550' },
      { label: 'Income', value: 'Small-scale brewing' },
    ],
    story: [
      'Dezilata is a small-scale entrepreneur supporting a family of four. Before, her family relied on a small solar torch for lighting — unreliable, and it eventually broke while her son was preparing for his Form 4 exams. That pushed her to invest in a proper solar system.',
      'With reliable lighting, her son was able to study effectively, perform well in his exams, and has now been selected to attend Chancellor College.',
      'Dezilata runs a kachasu brewing business. She used to struggle with poor lighting — finishing late at night and losing valuable selling time. Since getting the solar unit, she now starts work as early as 3 AM and completes production in time to sell the same day, significantly improving her income.',
      'The added stability has allowed her to rent farmland for maize and consistently pay school fees for her children, all while running her household independently.',
    ],
    promptForVisitors:
      'Ask Dezilata about her son and Chancellor College — and what an extra two hours of pre-dawn work means for the family.',
    photo: '/images/customer-dezilata.png',
  },
  {
    slug: 'zakeyu',
    firstName: 'Zakeyu',
    fullName: 'Zakeyu',
    role: 'customer',
    location: 'TA Chitukula',
    agentSlug: 'stanford',
    hero: {
      stat: {
        value: 'MWK 18,000',
        label: 'every 3 months on batteries — gone',
      },
    },
    stats: [
      { label: 'Household', value: 'Father of 3' },
      { label: 'Yellow customer since', value: 'January 2025' },
      { label: 'Product', value: 'BioLite 625' },
      { label: 'Income', value: 'Bicycle taxi' },
    ],
    story: [
      'Zakeyu is a bicycle taxi operator and father of three. He used to rely on a car battery charged by a small solar panel for lighting. The setup was unreliable, often did not last through the night, and required battery replacement every three months at a cost of MWK 18,000–20,000.',
      'Since acquiring a solar unit in January 2025, he has reliable lighting throughout the night and can charge his phone at home, all at a predictable monthly cost.',
      'The change has improved household stability — his child in Standard 5 can now study longer, and his wife can carry out chores more efficiently.',
    ],
    promptForVisitors:
      'Ask Zakeyu what the old car-battery setup was actually like — and what predictable monthly cost has freed up for the family.',
    photo: '/images/customer-zakeyu.png',
  },
  {
    slug: 'hendrix',
    firstName: 'Hendrix',
    fullName: 'Hendrix',
    role: 'customer',
    location: 'TA Chitukula',
    agentSlug: 'stanford',
    hero: {
      stat: { value: 'Paid off', label: 'system fully owned' },
    },
    stats: [
      { label: 'Household', value: 'Father of 2' },
      { label: 'Yellow customer since', value: 'August 2022' },
      { label: 'Product', value: 'BioLite 620' },
      { label: 'Income', value: 'Security guard (G4S)' },
    ],
    story: [
      'Hendrix is a G4S employee and father of two. He used to rely on candles for lighting, spending around MWK 7,000 per month on candles and phone charging — for poor and unreliable light.',
      'Since acquiring a solar unit in August 2022, which he has now fully paid off, his household has bright, reliable lighting and convenient phone charging at home.',
      'The impact on his children’s education has been clear — especially his daughter in Standard 5, who can now study longer and more effectively. Household efficiency has improved and the ongoing lighting costs are gone.',
    ],
    promptForVisitors:
      'Ask Hendrix what it felt like to make the final payment — and what owning the system outright has meant since.',
    photo: '/images/customer-hendrix.png',
  },
  {
    slug: 'memory',
    firstName: 'Memory',
    fullName: 'Memory',
    role: 'customer',
    location: 'TA Malili',
    agentSlug: 'lawrence',
    hero: {
      quote: 'My children can now study at night.',
    },
    stats: [
      { label: 'Household', value: 'Family of 7' },
      { label: 'Yellow customer since', value: 'January 2024' },
      { label: 'Product', value: 'BioLite 620' },
      { label: 'Income', value: 'Farmer (tomato)' },
    ],
    story: [
      'Memory is a Yellow customer with a household of seven. Before solar, her family relied on candles and battery-powered torches — costly and unreliable. Batteries cost around MWK 300 each and lasted only a few days, making consistent lighting difficult.',
      'Since switching to solar, her family has reliable lighting every evening without the ongoing expense. While her tomato business does not directly depend on the system, the savings have improved overall household stability.',
      'The biggest impact has been on her children’s education — they can now study at night, with one recently progressing to secondary school.',
    ],
    promptForVisitors:
      'Ask Memory about the child who just made it to secondary school — and what study time looked like before the solar unit.',
  },
  {
    slug: 'john',
    firstName: 'John',
    fullName: 'John',
    role: 'customer',
    location: 'TA Malili',
    agentSlug: 'lawrence',
    hero: {
      stat: { value: 'Longer hours', label: 'in the shop, after dark' },
    },
    stats: [
      { label: 'Household', value: 'Family of 6' },
      { label: 'Yellow customer since', value: 'February 2024' },
      { label: 'Product', value: 'Spark Start' },
      { label: 'Income', value: 'Shop owner' },
    ],
    story: [
      'John is a Yellow customer with a household of six. Before solar, he relied on batteries for lighting and phone charging, spending around MWK 10,000 regularly on an unreliable solution.',
      'Since switching to solar, his family has consistent, dependable energy — eliminating battery costs and improving daily life. The impact is especially visible in his shop, where better lighting allows him to operate longer hours and serve customers more effectively.',
      'At home, his children can now study comfortably at night, supporting their education.',
    ],
    promptForVisitors:
      'Ask John what hour his shop now stays open until — and what changed for customers when he stopped closing at sunset.',
    photo: '/images/customer-john.png',
  },
];

export const customerBySlug = (slug: string) =>
  customers.find((c) => c.slug === slug);
