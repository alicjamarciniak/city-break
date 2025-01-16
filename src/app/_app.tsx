import type { AppProps } from 'next/app';
import RootLayout from './layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <main>
        <Component {...pageProps} />
      </main>
    </RootLayout>
  );
}
