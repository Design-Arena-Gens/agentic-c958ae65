import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Candlestick Chart Expert System',
  description:
    'Interactive expert system that teaches candlestick patterns, screening strategies, and decision support for traders.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx('bg-background text-foreground', inter.variable)}>
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
