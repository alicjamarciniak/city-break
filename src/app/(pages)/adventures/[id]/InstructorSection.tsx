import { Instructor } from '@/app/types/Adventure';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';

type InstructorSectionProps = {
  instructor: Instructor;
};

// TODO: ADD CATEGORY, LANGUAGES, WELCOME MSG, LONG DESC TO INSTRUCTORS

const InstructorSection = ({ instructor }: InstructorSectionProps) => {
  return (
    <div>
      <Card
        className={`bg-swamp-background/10 border-yukon-background/50 text-dark-foreground mb-2 mt-10 p-10`}
      >
        <div className="flex">
          <div>
            <div className="h-[200px] w-[150px] relative rounded-tr-[50px] rounded-bl-[50px] overflow-hidden">
              <Image
                src={`https:${instructor.fields.avatar.fields.file.url}`}
                alt={instructor.fields.avatarAlt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div>
            <CardHeader className="flex flex-row gap-3">
              <CardTitle className="text-black font-thin text-sm">
                Instructor:
                <span className="text-special font-bold text-2xl block">
                  {instructor.fields.firstName} {instructor.fields.lastName}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-thin text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                eget enim nunc. Mauris vestibulum orci dolor, ut euismod quam
                molestie quis. Proin gravida iaculis ultrices.
              </p>

              <div className="text-yukon-background mt-3 flex items-center gap-2">
                More about {instructor.fields.firstName}
                <DoubleArrowRightIcon />
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InstructorSection;
