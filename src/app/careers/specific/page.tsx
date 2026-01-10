const SpecificCareerPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const parameters = await params;
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1>Specific Career Page</h1>
        <p>Should be no slug</p>
        <p>Slug: {parameters.slug}</p>
      </div>
    </div>
  );
};

export default SpecificCareerPage;
