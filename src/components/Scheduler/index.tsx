import { WeekDay, type ParticipantsGroup } from '@/app/types/Adventure';
import RangeCalendar from './RangeCalendar';
import RegularCalendar from './RegularCalendar';
import SingleCalendar from './SingleCalendar';
import { useDate } from './useDate';

export type Group = {
  weekDays?: WeekDay[];
  groupName: string;
  startDate: Date;
  endDate: Date;
};
export type CalendarProps = {
  groups: Group[];
};

type SchedulerProps = {
  variant: 'regular' | 'range' | 'one-off';
  groups: ParticipantsGroup['fields'][];
};

const Scheduler = ({ variant, groups }: SchedulerProps) => {
  const { formaStringToDate } = useDate();

  const formattedGroups = groups.map(({ startDate, endDate, ...rest }) => ({
    startDate: formaStringToDate(startDate),
    endDate: formaStringToDate(endDate),
    ...rest,
  }));

  return (
    <div>
      {
        {
          range: <RangeCalendar groups={formattedGroups} />,
          regular: <RegularCalendar groups={formattedGroups} />,
          'one-off': <SingleCalendar groups={formattedGroups} />,
        }[variant]
      }
    </div>
  );
};

export default Scheduler;
