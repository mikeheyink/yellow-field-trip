import type { Chapter } from './types';

export const chapters: Chapter[] = [
  {
    number: '01',
    slug: 'mayas-story',
    title: "Maya's Story",
    hero: { stat: '< 1%', statLabel: 'households in Malawi with solar in 2018' },
    body: [
      'Growing up in East Africa, Maya Khonje-Stewart witnessed energy poverty first-hand. In 2012, she founded an NGO to promote solar in Malawi — but awareness alone could not solve the problem. She wanted to transform daily life for Malawian households.',
      "Then she met Mike, a South African entrepreneur who believed in commercial solutions to Africa's energy and connectivity challenges.",
      'Established PAYGO Solar companies had written off Malawi as too poor for the model to work. But Maya and Mike saw something others missed: low-income households were already spending heavily on dirty, unreliable energy. If Yellow could operate lean enough, solar could be both affordable and commercially viable.',
      'In March 2018, Mike raised the capital, Maya readied the team, and Yellow began work in Malawi.',
    ],
    photo: '/images/chapter-maya.png',
  },
  {
    number: '02',
    slug: 'the-launch',
    title: 'March 2018: The Launch',
    hero: { stat: '4M', statLabel: 'Malawian households on candles and battery torches' },
    body: [
      'As social entrepreneurs, the prospect of making life better for these customers was exciting for Mike and Maya. The mission was clear: bring affordable, reliable power to households living without electricity.',
      'But the launch was harder than expected. Customers hesitated to pay deposits for small solar systems. Rural operations were chaotic. Execution was inconsistent. And early credit performance fell well below target.',
      'The opportunity was real — but the model was not yet working. Yellow needed to innovate.',
    ],
    bullets: [
      'Walking miles to charge feature phones',
      'Solar penetration close to 0%',
      'Malawi: the lowest-income country in the world',
    ],
    photo: '/images/chapter-launch.png',
  },
  {
    number: '03',
    slug: 'the-digital-breakthrough',
    title: 'The Digital Breakthrough',
    hero: { stat: '40 in 6 months → 40 / day' },
    body: [
      'Yellow’s breakthrough came from digitising the operating model.',
      'Inspired by tech-enabled platforms, Yellow turned manual processes into digital workflows — from agent management and customer onboarding to payments, service, and credit monitoring.',
      'Automation lowered costs, improved execution, and helped Yellow find the right price point. Sales grew from 40 in six months to 40 per day. Service improved, and the agent-led credit model drove near-universal repayment.',
    ],
    photo: '/images/chapter-digital.png',
  },
  {
    number: '04',
    slug: 'scale',
    title: 'Scale',
    hero: { stat: '1 in 9', statLabel: 'households served by Yellow' },
    body: [
      'When the innovation came, so did the customers. In five years Yellow electrified 350,000 households — equivalent to all connections from the national grid.',
    ],
    bullets: [
      'NPS 83 — exceptional customer satisfaction by 2022',
      '#1 brand — a household name in rural Malawi by 2022',
      'Profitable within one year of operating',
    ],
    photo: '/images/chapter-acumen.png',
  },
  {
    number: '05',
    slug: 'the-2022-crisis',
    title: 'The 2022 Crisis',
    hero: { stat: '2022 – 2025', statLabel: 'capital evaporated from emerging markets' },
    body: [
      'February 2022: Russia invades Ukraine. March 2022: the Fed begins raising interest rates. From 2022 to 2024, emerging-market capital dries up and the Kwacha depreciates sharply. By 2025, lenders stop taking Kwacha risk altogether.',
      'Yellow had hedged its Kwacha exposure, but by 2025 lenders were no longer willing to take local currency risk. Without working capital, the Malawi business could not order stock. Agents soon ran out of products to sell.',
      'A business that had proven its model now faced a liquidity crisis.',
    ],
    photo: '/images/chapter-crisis.jpg',
  },
  {
    number: '06',
    slug: 'acumen-steps-in',
    title: 'Acumen Steps In',
    hero: { stat: '1,000 / 100+ / 200', statLabel: 'agents kept active · team retained · new customers per day' },
    body: [
      'When capital markets collapsed, Acumen delivered on its mandate.',
      'At a moment when no other financial partner would take the risk, Acumen provided a timely debt facility, followed by grant funding to support e-waste recycling.',
      'That support helped Yellow keep 1,000 agents active, retain more than 100 team members, and protect the health of its credit portfolio.',
      'Today, Yellow Malawi is growing again — serving around 200 new customers per day and preparing to deliver against the World Bank’s energy-access programme targets.',
    ],
    photo: '/images/acumen-logo.png',
  },
  {
    number: '07',
    slug: 'yellows-future',
    title: "Yellow's Future",
    hero: { stat: '10M', statLabel: 'customers by 2030' },
    body: [
      'What began as Maya’s dream to bring clean, affordable energy to Malawian households has become a diversified, commercially sustainable business.',
      'By 2030, Yellow aims to serve 10 million customers — and build the commercial engine that makes life better for everyday African households.',
      'This quarter, Yellow will serve its one-millionth customer. It now operates across seven African markets and, from an initial $3 million equity base, has funded $80 million in solar and smartphone assets — entering its next phase of scale.',
      'Now becoming AI-native, Yellow is using technology to push prices down and service levels up.',
    ],
    bullets: [
      'Customer #1,000,000 — to be served this quarter',
      '7 African markets — diversified and profitable operations',
      '$3M equity → $80M funded life-changing assets',
    ],
    photo: '/images/chapter-future.jpg',
  },
];

export const chapterBySlug = (slug: string) => chapters.find((c) => c.slug === slug);
