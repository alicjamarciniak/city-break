'use client';

import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { handleWIPLinks } from '@/utils/sonner/toast';

const CookieConsentBanner = () => {
  const t = useTranslations('Common');

  return (
    <CookieConsent
      buttonStyle={{
        backgroundColor: 'hsl(var(--special))',
        color: '#fff',
        fontSize: '14px',
        padding: '8px 24px',
        borderRadius: '14px',
      }}
      buttonText={t('acceptAll')}
      buttonWrapperClasses="flex flex-row space-around"
      containerClasses="lg:px-16 lg:py-8"
      cookieName="cityBreakerCookieConsent"
      declineButtonStyle={{
        backgroundColor: 'hsl(var(--yukon-background))',
        color: '#fff',
        fontSize: '14px',
        padding: '8px 24px',
        borderRadius: '14px',
      }}
      declineButtonText={t('decline')}
      enableDeclineButton
      expires={365}
      flipButtons
      location="bottom"
      onAccept={() => {
        console.log('Cookies accepted');
      }}
      onDecline={() => {
        console.log('Cookies declined');
      }}
      style={{
        background: '#fff',
        justifyContent: 'center',
        color: '#000',
        boxShadow: '0px 0px 33px 12px rgba(66, 68, 90, 0.3)',
        width: '100%',
        position: 'sticky',
        bottom: 0,
        left: 0,
        zIndex: 9999,
        maxWidth: '100vw',
      }}
    >
      <div className="flex flex-row lg:gap-10 gap-5 lg:mx-6">
        <Image
          alt="cookie"
          className="lg:h-[50px] lg:w-[50px] h-[40px] w-[40px] lg:mt-0 mt-2"
          height={50}
          src="/images/cookie.png"
          width={50}
        />
        <p className="lg:text-base text-sm px-2 break-words">
          {t('cookieText1')}
          <br />
          {`${t('cookieText2')} `}
          <Link
            className="inline text-primary lowercase"
            href="#"
            onClick={handleWIPLinks}
          >
            {t('linkPrivacyPolicy')}
          </Link>
        </p>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
