import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { customers, customerBySlug } from '@/content/customers';
import { agents, agentBySlug } from '@/content/agents';
import { warehouse } from '@/content/warehouse';
import { journey } from '@/content/journey';
import { Chevrons, Dots } from '@/components/Motifs';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return [
    { slug: 'warehouse' },
    ...customers.map((c) => ({ slug: c.slug })),
    ...agents.map((a) => ({ slug: `agent-${a.slug}` })),
  ];
}

function resolve(slug: string) {
  if (slug === 'warehouse') return { kind: 'warehouse' as const, data: warehouse };
  if (slug.startsWith('agent-')) {
    const a = agentBySlug(slug.replace('agent-', ''));
    return a ? { kind: 'agent' as const, data: a } : null;
  }
  const c = customerBySlug(slug);
  return c ? { kind: 'customer' as const, data: c } : null;
}

function nextStopSlug(currentSlug: string): string | null {
  const idx = journey.findIndex(
    (it) => it.kind === 'stop' && it.slug === currentSlug,
  );
  if (idx === -1) return null;
  for (let i = idx + 1; i < journey.length; i++) {
    const it = journey[i];
    if (it.kind === 'stop') return it.slug;
  }
  return null;
}

export default async function StopPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const resolved = resolve(slug);
  if (!resolved) notFound();

  const next = nextStopSlug(slug);

  if (resolved.kind === 'warehouse') {
    const w = resolved.data;
    return (
      <Detail
        eyebrow="Warehouse"
        title={w.title}
        location={w.location}
        photo={w.photo}
        heroQuote={w.hero.quote}
        heroStat={w.hero.stat}
        stats={w.stats}
        story={w.story}
        prompt={w.promptForVisitors}
        afterStats={
          <div className="mt-6 rounded-2xl border border-rule bg-white p-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted">
              The team
            </p>
            <p className="mt-2 font-display text-lg leading-snug">
              {w.team.join(' · ')}
            </p>
          </div>
        }
        next={next}
      />
    );
  }

  if (resolved.kind === 'agent') {
    const a = resolved.data;
    return (
      <Detail
        eyebrow="Agent"
        title={a.firstName}
        location={a.location}
        photo={a.photo}
        heroStat={a.hero.stat}
        stats={a.stats}
        story={a.story}
        prompt={a.promptForVisitors}
        showPhrases
        next={next}
      />
    );
  }

  const c = resolved.data;
  const agent = agentBySlug(c.agentSlug);
  return (
    <Detail
      eyebrow="Customer"
      title={c.firstName}
      location={c.location}
      photo={c.photo}
      heroQuote={c.hero.quote}
      heroStat={c.hero.stat}
      stats={c.stats}
      story={c.story}
      prompt={c.promptForVisitors}
      showPhrases
      afterStats={
        agent ? (
          <Link
            href={`/journey/agent-${agent.slug}`}
            className="mt-4 flex items-center gap-3 rounded-2xl border border-rule bg-white p-3 transition-colors hover:border-ink"
          >
            {agent.photo ? (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={agent.photo}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="h-12 w-12 shrink-0 rounded-full bg-yellow/40" />
            )}
            <div className="flex-1">
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted">
                Their agent
              </p>
              <p className="font-display text-lg leading-tight">
                {agent.firstName}
              </p>
            </div>
            <span aria-hidden className="text-muted">
              →
            </span>
          </Link>
        ) : null
      }
      next={next}
    />
  );
}

function Detail({
  eyebrow,
  title,
  location,
  photo,
  heroQuote,
  heroStat,
  stats,
  story,
  prompt,
  afterStats,
  showPhrases,
  next,
}: {
  eyebrow: string;
  title: string;
  location: string;
  photo?: string;
  heroQuote?: string;
  heroStat?: { value: string; label: string };
  stats: { label: string; value: string }[];
  story: string[];
  prompt?: string;
  afterStats?: React.ReactNode;
  showPhrases?: boolean;
  next: string | null;
}) {
  return (
    <article className="fade-in">
      <div className="mb-2 flex items-center gap-2">
        <Chevrons className="h-3 w-10" tone="ink" />
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted">
          {eyebrow}
        </p>
      </div>

      {/* Composed hero — photo with offset yellow block + large name */}
      <div className="relative mt-3">
        <div className="relative">
          <div
            aria-hidden
            className="absolute -right-2 -top-2 h-32 w-32 rounded-2xl bg-yellow"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper ring-1 ring-rule">
            {photo ? (
              <Image
                src={photo}
                alt={title}
                fill
                sizes="(max-width: 480px) 100vw, 480px"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-yellow/30 font-display text-7xl text-ink/30">
                {title[0]}
              </div>
            )}
          </div>
          <Dots className="absolute -bottom-3 left-4 h-2 w-24" tone="ink" />
        </div>
      </div>

      <h1 className="mt-7 font-display text-[2.6rem] leading-[1.05]">
        {title}
      </h1>
      <p className="mt-1 text-sm text-muted">{location}</p>

      {showPhrases && (
        <Link
          href="/visiting"
          className="mt-5 flex items-center gap-3 rounded-2xl bg-yellow/15 px-4 py-3 ring-1 ring-yellow/30 transition-colors hover:bg-yellow/25"
        >
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ink/60">
              A few words
            </p>
            <p className="mt-1 font-display text-base leading-snug">
              <span className="text-ink">Muli bwanji?</span>
              <span className="text-ink/50"> · </span>
              <span className="text-ink">Zikomo.</span>
            </p>
          </div>
          <span aria-hidden className="text-ink/50 text-xs uppercase tracking-wider">
            More →
          </span>
        </Link>
      )}

      {heroQuote && (
        <blockquote className="mt-7 border-l-2 border-yellow pl-4 font-display text-2xl leading-snug">
          &ldquo;{heroQuote}&rdquo;
        </blockquote>
      )}

      {heroStat && (
        <div className="relative mt-7 overflow-hidden rounded-3xl bg-yellow px-5 py-6">
          <Dots className="absolute right-3 top-3 h-2 w-20" tone="ink" />
          <p className="font-display text-4xl leading-none text-ink">
            {heroStat.value}
          </p>
          <p className="mt-2 text-sm text-ink/80">{heroStat.label}</p>
        </div>
      )}

      <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-rule py-6">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">
              {s.label}
            </dt>
            <dd className="mt-1 font-display text-lg leading-snug">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>

      {afterStats}

      <div className="mt-8 space-y-4 text-body">
        {story.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {prompt && (
        <div className="mt-10 rounded-2xl bg-yellow/15 p-5 ring-1 ring-yellow/40">
          <div className="flex items-center gap-2">
            <Chevrons className="h-3 w-10" tone="ink" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink/70">
              On the doorstep
            </p>
          </div>
          <p className="mt-3 text-body">{prompt}</p>
        </div>
      )}

      <div className="mt-12 flex items-center justify-between border-t border-rule pt-6 text-sm">
        <Link href="/journey" className="text-muted">
          ← Journey
        </Link>
        {next && (
          <Link
            href={`/journey/${next}`}
            className="font-medium text-ink"
          >
            Next stop →
          </Link>
        )}
      </div>
    </article>
  );
}
