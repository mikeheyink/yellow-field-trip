// Decorative brand motifs lifted from the Yellow PDF visual language:
// — diagonal chevron stack (>>>>>)
// — dotted row
// — corner flag
// — yellow Y mark with the half-moon

export function Chevrons({
  className = '',
  count = 5,
  tone = 'ink',
}: {
  className?: string;
  count?: number;
  tone?: 'ink' | 'yellow' | 'paper';
}) {
  const stroke =
    tone === 'yellow' ? '#FFD400' : tone === 'paper' ? '#FAFAF7' : '#1A1A1A';
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${count * 14} 24`}
      className={className}
      fill="none"
    >
      {Array.from({ length: count }).map((_, i) => (
        <path
          key={i}
          d={`M${i * 14 + 1} 4 L${i * 14 + 9} 12 L${i * 14 + 1} 20`}
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.35 + i * (0.65 / Math.max(1, count - 1))}
        />
      ))}
    </svg>
  );
}

export function Dots({
  className = '',
  count = 12,
  tone = 'ink',
}: {
  className?: string;
  count?: number;
  tone?: 'ink' | 'yellow';
}) {
  const fill = tone === 'yellow' ? '#FFD400' : '#1A1A1A';
  return (
    <svg aria-hidden viewBox={`0 0 ${count * 10} 6`} className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <circle key={i} cx={i * 10 + 3} cy={3} r={1.5} fill={fill} />
      ))}
    </svg>
  );
}

// The little corner flag from the PDF cover (curved white shape with a line below it)
export function CornerFlag({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 140"
      className={className}
      fill="none"
    >
      <path
        d="M0 0 H58 C58 30 30 28 30 56 C30 80 50 88 50 110 V140"
        stroke="#1A1A1A"
        strokeWidth="2"
        fill="#FFD400"
        fillOpacity="0.15"
      />
    </svg>
  );
}

// Diagonal slash pattern panel — used as a decorative band
export function StripeBand({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 40" className={className}>
      <defs>
        <pattern
          id="stripes"
          width="8"
          height="8"
          patternTransform="rotate(35)"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="8" stroke="#1A1A1A" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="200" height="40" fill="url(#stripes)" opacity="0.85" />
    </svg>
  );
}
