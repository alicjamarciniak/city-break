'use client';

import { useState } from 'react';
import FullGallery from './FullGallery';
import GalleryPreview from './GalleryPreview';

type ImageGalleryProps = {
  images: Array<{ alt: string; src: string }>;
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [isOpen, setOpen] = useState(false);

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
