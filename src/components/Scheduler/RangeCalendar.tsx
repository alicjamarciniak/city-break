'use client';

import { Tabs, TabsContent, TabsList } from '../ui/tabs';
import { format } from 'date-fns';
import { type CalendarProps } from '.';
import Calendar from './Calendar';
import Tab from './Tab';

const RangeCalendar = ({ groups }: CalendarProps) => {
  return (
    <div className="overflow-x-hidden">
      <Tabs
        defaultValue={groups[0].groupName}
        className="flex flex-col  justify-center"
      >
        <TabsList className="flex flex-row gap-2 bg-transparent h-auto justify-start overflow-x-scroll">
          {groups.map((group) => (
            <Tab key={group.groupName} group={group} hasEndDate>
              <div className="text-xs">
                <div className="flex justify-between">
                  START:
                  <div>
                    {format(group.startDate, 'H aa')}
                    <span className="ml-2 font-thin">
                      ({format(group.startDate, 'dd MMM yyyy')})
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  END:
                  <div>
                    {format(group.endDate, 'H aa')}
                    <span className="ml-1 font-thin">
                      ({format(group.endDate, 'dd MMM yyyy')})
                    </span>
                  </div>
                </div>
              </div>
            </Tab>
          ))}
        </TabsList>

        {groups.map((group) => (
          <TabsContent value={group.groupName} key={group.groupName}>
            <Calendar
              mode="range"
              selected={{
                from: group.startDate,
                to: group.endDate,
              }}
              fromMonth={group.startDate}
              selectedColor="special"
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default RangeCalendar;
