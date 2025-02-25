import { Calendar as ShCalendar, CalendarProps } from '../ui/calendar';
import { enGB } from 'date-fns/locale';

const Calendar = (props: CalendarProps) => {
  return (
    <ShCalendar
      {...props}
      locale={enGB}
      className="flex justify-center p-6 text-lg [&_head]:h-12 [&_th]:w-16 [&_th]:h-12 
      [&_th]:text-base [&_th]:flex [&_th]:items-center [&_th]:justify-center 
      [&_td]:w-16 [&_td]:h-12 [&_button]:w-16 [&_button]:h-12 [&_button]:text-base"
    />
  );
};

export default Calendar;
