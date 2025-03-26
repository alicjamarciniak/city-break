export type Review = {
  id: string;
  author: string;
  username: string;
  text: string;
  fallback: string;
  avatar: {
    fields: {
      title: string;
      file: { url: string };
    };
  };
};
