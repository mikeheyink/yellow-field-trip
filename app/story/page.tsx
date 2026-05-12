import Link from 'next/link';
import Image from 'next/image';
import { chapters } from '@/content/chapters';
import { Chevrons } from '@/components/Motifs';

export default function StoryIndex() {
  return (
    <div className="fade-in">
      <header className="mb-8">
        <div className="flex items-center gap-3">
          <Chevrons className="h-4 w-16" tone="ink" />
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted">
            Seven chapters · swipe to read
          </p>
        </div>
        <h1 className="mt-3 font-display text-[2.2rem] leading-[1.05]">
          The Yellow story.
        </h1>
        <p className="mt-3 max-w-prose text-muted">
          Where Yellow came from, what nearly broke it, and where it&apos;s
          headed. Tap any chapter to start a swipeable read.
        </p>
      </header>

      <ol className="space-y-3">
        {chapters.map((c) => {
          const isAcumen = c.slug === 'acumen-steps-in';
          return (
            <li key={c.slug}>
              <Link
                href={`/story/${c.slug}`}
                className={`group flex items-stretch gap-3 overflow-hidden rounded-2xl border transition-colors ${
                  isAcumen
                    ? 'border-ink bg-ink text-paper'
                    : 'border-rule bg-white hover:border-ink'
                }`}
              >
                <div className="relative h-24 w-24 shrink-0 bg-paper">
                  {c.photo ? (
                    <Image
                      src={c.photo}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center font-display text-3xl ${
                        isAcumen
                          ? 'bg-yellow text-ink'
                          : 'bg-yellow/30 text-ink/60'
                      }`}
                    >
                      {c.number}
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-center py-3 pr-4">
                  <p
                    className={`font-mono text-[10px] uppercase tracking-wider ${
                      isAcumen ? 'text-yellow' : 'text-muted'
                    }`}
                  >
                    Chapter {c.number}
                  </p>
                  <p className="mt-1 font-display text-lg leading-snug">
                    {c.title}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
