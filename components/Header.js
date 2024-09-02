import React, { useEffect, useState } from 'react';
import { Label, Box } from '@primer/react';
import { Banner } from '@primer/react/experimental';

const Header = () => {
    // 클라이언트 측에서만 렌더링하도록 상태 사용
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <header>
            <h3>WOFF2 Converter</h3>
            <div>
                ttf, otf 폰트 파일을 woff2로 변환합니다.
            </div>
            <br />
            <div>
                {/* 클라이언트에서만 Banner 컴포넌트를 렌더링 */}
                {isMounted && (
                    <>
                        <Banner title="Info" hideTitle variant="info">
                            파일은 서버에 전송되거나 저장되지 않습니다.
                        </Banner>
                        <br />
                    </>
                )}
                <Box
                    sx={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderStyle: 'solid',
                        borderColor: 'border.default',
                        p: 3,
                    }}
                >
                    <Label style={{ margin: 5 }} variant="accent">
                        TIP
                    </Label>
                    <p className='tipText'>woff2는 압축된 폰트 파일 형식으로,</p>
                    <p className='tipText'>ttf, otf보다 작은 용량을 차지하며</p>
                    <p className='tipText'>더 빠른 웹페이지 로딩을 가능하게 합니다.</p>
                </Box>
            </div>
        </header>
    );
};

export default Header;
