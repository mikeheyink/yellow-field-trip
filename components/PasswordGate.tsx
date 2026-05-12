'use client';

import { useEffect, useState, type FormEvent } from 'react';

const PASSWORD = 'LiveBetter';
const STORAGE_KEY = 'yellow-fieldtrip-unlocked';

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [attempt, setAttempt] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setUnlocked(window.localStorage.getItem(STORAGE_KEY) === '1');
    } catch {
      setUnlocked(false);
    }
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (attempt.trim().toLowerCase() === PASSWORD.toLowerCase()) {
      try {
        window.localStorage.setItem(STORAGE_KEY, '1');
      } catch {}
      setError(false);
      setUnlocked(true);
    } else {
      setError(true);
    }
  }

  if (unlocked === null) {
    return <div className="min-h-dvh bg-paper" aria-hidden />;
  }

  if (!unlocked) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-yellow px-6">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-sm rounded-3xl bg-paper p-6 shadow-xl ring-1 ring-ink/10"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted">
            Yellow × Acumen
          </p>
          <h1 className="mt-2 font-display text-3xl leading-tight">
            Field trip
          </h1>
          <p className="mt-3 text-sm text-ink/80">
            Enter the password to continue.
          </p>
          <label className="mt-5 block">
            <span className="sr-only">Password</span>
            <input
              type="password"
              autoFocus
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              value={attempt}
              onChange={(e) => {
                setAttempt(e.target.value);
                if (error) setError(false);
              }}
              className="w-full rounded-xl border border-rule bg-white px-4 py-3 font-display text-lg outline-none focus:border-ink"
              placeholder="Password"
              aria-invalid={error}
            />
          </label>
          {error && (
            <p className="mt-2 text-sm text-red-600">
              That&apos;s not it — try again.
            </p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-ink py-3 font-display text-base text-paper transition-colors hover:bg-ink/90"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
