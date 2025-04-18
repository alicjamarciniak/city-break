import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Adventure } from '@/app/types/Adventure';

type AdventureCardProps = {
  adventure: Adventure;
};

const AdventureCard = ({ adventure }: AdventureCardProps) => {
  return (
    <Link href={`/adventures/${adventure.id}`}>
      <div className="flex flex-col justify-center items-center">
        <Card className="w-[250px] lg:w-[300px] rounded-sm h-auto lg:h-[200px] overflow-hidden m-1 mb-7 shadow-lg relative">
          <Image
            alt={adventure.images[0].fields.title}
            width={300}
            height={200}
            src={`https:${adventure.images[0].fields.file.url}`}
          />
        </Card>

        <Avatar className="absolute h-[3.3rem] w-[3.3rem] lg:h-[4.3rem] lg:w-[4.3rem] left-[190px] top-[135px] lg:left-[230px] lg:top-[155px]">
          <AvatarImage
            src={`https:${adventure.instructor[0].fields.avatar.fields.file.url}`}
            alt={adventure.instructor[0].fields.avatarAlt}
          />
          <AvatarFallback>
            {adventure.instructor[0].fields.fallback}
          </AvatarFallback>
        </Avatar>

        <div className="w-[250px] lg:w-[300px]">
          <h4 className="font-semibold truncate">{adventure.name}</h4>
          <h6 className="text-muted-foreground text-sm">
            {adventure.shortDescription}
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default AdventureCard;
