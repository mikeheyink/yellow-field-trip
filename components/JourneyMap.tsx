'use client';

import Link from 'next/link';
import { useState } from 'react';

// Stylised map of the Lilongwe area showing the day's six stops.
// Coordinates are illustrative, not geographic — they preserve relative
// position (warehouse north, Chitukula NE cluster, Malili SW cluster) and
// distance feel, not absolute lat/long.
type Pin = {
  slug: string;
  label: string;
  sub: string;
  x: number;
  y: number;
};

const PINS: Pin[] = [
  { slug: 'warehouse', label: 'Warehouse', sub: 'Area 28', x: 178, y: 90 },
  { slug: 'dezilata', label: 'Dezilata', sub: 'Chitukula', x: 282, y: 132 },
  { slug: 'zakeyu', label: 'Zakeyu', sub: 'Chitukula', x: 296, y: 158 },
  { slug: 'hendrix', label: 'Hendrix', sub: 'Chitukula', x: 274, y: 178 },
  { slug: 'memory', label: 'Memory', sub: 'Malili', x: 96, y: 296 },
  { slug: 'john', label: 'John', sub: 'Malili', x: 116, y: 318 },
];

// approximated road path Warehouse → Chitukula cluster → south to Malili
const PATH_D =
  'M178 90 C 220 110, 250 120, 282 132 C 300 145, 305 152, 296 158 C 290 170, 282 174, 274 178 C 230 195, 180 220, 150 250 C 130 270, 110 285, 96 296 C 100 310, 110 315, 116 318';

export function JourneyMap() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="relative overflow-hidden rounded-3xl border border-rule bg-white">
      <svg
        viewBox="0 0 360 380"
        className="block h-auto w-full"
        role="img"
        aria-label="Map of the day's stops around Lilongwe"
      >
        {/* warm paper-tinted background */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EFEFE8" strokeWidth="0.6" />
          </pattern>
          <radialGradient id="glow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFF8D6" />
            <stop offset="100%" stopColor="#FAFAF7" />
          </radialGradient>
        </defs>
        <rect width="360" height="380" fill="url(#glow)" />
        <rect width="360" height="380" fill="url(#grid)" />

        {/* compass + label */}
        <g transform="translate(322 32)" opacity="0.6">
          <circle r="14" fill="none" stroke="#1A1A1A" strokeWidth="1" />
          <path d="M0 -10 L3 0 L0 10 L-3 0 Z" fill="#1A1A1A" />
          <text y="-18" textAnchor="middle" fontSize="8" fill="#1A1A1A" fontFamily="ui-sans-serif">
            N
          </text>
        </g>

        <text x="20" y="34" fontSize="10" letterSpacing="2" fill="#6B6B6B" fontFamily="ui-sans-serif">
          LILONGWE
        </text>
        <text x="20" y="50" fontSize="22" fill="#1A1A1A" fontFamily="ui-serif" fontStyle="italic">
          14 May 2026
        </text>

        {/* abstract regions */}
        <g opacity="0.5">
          <ellipse cx="170" cy="100" rx="55" ry="34" fill="#FFF3B0" />
          <text x="170" y="62" textAnchor="middle" fontSize="9" fill="#6B6B6B" letterSpacing="1.5">
            AREA 28
          </text>

          <ellipse cx="282" cy="158" rx="50" ry="42" fill="#FFE48A" />
          <text x="282" y="112" textAnchor="middle" fontSize="9" fill="#6B6B6B" letterSpacing="1.5">
            TA CHITUKULA
          </text>

          <ellipse cx="106" cy="306" rx="58" ry="38" fill="#FFE48A" />
          <text x="106" y="358" textAnchor="middle" fontSize="9" fill="#6B6B6B" letterSpacing="1.5">
            TA MALILI
          </text>
        </g>

        {/* route */}
        <path
          d={PATH_D}
          stroke="#1A1A1A"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          fill="none"
        />

        {/* pins */}
        {PINS.map((p, i) => {
          const isActive = active === p.slug;
          return (
            <g
              key={p.slug}
              className="cursor-pointer"
              onMouseEnter={() => setActive(p.slug)}
              onMouseLeave={() => setActive(null)}
              onTouchStart={() => setActive(p.slug)}
            >
              <Link href={`/journey/${p.slug}`}>
                {/* halo */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isActive ? 18 : 14}
                  fill="#FFD400"
                  opacity="0.35"
                  className="transition-all"
                />
                <circle cx={p.x} cy={p.y} r={7} fill="#1A1A1A" />
                <circle cx={p.x} cy={p.y} r={2.5} fill="#FFD400" />
                <text
                  x={p.x + 12}
                  y={p.y - 8}
                  fontSize="11"
                  fontFamily="ui-serif"
                  fill="#1A1A1A"
                >
                  {p.label}
                </text>
                <text
                  x={p.x + 12}
                  y={p.y + 4}
                  fontSize="8"
                  fontFamily="ui-sans-serif"
                  fill="#6B6B6B"
                  letterSpacing="1"
                >
                  {String(i + 1).padStart(2, '0')} · {p.sub}
                </text>
              </Link>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
