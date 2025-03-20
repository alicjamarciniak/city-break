'use client';

import { Adventure } from '@/app/types/Adventure';
import { Scheduler } from '@/components';
import useMediaQueries from '@/hooks/useMediaQueries';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { CalendarIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useState } from 'react';

type SchedulerSectionProps = {
  adventure: Adventure;
};

const SchedulerSection = ({ adventure }: SchedulerSectionProps) => {
  const [open, setOpen] = useState(false);
  const { isMdDevice } = useMediaQueries();
  const isMobile = isMdDevice() ?? true;

  return isMobile ? (
    <div className="pt-[50px]">
      <div className="bg-white border-gray-200 border-t shadow-[0px_-6px_40px_-12px_rgba(220,220,220,1)] relative">
        <Collapsible defaultOpen={false} onOpenChange={setOpen}>
          <CollapsibleTrigger className="px-6 py-4 flex gap-3 text-sm text-special w-full">
            <CalendarIcon /> See available dates
            <div className="flex flex-[1] justify-end">
              {open ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Scheduler
              variant={adventure.variant}
              groups={adventure.participantsGroups.map(({ fields }) => fields)}
            />
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  ) : (
    // <div
    //   className={`bg-white border-t-1 border-gray-400 shadow-md relative ${isSchedulerOpen ? 'bottom-0' : 'bottom-[-100%]'}`}
    // >
    //   <button className="w-full p-2" onClick={toggleMenu}>
    //     {isSchedulerOpen ? (
    //       <CaretUpIcon height={24} width={24} />
    //     ) : (
    //       <CaretDownIcon height={24} width={24} />
    //     )}
    //   </button>

    // </div>
    <Scheduler
      variant={adventure.variant}
      groups={adventure.participantsGroups.map(({ fields }) => fields)}
    />
  );
};

export default SchedulerSection;
