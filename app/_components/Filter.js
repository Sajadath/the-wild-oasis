"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams?.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        filter={"all"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All
      </Button>
      <Button
        filter={"small"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        2&mdash;3 Guests
      </Button>
      <Button
        filter={"medium"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 Guests
      </Button>
      <Button
        filter={"larg"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 Guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className=" px-5 py-2 relative hover:bg-primary-700"
    >
      {children}
      <span
        className={` absolute left-0 bottom-0 right-0 transition-all duration-500 h-1 bg-gray-50 ${
          filter === activeFilter ? "scale-100" : "scale-0"
        }`}
      ></span>
    </button>
  );
}
export default Filter;
