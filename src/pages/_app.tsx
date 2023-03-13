import '@/styles/globals.scss';
// import '@components/header/Styles.module.scss';
import { Provider } from 'react-redux';
import store from "../../store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
let presistor=persistStore(store);
import type { AppProps } from 'next/app';
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>Shoppy</title>
        <meta name="description" content="Shoppy-online shopping service for all of your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


  <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>
      <Component {...pageProps} />
      </PersistGate>
  </Provider>
    </>

  );
}

