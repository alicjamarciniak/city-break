'use client';

import { useEffect, useState } from 'react';
import { type Adventure } from '@/app/types/Adventure';
import ExampleSwiper from './ExampleSwiper';

const ExamplesSection = () => {
  const [adventurePreviews, setAdventurePreviews] = useState<Adventure[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAdventures = async () => {
      try {
        const response = await fetch(
          `/api/contentful/entries?contentType=adventure`,
        );
        const data = await response.json();

        setAdventurePreviews(data);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getAdventures();
  }, []);

  return (
    <div className="bg-white p-14 relative">
      <div className="my-10 h-[270px]">
        <ExampleSwiper slides={adventurePreviews} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ExamplesSection;
