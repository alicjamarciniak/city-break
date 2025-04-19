type AuthorSlug = 'mira-kowalska' | 'artem-bondar';

export async function generateStaticParams() {
  const locales = ['en', 'pl'];
  const authors: AuthorSlug[] = ['mira-kowalska', 'artem-bondar'];

  return locales.flatMap((locale) =>
    authors.map((author) => ({
      locale,
      author,
    })),
  );
}

// TODO: Finish author section
const AuthorPage = async ({
  params,
}: {
  params: Promise<{ author: AuthorSlug }>;
}) => {
  const author = (await params).author;
  return <div>My Author name: {author}</div>;
};

export default AuthorPage;
export const dynamicParams = false;
