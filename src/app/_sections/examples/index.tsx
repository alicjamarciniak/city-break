import { type Adventure } from '@/app/types/Adventure';
import ExampleSwiper from './ExampleSwiper';
import { fetchContentfulData } from '@/utils/contentful/contentfulFetch';

const ExamplesSection = async () => {
  const adventurePreviews = await fetchContentfulData<Adventure>('adventure');

  return (
    <div className="bg-white p-14 relative mt-2">
      <div className="my-10">
        <ExampleSwiper slides={adventurePreviews} />
      </div>
    </div>
  );
};

export default ExamplesSection;
