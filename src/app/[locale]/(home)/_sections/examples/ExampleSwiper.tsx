'use client';

import { useRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';

import { type Adventure } from '@/app/types/Adventure';
import AdventureCard from './AdventureCard';
import { Skeleton } from '@/components/ui/skeleton';

type ExampleSwiperProps = {
  slides: Adventure[];
  isLoading: boolean;
};

const ExampleSwiper = ({ slides, isLoading }: ExampleSwiperProps) => {
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
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center h-[270px] overflow-y-hidden">
            {[...Array(4)].map((_, index) => (
              <div
                className="flex flex-col items-center space-y-4 relative"
                key={`slide-adventure-preview-${index}`}
              >
                <Skeleton className="w-[250px] lg:w-[300px] h-[200px] rounded-sm" />
                <Skeleton className="h-[3.3rem] w-[3.3rem] lg:h-[4.3rem] lg:w-[4.3rem] rounded-full absolute left-[190px] top-[135px] lg:left-[230px] lg:top-[155px]" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            ))}
          </div>
        ) : (
          slides?.map((adventure) => (
            <SwiperSlide key={`slide-adventure-preview-${adventure.id}`}>
              <AdventureCard adventure={adventure} />
            </SwiperSlide>
          ))
        )}
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
