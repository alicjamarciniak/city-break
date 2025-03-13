'use client';

import PlayButton from '@/assets/svg/PlayButton';
import Link from 'next/link';
import { useRef } from 'react';
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="bg-swamp-background text-swamp-foreground mt-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-6 lg:px-36 py-24 flex gap-10 flex-col lg:flex-row">
        <div className="basis-1/5">
          <div className="font-bold font-miguel text-2xl tracking-[1px] text-yukon-background">
            Find your way
          </div>
          <div className="flex flex-col gap-2 mt-5 lg:font-thin">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="basis-2/5">
          <div className="font-bold font-miguel text-2xl tracking-[1px] text-yukon-background">
            Get our newsletter
          </div>
          <div className="mt-5 mb-4 lg:font-thin">
            <span className="font-extrabold lg:font-bold">Zero</span> spam.{' '}
            <span className="font-extrabold lg:font-bold">One</span> email a
            month. <span className="font-extrabold lg:font-bold">All</span> the
            latest offers
          </div>
          <div className="flex flex-row lg:flex-col gap-2 lg:gap-4">
            <Input
              type="text"
              className="border-yukon-background border-2 max-w-[360px]"
              placeholder="Enter your email"
            />
            <Button
              className="rounded-full py-5 px-5 lg:w-min lg:px-16 drop-shadow-md !bg-yukon-background"
              variant="default"
            >
              Sign up
            </Button>
          </div>
        </div>

        <div className="basis-2/5 justify-center relative hidden lg:flex">
          <div className="absolute bg-white/30 top-[3px] bottom-[3px] left-[calc(10%+3px)] right-[calc(10%+3px)] flex justify-center items-center">
            <PlayButton size={75} color="hsl(var(--yukon-background))" />
          </div>
          <video
            ref={videoRef}
            loop
            muted
            className="w-[80%] border-yukon-background rounded-md border-[3px]"
          >
            <source src="/videos/team.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        className="border-t-2 px-4 lg:px-14 py-5 flex bg-yukon-background/20 border-yukon-background text-yukon-background 
      text-sm justify-between items-center flex-wrap"
      >
        <div className="flex gap-4 basis-1/4 order-1">
          <TwitterLogoIcon width={25} height={25} />
          <LinkedInLogoIcon width={25} height={25} />
          <InstagramLogoIcon width={25} height={25} />
        </div>

        <div
          className="flex italic lg:not-italic lg:font-thin order-3 w-full lg:w-auto 
        text-xs lg:text-sm justify-center lg:order-2 mt-4 lg:mt-0"
        >
          © City Breakers. All rights reserved
        </div>

        <div className="flex gap-4 lg:basis-1/4 lg:w-auto lg:justify-end order-2 lg:order-3">
          <Link href="/terms-of-service">Terms of Service</Link>
          <div>|</div>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
