'use client';

import Spline from '@splinetool/react-spline/next';
import LeftQuote from '@/assets/svg/LeftQuote';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

const Testimonial = () => {
  return (
    <>
      <div className="flex bg-gradient-to-b from-dark-background to-black relative">
        <div className="flex py-10">
          <div className="flex-[1]"></div>
          <div className="flex-[3] overflow-hidden">
            <Spline
              className="ml-[180px]"
              scene="https://prod.spline.design/hoHZAw41RYOeUfkt/scene.splinecode"
            />
          </div>
        </div>

        <div className="absolute w-[40%] top-0 bottom-0 left-[200px] z-10 text-dark-foreground p-10">
          <h4 className="text-2xl mt-8 text-left font-thin mb-10">
            What others
            <span className="font-oswald text-4xl font-bold uppercase block">
              say about us
            </span>
          </h4>

          <div className="flex">
            <Swiper
              slidesPerView={1}
              loop={true}
              allowTouchMove
              speed={5000}
              // autoplay={{
              //   delay: 1000,
              //   disableOnInteraction: true,
              // }}
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
              {[...Array(2)].map((_, i) => (
                <>
                  <SwiperSlide key={`slide-1${i}`}>
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
                      <p className="font-thin">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Proin sed purus non turpis viverra tincidunt a sed
                        odio. Quisque fringilla tellus nec mi egestas, vel
                        sagittis elit varius. Quisque justo nisl, rhoncus a ante
                        id, semper pharetra sem."
                      </p>
                      <div className="italic text-right pr-8">
                        ~The Creative Critique
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={`slide-2${i}`}>
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
                      <div className="flex flex-col">
                        <p className="font-thin">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin sed purus non turpis viverra tincidunt a
                          sed odio.
                        </p>
                        <div className="italic text-right pr-8 self-end">
                          ~The Explorer’s Echo
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
