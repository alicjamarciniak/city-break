import TestimonialGrid from '@/components/TestimonialGrid';
import { RocketIcon, PersonIcon, HeartIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const NumbersSection = () => {
  return (
    <div className="text-dark-foreground text-center">
      <div className="bg-gradient-to-t from-dark-background from-20% to-dark-background/90 px-6 py-12 lg:p-12">
        <h4 className="text-xl mt-8 mb-2">We've completed</h4>
        <h3 className="text-lg ">
          more than <span className="text-3xl font-bold px-2">2 500+</span>{' '}
          activities successfully
        </h3>
        <div className="justify-center gap-3 lg:gap-20 pt-14 flex">
          <div className="w-[200px] flex justify-start lg:justify-center items-center flex-col gap-1 p-0 lg:p-5">
            <PersonIcon width={40} height={40} />
            <div className="text-2xl font-extrabold">1 800+</div>
            <div className="text-sm font-bold">happy clients</div>
          </div>
          <div className="w-[200px] flex justify-start lg:justify-center items-center flex-col gap-1 p-0 lg:p-5">
            <RocketIcon height={40} width={40} />
            <div className="text-2xl font-extrabold">147</div>
            <div className="text-sm font-bold">adventure programs</div>
          </div>
          <div className="w-[200px] flex justify-start lg:justify-center items-center flex-col gap-1 p-0 lg:p-5">
            <HeartIcon width={40} height={40} />
            <div className="text-2xl font-extrabold">17 480</div>
            <div className="text-sm font-bold">hours of joy</div>
          </div>
        </div>
      </div>

      <div
        className={`bg-dark-background overflow-hidden relative max-h-[500px] flex justify-center py-12 px-6 lg:p-12`}
      >
        <div className="overflow-hidden bg-gradient-to-t from-dark-background to-40% to-transparent absolute z-10 top-0 left-0 right-0 bottom-0"></div>
        <TestimonialGrid />

        <div className="absolute flex justify-center bottom-0 z-20">
          <Link href="/opinions">See more</Link>
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
