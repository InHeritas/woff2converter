import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoCircledIcon } from '@radix-ui/react-icons';

const Header: React.FC = () => {
    const { t } = useTranslation('common');

    return (
        <header>
            <div className='text-xl font-bold m-5'>{t('pageTitle')}</div>
            <div>
                {t('description')}
            </div>
            <br />
            <div>
                <Alert className='bg-blue-50 border-blue-200 text-left mb-5'>
                    <InfoCircledIcon color='#4068d3' className="h-4 w-4" />
                    <AlertTitle className='font-semibold'>{t('fileAlertTitle')}</AlertTitle>
                    <AlertDescription className='text-sm'>
                        {t('fileAlertMessage')}
                    </AlertDescription>
                </Alert>
                {/* <Alert className='bg-amber-50 border-amber-200 text-left mb-5'>
                    <InfoCircledIcon color='#a35821' className="h-4 w-4" />
                    <AlertTitle className='font-semibold'>{t('ios18AlertTitle')}</AlertTitle>
                    <AlertDescription className='text-sm break-keep'>
                        {t('ios18AlertMessage1')}<br /> <br />
                        {t('ios18AlertMessage2')}<br /> <br />
                        {t('ios18AlertMessage3')}
                    </AlertDescription>
                </Alert> */}
            </div>
        </header>
    );
};

export default Header;
