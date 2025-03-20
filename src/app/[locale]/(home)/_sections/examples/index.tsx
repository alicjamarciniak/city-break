import { type Adventure } from '@/app/types/Adventure';
import ExampleSwiper from './ExampleSwiper';

const getAdventures = async (): Promise<Adventure[]> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/contentful/entries?contentType=adventure`,
      { method: 'GET' },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

const ExamplesSection = async () => {
  const adventurePreviews = await getAdventures();

  return (
    <div className="bg-white p-14 relative">
      <div className="my-10">
        <ExampleSwiper slides={adventurePreviews} />
      </div>
    </div>
  );
};

export default ExamplesSection;
