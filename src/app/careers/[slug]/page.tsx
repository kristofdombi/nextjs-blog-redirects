export const generateStaticParams = async () => {
  return [{ slug: "developer" }, { slug: "designer" }, { slug: "manager" }];
};

const CareerPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const parameters = await params;
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1>Career Page</h1>
        <p>Slug: {parameters.slug}</p>
      </div>
    </div>
  );
};

export default CareerPage;
