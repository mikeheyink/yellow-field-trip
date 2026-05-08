import { malawi } from '@/content/malawi';

export default function MalawiPage() {
  return (
    <div className="fade-in">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Where we are
        </p>
        <h1 className="mt-2 font-display text-3xl">Malawi</h1>
      </header>

      <p className="text-body">{malawi.intro}</p>

      <div className="mt-10 space-y-6">
        {malawi.bites.map((b) => (
          <section
            key={b.title}
            className="rounded-2xl border border-rule bg-white p-5"
          >
            <h2 className="font-display text-xl">{b.title}</h2>
            <p className="mt-2 text-body text-ink/90">{b.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
