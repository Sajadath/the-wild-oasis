import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";

import { Suspense } from "react";

// export const metadata = {
//   title: "cabin No : ",
// };

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}

export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinId);
  if (cabin === null) return { title: "Cabin Not Found" };
  const { name } = cabin;
  return {
    title: `CABIN ${name}`,
  };
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(params.cabinId);

  if (cabin === null)
    return (
      <div className="h-full w-full text-center content-center animate-pulse">
        <p>Wrong Cabin Id</p>
        <h2>couldn&apos;t find that cabin</h2>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-xl md:text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
