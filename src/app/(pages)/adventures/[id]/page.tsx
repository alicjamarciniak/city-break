import { Adventure } from '@/app/types/Adventure';
import RichText from '@/utils/contentful/components/RichText';
import {
  fetchContentfulData,
  fetchContentfulEntry,
} from '@/utils/contentful/contentfulFetch';
import InstructorSection from './InstructorSection';
import Map from './AddressSection';
import { Scheduler, ImageGallery, OrderedList } from '@/components';

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
      <div className="h-[500px] mb-8">
        <ImageGallery images={images} />
      </div>

      <div className="mb-5">
        <h4 className="t-h4">{adventure.name}</h4>
        <small className="t-small underline text-yukon-background/70">
          {adventure.city} ({adventure.region})
        </small>
      </div>

      <div className="flex flex-row gap-12 b-6">
        <div className="font-thin text-justify flex flex-col basis-1/2 overflow-x-hidden">
          <OrderedList>
            <RichText document={adventure.fullDescription} />
          </OrderedList>

          <InstructorSection instructor={adventure.instructor[0]} />

          <Map
            address={adventure.address}
            facilityName={adventure.facilityName}
          />
        </div>

        <div className="flex flex-col overflow-x-hidden basis-1/2 sticky top-[85px] h-min">
          <Scheduler
            variant={adventure.variant}
            groups={adventure.participantsGroups.map(({ fields }) => fields)}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
export const dynamicParams = false;
