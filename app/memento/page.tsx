import Link from 'next/link';
import Image from 'next/image';
import { customerBySlug } from '@/content/customers';
import { agentBySlug } from '@/content/agents';
import { warehouse } from '@/content/warehouse';
import { journey } from '@/content/journey';

type Founder = {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  whatsapp: string; // E.164 digits, no +
  email: string;
};

const founders: Founder[] = [
  {
    name: 'Mike Heyink',
    role: 'Co-founder & CEO',
    photo: '/images/founder-mike.jpg',
    linkedin: 'https://za.linkedin.com/in/michael-heyink-19b5a731',
    whatsapp: '27762122765',
    email: 'mike@yellow.africa',
  },
  {
    name: 'Maya Khonje-Stewart',
    role: 'Co-founder',
    photo: '/images/chapter-maya.jpg',
    linkedin: 'https://www.linkedin.com/in/maya-stewart-9a00846b/',
    whatsapp: '265908291 00'.replace(/\s/g, ''),
    email: 'maya@yellow.africa',
  },
];

export default function MementoPage() {
  const youMet = journey
    .filter((it) => it.kind === 'stop')
    .map((it) => {
      if (it.slug === 'warehouse') {
        return { slug: 'warehouse', name: warehouse.title.replace('The ', ''), role: 'Warehouse', location: warehouse.location };
      }
      if (it.slug.startsWith('agent-')) {
        const a = agentBySlug(it.slug.replace('agent-', ''));
        return a && { slug: a.slug, name: a.firstName, role: 'Agent', location: a.location };
      }
      const c = customerBySlug(it.slug);
      return c && { slug: c.slug, name: c.firstName, role: 'Customer', location: c.location };
    })
    .filter((p): p is { slug: string; name: string; role: string; location: string } => Boolean(p));

  return (
    <div className="fade-in">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">
        End of the day
      </p>
      <h1 className="mt-2 font-display text-[2.2rem] leading-tight">
        Thank you, Acumen.
      </h1>
      <p className="mt-4 text-body text-ink/90">
        Today you met the people whose access your capital helped protect —
        the agents still on the road, the customers whose evenings are quieter
        and brighter, the warehouse keeping the loop running.
      </p>
      <p className="mt-3 text-body text-ink/90">
        We&apos;re grateful you came, and grateful you came when you did.
      </p>

      <section className="mt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Today you met
        </p>
        <ul className="mt-3 space-y-2">
          {youMet.map((p) => (
            <li
              key={p.slug}
              className="flex items-baseline justify-between gap-3 border-b border-rule py-2 text-sm"
            >
              <span className="font-display text-base">{p.name}</span>
              <span className="text-right text-muted">
                {p.role} · {p.location}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-3xl bg-ink p-6 text-paper">
        <p className="text-xs uppercase tracking-[0.2em] text-yellow">
          What comes next
        </p>
        <p className="mt-3 font-display text-2xl leading-snug">
          1 million customers this quarter. Seven African markets. Ten million
          by 2030.
        </p>
      </section>

      <section className="mt-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Connect with the founders
        </p>
        <p className="mt-2 text-sm text-muted">
          Reach out any time — we&apos;d love to keep the conversation going.
        </p>
        <div className="mt-5 space-y-4">
          {founders.map((f) => (
            <FounderCard key={f.email} founder={f} />
          ))}
        </div>
      </section>

      <div className="mt-10 border-t border-rule pt-6 text-sm">
        <Link href="/journey" className="text-muted">
          ← Back to the journey
        </Link>
      </div>
    </div>
  );
}

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-rule bg-white">
      <div className="flex items-center gap-4 p-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-1 ring-rule">
          <Image
            src={founder.photo}
            alt={founder.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg leading-tight">{founder.name}</p>
          <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-muted">
            {founder.role}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 border-t border-rule text-xs">
        <a
          href={founder.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-col items-center gap-1 border-r border-rule py-3 text-ink hover:bg-yellow/15"
        >
          <LinkedInIcon className="h-5 w-5" />
          <span className="font-medium">LinkedIn</span>
        </a>
        <a
          href={`https://wa.me/${founder.whatsapp}`}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-col items-center gap-1 border-r border-rule py-3 text-ink hover:bg-yellow/15"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span className="font-medium">WhatsApp</span>
        </a>
        <a
          href={`mailto:${founder.email}`}
          className="flex flex-col items-center gap-1 py-3 text-ink hover:bg-yellow/15"
        >
          <EmailIcon className="h-5 w-5" />
          <span className="font-medium">Email</span>
        </a>
      </div>
    </article>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0h.01z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.43-9.88 9.9-9.88 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.88-9.9 9.88zM20.52 3.45A11.78 11.78 0 0 0 12.04 0C5.46 0 .12 5.34.12 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.65a11.92 11.92 0 0 0 5.77 1.47h.01c6.58 0 11.92-5.34 11.92-11.91 0-3.18-1.24-6.17-3.49-8.41z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
