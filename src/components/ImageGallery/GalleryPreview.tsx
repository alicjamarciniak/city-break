import Image from 'next/image';

type GalleryPreviewProps = {
  images: Array<{ alt: string; src: string }>;
  callback: () => void;
};

const GalleryPreview = ({ images, callback }: GalleryPreviewProps) => {
  const gridBases = [
    { col1: 100, col2: 0, col3: 0 },
    { col1: 50, col2: 0, col3: 50 },
    { col1: 50, col2: 50, col3: 0 },
    { col1: 40, col2: 30, col3: 30 },
  ];
  const length = images.length;
  const { col1, col2, col3 } = gridBases[length - 1];

  return (
    <div className={`h-full w-full min-w-100 flex gap-3 relative`}>
      <div
        className={`flex relative rounded-md overflow-hidden`}
        style={{ flexBasis: `${col1}%` }}
      >
        <Image
          alt={images[0].alt}
          src={`https:${images[0].src}`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      {length > 2 && (
        <div
          className={`flex flex-col gap-3`}
          style={{ flexBasis: `${col2}%` }}
        >
          <div className="flex flex-1 relative rounded-md overflow-hidden">
            <Image
              alt={images[1].alt}
              fill
              src={`https:${images[1].src}`}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex flex-1 rounded-md overflow-hidden relative">
            <Image
              alt={images[2].alt}
              fill
              src={`https:${images[2].src}`}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      )}
      {length !== 1 && length !== 3 && (
        <div
          className={`flex relative rounded-md overflow-hidden`}
          style={{ flexBasis: `${col3}%` }}
        >
          <Image
            alt={images[3].alt || images[2].alt}
            fill
            src={`https:${images[3].src || images[2].src}`}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <button
        className="absolute bottom-5 right-5 bg-white px-4 py-1 rounded-full shadow-lg"
        onClick={() => {
          callback();
          // document.body.style.height = '100vh';
          // document.body.style.overflowY = 'hidden';
        }}
      >
        <small className="t-small font-thin">See full gallery ({length})</small>
      </button>
    </div>
  );
};

export default GalleryPreview;
