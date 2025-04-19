import { cn } from '@/lib/utils';

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-swamp-background/30',
        className,
      )}
      {...props}
    />
  );
};

export { Skeleton };
