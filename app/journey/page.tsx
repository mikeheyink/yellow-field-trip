import Link from 'next/link';
import Image from 'next/image';
import { journey, tripDate } from '@/content/journey';
import { chapterBySlug } from '@/content/chapters';
import { customerBySlug } from '@/content/customers';
import { agentBySlug } from '@/content/agents';
import { warehouse } from '@/content/warehouse';
import { JourneyMap } from '@/components/JourneyMap';
import { Chevrons } from '@/components/Motifs';

export default function JourneyIndex() {
  return (
    <div className="fade-in">
      <header className="mb-6">
        <div className="flex items-center gap-3">
          <Chevrons className="h-4 w-16" tone="ink" />
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted">
            {tripDate}
          </p>
        </div>
        <h1 className="mt-3 font-display text-[2.4rem] leading-[1.05]">
          Today&apos;s
          <br />
          journey.
        </h1>
        <p className="mt-3 max-w-prose text-muted">
          Six stops, two clusters, and the Yellow story told a chapter at a time.
        </p>
      </header>

      <JourneyMap />

      <div className="mt-10 flex items-center gap-3">
        <span className="h-px flex-1 bg-rule" />
        <span className="text-[11px] uppercase tracking-[0.25em] text-muted">
          The day in order
        </span>
        <span className="h-px flex-1 bg-rule" />
      </div>

      <ol className="mt-6 space-y-3">
        {journey.map((item, i) => {
          if (item.kind === 'inter') {
            return (
              <li
                key={i}
                className="flex items-center gap-3 px-1 py-1 text-sm text-muted"
              >
                {item.time && (
                  <span className="font-mono text-[11px]">{item.time}</span>
                )}
                <span className="h-px flex-1 bg-rule" />
                <span className="text-ink/80">{item.title}</span>
                <span className="h-px flex-1 bg-rule" />
              </li>
            );
          }
          if (item.kind === 'chapter') {
            const chapter = chapterBySlug(item.slug);
            if (!chapter) return null;
            const isAcumen = chapter.slug === 'acumen-steps-in';
            return (
              <li key={i}>
                <Link
                  href={`/story/${chapter.slug}`}
                  className={`group block overflow-hidden rounded-2xl border transition-colors ${
                    isAcumen
                      ? 'border-ink bg-ink text-paper'
                      : 'border-rule bg-white hover:border-ink'
                  }`}
                >
                  <div className="flex items-stretch gap-0">
                    <div
                      className={`flex w-14 flex-col items-center justify-center ${
                        isAcumen ? 'bg-yellow text-ink' : 'bg-paper text-ink'
                      }`}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-wider">
                        Ch
                      </span>
                      <span className="font-display text-xl">
                        {chapter.number}
                      </span>
                    </div>
                    <div className="flex-1 px-4 py-4">
                      <p className="font-display text-lg leading-snug">
                        {chapter.title}
                      </p>
                      <p
                        className={`mt-1 text-sm ${
                          isAcumen ? 'text-paper/70' : 'text-muted'
                        }`}
                      >
                        {chapter.hero.statLabel ?? chapter.hero.stat}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          }

          const stopMeta = stopMetaFor(item.slug);
          return (
            <li key={i}>
              <Link
                href={`/journey/${item.slug}`}
                className="group flex items-stretch gap-3 overflow-hidden rounded-2xl border border-rule bg-white transition-colors hover:border-ink"
              >
                <div className="relative h-24 w-24 shrink-0 bg-paper">
                  {stopMeta.photo ? (
                    <Image
                      src={stopMeta.photo}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-yellow/30 font-display text-3xl text-ink/40">
                      {stopMeta.initial}
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-center py-3 pr-4">
                  <div className="flex items-baseline gap-3">
                    {item.time && (
                      <span className="font-mono text-[11px] text-muted">
                        {item.time}
                      </span>
                    )}
                    <p className="font-display text-lg">{item.title}</p>
                  </div>
                  {item.subtitle && (
                    <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 overflow-hidden rounded-3xl bg-ink p-6 text-paper">
        <div className="flex items-center gap-3">
          <Chevrons className="h-3 w-12" tone="yellow" />
          <p className="text-[11px] uppercase tracking-[0.25em] text-yellow">
            End of day
          </p>
        </div>
        <p className="mt-3 font-display text-2xl leading-snug">
          A small thank-you waits at the end of the day.
        </p>
        <Link
          href="/memento"
          className="mt-4 inline-flex items-center gap-2 text-sm text-paper/90"
        >
          Open the memento
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

function stopMetaFor(slug: string): { photo?: string; initial: string } {
  if (slug === 'warehouse')
    return { photo: warehouse.photo, initial: 'W' };
  if (slug.startsWith('agent-')) {
    const a = agentBySlug(slug.replace('agent-', ''));
    return { photo: a?.photo, initial: a?.firstName[0] ?? '?' };
  }
  const c = customerBySlug(slug);
  return { photo: c?.photo, initial: c?.firstName[0] ?? '?' };
}
