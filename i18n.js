module.exports = {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
    pages: {
        '*': ['common'],
    },
    loadLocaleFrom: (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
};
