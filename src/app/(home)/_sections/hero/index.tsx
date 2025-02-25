import { NumberInput, DatePicker } from '@/components';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import RegionSelect from './RegionSelect';

const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-60px)] relative">
      <div className="relative">
        <video autoPlay loop muted className="absolute w-[100vw]">
          <source src="/videos/sunset.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-center relative z-10">
          <div className="pt-[14vh] text-center text-white">
            <h1 className="font-thin text-4xl">
              Tired of mundane rut?
              <span className="animate-slideUp font-bold font-miguel text-primary block mt-4 mb-6 [text-shadow:_6px_6px_6px_rgba(0,0,0,0.4)] text-8xl tracking-[3px]">
                Find where the thrill begins
              </span>
            </h1>
            <p>
              From outdoor activities to discovering urban gems and learning new
              crafts, every trip is designed to inspire. <br />
              Join us and turn your precious free time into an unforgettable
              adventure!
            </p>
            <Button
              className="mt-10 rounded-full py-5 px-20 drop-shadow-md"
              variant="special"
            >
              EXPLORE
            </Button>
          </div>

          <Card className="w-auto rounded-none mt-20 gap-4 bg-white flex p-1 self-center">
            <RegionSelect />
            <Separator className="h-auto my-1" orientation="vertical" />
            <div>
              <Label className="text-xs font-semibold text-muted-foreground">
                Number of participants
              </Label>
              <NumberInput />
            </div>
            <Separator className="h-auto m-1" orientation="vertical" />
            <div>
              <Label className="px-3 text-xs font-semibold text-muted-foreground">
                Date
              </Label>
              <DatePicker />
            </div>
            <Separator className="h-auto m-1" orientation="vertical" />
            <div className="flex self-center flex-grow justify-end items-end">
              <Button className="flex-1 mr-3" variant="default">
                Search
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)]"></div>
    </section>
  );
};

export default HeroSection;
