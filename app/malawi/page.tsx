import { malawi } from '@/content/malawi';
import { Chevrons } from '@/components/Motifs';

export default function MalawiPage() {
  return (
    <div className="fade-in">
      <header className="mb-8">
        <div className="flex items-center gap-3">
          <Chevrons className="h-4 w-16" tone="ink" />
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted">
            Context
          </p>
        </div>
        <h1 className="mt-3 font-display text-[2.4rem] leading-[1.05]">
          Malawi.
        </h1>
        <p className="mt-3 font-display text-xl leading-snug text-ink/70">
          {malawi.headline}
        </p>
      </header>

      <p className="text-body leading-relaxed">{malawi.intro}</p>

      {/* Fast facts grid */}
      <div className="mt-8 overflow-hidden rounded-3xl bg-ink p-6 text-paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-yellow">
          Fast facts
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4">
          {malawi.fastFacts.map((f) => (
            <div key={f.label}>
              <dt className="text-[10px] uppercase tracking-[0.2em] text-paper/50">
                {f.label}
              </dt>
              <dd className="mt-0.5 font-display text-lg leading-snug text-paper">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Story sections */}
      <div className="mt-10 space-y-10">
        {malawi.sections.map((s) => (
          <section key={s.label}>
            <div className="flex items-center gap-2">
              <Chevrons className="h-3 w-10" tone="ink" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {s.label}
              </p>
            </div>
            <h2 className="mt-2 font-display text-2xl leading-snug">{s.title}</h2>
            <div className="mt-3 space-y-3">
              {s.body.map((p, i) => (
                <p key={i} className="text-body leading-relaxed text-ink/90">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom spacer for nav */}
      <div className="h-8" />
    </div>
  );
}
