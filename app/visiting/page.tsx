import Link from 'next/link';
import { phrases, visiting } from '@/content/visiting';
import { Chevrons } from '@/components/Motifs';

export default function VisitingPage() {
  return (
    <article className="fade-in">
      <div className="flex items-center gap-3">
        <Chevrons className="h-4 w-16" tone="ink" />
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted">
          {visiting.kicker}
        </p>
      </div>

      <h1 className="mt-3 font-display text-[2.4rem] leading-[1.05]">
        {visiting.title}
      </h1>

      <section className="mt-8 space-y-7">
        {visiting.sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-display text-[1.4rem] leading-snug">
              {s.heading}
            </h2>
            <p className="mt-2 text-body leading-relaxed text-ink/90">
              {s.body}
            </p>
          </div>
        ))}
      </section>

      {/* Chewa phrase card */}
      <section className="mt-10 overflow-hidden rounded-3xl bg-yellow/15 p-6 ring-1 ring-yellow/40">
        <div className="flex items-center gap-2">
          <Chevrons className="h-3 w-10" tone="ink" />
          <p className="text-[11px] uppercase tracking-[0.25em] text-ink/70">
            A few words of Chewa
          </p>
        </div>
        <dl className="mt-4 divide-y divide-ink/10">
          {phrases.map((p) => (
            <div key={p.chewa} className="py-3 first:pt-0 last:pb-0">
              <dt className="font-display text-lg leading-snug">{p.chewa}</dt>
              <dd className="mt-1 text-sm italic text-ink/60">
                {p.pronunciation}
              </dd>
              <dd className="mt-1 text-sm text-ink/80">{p.english}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-12 border-t border-rule pt-6 text-sm">
        <Link href="/journey" className="text-muted">
          ← Back to the journey
        </Link>
      </div>
    </article>
  );
}
