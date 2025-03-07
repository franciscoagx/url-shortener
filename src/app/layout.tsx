import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { BannerSection } from '@/components/BannerSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const roboto = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shorty',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <BannerSection />
        <Footer />
      </body>
    </html>
  );
}
