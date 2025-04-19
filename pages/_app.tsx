import '../styles/global.css';
import { AppProps } from 'next/app';
import { Analytics } from "@vercel/analytics/react";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    );
};

export default App;
