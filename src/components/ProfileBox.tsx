'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ProfileBoxProps = {
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

  return (
    <Link href={`/${profileUrl}`}>
      <div
        onMouseEnter={() => setIconsVisibility(true)}
        onMouseLeave={() => setIconsVisibility(false)}
        className="relative flex flex-col h-[400px]"
      >
        <div
          className={`relative flex w-[300px] flex-grow basis-auto transition-all duration-500 ease-in-out
      ${iconsVisibility ? 'transform: scale(1.2) rotate(0.01deg)' : 'transform: scale(1) rotate(0.01deg'}
      `}
        >
          <Image
            src={src}
            alt={`Photo of ${firstName} ${lastName}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="w-full bg-white">
          <div className="p-5">
            <h6 className="font-thin text-3xl">
              <span className="font-bold mr-2">{firstName}</span>
              {lastName}
            </h6>
            <p className="font-thin text-gray-600">{text}</p>
          </div>
          <div className={`flex overflow-hidden`}>
            {socialIcons?.map((icon, i) => (
              <div
                key={`icon-${i}`}
                className={`bg-special/${(i + 1) * 15} flex basis-1/3 justify-center
              ${iconsVisibility ? 'max-h-[60px] p-4' : 'max-h-0'}
              hover:basis-2/3 transition-all duration-500 ease-in-out `}
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
