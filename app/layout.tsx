import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  metadataBase: new URL('https://spiceup.co'),
  title: 'The Dabba Story | Fresh home-style tiffin service every day',
  description:
    'Fresh, home-style tiffin service delivered to your door. We bring a clean steel tiffin on day one, take the used one on day two, and replace it with a new fresh tiffin. Choose a 7-day or 30-day subscription.',
  keywords: ['tiffin subscription', 'home style food', 'meal delivery', 'Indian lunch delivery'],
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
