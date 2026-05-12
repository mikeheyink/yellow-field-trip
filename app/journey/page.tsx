import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { journey, tripDate } from '@/content/journey';
import { customerBySlug } from '@/content/customers';
import { agentBySlug } from '@/content/agents';
import { warehouse } from '@/content/warehouse';
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
          Today we will meet two Yellow agents and four of their customers — after a visit to Yellow&apos;s warehouse.
        </p>
      </header>

      <ol className="mt-6 space-y-3">
        {journey.map((item, i) => {
          if (item.kind === 'chapter') return null;

          const isDezilata = item.kind === 'stop' && item.slug === 'dezilata';
          const tipsCard = isDezilata ? (
            <li key={`tips-${i}`}>
              <Link
                href="/visiting"
                className="group flex items-center gap-3 rounded-2xl bg-yellow/20 px-4 py-3 ring-1 ring-yellow/40 transition-colors hover:bg-yellow/30"
              >
                <Chevrons className="h-3 w-10 shrink-0" tone="ink" />
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ink/70">
                    Some practical tips
                  </p>
                  <p className="mt-0.5 font-display text-base leading-snug text-ink">
                    A short note before the doorstep.
                  </p>
                </div>
                <span aria-hidden className="text-ink/60">→</span>
              </Link>
            </li>
          ) : null;

          if (item.kind === 'inter') {
            const isDrive = item.title.toLowerCase().includes('drive') ||
              item.title.toLowerCase().includes('back to') ||
              item.title.toLowerCase().includes('lunch');
            if (isDrive) {
              return (
                <li key={i} className="flex items-center gap-3 py-2 px-1">
                  <span className="font-mono text-[11px] text-muted shrink-0 w-10">
                    {item.time ?? ''}
                  </span>
                  <span className="h-px flex-1 bg-rule" style={{ backgroundImage: 'repeating-linear-gradient(to right, #d4d4cc 0, #d4d4cc 4px, transparent 4px, transparent 8px)', backgroundColor: 'transparent' }} />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted/70 shrink-0">
                    {item.title}
                  </span>
                  <span className="h-px flex-1 bg-rule" style={{ backgroundImage: 'repeating-linear-gradient(to right, #d4d4cc 0, #d4d4cc 4px, transparent 4px, transparent 8px)', backgroundColor: 'transparent' }} />
                </li>
              );
            }
            return (
              <li key={i} className="flex items-center gap-3 px-1 py-1 text-sm text-muted">
                {item.time && (
                  <span className="font-mono text-[11px]">{item.time}</span>
                )}
                <span className="h-px flex-1 bg-rule" />
                <span className="text-ink/80">{item.title}</span>
                <span className="h-px flex-1 bg-rule" />
              </li>
            );
          }

          const stopMeta = stopMetaFor(item.slug);
          const badge = badgeFor(item.slug);
          const stopLi = (
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
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] font-medium ${badge.classes}`}>
                      {badge.label}
                    </span>
                    {item.time && (
                      <span className="font-mono text-[11px] text-muted">
                        {item.time}
                      </span>
                    )}
                  </div>
                  <p className="font-display text-lg leading-tight">{item.title}</p>
                  {item.subtitle && (
                    <p className="mt-0.5 text-sm text-muted">{item.subtitle.split(' · ')[1]}</p>
                  )}
                </div>
              </Link>
            </li>
          );
          return tipsCard ? (
            <Fragment key={`grp-${i}`}>
              {tipsCard}
              {stopLi}
            </Fragment>
          ) : (
            stopLi
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
          Open
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

function badgeFor(slug: string): { label: string; classes: string } {
  if (slug === 'warehouse')
    return { label: 'Warehouse', classes: 'bg-ink text-paper' };
  if (slug.startsWith('agent-'))
    return { label: 'Agent', classes: 'bg-yellow text-ink' };
  return { label: 'Customer', classes: 'bg-rule text-muted' };
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
