import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <InnerComponent Component={Component} pageProps={pageProps} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

function InnerComponent({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
