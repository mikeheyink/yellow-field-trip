export function YellowMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-display text-ink ${className}`}
    >
      <span className="relative">
        Y
        <span
          aria-hidden
          className="absolute -top-[0.35em] left-1/2 h-[0.4em] w-[0.6em] -translate-x-1/2 rounded-b-full bg-yellow"
        />
      </span>
      ellow
    </span>
  );
}
