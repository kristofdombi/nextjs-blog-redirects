export const generateStaticParams = async () => {
  return [
    { month: "7", day: "10" },
    { month: "7", day: "9" },
    { month: "7", day: "8" },
  ];
};

const Page = async ({
  params,
}: {
  params: Promise<{ month: string; day: string }>;
}) => {
  const parameters = await params;
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1>Date Page</h1>
        <p>Month: {parameters.month}</p>
        <p>Date: {parameters.day}</p>
      </div>
    </div>
  );
};

export default Page;
