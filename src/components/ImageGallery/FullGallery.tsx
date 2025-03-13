'use client';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import Image from 'next/image';
import { DoubleArrowLeftIcon } from '@radix-ui/react-icons';
import useMediaQueries from '@/hooks/useMediaQueries';

type FullGalleryProps = {
  images: Array<{ alt: string; src: string }>;
  callback: () => void;
};

const FullGallery = ({ images, callback }: FullGalleryProps) => {
  const sliderRef = useRef<SwiperClass>();
  const { isMdDevice } = useMediaQueries();
  const isMobile = isMdDevice();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === 'ArrowLeft') sliderRef.current?.slidePrev();
      if (key === 'ArrowRight') sliderRef.current?.slideNext();
    };
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [sliderRef]);

  return (
    <div className="h-[100vh] w-[100vw] bg-white absolute top-0 left-0 z-[110]">
      <div className="flex flex-1 flex-col">
        <div className="flex flex-row gap-2 px-10 lg:px-20 py-5 items-center">
          <DoubleArrowLeftIcon height={20} width={20} />
          <button
            onClick={() => {
              callback();
              // document.body.style.height = 'auto';
              // document.body.style.overflowY = 'scroll';
            }}
          >
            Go back
          </button>
        </div>

        <div className="flex flex-1">
          <Swiper
            slidesPerView={1}
            loop={images.length > 1}
            allowTouchMove
            onSwiper={(it) => (sliderRef.current = it)}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            {...(isMobile ? { pagination: { clickable: true } } : {})}
            style={{
              '--swiper-pagination-color': 'hsl(var(--special))',
              '--swiper-pagination-bullet-inactive-color': '#999999',
            }}
          >
            {images?.map((image, id) => (
              <SwiperSlide
                key={`slide-adventure-preview-${id}`}
                className="!flex justify-center items-center"
              >
                <div className="h-[80vh] w-[90vw] lg:w-[75vw] relative">
                  <Image
                    alt={image.alt}
                    fill
                    src={`https:${image.src}`}
                    style={{ objectFit: 'contain' }}
                    className="!h-[70%] lg:!h-[100%]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {!isMobile && images.length > 1 && (
            <>
              <ChevronRightCircle
                className="absolute top-[60%] lg:top-1/2 right-10 lg:right-20 z-10"
                size={30}
                onClick={() => sliderRef.current?.slideNext()}
              />
              <ChevronLeftCircle
                className="absolute top-[60%] lg:top-1/2 left-10 lg:left-20 z-10"
                size={30}
                onClick={() => sliderRef.current?.slidePrev()}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullGallery;
