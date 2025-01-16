import ExampleSwiper from './ExampleSwiper';
import { AdventurePreviewsResponse } from '@/app/api/adventurePreviews/types';

const getAdventurePreviews = async (): Promise<AdventurePreviewsResponse> => {
  const response = await fetch(`http://localhost:3000/api/adventurePreviews`, {
    method: 'GET',
  });
  return response.json();
};

const ExamplesSection = async () => {
  const { adventurePreviews } = await getAdventurePreviews();

  return (
    <div className="bg-white p-14 relative mt-2">
      <div className="mb-10">
        <ExampleSwiper slides={adventurePreviews} />
      </div>
    </div>
  );
};

export default ExamplesSection;
