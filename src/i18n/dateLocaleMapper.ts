import { WeekDay } from '@/app/types/Adventure';
import { format } from 'date-fns';
import { enUS, pl, type Locale } from 'date-fns/locale';

const locales: Record<string, Locale> = {
  en: enUS,
  pl: pl,
};

export const getDateLocale = (localeKey: string) => {
  return locales[localeKey] || enUS;
};

export const localizeWeekday = (weekday: WeekDay, localeKey: string) => {
  const locale = getDateLocale(localeKey);
  const tempDate = new Date(`2024-03-18`); // A known Monday (adjust for other days)

  const daysMap: Record<WeekDay, number> = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
  };

  tempDate.setDate(tempDate.getDate() + daysMap[weekday]);

  return format(tempDate, 'EEEE', { locale });
};
