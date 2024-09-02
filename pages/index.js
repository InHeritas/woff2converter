import Head from 'next/head';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>WOFF2 Converter</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#ffffff" />
            </Head>

            <Header />
            <Main />
            <Footer />
        </>
    );
}
