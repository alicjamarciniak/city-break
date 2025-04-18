import { StickyNav } from '@/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StickyNav isHomepage />
      <div className="lg:mt-[60px]">
        <section>{children}</section>
      </div>
    </>
  );
}
