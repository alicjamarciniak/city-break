import { Adventure } from '@/app/types/Adventure';
import RichText from '@/utils/contentful/components/RichText';
import {
  fetchContentfulData,
  fetchContentfulEntry,
} from '@/utils/contentful/contentfulFetch';
import InstructorSection from './InstructorSection';
import Map from './AddressSection';
import { ImageGallery, OrderedList } from '@/components';
import SchedulerSection from './SchedulerSection';

export async function generateStaticParams() {
  const posts = await fetchContentfulData<Adventure>('adventure');

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

const AuthorPage = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  const adventure = await fetchContentfulEntry<Adventure>(id.toString());

  const images = adventure.images.map(
    ({
      fields: {
        title,
        file: { url },
      },
    }) => ({ alt: title, src: url }),
  );

  return (
    <div>
      <div className="h-[200px] lg:h-[500px] mb-8">
        <ImageGallery images={images} />
      </div>

      <div className="mb-5">
        <h4 className="text-lg lg:text-3xl">{adventure.name}</h4>
        <small className="text-xs lg:text-sm underline text-yukon-background/70">
          {adventure.city} ({adventure.region})
        </small>
      </div>

      <div className="flex flex-row gap-12 b-6">
        <div className="font-thin text-justify flex flex-col lg:basis-1/2 overflow-x-hidden">
          <OrderedList>
            <RichText document={adventure.fullDescription} />
          </OrderedList>

          <InstructorSection instructor={adventure.instructor[0]} />

          <Map
            address={adventure.address}
            facilityName={adventure.facilityName}
          />
        </div>

        <div
          className="flex flex-col overflow-x-hidden fixed right-0 left-0 bottom-0
        lg:left-auto lg:right-auto lg:bottom-auto lg:basis-1/2 lg:sticky lg:top-[85px] h-min z-[100]"
        >
          <SchedulerSection adventure={adventure} />
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
export const dynamicParams = false;
