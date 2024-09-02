import React from 'react';
import Lottie from "react-lottie-player";
import loadingCircle from "../public/lottie/loading-circle.json";
import { Button } from '@primer/react'

const Main = () => {
    return (
        <main className="container">
            <div id="input-select-zone">
                <div>
                    <input id="input-file" type="file" style={{ display: 'none' }} multiple />
                    <Button id="select-file-button">폰트 파일 선택</Button>
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
                <Button id="convert-button" variant="primary">변환</Button>
            </div>

            <div id="spinner" className="spinner-off">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span>변환 중</span>
                    <Lottie style={{ height: 50, width: 50 }} loop animationData={loadingCircle} play />
                </div>

                <div>
                    큰 용량(수 MB)의 폰트 변환 시,
                    <br />
                    최대 1분이 소요될 수 있습니다.
                </div>
            </div>
            <div id="convert-result-container"></div>
            <div id="error-message-container" className="error-message-off"></div>
        </main>
    );
};

export default Main;
