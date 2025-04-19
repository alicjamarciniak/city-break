'use client';

import LeftQuote from '@/assets/svg/LeftQuote';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { type Testimonial } from '@/app/types/Testimonial';
import useMediaQueries from '@/hooks/useMediaQueries';

type TestimonialSwiperProps = {
  slides: Testimonial[];
};

const TestimonialSwiper = ({ slides }: TestimonialSwiperProps) => {
  const { isMdDevice: isMobile } = useMediaQueries();

  return (
    <Swiper
      allowTouchMove
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      centeredSlides
      className="testimonialSwiper"
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={true}
      modules={[Pagination, Navigation, Autoplay, EffectFade]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      speed={5000}
      style={{
        '--swiper-pagination-color': '#FFBA08',
        '--swiper-pagination-bullet-inactive-color': '#999999',
      }}
    >
      {slides?.map((testimonial) => (
        <SwiperSlide key={`slide-testimonial-${testimonial.id}`}>
          <div className="relative py-20 lg:pr-10 bg-dark">
            <div className="absolute z-[-1] opacity-20 top-14 lg:top-0 right-0 lg:right-10 transform rotate-180">
              <LeftQuote color="white" size={isMobile ? 100 : 150} />
            </div>
            <div className="text-primary flex flex-row justify-left mb-6 gap-2">
              <StarFilledIcon className="w-5 h-5" />
              <StarFilledIcon className="w-5 h-5" />
              <StarFilledIcon className="w-5 h-5" />
              <StarFilledIcon className="w-5 h-5" />
              <StarFilledIcon className="w-5 h-5" />
            </div>
            <p className="font-thin">{testimonial.content}</p>
            <div className="italic text-right pt-3 pr-8">
              {testimonial.author}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSwiper;
