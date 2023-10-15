
export default async function About({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  return (
    <div className="max-w-[1200px] h-screen mt-10 mx-auto  ">

    </div>
  );
}
