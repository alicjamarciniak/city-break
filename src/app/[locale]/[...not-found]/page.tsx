import NotFoundLottieAnimation from '@/components/lottie/NotFound';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ReportIssueBtn from './ReportIssueBtn';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="h-[100vh] w-[100vw] flex lg:flex-row flex-col items-center bg-pink-background/50 lg:px-28">
      <div className="flex lg:w-[65%] h-auto self-center">
        <NotFoundLottieAnimation />
      </div>
      <div className="flex flex-col lg:items-start gap-6 px-4" id="container">
        <h4 className="lg:text-7xl text-4xl font-miguel px-2 uppercase">
          <span className="text-primary">{t('titleText1')}</span>
          <span className="whitespace-nowrap">{` ${t('titleText2')}`}</span>
        </h4>
        <h5 className="lg:text-lg text-sm px-2 break-words ">
          <span className="block pb-2">{t('subtitleText1')}</span>
          {` ${t('subtitleText2')}`}
        </h5>
        <div className="flex flex-row lg:gap-10 gap-6 lg:mt-10 mt-5 lg:mx-10 justify-center">
          <Link href="/">
            <Button
              className="px-8 lg:px-10 lg:py-6 lg:min-w-48"
              variant="special"
            >
              {t('homeBtn')}
            </Button>
          </Link>
          <ReportIssueBtn text={t('reportBtn')} />
        </div>
      </div>
    </div>
  );
}
