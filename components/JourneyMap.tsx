'use client';

import Link from 'next/link';

type Stop = { slug: string; num: number; label: string };
type Leg = { cluster: string; stops: Stop[] };

const LEGS: Leg[] = [
  {
    cluster: 'Area 28',
    stops: [{ slug: 'warehouse', num: 1, label: 'Warehouse' }],
  },
  {
    cluster: 'TA Chitukula',
    stops: [
      { slug: 'dezilata', num: 2, label: 'Dezilata' },
      { slug: 'zakeyu', num: 3, label: 'Zakeyu' },
      { slug: 'hendrix', num: 4, label: 'Hendrix' },
    ],
  },
  {
    cluster: 'TA Malili',
    stops: [
      { slug: 'memory', num: 5, label: 'Memory' },
      { slug: 'john', num: 6, label: 'John' },
    ],
  },
];

export function JourneyMap() {
  return (
    <div className="relative pl-8">
      {/* vertical spine */}
      <div
        className="absolute left-[15px] top-4 bottom-4 w-px"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, #1A1A1A 0, #1A1A1A 4px, transparent 4px, transparent 8px)',
        }}
      />

      <ol className="space-y-6">
        {LEGS.map((leg, li) => (
          <li key={leg.cluster}>
            {/* cluster node */}
            <div className="relative flex items-center gap-3 mb-3">
              <span
                className="absolute -left-8 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-yellow border-2 border-ink"
                aria-hidden
              />
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted pl-1">
                {leg.cluster}
              </p>
            </div>

            {/* stops */}
            <ol className="space-y-2">
              {leg.stops.map((stop) => (
                <li key={stop.slug}>
                  <Link
                    href={`/journey/${stop.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-rule bg-white px-4 py-3 transition-colors hover:border-ink"
                  >
                    <span className="font-mono text-[11px] text-muted w-5 shrink-0">
                      {String(stop.num).padStart(2, '0')}
                    </span>
                    <span className="font-display text-base flex-1">{stop.label}</span>
                    <span className="text-muted transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ol>

            {/* travel note between legs */}
            {li < LEGS.length - 1 && (
              <p className="mt-3 pl-1 text-[11px] text-muted/70 italic">
                Drive to next cluster
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
