import type { Agent } from './types';

export const agents: Agent[] = [
  {
    slug: 'stanford',
    firstName: 'Stanford',
    fullName: 'Stanford Keara',
    role: 'agent',
    location: 'TA Chitukula, Lilongwe',
    hero: { stat: { value: '1,186', label: 'customers since 2022' } },
    stats: [
      { label: 'Years with Yellow', value: '3 years' },
      { label: 'Other income', value: 'Security guard, farming' },
    ],
    story: [
      'Stanford joined Yellow in 2022 and has since built a customer base of over 1,000, largely through referrals — after an initially challenging start.',
      'Through his work with Yellow, he has improved his financial stability, enabling him to buy household assets like a sofa set and a motorbike, while consistently paying rent and school fees for his two children.',
      'He has also ventured into maize farming, using his weekly commissions to invest in fertiliser and other inputs. The steady income has allowed him to better plan his finances and move away from informal loans. He is now debt-free and able to support both his household and extended family.',
    ],
    promptForVisitors:
      'Ask Stanford how the first year felt — and what changed when the referrals started coming.',
    photo: '/images/agent-stanford.jpg',
  },
  {
    slug: 'lawrence',
    firstName: 'Lawrence',
    fullName: 'Lawrence Phiri',
    role: 'agent',
    location: 'TA Malili, Lilongwe Southwest',
    hero: { stat: { value: '747', label: 'customers over 4 years' } },
    stats: [
      { label: 'Years with Yellow', value: '4 years' },
      { label: 'Other income', value: 'Poultry, stationery shop' },
    ],
    story: [
      'Lawrence is a Yellow agent based in TA Malili, Lilongwe Southwest. Since joining Yellow, he has seen a significant improvement in his livelihood.',
      'Through his work, he has strengthened his financial stability and is better able to support his family and relatives. He has diversified his income by starting a poultry business and opening a stationery shop, creating additional and more reliable income streams. Farming remains an important part of his life, and his productivity has improved.',
      'Beyond financial gains, Lawrence has built strong relationships within his community, earning trust by helping customers access reliable energy and improve their daily lives.',
    ],
    promptForVisitors:
      'Ask Lawrence what he started first — the poultry, the shop, or the farming — and how Yellow income made each one possible.',
    photo: '/images/agent-lawrence.jpg',
  },
];

export const agentBySlug = (slug: string) => agents.find((a) => a.slug === slug);
