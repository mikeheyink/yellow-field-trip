import Image from 'next/image';
import Link from 'next/link';
import { tripCity, tripDate } from '@/content/journey';

export default function Cover() {
  return (
    <div className="fade-in flex flex-col items-center text-center">
      <div className="flex flex-col items-center pt-6">
        <Image
          src="/yellow-full-logo.png"
          alt="Yellow"
          width={456}
          height={160}
          priority
          className="h-auto w-[180px]"
        />
      </div>

      <p className="mt-6 text-[0.7rem] uppercase tracking-[0.24em] text-muted">
        A field-trip companion for Acumen
      </p>

      <h1 className="mt-4 font-display text-[2.1rem] leading-[1.1]">
        Welcome.
        <br />
        We&apos;re glad you came.
      </h1>

      <p className="mt-5 max-w-[34ch] text-[0.95rem] leading-relaxed text-muted">
        A small companion for the day — the people you&apos;ll meet, the
        places you&apos;ll visit, and the story behind why your support has
        mattered.
      </p>

      <div className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
        <span>{tripDate}</span>
        <span aria-hidden className="h-px w-4 bg-rule" />
        <span>{tripCity}</span>
      </div>

      <Link
        href="/journey"
        aria-label="Begin the field trip"
        className="cta-pulse mt-8 inline-flex items-center gap-2.5 rounded-full bg-ink px-9 py-4 text-base font-medium text-paper shadow-[0_12px_28px_-12px_rgba(26,26,26,0.55)] transition-transform active:scale-[0.98]"
      >
        Begin
        <span aria-hidden className="arrow-nudge inline-block">
          →
        </span>
      </Link>
    </div>
  );
}
