import { Calendar as ShCalendar, CalendarProps } from '../ui/calendar';
import { enGB } from 'date-fns/locale';

const Calendar = (props: CalendarProps) => {
  return (
    <ShCalendar
      {...props}
      locale={enGB}
      className="flex justify-center p-6 text-xs leading-tight
      lg:[&_head]:h-12 lg:[&_th]:w-16 lg:[&_th]:h-12 
      lg:[&_th]:text-base lg:[&_th]:flex lg:[&_th]:items-center lg:[&_th]:justify-center 
      lg:[&_td]:w-16 lg:[&_td]:h-12 lg:[&_button]:w-16 lg:[&_button]:h-12 lg:[&_button]:text-base"
    />
  );
};

export default Calendar;
