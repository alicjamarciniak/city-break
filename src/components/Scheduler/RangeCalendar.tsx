'use client';

import { Tabs, TabsContent, TabsList } from '../ui/tabs';
import { format } from 'date-fns';
import { type CalendarProps } from '.';
import Calendar from './Calendar';
import Tab from './Tab';
import { useLocale, useTranslations } from 'next-intl';
import { getDateLocale } from '@/i18n/dateLocaleMapper';

const RangeCalendar = ({ groups }: CalendarProps) => {
  const t = useTranslations('Scheduler');
  const locale = useLocale();
  const dateLocale = getDateLocale(locale);

  return (
    <div className="overflow-x-hidden">
      <Tabs
        className="flex flex-col  justify-center"
        defaultValue={groups[0].groupName}
      >
        <TabsList className="flex flex-row gap-2 bg-transparent h-auto justify-start overflow-x-scroll">
          {groups.map((group) => (
            <Tab group={group} hasEndDate key={group.groupName}>
              <div className="text-2xs lg:text-xs flex flex-col gap-2 lg:gap-0">
                <div className="flex justify-between uppercase flex-col lg:flex-row">
                  {t('start')}:
                  <div className="text-2xs lg:text-xs font-extrabold lg:font-normal">
                    {format(group.startDate, 'H aa')}
                    <span className="ml-2 font-normal lg:font-thin">
                      (
                      {format(group.startDate, 'dd MMM yyyy', {
                        locale: dateLocale,
                      })}
                      )
                    </span>
                  </div>
                </div>
                <div className="flex justify-between uppercase flex-col lg:flex-row">
                  {t('end')}:
                  <div className="text-2xs lg:text-xs font-extrabold lg:font-normal">
                    {format(group.endDate, 'H aa')}
                    <span className="ml-1 font-normal lg:font-thin">
                      (
                      {format(group.endDate, 'dd MMM yyyy', {
                        locale: dateLocale,
                      })}
                      )
                    </span>
                  </div>
                </div>
              </div>
            </Tab>
          ))}
        </TabsList>

        {groups.map((group) => (
          <TabsContent key={group.groupName} value={group.groupName}>
            <Calendar
              fromMonth={group.startDate}
              mode="range"
              selected={{
                from: group.startDate,
                to: group.endDate,
              }}
              selectedColor="special"
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default RangeCalendar;
