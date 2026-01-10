export const generateStaticParams = async () => {
  // This function is used to generate static parameters for the article pages.
  // In a real application, you would fetch these from a database or an API.
  return [
    { section: "cars", slug: "tesla" },
    { section: "cars", slug: "rivian" },
  ];
};

const ArticlePage = async ({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) => {
  const parameters = await params;
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1>Article Page</h1>
        <p>Section: {parameters.section}</p>
        <p>Slug: {parameters.slug}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
