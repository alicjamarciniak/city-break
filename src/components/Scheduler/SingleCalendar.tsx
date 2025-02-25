'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { format } from 'date-fns';
import { type CalendarProps } from '.';
import Calendar from './Calendar';
import Tab from './Tab';

const SingleCalendar = ({ groups }: CalendarProps) => {
  return (
    <div>
      <Tabs defaultValue={groups[0].groupName} className="overflow-x-scroll">
        <TabsList className="flex flex-row gap-2 bg-transparent h-auto">
          {groups.map((group) => (
            <Tab key={group.groupName} group={group}>
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
          <TabsContent value={group.groupName} key={group.groupName}>
            <Calendar
              mode="single"
              selected={group.startDate}
              fromMonth={group.startDate}
              selectedColor="special"
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SingleCalendar;
