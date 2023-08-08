import { Providers } from "@/redux/providers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "./layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Providers>
  );
}
