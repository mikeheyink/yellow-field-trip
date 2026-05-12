import type { Metadata, Viewport } from 'next';
import './globals.css';
import { NavBar } from '@/components/NavBar';
import { PasswordGate } from '@/components/PasswordGate';

export const metadata: Metadata = {
  title: 'Yellow × Acumen — Field Trip',
  description:
    'A companion for the Acumen field trip with Yellow Malawi — Lilongwe, 14 May 2026.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAFAF7',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <PasswordGate>
          <main className="mx-auto w-full max-w-[480px] px-5 pb-28 pt-6">
            {children}
          </main>
          <NavBar />
        </PasswordGate>
      </body>
    </html>
  );
}
