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
import { useTranslations } from 'next-intl';

type SchedulerSectionProps = {
  adventure: Adventure;
};

const SchedulerSection = ({ adventure }: SchedulerSectionProps) => {
  const t = useTranslations('Adventure');
  const [open, setOpen] = useState(false);
  const { isMdDevice: isMobile } = useMediaQueries();

  return isMobile ? (
    <div className="pt-[50px]">
      <div className="bg-white border-gray-200 border-t shadow-[0px_-6px_40px_-12px_rgba(220,220,220,1)] relative">
        <Collapsible defaultOpen={false} onOpenChange={setOpen}>
          <CollapsibleTrigger className="px-6 py-4 flex gap-3 text-sm text-special w-full">
            <CalendarIcon /> {t('schedulerSectionCollapseText')}
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
    <Scheduler
      variant={adventure.variant}
      groups={adventure.participantsGroups.map(({ fields }) => fields)}
    />
  );
};

export default SchedulerSection;
