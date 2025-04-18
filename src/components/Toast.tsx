import React from 'react';
import WIPLottieAnimation from './lottie/WorkInProgress';
import { useTranslations } from 'next-intl';

const Toast = () => {
  const t = useTranslations('Common');

  return (
    <div className="flex items-center gap-4 h-20">
      <div className="flex flex-[1]">
        <WIPLottieAnimation />
      </div>
      <div className="flex flex-[3] flex-col">
        <p className="font-medium">{t('WIPText1')}</p>
        <p className="text-sm text-muted-foreground">{t('WIPText2')}</p>
      </div>
    </div>
  );
};

export default Toast;
