import { TabsTrigger } from '@radix-ui/react-tabs';
import { format } from 'date-fns';
import { Button } from '../ui/button';

import { type Group } from '.';
import { PropsWithChildren } from 'react';

type TabProps = PropsWithChildren<{
  group: Group;
  hasEndDate?: boolean;
}>;

const Tab = ({ group, hasEndDate = false, children }: TabProps) => {
  return (
    <TabsTrigger
      value={group.groupName}
      className="group flex flex-[1] bg-yukon-background/50 text-yukon-foreground 
      rounded-none pt-10 px-10 pb-0 data-[state=active]:bg-yukon-background 
      data-[state=active]:text-yukon-foreground w-full [&data-[state=active]>.join-btn]:bg-black"
    >
      <div className="text-left w-full">
        <div className="flex flex-row gap-5 ">
          <div className="text-5xl font-thin">
            {format(group.startDate, 'dd')}
            <span className="text-sm font-normal uppercase block">
              {format(group.startDate, 'MMMM')}
            </span>
          </div>

          {hasEndDate && (
            <>
              <span className="text-5xl font-thin">-</span>
              <div className="text-5xl font-thin">
                {format(group.endDate, 'dd')}
                <span className="text-sm font-normal uppercase block">
                  {format(group.endDate, 'MMMM')}
                </span>
              </div>
            </>
          )}
        </div>

        <p className="font-thin text-lg mt-6 mb-6 text-wrap line-clamp-2 w-[200px]">
          {group.groupName}
        </p>

        {children}

        <div className="mt-6 flex justify-center pb-4 relative h-16">
          <div
            className="join-btn rounded-none w-full border-white border p-3 text-center absolute 
            bottom-3 bg-gradient-to-br from-white/20 from-20% to-white/10 transition-all
             hover:font-semibold hover:bottom-4 hover:shadow-md hover:shadow-white/60
             group-data-[state=inactive]:pointer-events-none"
            onClick={() => {}}
          >
            Join the group
          </div>
        </div>
      </div>
    </TabsTrigger>
  );
};

export default Tab;
