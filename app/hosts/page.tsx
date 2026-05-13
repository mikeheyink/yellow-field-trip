import Link from 'next/link';
import Image from 'next/image';
import { team } from '@/content/team';
import { Chevrons } from '@/components/Motifs';

export default function HostsPage() {
  return (
    <article className="fade-in">
      <div className="flex items-center gap-3">
        <Chevrons className="h-4 w-16" tone="ink" />
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted">
          Your hosts today
        </p>
      </div>

      <h1 className="mt-3 font-display text-[2.4rem] leading-[1.05]">
        Meet your
        <br />
        Yellow hosts.
      </h1>
      <p className="mt-3 max-w-prose text-muted">
        The six of us travelling with you today — a mix of founders, operators
        and finance folks who keep Yellow running.
      </p>

      <ul className="mt-8 space-y-4">
        {team.map((m) => (
          <li
            key={m.slug}
            className="overflow-hidden rounded-2xl border border-rule bg-white"
          >
            <div className="flex items-center gap-4 p-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-1 ring-rule">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-yellow/30 font-display text-2xl text-ink/40">
                    {m.name[0]}
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg leading-tight">{m.name}</p>
                <p className="mt-0.5 text-sm text-ink/80">{m.role}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-muted">
                  {m.tenure}
                </p>
              </div>
            </div>
            {m.linkedin && (
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 border-t border-rule py-3 text-xs text-ink hover:bg-yellow/15"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span className="font-medium">LinkedIn</span>
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-12 border-t border-rule pt-6 text-sm">
        <Link href="/journey" className="text-muted">
          ← Back to the journey
        </Link>
      </div>
    </article>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0h.01z" />
    </svg>
  );
}
