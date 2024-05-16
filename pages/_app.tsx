import { Layout } from "@/components/layout";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "@/styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
