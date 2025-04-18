import { StickyNav } from '@/components';

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
