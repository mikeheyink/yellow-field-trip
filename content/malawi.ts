export type MalawiSection = {
  number: string;
  kicker: string;
  title: string;
  body: string[];
  image?: {
    src: string;
    alt: string;
    credit: string;
    fullBleed?: boolean;
  };
};

export const malawi = {
  headline: 'A country at the southern end of the rift.',
  intro:
    'Most people who fly into Lilongwe come for one of two reasons: the lake, or the people. Both are older than they look. What follows is a short walk through the place you have just landed in — five minutes, seven sections, four billion years of context lightly compressed.',

  hero: {
    src: '/images/malawi/lake-from-space.jpg',
    alt: 'Lake Malawi seen from orbit',
    credit: 'NASA / ISS Crew Earth Observations',
  },

  sections: [
    {
      number: '01',
      kicker: 'Geography',
      title: 'Born of the Rift.',
      body: [
        'Tens of millions of years ago, the African plate began to tear itself in two. The wound is still open. It runs from Ethiopia down through Kenya and Tanzania, and at its southern end it cradles a long, deep finger of water — Lake Malawi.',
        'Six hundred kilometres long, seven hundred metres deep, old enough to have grown its own evolution. More than a thousand species of cichlid fish live here and nowhere else on Earth. The country is the lake\'s western shore, made of the same geological act.',
      ],
      image: {
        src: '/images/malawi/rift-diagram.png',
        alt: 'The East African Rift Valley',
        credit: 'USGS',
      },
    },
    {
      number: '02',
      kicker: 'Hominids',
      title: 'Why the cradle was here.',
      body: [
        'The rift is what made us. As Africa dried, the valley stayed wet — lakes, rivers, fish, fruit, grass — but forced its hominids to keep adapting: forest one century, savanna the next, mountain the next valley over. Six thousand kilometres of laboratory. They learned to walk upright, to make tools, to grow a brain that could hold the future in mind.',
        'In 1991, on a hillside called Uraha in northern Malawi, a team lifted a 2.4-million-year-old jawbone out of the ground. It belonged to Homo rudolfensis — for a time, the oldest known human on Earth. We have been beginning here for a long time.',
      ],
      image: {
        src: '/images/malawi/hominid-fossil.jpg',
        alt: 'Homo rudolfensis fossil',
        credit: 'Wikimedia Commons',
      },
    },
    {
      number: '03',
      kicker: 'People',
      title: 'A name that means flames.',
      body: [
        'Five thousand years ago, in what is now the borderland of Cameroon and Nigeria, a group of farmers began to move. The Bantu expansion is the largest human migration in pre-modern history. Their descendants today — about 350 million people, roughly one in four Africans — speak languages descended from that single root.',
        'They reached the rift around two thousand years ago, bringing iron, pottery, and fire. By 1480 they had founded the Maravi confederacy. Malaŵí means flames in Chewa: iron kilns at night, or the lake at sunset. The country still carries the word.',
      ],
      image: {
        src: '/images/malawi/bantu-expansion.png',
        alt: 'Bantu expansion across Africa',
        credit: 'Wikimedia Commons',
      },
    },
    {
      number: '04',
      kicker: 'Colony',
      title: 'Nyasaland.',
      body: [
        'The British arrived with treaties and steamboats. In 1891 they declared a Central Africa Protectorate; in 1907 they renamed it Nyasaland — the land of the lake.',
        'From 1953 it was bound, against its will, into a federation with the Rhodesias. On 6 July 1964 it walked out as Malawi, with Hastings Kamuzu Banda as its first leader. He would hold it tightly — a one-party state until 1994, when Malawians voted, peacefully, for something else.',
      ],
      image: {
        src: '/images/malawi/nyasaland-historical.jpg',
        alt: 'Nyasaland, colonial era',
        credit: 'Library of Congress / public domain',
      },
    },
    {
      number: '05',
      kicker: 'Structure',
      title: 'The shape of the country.',
      body: [
        'Three regions. Twenty-eight districts. Around two hundred and fifty Traditional Authorities, each a chief with real power over customary land and law. Lilongwe is the capital; Blantyre is where the money moves. But rural Malawi — most of Malawi — is governed at the level of the chief, the village headman, the elder.',
        'Tradition is not a museum here. The Gule Wamkulu, the great masked dance of the Chewa, was inscribed on the UNESCO list of intangible heritage in 2008. It is also, this weekend, somewhere being danced.',
      ],
      image: {
        src: '/images/malawi/gule-wamkulu.jpg',
        alt: 'Gule Wamkulu masked dancers',
        credit: 'Wikimedia Commons',
        fullBleed: true,
      },
    },
    {
      number: '06',
      kicker: 'Today',
      title: 'What a generation can do.',
      body: [
        'A Malawian born today will live a quarter-century longer than one born in 1990, and is six times more likely to see their fifth birthday. Incomes remain low. The dignity does not.',
        'There are 22 million Malawians today. The UN\'s medium projection is 37 million by 2050, around 60 million by 2100. Half of Malawians are under eighteen. A young country, getting larger before it gets older.',
      ],
      image: {
        src: '/images/malawi/malawi-classroom.jpg',
        alt: 'A classroom in Malawi',
        credit: 'USAID Malawi',
      },
    },
    {
      number: '07',
      kicker: 'Tomorrow',
      title: 'Leapfrog.',
      body: [
        'The luckiest thing about being late is that you skip what didn\'t work. Malawi never built a continent of landlines; it went straight to mobile. It is not building a continent of bank branches; it is going straight to phones that hold money. It is not waiting for the grid to crawl out from Lilongwe; it is going straight to a panel on the roof.',
        'A child born this year in TA Chitukula will grow up with a solar light at her desk, a phone in her pocket, and a connection to every classroom and library on Earth. The frontier of what a young Malawian can learn, build, sell, and become is now a function of two things: light, and a signal.',
        'Yellow exists to install the first. The second is coming faster than anyone expected.',
      ],
      image: {
        src: '/images/malawi/malawi-solar-future.jpg',
        alt: 'A young Malawian with a phone and solar light',
        credit: 'USAID Malawi',
      },
    },
  ] as MalawiSection[],

  // Stats grid for §06 Today
  stats: [
    { label: 'Life expectancy', from: '44 yrs', to: '67 yrs', note: '1990 → today' },
    { label: 'Under-5 mortality', from: '234', to: '38', note: 'per 1,000 · 1992 → today' },
    { label: 'Adult literacy', from: '52%', to: '68%', note: '1998 → today' },
    { label: 'Population', from: '9 million', to: '22 million', note: '1990 → today' },
  ],
};
