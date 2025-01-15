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
import { AdventurePreview } from '@/app/api/adventurePreviews/types';

type ExampleSwiperProps = {
  slides: AdventurePreview[];
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
        {slides?.map((preview, i) => (
          <SwiperSlide key={`slide-adventure-preview-${i}`}>
            <div className="flex flex-col justify-center items-center">
              <Card className="w-[300px] rounded-sm h-[200px] overflow-hidden m-1 mb-4 shadow-lg relative">
                <Image
                  alt={preview.image.alt}
                  width={300}
                  height={200}
                  src={preview.image.src}
                />
              </Card>
              <Avatar className="absolute h-16 w-16 left-[220px] top-[160px]">
                <AvatarImage
                  src={preview.instructor.avatarSrc}
                  alt={preview.instructor.avatarAlt}
                />
                <AvatarFallback>{preview.instructor.fallback}</AvatarFallback>
              </Avatar>
              <div className="w-[300px]">
                <h4 className="font-semibold ">{preview.name}</h4>
                <h6 className="text-muted-foreground text-sm">
                  {preview.description}
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
