'use client';

import { Tabs, TabsContent, TabsList } from '../ui/tabs';
import { type CalendarProps } from '.';
import Calendar from './Calendar';
import { useDate } from './useDate';
import Tab from './Tab';
import { format } from 'date-fns';
import {} from 'date-fns/locale';
import { useLocale } from 'next-intl';
import { getDateLocale, localizeWeekday } from '@/i18n/dateLocaleMapper';

const RegularCalendar = ({ groups }: CalendarProps) => {
  const locale = useLocale();
  const dateLocale = getDateLocale(locale);

  const { getRegularGroups } = useDate();
  const mappedGroups = getRegularGroups(groups);

  return (
    <div>
      <Tabs defaultValue={groups[0].groupName} className="overflow-x-scroll">
        <TabsList className="flex flex-row gap-2 bg-transparent h-auto p-0 justify-start">
          {groups.map((group) => (
            <Tab key={group.groupName} group={group} hasEndDate>
              <div className="text-xs lg:w-[70%]">
                {group.weekDays?.map((weekday) => (
                  <div key={weekday} className="flex justify-between">
                    <div className="capitalize">
                      {localizeWeekday(weekday, locale)}
                    </div>
                    <div>
                      {format(group.startDate, 'h', { locale: dateLocale })} -{' '}
                      {format(group.endDate, 'h aa', { locale: dateLocale })}
                    </div>
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </TabsList>

        {mappedGroups.map((group) => (
          <TabsContent value={group.groupName} key={group.groupName}>
            <Calendar
              mode="multiple"
              selected={group.days}
              fromMonth={group.startDate}
              selectedColor="special"
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default RegularCalendar;
