import Link from 'next/link';
import { customers } from '@/content/customers';
import { agents } from '@/content/agents';

export default function MementoPage() {
  const numbers: { value: string; label: string }[] = [
    { value: '6', label: 'stops · 1 warehouse, 2 agents, 5 customers' },
    {
      value: '1,933',
      label: `combined sales by ${agents.map((a) => a.firstName).join(' & ')}`,
    },
    { value: '350,000', label: 'Malawian households Yellow has electrified' },
    { value: '1M', label: 'total customers expected this quarter' },
  ];

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
          The day in numbers
        </p>
        <dl className="mt-3 grid grid-cols-2 gap-4">
          {numbers.map((n) => (
            <div
              key={n.label}
              className="rounded-2xl border border-rule bg-white p-4"
            >
              <dt className="font-display text-2xl">{n.value}</dt>
              <dd className="mt-1 text-xs text-muted">{n.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Today you met
        </p>
        <ul className="mt-3 space-y-2">
          {[...agents, ...customers].map((p) => (
            <li
              key={p.slug}
              className="flex items-baseline justify-between border-b border-rule py-2 text-sm"
            >
              <span className="font-display text-base">{p.firstName}</span>
              <span className="text-muted">
                {p.role === 'agent' ? 'Agent' : 'Customer'} · {p.location}
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
        <p className="mt-3 text-paper/80">
          From a $3M equity base, Yellow has funded $80M of life-changing solar
          and smartphone assets. The next chapter is AI-native — using
          technology to push prices down and service levels up.
        </p>
      </section>

      <div className="mt-10 border-t border-rule pt-6 text-sm">
        <Link href="/journey" className="text-muted">
          ← Back to the journey
        </Link>
      </div>
    </div>
  );
}
