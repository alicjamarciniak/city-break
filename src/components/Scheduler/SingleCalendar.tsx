'use client';

import { Tabs, TabsContent, TabsList } from '../ui/tabs';
import { format } from 'date-fns';
import { type CalendarProps } from '.';
import Calendar from './Calendar';
import Tab from './Tab';

const SingleCalendar = ({ groups }: CalendarProps) => {
  return (
    <div>
      <Tabs className="overflow-x-scroll" defaultValue={groups[0].groupName}>
        <TabsList className="flex flex-row gap-2 bg-transparent h-auto">
          {groups.map((group) => (
            <Tab group={group} key={group.groupName}>
              <div className="text-xs pb-4">
                <div className="flex justify-between">
                  <div>{format(group.startDate, 'eeee')}</div>
                  <div>
                    {format(group.startDate, 'h aa')} -{' '}
                    {format(group.endDate, 'h aa')}
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
              mode="single"
              selected={group.startDate}
              selectedColor="special"
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SingleCalendar;
