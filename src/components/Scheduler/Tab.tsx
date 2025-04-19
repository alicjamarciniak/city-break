import { TabsTrigger } from '@radix-ui/react-tabs';
import { format } from 'date-fns';

import { type Group } from '.';
import { PropsWithChildren } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { getDateLocale } from '@/i18n/dateLocaleMapper';
import { showWIPToast } from '@/utils/sonner/toast';

type TabProps = PropsWithChildren<{
  group: Group;
  hasEndDate?: boolean;
}>;

const Tab = ({ group, hasEndDate = false, children }: TabProps) => {
  const t = useTranslations('Scheduler');
  const locale = useLocale();
  const dateLocale = getDateLocale(locale);

  return (
    <TabsTrigger
      className="group flex basis-[49%] shrink-0 grow-0 flex-[1] bg-yukon-background/50 text-yukon-foreground 
      rounded-none pt-6 lg:pt-10 px-6 lg:px-10 pb-0 data-[state=active]:bg-yukon-background 
      data-[state=active]:text-yukon-foreground w-full [&data-[state=active]>.join-btn]:bg-black"
      value={group.groupName}
    >
      <div className="text-left w-full">
        <div className="flex flex-row gap-3 lg:gap-5 ">
          <div className="text-2xl lg:text-5xl font-thin">
            {format(group.startDate, 'dd')}
            <span className="text-2xs lg:text-sm font-normal uppercase block">
              {format(group.startDate, 'MMMM', { locale: dateLocale })}
            </span>
          </div>

          {hasEndDate ? (
            <>
              <span className="text-2xl lg:text-5xl font-thin">-</span>
              <div className="text-2xl lg:text-5xl font-thin">
                {format(group.endDate, 'dd')}
                <span className="text-2xs lg:text-sm font-normal uppercase block">
                  {format(group.endDate, 'MMMM', { locale: dateLocale })}
                </span>
              </div>
            </>
          ) : null}
        </div>

        <p className="font-thin text-xs lg:text-lg mt-3 lg:mt-6 mb-3 lg:mb-6 text-wrap line-clamp-1 lg:line-clamp-2 lg:w-[200px]">
          {group.groupName}
        </p>

        {children}

        <div className="mt-0 lg:mt-6 flex justify-center pb-4 relative h-16">
          <div
            className="join-btn text-xs lg:text-base rounded-none w-full border-white border p-2 lg:p-3 text-center absolute 
            bottom-3 bg-gradient-to-br from-white/20 from-20% to-white/10 transition-all
             hover:font-semibold hover:bottom-4 hover:shadow-md hover:shadow-white/60
             group-data-[state=inactive]:pointer-events-none"
            onClick={showWIPToast}
          >
            {t('joinBtn')}
          </div>
        </div>
      </div>
    </TabsTrigger>
  );
};

export default Tab;
