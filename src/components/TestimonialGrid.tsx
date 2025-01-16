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
    <div className="columns-4 gap-2 h-fit">
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
              <CardTitle>John Doe</CardTitle>
              <CardDescription>@JohnDoe</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {index % 2 === 0 ? (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                eget enim nunc. Mauris vestibulum orci dolor, ut euismod quam
                molestie quis. Proin gravida iaculis ultrices.
              </p>
            ) : (
              <p>
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
