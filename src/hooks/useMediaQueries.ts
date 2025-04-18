import { useEffect, useState } from 'react';

const useMediaQueries = () => {
  const [media, setMedia] = useState<Record<string, boolean | null>>({
    isSmDevice: null,
    isMdDevice: null,
    isLgDevice: null,
    isXlDevice: null,
    is2XlDevice: null,
  });

  useEffect(() => {
    const update = () => {
      setMedia({
        isSmDevice: window.matchMedia('(max-width: 40rem)').matches,
        isMdDevice: window.matchMedia('(max-width: 48rem)').matches,
        isLgDevice: window.matchMedia('(max-width: 64rem)').matches,
        isXlDevice: window.matchMedia('(max-width: 80rem)').matches,
        is2XlDevice: window.matchMedia('(max-width: 96rem)').matches,
      });
    };

    update();

    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return media;
};

export default useMediaQueries;
