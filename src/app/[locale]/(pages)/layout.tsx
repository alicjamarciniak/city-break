import { StickyNav } from '@/components';

// const robotoFont = Roboto({
//   weight: ['300', '500', '700'],
//   subsets: ['latin'],
//   variable: '--font-roboto',
// });

// const oswaldFont = Oswald({
//   weight: ['400'],
//   subsets: ['latin'],
//   variable: '--font-oswald',
// });

// const miguelDeNorthernFont = localFont({
//   src: '../fonts/MiguelDeNorthern.ttf',
//   variable: '--font-miguel-de-northern',
// });

// const geistSans = localFont({
//   src: '../fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });

// const geistMono = localFont({
//   src: '../fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

// export const metadata: Metadata = {
//   title: 'City breakers',
//   description: 'Find where the thrill begins',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StickyNav />
      <div className="lg:mt-[60px]">
        <section>
          <div className="mt-[90px] lg:mt-[60px] mb-[80px] px-6 lg:px-40">
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
