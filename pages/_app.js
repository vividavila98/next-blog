import Header from "../components/Navigation";
import Footer from "../components/Footer";
import { useEffect } from 'react';
import "../styles/globals.css";
import Head from "next/head";
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    hljs.highlightAll();
});

  return (
    <>
    <Head>
        <title>Viviana Davila | Blog </title>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/shades-of-purple.min.css"></link>
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
