module.exports = {
    locales: ['en', 'ko'], // 지원 언어 목록
    defaultLocale: 'en', // 기본 언어 설정(영어로 설정 후 한국어 사용자 일 때만 한국어로 표시)
    pages: {
        '*': ['common'], // 모든 페이지에 대해서 common.json 사용
    },
    loadLocaleFrom: (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
    // 번역 파일의 경로를 ../public/locales/{lang}/{ns}.json으로 설정
};
