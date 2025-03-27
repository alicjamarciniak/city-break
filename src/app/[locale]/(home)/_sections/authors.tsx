'use client';

import { ProfileBox } from '@/components';
import useMediaQueries from '@/hooks/useMediaQueries';
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

const AuthorsSection = () => {
  const t = useTranslations('HomePage');
  const { isMdDevice: isMobile } = useMediaQueries();
  const iconSize = isMobile ? 16 : 25;

  const socialIcons = [
    <TwitterLogoIcon width={iconSize} height={iconSize} />,
    <LinkedInLogoIcon width={iconSize} height={iconSize} />,
    <InstagramLogoIcon width={iconSize} height={iconSize} />,
  ];

  return (
    <div className="bg-pink-background px-6 lg:px-20 py-32 flex flex-col lg:flex-row justify-evenly">
      <div>
        <h4 className="text-2xl lg:mt-8 font-thin mb-10">
          <span className="font-oswald text-8xl font-bold uppercase block">
            {t('authors.title')}
          </span>
          {t('authors.subtitle')}
        </h4>
      </div>
      <div className="flex flex-row gap-6 lg:gap-16">
        <div className="w-[150px] lg:w-[300px]">
          <ProfileBox
            profileUrl="mira-kowalska"
            firstName="Mira"
            lastName="Kowalska"
            text={t('authors.miraText')}
            src="/images/Mira.jpg"
            socialIcons={socialIcons}
          />
        </div>
        <div className="w-[150px] lg:w-[300px]">
          <ProfileBox
            profileUrl="artem-bondar"
            firstName="Artem"
            lastName="Bondar"
            text={t('authors.artemText')}
            src="/images/Artem.jpg"
            socialIcons={socialIcons}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorsSection;
