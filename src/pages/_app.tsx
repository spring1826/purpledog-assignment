import { GlobalLayout } from "@/components/GlobalLayout/GlobalLayout";
import GlobalStyles from "@/styles/global";
import Themes from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Themes}>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
