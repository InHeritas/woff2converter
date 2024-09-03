import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>WOFF2 Converter</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default Home;
