import Link from 'next/link';
import { tripCity, tripDate } from '@/content/journey';
import { YellowMark } from '@/components/YellowMark';

export default function Cover() {
  return (
    <div className="fade-in flex min-h-[calc(100dvh-3rem)] flex-col">
      <div className="flex-1">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          A field-trip companion
        </p>
        <div className="mt-6 flex items-baseline gap-3">
          <YellowMark className="text-3xl" />
          <span className="text-muted">×</span>
          <span className="font-display text-3xl">Acumen</span>
        </div>
        <h1 className="mt-12 font-display text-[2.4rem] leading-[1.1]">
          Welcome.
          <br />
          We&apos;re glad
          <br />
          you came.
        </h1>
        <p className="mt-8 max-w-prose text-body text-muted">
          A small companion for the day — the people you&apos;ll meet, the
          places you&apos;ll visit, and the story behind why your support has
          mattered.
        </p>
      </div>

      <div className="mt-12 border-t border-rule pt-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {tripDate}
            </p>
            <p className="mt-1 font-display text-lg">{tripCity}</p>
          </div>
          <Link
            href="/journey"
            className="group inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-5 py-3 text-sm text-paper"
          >
            Begin
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
