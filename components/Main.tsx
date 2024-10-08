import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client'; // createRoot는 이곳에서 가져옵니다.
import Lottie from "react-lottie-player";
import loadingCircle from "../public/lottie/loading-circle.json";
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import { MagicWandIcon, LetterCaseCapitalizeIcon, DownloadIcon } from '@radix-ui/react-icons';
import useTranslation from 'next-translate/useTranslation';

const Main: React.FC = () => {
    const { t } = useTranslation('common');

    useEffect(() => {
        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeName === 'A' && node.parentElement?.id === 'convert-result-container') {
                            const aElement = node as HTMLAnchorElement;
                            const buttonWrapper = document.createElement('div');

                            const root = ReactDOM.createRoot(buttonWrapper);
                            root.render(
                                <Button asChild className="bg-blue-500 text-white hover:bg-blue-600">
                                    <Link href={aElement.href} download={aElement.download}>
                                        <DownloadIcon className="mr-3 h-4 w-4" />
                                        {aElement.textContent}
                                    </Link>
                                </Button>
                            );

                            aElement.replaceWith(buttonWrapper);
                        }
                    });
                }
            });
        });

        const targetNode = document.getElementById('convert-result-container');
        if (targetNode) {
            observer.observe(targetNode, {
                childList: true,
                subtree: true,
            });
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <main className="container" >
            <div id="input-select-zone">
                <div>
                    <input id="input-file" type="file" style={{ display: 'none' }} multiple />
                    <Button id="select-file-button">
                        <LetterCaseCapitalizeIcon className="mr-3 h-4 w-4" />{t('selectFiles')}
                    </Button>
                </div>
            </div>

            <div id="selected-font-info"></div>

            <div id="format-select-container" style={{ display: 'none' }}>
                <input
                    type="radio"
                    className="input-radio"
                    id="output-format-woff2"
                    name="output-format"
                    value="woff2"
                    defaultChecked
                />
                <label htmlFor="output-format-woff2">WOFF2</label>
            </div>

            <div id="convert-button-container">
                <Button id="convert-button" className="bg-green-600 text-white hover:bg-green-700">
                    <MagicWandIcon className="mr-3 h-4 w-4" />{t('convert')}
                </Button>
            </div>

            <div id="spinner" className="spinner-off">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span>{t('processing')}</span>
                    <Lottie style={{ height: 50, width: 50 }} loop animationData={loadingCircle} play />
                </div>

                <div className='text-sm font-medium'>
                    {t('timeNotice1')}
                    <br />
                    {t('timeNotice2')}
                </div>
            </div>
            <div id="convert-result-container"></div>
            <div id="error-message-container" className="error-message-off"></div>
        </main>
    );
};

export default Main;
