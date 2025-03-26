import { type Testimonial } from '@/app/types/Testimonial';
import Spline from '@splinetool/react-spline/next';
import TestimonialSwiper from './TestimonialSwiper';
import { getLocale, getTranslations } from 'next-intl/server';

const getTestimonials = async (): Promise<Testimonial[]> => {
  const locale = await getLocale();
  const response = await fetch(
    `http://localhost:3000/api/contentful/entries?locale=${locale}&contentType=testimonial`,
    {
      method: 'GET',
    },
  );
  const data = await response.json();
  return data;
};

const TestimonialsSection = async () => {
  const t = await getTranslations('HomePage');
  const testimonials = await getTestimonials();

  return (
    <>
      <div className="flex h-[100vh] lg:h-max bg-gradient-to-b from-dark-background to-black relative">
        <div className="hidden lg:flex py-10">
          <div className="flex-[1]"></div>
          <div className="flex-[3] overflow-hidden">
            <Spline
              className="ml-[180px]"
              scene="https://prod.spline.design/hoHZAw41RYOeUfkt/scene.splinecode"
            />
          </div>
        </div>

        <div className="absolute w-full lg:w-[40%] top-0 bottom-0 lg:left-[200px] z-10 text-dark-foreground p-10">
          <h4 className="text-2xl mt-8 text-left font-thin mb-10">
            {t('testimonials.subtitle')}
            <span className="font-oswald text-4xl font-bold uppercase block">
              {t('testimonials.title')}
            </span>
          </h4>

          <div className="flex">
            <TestimonialSwiper slides={testimonials} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
