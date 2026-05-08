export type Stat = { label: string; value: string };

export type Customer = {
  slug: string;
  firstName: string;
  fullName: string;
  role: 'customer';
  location: string;
  agentSlug: string;
  hero: {
    quote?: string;
    stat?: { value: string; label: string };
  };
  stats: Stat[];
  story: string[];
  promptForVisitors?: string;
  photo?: string;
};

export type Agent = {
  slug: string;
  firstName: string;
  fullName: string;
  role: 'agent';
  location: string;
  hero: { stat: { value: string; label: string } };
  stats: Stat[];
  story: string[];
  promptForVisitors?: string;
  photo?: string;
};

export type Warehouse = {
  slug: 'warehouse';
  title: string;
  role: 'warehouse';
  location: string;
  hero: { stat?: { value: string; label: string }; quote?: string };
  stats: Stat[];
  story: string[];
  team: string[];
  promptForVisitors?: string;
  photo?: string;
};

export type Chapter = {
  number: string;
  slug: string;
  title: string;
  hero: { stat: string; statLabel?: string };
  body: string[];
  bullets?: string[];
  photo?: string;
};

export type JourneyItem =
  | { kind: 'stop'; slug: string; time: string; title: string; subtitle?: string }
  | { kind: 'chapter'; slug: string }
  | { kind: 'inter'; title: string; time?: string; subtitle?: string };
