import { type Testimonial } from '@/app/types/Testimonial';
import { fetchContentfulData } from '@/utils/contentful/contentfulFetch';
import Spline from '@splinetool/react-spline/next';
import TestimonialSwiper from './TestimonialSwiper';

const TestimonialsSection = async () => {
  const testimonials = await fetchContentfulData<Testimonial>('testimonial');

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
            What others
            <span className="font-oswald text-4xl font-bold uppercase block">
              say about us
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
