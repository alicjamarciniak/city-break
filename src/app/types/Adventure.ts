export type Adventure = {
  id: string;
  name: string;
  shortDescription: string;
  region: string;
  images: {
    fields: {
      title: string;
      file: { url: string };
    };
  }[];
  instructor: {
    fields: {
      avatarAlt: string;
      fallback: string;
      avatar: {
        fields: {
          file: { url: string };
        };
      };
    };
  }[];
};
