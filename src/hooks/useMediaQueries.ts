import { useMediaQuery } from 'react-responsive';

const useMediaQueries = () => {
  /* 640px */
  const isSmDevice = () => useMediaQuery({ query: '(max-width: 40rem)' });
  /* 768px */
  const isMdDevice = () => useMediaQuery({ query: '(max-width: 48rem)' });
  /* 1024px */
  const isLgDevice = () => useMediaQuery({ query: '(max-width: 64rem)' });
  /* 1280px */
  const isXlDevice = () => useMediaQuery({ query: '(max-width: 80rem)' });
  /* 1536px */
  const is2XlDevice = () => useMediaQuery({ query: '(max-width: 96rem)' });

  return { isSmDevice, isMdDevice, isLgDevice, isXlDevice, is2XlDevice };
};

export default useMediaQueries;
