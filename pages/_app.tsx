import { Layout } from "@/components/layout";
import type { AppProps } from "next/app";
import { Inter, Roboto } from "next/font/google";
import "@/styles/index.css";

const openSans = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["cyrillic"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
