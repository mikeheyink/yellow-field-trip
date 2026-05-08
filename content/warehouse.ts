import type { Warehouse } from './types';

export const warehouse: Warehouse = {
  slug: 'warehouse',
  title: 'The Yellow Warehouse',
  role: 'warehouse',
  location: 'Area 28, Lilongwe — the CDC',
  hero: {
    quote: 'Where every Yellow unit begins, returns, and begins again.',
  },
  stats: [
    { label: 'Function', value: 'Central Distribution Centre' },
    { label: 'Cycle', value: 'Repo → Refurb → Resale' },
    { label: 'Houses', value: 'Testing, workshop, e-waste' },
    { label: 'Led by', value: 'Tionge, Stock Pillar Head' },
  ],
  story: [
    'This is Yellow’s Central Distribution Centre in Malawi — a key part of how we sustain access for our customers.',
    'Beyond dispatching stock to agents, this is where we receive returned units, assess and refurbish them, and prepare them for reintroduction into the market.',
    'It also houses our testing, workshop, and e-waste processes, which help us maintain quality, manage costs, and operate responsibly.',
    'Tionge, our Stock Pillar Head, together with her team Dan, Precious, Kondwani, Prince and Kelvin, will walk you through how this works in practice.',
  ],
  team: ['Tionge', 'Dan', 'Precious', 'Kondwani', 'Prince', 'Kelvin'],
  promptForVisitors:
    'Ask Tionge what happens to a unit that comes back broken — the journey from repo to resale tells you most of what you need to know about the model.',
  photo: '/images/warehouse-team.png',
};
