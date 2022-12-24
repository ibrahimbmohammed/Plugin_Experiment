import "../styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.min.css";
import { persistor, store } from "@store";
import { RoutingListener } from "../components/routeListerner";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@apolloClient";
import { getAuthToken } from "@lib/utils/cookies";
import apolloClientFactory from "@apolloClientFactory";
import { PostMessageListener } from "@lib/plugin-logic/parent-messanger/PostMessageListener";
import { IFrameRouterContextProvider } from "@lib/plugin-logic/plugin-context";
import PageLoadingSpinner from "@atoms/a-page-loading-spinner";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType | any;
  };
};

const MyApp = ({ Component, pageProps }: ComponentWithPageLayout) => {
  // the reason for this hack is because apolloClient
  // doens't get userToken on client side when on production build
  const token = getAuthToken();
  let client: any | undefined;
  if (token !== undefined) {
    client = apolloClientFactory(token);
  } else {
    client = apolloClient;
  }
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={<PageLoadingSpinner />} persistor={persistor}>
          <IFrameRouterContextProvider>
            <PostMessageListener />
            {Component.PageLayout ? (
              <Component.PageLayout>
                <>
                  <RoutingListener />
                  <Component {...pageProps} />
                </>
              </Component.PageLayout>
            ) : (
              <>
                <RoutingListener />
                <Component {...pageProps} />
              </>
            )}
          </IFrameRouterContextProvider>
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default MyApp;
