import { Adventure } from '@/app/types/Adventure';
import RichText from '@/utils/contentful/components/RichText';
import InstructorSection from './InstructorSection';
import Map from './AddressSection';
import { ImageGallery, OrderedList } from '@/components';
import SchedulerSection from './SchedulerSection';
import { getLocale } from 'next-intl/server';

const getAdventures = async (): Promise<Adventure[]> => {
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/contentful/entries?contentType=adventure`,
    {
      method: 'GET',
    },
  );
  const data = await response.json();
  return data;
};

const getSingleAdventure = async (id: string): Promise<Adventure> => {
  const locale = await getLocale();

  const response = await fetch(
    `${process.env.API_BASE_URL}/contentful/entry?locale=${locale}&contentType=adventure&entryId=${id}`,
    {
      method: 'GET',
    },
  );
  const data = await response.json();
  return data;
};

export async function generateStaticParams() {
  const locales = ['en', 'pl'];
  const posts = await getAdventures();

  return locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      id: post.id.toString(),
    })),
  );
}

const AdventurePage = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const { id } = await params;
  const adventure = await getSingleAdventure(id.toString());

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
      <div className="h-[200px] md:h-[350px] lg:h-[500px] mb-8">
        <ImageGallery images={images} />
      </div>

      <div className="mb-5">
        <h4 className="text-lg lg:text-3xl md:text-2xl">{adventure.name}</h4>
        <small className="text-xs md:text-sm underline text-yukon-background/70">
          {adventure.city} ({adventure.region})
        </small>
      </div>

      <div className="flex flex-row gap-12 b-6">
        <div className="font-thin text-justify flex flex-col md:basis-1/2 overflow-x-hidden">
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
        md:left-auto md:right-auto md:bottom-auto md:basis-1/2 md:sticky md:top-[85px] h-min z-[100] md:z-[35]"
        >
          <SchedulerSection adventure={adventure} />
        </div>
      </div>
    </div>
  );
};

export default AdventurePage;
export const dynamicParams = false;
