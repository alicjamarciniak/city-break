import { eachDayOfInterval, parseISO } from 'date-fns';
import {
  isMonday,
  isTuesday,
  isWednesday,
  isThursday,
  isFriday,
  isSaturday,
  isSunday,
} from 'date-fns';
import { CalendarProps } from '.';

const dayCheckers: Record<string, (date: Date) => boolean> = {
  Monday: isMonday,
  Tuesday: isTuesday,
  Wednesday: isWednesday,
  Thursday: isThursday,
  Friday: isFriday,
  Saturday: isSaturday,
  Sunday: isSunday,
};

export const useDate = () => {
  const formaStringToDate = (date: string) => {
    return parseISO(date);
  };

  const getRegularGroups = (groups: CalendarProps['groups']) => {
    return groups.map(({ startDate, endDate, weekDays, ...rest }) => {
      const allDays = eachDayOfInterval({
        start: startDate,
        end: endDate,
      });

      return {
        startDate,
        endDate,
        days: weekDays?.length
          ? allDays.filter((date) =>
              weekDays.some((day) => dayCheckers[day]?.(date)),
            )
          : [],
        ...rest,
      };
    });
  };

  const getOneOffGroups = (groups: CalendarProps['groups']) => {
    return groups.map(({ startDate, ...rest }) => ({
      day: startDate,
      startDate,
      ...rest,
    }));
  };

  return { getRegularGroups, getOneOffGroups, formaStringToDate };
};
