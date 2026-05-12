import Image from 'next/image';
import { malawi } from '@/content/malawi';
import { Chevrons } from '@/components/Motifs';

export default function MalawiPage() {
  return (
    <div className="fade-in">
      {/* Full-bleed hero — Lake Malawi from space */}
      <div className="-mx-5 -mt-4 mb-6">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
          <Image
            src={malawi.hero.src}
            alt={malawi.hero.alt}
            fill
            sizes="(max-width: 480px) 100vw, 480px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent p-5 pt-20">
            <div className="flex items-center gap-3">
              <Chevrons className="h-3 w-12" tone="yellow" />
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-yellow">
                Context
              </p>
            </div>
            <h1 className="mt-2 font-display text-[2.6rem] leading-[1.0] text-paper">
              Malawi.
            </h1>
            <p className="mt-2 font-display text-lg leading-snug text-paper/85">
              {malawi.headline}
            </p>
          </div>
        </div>
        <p className="px-5 pt-2 text-[10px] text-muted">
          {malawi.hero.credit}
        </p>
      </div>

      {/* Intro */}
      <p className="text-body leading-relaxed text-ink/90">{malawi.intro}</p>

      {/* Sections */}
      <div className="mt-12 space-y-16">
        {malawi.sections.map((s) => {
          // §06 Today gets a stats grid before the body prose
          const isTodaySection = s.number === '06';
          // §05 gets full-bleed image
          const fullBleed = s.image?.fullBleed;

          return (
            <section key={s.number}>
              {/* Section head */}
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-[0.2em] text-muted">
                  {s.number}
                </span>
                <span className="h-px flex-1 bg-rule" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {s.kicker}
                </span>
              </div>

              <h2 className="mt-3 font-display text-[1.9rem] leading-[1.1]">
                {s.title}
              </h2>

              {/* Full-bleed image (Gule Wamkulu) */}
              {fullBleed && s.image && (
                <figure className="-mx-5 mt-5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(max-width: 480px) 100vw, 480px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-5 pt-2 text-[10px] text-muted">
                    {s.image.credit}
                  </figcaption>
                </figure>
              )}

              {/* Body */}
              <div className="mt-5 space-y-3 text-body leading-relaxed text-ink/90">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Stats grid for §06 */}
              {isTodaySection && (
                <div className="mt-6 overflow-hidden rounded-2xl bg-ink p-5 text-paper">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-yellow">
                    1990 → today
                  </p>
                  <dl className="mt-4 grid grid-cols-2 gap-x-5 gap-y-5">
                    {malawi.stats.map((st) => (
                      <div key={st.label}>
                        <dt className="text-[10px] uppercase tracking-[0.18em] text-paper/50">
                          {st.label}
                        </dt>
                        <dd className="mt-1 flex items-baseline gap-2">
                          <span className="text-paper/40 line-through font-display text-sm">
                            {st.from}
                          </span>
                          <span className="font-display text-2xl leading-none text-yellow">
                            {st.to}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Inset image (everything except full-bleed) */}
              {!fullBleed && s.image && (
                <figure className="mt-6">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-paper ring-1 ring-rule">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(max-width: 480px) 100vw, 480px"
                      className="object-cover"
                      style={s.image.objectPosition ? { objectPosition: s.image.objectPosition } : undefined}
                    />
                  </div>
                  <figcaption className="pt-2 text-[10px] text-muted">
                    {s.image.credit}
                  </figcaption>
                </figure>
              )}
            </section>
          );
        })}
      </div>

      {/* Bottom spacer for nav */}
      <div className="h-12" />
    </div>
  );
}
