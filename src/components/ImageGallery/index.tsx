'use client';

import { useEffect, useState } from 'react';
import FullGallery from './FullGallery';
import GalleryPreview from './GalleryPreview';

type ImageGalleryProps = {
  images: Array<{ alt: string; src: string }>;
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  const toggleGallery = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <GalleryPreview images={images} callback={toggleGallery} />
      {isOpen && <FullGallery images={images} callback={toggleGallery} />}
    </>
  );
};

export default ImageGallery;
