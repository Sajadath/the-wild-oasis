"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  // CHANGE
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed  bottom-6 left-[5%] right-[5%] py-5 px-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-primary-100 text-sm  font-semibold shadow-xl shadow-slate-900 grid grid-cols-[1fr_auto] gap-8 ">
      <p className="text-xs content-center">
        Don&apos;t forget to reserve your dates from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        onClick={resetRange}
        className="rounded-full p-1 hover:bg-accent-600 transition-all"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
