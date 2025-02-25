import { ProfileBox } from '@/components';
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';

const AuthorsSection = () => {
  const socialIcons = [
    <TwitterLogoIcon width={25} height={25} />,
    <LinkedInLogoIcon width={25} height={25} />,
    <InstagramLogoIcon width={25} height={25} />,
  ];

  return (
    <div className="bg-pink-background px-20 py-32 flex flex-row justify-evenly">
      <div>
        <h4 className="text-2xl mt-8 font-thin mb-10">
          <span className="font-oswald text-8xl font-bold uppercase block">
            People
          </span>
          behind the City Breakers
        </h4>
      </div>
      <div className="flex flex-row gap-16">
        <div className="w-[300px]">
          <ProfileBox
            profileUrl="mira-kowalska"
            firstName="Mira"
            lastName="Kowalska"
            text="CEO and founder of City Breakers"
            src="/images/Mira.jpg"
            socialIcons={socialIcons}
          />
        </div>
        <div className="w-[300px]">
          <ProfileBox
            profileUrl="artem-bondar"
            firstName="Artem"
            lastName="Bondar"
            text="COO and co-founder of City Breakers"
            src="/images/Artem.jpg"
            socialIcons={socialIcons}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorsSection;
