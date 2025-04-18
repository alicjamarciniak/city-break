import Toast from '@/components/Toast';
import { toast } from 'sonner';

export const showWIPToast = () => {
  return toast(<Toast />, {
    duration: 6000,
  });
};

export const handleWIPLinks = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  showWIPToast();
};
