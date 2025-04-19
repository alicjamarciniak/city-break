import 'server-only';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Review } from '@/app/types/Review';

type TestimonialGridProps = {
  reviews: Review[];
};

const TestimonialGrid = ({ reviews }: TestimonialGridProps) => {
  return (
    <div className="columns-1 lg:columns-4 gap-2 h-fit">
      {reviews.map((review) => (
        <Card
          className="bg-dark-background text-dark-foreground mb-2 flex flex-col flex-nowrap break-inside-avoid border-white/50"
          key={review.id}
        >
          <CardHeader className="flex flex-row gap-3">
            <Avatar>
              <AvatarImage
                alt="@shadcn"
                src={`https:${review.avatar.fields.file.url}`}
              />
              <AvatarFallback>{review.fallback}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="!text-base lg:!text-xl">
                {review.author}
              </CardTitle>
              <CardDescription className="!text-xs text-left">
                {review.username}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xs lg:text-sm text-left">{review.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TestimonialGrid;
