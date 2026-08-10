import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thedabbastory.in'),
 
  title: "The Dabba Story | Fresh Home-Style Tiffin Service",

  description:
    "The Dabba Story brings fresh, home-style meals to your doorstep. Choose from flexible 7-day and 30-day lunch or dinner subscriptions, served in reusable steel tiffins.",

  keywords: [
    "tiffin service",
    "home-style food",
    "meal delivery",
    "lunch subscription",
    "dinner subscription",
    "The Dabba Story",
  ],

  icons: {
    icon: "/favicon1.png",
     shortcut: "/favicon1.png",
    apple: "/apple-touch-icon.png", // optional
  },
  openGraph: {
    title: 'The Dabba Story | Fresh home-style tiffin service every day',
    description:
      'Better lunches for busy days. Fresh tiffin service with reusable steel tiffins, daily exchange, and zero hassle.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${fraunces.variable}`}>{children}</body>
    </html>
  );
}
