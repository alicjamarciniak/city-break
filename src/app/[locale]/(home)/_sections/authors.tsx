'use client';

import { ProfileBox } from '@/components';
import useMediaQueries from '@/hooks/useMediaQueries';
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const AuthorsSection = () => {
  const t = useTranslations('HomePage');
  const { isMdDevice: isMobile } = useMediaQueries();
  const iconSize = isMobile ? 16 : 25;

  const socialIcons = [
    <TwitterLogoIcon height={iconSize} key="twitter-icon" width={iconSize} />,
    <LinkedInLogoIcon height={iconSize} key="linkedin-icon" width={iconSize} />,
    <InstagramLogoIcon
      height={iconSize}
      key="instagram-icon"
      width={iconSize}
    />,
  ];

  return (
    <div className="bg-pink-background px-6 lg:px-20 py-32 flex flex-col md:flex-row justify-evenly overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.5 }}
        viewport={{ once: false }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h4 className="text-2xl lg:text-4xl lg:mt-8 font-thin mb-10">
          <span
            className="font-oswald text-8xl font-bold uppercase block 
          md:scale-y-[1.5] md:scale-x-[1] md:mt-[10px] md:mb-[25px] md:ml-[-5px]
          lg:scale-y-[3] lg:scale-x-[1.5] lg:mt-[60px] lg:mb-[90px] lg:ml-[74px]"
          >
            {t('authors.title')}
          </span>
          {t('authors.subtitle')}
        </h4>
      </motion.div>
      <motion.div
        className="flex flex-row gap-6 lg:gap-16"
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.5 }}
        viewport={{ once: false }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="w-[150px] lg:w-[300px]">
          <ProfileBox
            firstName="Mira"
            lastName="Kowalska"
            profileUrl="mira-kowalska"
            socialIcons={socialIcons}
            src="/images/Mira.jpg"
            text={t('authors.miraText')}
          />
        </div>
        <div className="w-[150px] lg:w-[300px]">
          <ProfileBox
            firstName="Artem"
            lastName="Bondar"
            profileUrl="artem-bondar"
            socialIcons={socialIcons}
            src="/images/Artem.jpg"
            text={t('authors.artemText')}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AuthorsSection;
