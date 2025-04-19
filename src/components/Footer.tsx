'use client';

import PlayButton from '@/assets/svg/PlayButton';
import Link from 'next/link';
import { useRef } from 'react';
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useTranslations } from 'next-intl';
import { handleWIPLinks, showWIPToast } from '@/utils/sonner/toast';

const Footer = () => {
  const t = useTranslations('Footer');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="bg-swamp-background text-swamp-foreground mt-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-6 lg:px-36 py-24 flex gap-10 flex-col lg:flex-row">
        <div className="basis-1/5">
          <div className="font-bold font-miguel text-2xl tracking-[1px] text-yukon-background">
            {t('navLinksTitle')}
          </div>
          <div className="flex flex-col gap-2 mt-5 lg:font-thin">
            <Link href="/">{t('linkHome')}</Link>
            <Link href="/about" onClick={handleWIPLinks}>
              {t('linkAbout')}
            </Link>
            <Link href="/services" onClick={handleWIPLinks}>
              {t('linkServices')}
            </Link>
            <Link href="/contact" onClick={handleWIPLinks}>
              {t('linkContact')}
            </Link>
          </div>
        </div>

        <div className="basis-2/5">
          <div className="font-bold font-miguel text-2xl tracking-[1px] text-yukon-background">
            {t('newsletterTitle')}
          </div>
          <div className="mt-5 mb-4 lg:font-thin">
            <span className="font-extrabold lg:font-bold">
              {`${t('newsletterText1')} `}
            </span>
            {`${t('newsletterText2')} `}
            <span className="font-extrabold lg:font-bold">
              {`${t('newsletterText3')} `}
            </span>
            {`${t('newsletterText4')} `}
            <span className="font-extrabold lg:font-bold">
              {`${t('newsletterText5')} `}
            </span>
            {t('newsletterText6')}
          </div>
          <div className="flex flex-row lg:flex-col gap-2 lg:gap-4">
            <Input
              className="border-yukon-background border-2 max-w-[360px]"
              placeholder={t('newsletterPlaceholder')}
              type="text"
            />
            <Button
              className="rounded-full py-5 px-5 lg:w-min lg:px-16 drop-shadow-md !bg-yukon-background"
              onClick={showWIPToast}
              variant="default"
            >
              {t('newsletterBtn')}
            </Button>
          </div>
        </div>

        <div className="basis-2/5 justify-center relative hidden lg:flex">
          <div className="absolute bg-white/30 top-[3px] bottom-[3px] left-[calc(10%+3px)] right-[calc(10%+3px)] flex justify-center items-center">
            <PlayButton color="hsl(var(--yukon-background))" size={75} />
          </div>
          <video
            className="w-[80%] border-yukon-background rounded-md border-[3px]"
            loop
            muted
            ref={videoRef}
          >
            <source src="/videos/team.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        className="border-t-2 px-4 lg:px-14 py-5 flex bg-yukon-background/20 border-yukon-background text-yukon-background 
      text-sm justify-between items-center flex-wrap"
      >
        <div className="flex gap-4 basis-1/4 order-1">
          <TwitterLogoIcon height={25} onClick={showWIPToast} width={25} />
          <LinkedInLogoIcon height={25} onClick={showWIPToast} width={25} />
          <InstagramLogoIcon height={25} onClick={showWIPToast} width={25} />
        </div>

        <div
          className="flex italic lg:not-italic lg:font-thin order-3 w-full lg:w-auto 
        text-xs lg:text-sm justify-center lg:order-2 mt-4 lg:mt-0"
        >
          {t('copyrightText')}
        </div>

        <div className="flex gap-4 lg:basis-1/4 lg:w-auto lg:justify-end order-2 lg:order-3">
          <Link href="/terms-of-service" onClick={handleWIPLinks}>
            {t('linkTermsOfService')}
          </Link>
          <div>|</div>
          <Link href="/privacy-policy" onClick={handleWIPLinks}>
            {t('linkPrivacyPolicy')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
