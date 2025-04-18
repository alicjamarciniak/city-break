import Video from './Video';
import SearchBar from './SearchBar';
import RegionSelect from './RegionSelect';
import { useTranslations } from 'next-intl';
import ExploreBtn from './ExploreBtn';

const HeroSection = () => {
  const t = useTranslations('HomePage');

  return (
    <section className="h-[100vh] lg:h-[calc(100vh-60px)] relative">
      <div className="relative h-full overflow-hidden">
        <Video />

        <div className="flex flex-col justify-center relative z-10">
          <div className="pt-[20vh] md:pt-[28vh] lg:pt-[14vh] text-center text-white">
            <h1 className="font-thin text-xl lg:text-4xl">
              {t('hero.subtitle')}
              <span className="animate-slideUp font-bold font-miguel text-primary block mt-4 mb-6 [text-shadow:_6px_6px_6px_rgba(0,0,0,0.4)] text-[3.5rem] leading-[1] lg:text-8xl tracking-[3px]">
                {t('hero.mainTitle')}
              </span>
            </h1>
            <p className="px-7 text-sm lg:text-base">
              {t('hero.description1')}
              <br />
              <span className="hidden lg:inline">{t('hero.description2')}</span>
            </p>
            <ExploreBtn text={t('hero.exploreBtn')} />
          </div>

          <SearchBar>
            <RegionSelect />
          </SearchBar>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)]"></div>
    </section>
  );
};

export default HeroSection;
