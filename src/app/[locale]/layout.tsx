import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import './globals.css';
import { Roboto, Oswald } from 'next/font/google';

import { Footer } from '@/components';
import { Toaster } from 'sonner';

const robotoFont = Roboto({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const oswaldFont = Oswald({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-oswald',
});

const miguelDeNorthernFont = localFont({
  src: '../fonts/MiguelDeNorthern.ttf',
  variable: '--font-miguel-de-northern',
});

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'City breakers',
  description: 'Find where the thrill begins',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${miguelDeNorthernFont.variable} ${robotoFont.variable} ${oswaldFont.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Toaster position="top-right" closeButton />

          <div className="flex flex-col min-h-[100vh] relative">
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
