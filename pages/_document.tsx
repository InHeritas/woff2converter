import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <Script src="/js/app.js" strategy="beforeInteractive" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <Analytics />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
