import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full  w-full text-center content-center">
      <h2>
        This cabin doesn&apos;t exist. Please check the cabin ID or go back to
        the cabins list.
      </h2>
      <Link
        href="/cabins"
        className="block w-fit mx-auto mt-4 border-2 border-gray-50 px-8 py-5 text-gray-50  active:ring-1 hover:border-primary-800 hover:text-primary-800 text-lg font-semibold  transition-all rounded-lg shadow-lg"
      >
        Go back to cabins list
      </Link>
    </div>
  );
}
