import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bloomme | Give people their flowers',
  description: 'Bloomme is a social app built around appreciation, positivity, and meaningful recognition.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
