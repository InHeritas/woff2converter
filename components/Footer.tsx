import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Footer: React.FC = () => {
    const { t } = useTranslation('common');
    return (
        <footer className="container">
            <a href="https://www.inheritas.dev/mytype/support" className='underline'>{t('support')}</a>
            <div className='text-sm mt-3'>
                ❤
                <br />
                {t('footer1')}
                <br />
                {t('footer2')}
            </div>
        </footer>
    );
};

export default Footer;
