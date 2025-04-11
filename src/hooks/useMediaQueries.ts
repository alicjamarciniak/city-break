import { useEffect, useState } from 'react';

const useMediaQueries = () => {
  const [media, setMedia] = useState({
    isSmDevice: false,
    isMdDevice: false,
    isLgDevice: false,
    isXlDevice: false,
    is2XlDevice: false,
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
