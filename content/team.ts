export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  tenure: string;
  photo?: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    slug: 'maya',
    name: 'Maya Khonje-Stewart',
    role: 'Co-founder',
    tenure: '8 years with Yellow',
    photo: '/images/chapter-maya.jpg',
    linkedin: 'https://www.linkedin.com/in/maya-stewart-9a00846b/',
  },
  {
    slug: 'mike-heyink',
    name: 'Mike Heyink',
    role: 'Co-founder & CEO',
    tenure: '8 years with Yellow',
    photo: '/images/founder-mike.jpg',
    linkedin: 'https://za.linkedin.com/in/michael-heyink-19b5a731',
  },
  {
    slug: 'rhoda',
    name: 'Rhoda',
    role: 'Head of ESG',
    tenure: '5 years with Yellow',
    photo: '/images/rhoda.jpg',
    linkedin: 'https://www.linkedin.com/in/rhoda-l-3234948b',
  },
  {
    slug: 'ruth',
    name: 'Ruth Truwa',
    role: 'Head of Sales Operations',
    tenure: '5 years with Yellow',
    photo: '/images/ruth.jpg',
    linkedin: 'https://www.linkedin.com/in/ruth-truwa-b959601b3/',
  },
  {
    slug: 'mike-credit',
    name: 'Mike Light',
    role: 'Head of Credit',
    tenure: '2 weeks with Yellow',
    photo: '/images/mike-credit.jpg',
    linkedin: 'https://www.linkedin.com/in/michael-light-3a4369bb/',
  },
  {
    slug: 'devlin',
    name: 'Devlin',
    role: 'Head of Strategic Finance & Capital',
    tenure: 'TBC',
    photo: '/images/devlin.jpg',
    linkedin: 'https://www.linkedin.com/in/ruth-truwa-b959601b3/',
  },
];
