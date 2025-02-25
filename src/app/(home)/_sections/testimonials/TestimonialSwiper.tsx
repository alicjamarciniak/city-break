'use client';

import LeftQuote from '@/assets/svg/LeftQuote';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { type Testimonial } from '@/app/types/Testimonial';

type TestimonialSwiperProps = {
  slides: Testimonial[];
};

const TestimonialSwiper = ({ slides }: TestimonialSwiperProps) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      allowTouchMove
      speed={5000}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      effect={'fade'}
      fadeEffect={{ crossFade: true }}
      centeredSlides
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation, Autoplay, EffectFade]}
      className="testimonialSwiper"
      style={{
        '--swiper-pagination-color': '#FFBA08',
        '--swiper-pagination-bullet-inactive-color': '#999999',
      }}
    >
      {slides?.map((testimonial) => (
        <SwiperSlide key={`slide-testimonial-${testimonial.id}`}>
          <div className="relative py-20 pr-10 bg-dark">
            <div className="absolute z-[-1] opacity-20 top-0 right-10 transform rotate-180">
              <LeftQuote size={150} color="white" />
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
