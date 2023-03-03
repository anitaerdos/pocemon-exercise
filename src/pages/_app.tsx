import { CatchedProvider } from "@/context/catched.context";
import { SelectedTypeProvider } from "@/context/selectedType.context";
import { TypesProvider } from "@/context/types.context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CatchedProvider>
      <SelectedTypeProvider>
        <TypesProvider>
          <Component {...pageProps} />
        </TypesProvider>
      </SelectedTypeProvider>
    </CatchedProvider>
  );
}
