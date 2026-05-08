'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/journey', label: 'Today' },
  { href: '/malawi', label: 'Malawi' },
  { href: '/story', label: 'Yellow' },
];

export function NavBar() {
  const pathname = usePathname() || '/';
  if (pathname === '/') return null;
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-[480px] items-stretch justify-between px-2">
        {items.map((it) => {
          const active = pathname.startsWith(it.href);
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`flex-1 py-3 text-center text-sm tracking-wide ${
                active ? 'text-ink' : 'text-muted'
              }`}
            >
              <span
                className={`inline-block border-b-2 pb-1 ${
                  active ? 'border-yellow' : 'border-transparent'
                }`}
              >
                {it.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
