type AuthorSlug = 'mira-kowalska' | 'artem-bondar';

const AuthorPage = async ({
  params,
}: {
  params: Promise<{ author: AuthorSlug }>;
}) => {
  const author = (await params).author;
  return <div>My Post: {author}</div>;
};

export default AuthorPage;
