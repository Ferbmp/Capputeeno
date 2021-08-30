import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../services/apollo-client";
import { GlobalStyle } from "../styles/global";
import { Header } from "../components/Header/component";
import { CartProvider } from "../context/CartContext";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <CartProvider>
         <ApolloProvider client={client}>
            <Header />
            <Component {...pageProps} />
            <GlobalStyle />
         </ApolloProvider>
      </CartProvider>
   );
}
export default MyApp;
