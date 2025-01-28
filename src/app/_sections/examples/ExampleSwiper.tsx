'use client';

import { useRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { type Adventure } from '@/app/types/Adventure';

type ExampleSwiperProps = {
  slides: Adventure[];
};

const ExampleSwiper = ({ slides }: ExampleSwiperProps) => {
  const sliderRef = useRef<SwiperClass>();

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        allowTouchMove
        onSwiper={(it) => (sliderRef.current = it)}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {slides?.map((adventure, i) => (
          <SwiperSlide key={`slide-adventure-preview-${i}`}>
            <div className="flex flex-col justify-center items-center">
              <Card className="w-[300px] rounded-sm h-[200px] overflow-hidden m-1 mb-7 shadow-lg relative">
                <Image
                  alt={adventure.images[0].fields.title}
                  width={300}
                  height={200}
                  src={`https:${adventure.images[0].fields.file.url}`}
                />
              </Card>
              <Avatar className="absolute h-[4.3rem] w-[4.3rem] left-[230px] top-[155px]">
                <AvatarImage
                  src={`https:${adventure.instructor[0].fields.avatar.fields.file.url}`}
                  alt={adventure.instructor[0].fields.avatarAlt}
                />
                <AvatarFallback>
                  {adventure.instructor[0].fields.fallback}
                </AvatarFallback>
              </Avatar>
              <div className="w-[300px]">
                <h4 className="font-semibold truncate">{adventure.name}</h4>
                <h6 className="text-muted-foreground text-sm">
                  {adventure.shortDescription}
                </h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ChevronRightCircle
        className="absolute top-1/2 right-4"
        size={30}
        onClick={() => sliderRef.current?.slideNext()}
      />
      <ChevronLeftCircle
        className="absolute top-1/2 left-4"
        size={30}
        onClick={() => sliderRef.current?.slidePrev()}
      />
    </>
  );
};

export default ExampleSwiper;
