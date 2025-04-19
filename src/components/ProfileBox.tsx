'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { handleWIPLinks } from '@/utils/sonner/toast';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export type ProfileBoxProps = {
  profileUrl: string;
  firstName: string;
  lastName: string;
  text: string;
  src: string;
  socialIcons: JSX.Element[];
};

const ProfileBox = ({
  profileUrl,
  firstName,
  lastName,
  text,
  src,
  socialIcons,
}: ProfileBoxProps) => {
  const [iconsVisibility, setIconsVisibility] = useState(false);
  const { isMdDevice: isMobile } = useMediaQueries();

  return (
    <Link href={`/${profileUrl}`} onClick={handleWIPLinks}>
      <div
        className="relative flex flex-col h-[260px] lg:h-[400px]"
        data-testid="profile-container"
        onMouseEnter={() => setIconsVisibility(true)}
        onMouseLeave={() => setIconsVisibility(false)}
      >
        <div
          className={`relative flex w-[150px] lg:w-[300px] flex-grow basis-auto transition-all duration-500 ease-in-out
      ${iconsVisibility ? 'transform: scale(1.2) rotate(0.01deg)' : 'transform: scale(1) rotate(0.01deg'}
      `}
        >
          <Image
            alt={`Photo of ${firstName} ${lastName}`}
            fill
            src={src}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="w-full bg-white">
          <div className="p-3 lg:p-5">
            <h6 className="font-thin text-lg lg:text-3xl">
              <span className="font-bold mr-2" data-testid="first-name">
                {firstName}
              </span>
              {lastName}
            </h6>
            <p className="font-thin text-gray-600 text-xs lg:text-base">
              {text}
            </p>
          </div>
          <div className="flex overflow-hidden">
            {socialIcons?.map((icon, i) => (
              <div
                className={`flex basis-1/3 justify-center
              ${iconsVisibility || isMobile ? 'max-h-[60px] p-2 lg:p-4' : 'max-h-0'}
              hover:basis-2/3 transition-all duration-500 ease-in-out `}
                data-testid={`icon-${i}`}
                key={`icon-${i}`}
                style={{
                  backgroundColor: `hsl(var(--special) / ${(i + 1) * 15}%)`,
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfileBox;
