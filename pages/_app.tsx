import { Layout } from '@/components/layout';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import '@/styles/index.css';
import { Provider } from 'react-redux';
import { store } from '@/store';

const openSans = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['cyrillic'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </main>
  );
}
