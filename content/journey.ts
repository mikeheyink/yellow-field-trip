import type { JourneyItem } from './types';

export const tripDate = '14 May 2026';
export const tripCity = 'Lilongwe, Malawi';

export const journey: JourneyItem[] = [
  { kind: 'inter', title: 'Hotel briefing', time: '09:00', subtitle: 'Yellow overview · H2R model · Malawi context' },
  { kind: 'chapter', slug: 'mayas-story' },
  { kind: 'stop', slug: 'warehouse', time: '10:10', title: 'The Yellow Warehouse', subtitle: 'Area 28 · Tionge & team' },
  { kind: 'chapter', slug: 'the-launch' },
  { kind: 'stop', slug: 'agent-stanford', time: '', title: 'Meet Stanford', subtitle: 'Agent · TA Chitukula' },
  { kind: 'stop', slug: 'dezilata', time: '11:30', title: 'Dezilata', subtitle: 'Customer · TA Chitukula' },
  { kind: 'stop', slug: 'zakeyu', time: '12:15', title: 'Zakeyu', subtitle: 'Customer · TA Chitukula' },
  { kind: 'chapter', slug: 'the-digital-breakthrough' },
  { kind: 'inter', title: 'Lunch & drive to TA Malili', time: '13:00' },
  { kind: 'chapter', slug: 'scale' },
  { kind: 'stop', slug: 'agent-lawrence', time: '', title: 'Meet Lawrence', subtitle: 'Agent · TA Malili' },
  { kind: 'stop', slug: 'memory', time: '14:30', title: 'Memory', subtitle: 'Customer · TA Malili' },
  { kind: 'chapter', slug: 'the-2022-crisis' },
  { kind: 'stop', slug: 'sajeni', time: '15:15', title: 'Sajeni', subtitle: 'Customer · TA Malili' },
  { kind: 'chapter', slug: 'acumen-steps-in' },
  { kind: 'chapter', slug: 'yellows-future' },
  { kind: 'inter', title: 'Back to the hotel', time: '16:00', subtitle: 'A short memento waits at the end of the day.' },
];
