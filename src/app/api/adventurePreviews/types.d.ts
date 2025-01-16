export type AdventurePreview = {
  id: string;
  name: string;
  description: string;
  duration: string;
  city: string;
  instructor: {
    name: string;
    fallback: string;
    avatarSrc: string;
    avatarAlt: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export type AdventurePreviewsResponse = {
  adventurePreviews: AdventurePreview[];
};
