import 'server-only';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TestimonialGrid = () => {
  return (
    <div className="columns-1 lg:columns-4 gap-2 h-fit">
      {[...Array(20)].map((item, index) => (
        <Card
          key={index}
          className={`bg-dark-background text-dark-foreground mb-2`}
        >
          <CardHeader className="flex flex-row gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="!text-base lg:!text-xl">John Doe</CardTitle>
              <CardDescription className="!text-xs text-left">
                @JohnDoe
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {index % 2 === 0 ? (
              <p className="text-xs lg:text-sm text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                eget enim nunc. Mauris vestibulum orci dolor, ut euismod quam
                molestie quis. Proin gravida iaculis ultrices.
              </p>
            ) : (
              <p className="text-xs lg:text-sm text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                eget enim nunc.
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TestimonialGrid;
