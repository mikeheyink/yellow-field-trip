'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { Chapter } from '@/content/types';
import { Chevrons } from './Motifs';

export function ChapterReader({
  chapters,
  startIndex,
}: {
  chapters: Chapter[];
  startIndex: number;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(startIndex);

  // Initial scroll-to-start (without animation)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth * startIndex, behavior: 'instant' as ScrollBehavior });
  }, [startIndex]);

  // Track active card on scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const idx = Math.round(el.scrollLeft / el.clientWidth);
        setActive(Math.max(0, Math.min(chapters.length - 1, idx)));
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', onScroll);
    };
  }, [chapters.length]);

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth * i, behavior: 'smooth' });
  };

  return (
    <div className="fade-in">
      {/* progress dots */}
      <div className="mb-3 flex items-center justify-center gap-2">
        {chapters.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Chapter ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? 'w-8 bg-ink' : 'w-1.5 bg-rule'
            }`}
          />
        ))}
      </div>

      <div
        ref={scrollerRef}
        className="-mx-5 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {chapters.map((c) => (
          <ChapterCard key={c.slug} chapter={c} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <button
          onClick={() => scrollToIndex(Math.max(0, active - 1))}
          disabled={active === 0}
          className="text-muted disabled:opacity-30"
        >
          ← Previous
        </button>
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Ch {chapters[active]?.number} / {chapters.length}
        </span>
        {active === chapters.length - 1 ? (
          <Link href="/memento" className="font-medium text-ink">
            Thank you →
          </Link>
        ) : (
          <button
            onClick={() => scrollToIndex(Math.min(chapters.length - 1, active + 1))}
            className="font-medium text-ink"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}

function ChapterCard({ chapter: c }: { chapter: Chapter }) {
  const isAcumen = c.slug === 'acumen-steps-in';
  return (
    <article
      className="w-full shrink-0 snap-center px-5"
      style={{ scrollSnapAlign: 'center' }}
    >
      <div
        className={`overflow-hidden rounded-3xl ${
          isAcumen ? 'bg-ink text-paper' : 'bg-white ring-1 ring-rule'
        }`}
      >
        {c.photo && (
          <div className="relative aspect-[4/3] w-full bg-paper">
            <Image
              src={c.photo}
              alt=""
              fill
              sizes="(max-width: 480px) 100vw, 480px"
              className="object-cover"
            />
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-paper/85 px-3 py-1 backdrop-blur">
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink">
                Chapter {c.number}
              </span>
            </div>
          </div>
        )}

        <div className="px-5 pb-7 pt-6">
          {!c.photo && (
            <div className="mb-3 flex items-center gap-2">
              <Chevrons className="h-3 w-10" tone={isAcumen ? 'yellow' : 'ink'} />
              <span
                className={`font-mono text-[11px] uppercase tracking-wider ${
                  isAcumen ? 'text-yellow' : 'text-muted'
                }`}
              >
                Chapter {c.number}
              </span>
            </div>
          )}

          <h2
            className={`font-display text-[1.9rem] leading-[1.1] ${
              isAcumen ? 'text-paper' : 'text-ink'
            }`}
          >
            {c.title}
          </h2>

          <div
            className={`mt-5 inline-block rounded-2xl px-4 py-3 ${
              isAcumen ? 'bg-yellow text-ink' : 'bg-yellow text-ink'
            }`}
          >
            <p
              className={`font-display leading-none ${
                c.hero.stat.length > 10 ? 'text-[1.3rem]' : 'text-[2.2rem]'
              }`}
            >
              {c.hero.stat}
            </p>
            {c.hero.statLabel && (
              <p className="mt-2 max-w-[260px] text-xs text-ink/80">
                {c.hero.statLabel}
              </p>
            )}
          </div>

          <div
            className={`mt-5 space-y-3 text-[15px] leading-relaxed ${
              isAcumen ? 'text-paper/90' : 'text-ink/90'
            }`}
          >
            {c.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {c.bullets && (
            <ul
              className={`mt-4 space-y-1.5 border-l-2 pl-4 text-[14px] ${
                isAcumen
                  ? 'border-yellow text-paper/90'
                  : 'border-yellow text-ink/90'
              }`}
            >
              {c.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
