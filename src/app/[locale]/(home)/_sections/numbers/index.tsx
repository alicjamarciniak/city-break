import { type Review } from '@/app/types/Review';
import TestimonialGrid from '@/components/TestimonialGrid';
import { RocketIcon, PersonIcon, HeartIcon } from '@radix-ui/react-icons';
import { getLocale, getTranslations } from 'next-intl/server';
import Reviews from './Reviews';
import AnimatedCounter from '@/components/AnimatedCounter';
import SeeMoreBtn from './SeeMoreBtn';

const getReviews = async (): Promise<Review[]> => {
  const locale = await getLocale();
  const response = await fetch(
    `http://localhost:3000/api/contentful/entries?locale=${locale}&contentType=review`,
    {
      method: 'GET',
    },
  );
  const data = await response.json();
  return data;
};

const NumbersSection = async () => {
  const t = await getTranslations('HomePage');
  const reviews = await getReviews();

  return (
    <div className="text-dark-foreground text-center">
      <div className="bg-gradient-to-t from-dark-background from-20% to-dark-background/90 px-6 py-12 lg:p-12">
        <h4 className="text-xl mt-8 mb-2">{t('numbers.subtitle')}</h4>
        <h3 className="text-lg ">
          {t('numbers.titleStart')}

          <span className="text-4xl font-bold px-3 text-special-light">
            <AnimatedCounter to={2500} />+
          </span>
          {t('numbers.titleEnd')}
        </h3>
        <div className="justify-center gap-3 lg:gap-20 pt-14 flex">
          <div className="w-[200px] flex justify-start lg:justify-center items-center flex-col gap-1 p-0 lg:p-5">
            <PersonIcon width={40} height={40} className="text-special-light" />
            <div className="text-2xl font-extrabold">
              <AnimatedCounter to={1800} />+
            </div>
            <div className="text-sm font-bold">{t('numbers.happyClients')}</div>
          </div>
          <div className="w-[200px] flex justify-start lg:justify-center items-center flex-col gap-1 p-0 lg:p-5">
            <RocketIcon height={40} width={40} className="text-special-light" />
            <div className="text-2xl font-extrabold">
              <AnimatedCounter to={147} />
            </div>
            <div className="text-sm font-bold">
              {t('numbers.adventurePrograms')}
            </div>
          </div>
          <div className="w-[200px] flex justify-start lg:justify-center items-center flex-col gap-1 p-0 lg:p-5">
            <HeartIcon width={40} height={40} className="text-special-light" />
            <div className="text-2xl font-extrabold">
              <AnimatedCounter to={17480} />
            </div>
            <div className="text-sm font-bold">{t('numbers.hoursOfJoy')}</div>
          </div>
        </div>
      </div>

      <div
        className={`bg-dark-background overflow-hidden relative max-h-[500px] flex justify-center py-12 px-6 lg:p-12`}
      >
        <div className="overflow-hidden bg-gradient-to-t from-dark-background to-40% to-transparent absolute z-10 top-0 left-0 right-0 bottom-0"></div>

        <Reviews>
          <TestimonialGrid reviews={reviews} />
        </Reviews>

        <div className="absolute flex justify-center bottom-0 z-20">
          <SeeMoreBtn text={t('numbers.seeMore')} />
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
