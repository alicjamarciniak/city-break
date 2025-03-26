import { Instructor } from '@/app/types/Adventure';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

type InstructorSectionProps = {
  instructor: Instructor;
};

// TODO: ADD CATEGORY, LANGUAGES, WELCOME MSG, LONG DESC TO INSTRUCTORS

const InstructorSection = ({ instructor }: InstructorSectionProps) => {
  const t = useTranslations('Adventure');

  return (
    <div>
      <Card
        className={`flex bg-swamp-background/10 border-transparent lg:border-yukon-background/50 text-dark-foreground 
        mb-2 mt-3 lg:mt-10 p-0 lg:p-10 rounded-tr-[50px] lg:rounded-tr-xl`}
      >
        <div className="flex flex-col lg:flex-row">
          <div>
            <div className="h-[200px] w-auto lg:w-[150px] relative rounded-tr-[50px] rounded-bl-[50px] overflow-hidden">
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
                {t('instructorSectionTitle')}
                <span className="text-special font-bold text-2xl block">
                  {instructor.fields.firstName} {instructor.fields.lastName}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-thin text-black">
                {instructor.fields.helloMessage}
              </p>

              <div className="text-yukon-background mt-3 flex items-center gap-2">
                {t('instructorSectionBtn')}
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
