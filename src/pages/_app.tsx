import { GlobalLayout } from "@/components/GlobalLayout/GlobalLayout";
import GlobalStyles from "@/styles/global";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </>
  );
}

export default MyApp;
