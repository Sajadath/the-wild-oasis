"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;

  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <>
      <div className="flex  flex-col">
        <DayPicker
          hideNavigation
          className="pt-12 px-2 mb-5 place-self-center w-[100%] md:w-fit "
          mode="range"
          onSelect={setRange}
          selected={displayRange}
          min={minBookingLength + 1}
          max={maxBookingLength}
          fromMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear() + 5}
          captionLayout="dropdown"
          numberOfMonths={2}
          disabled={(curDate) =>
            isPast(curDate) ||
            bookedDates.some((date) => isSameDay(date, curDate))
          }
        />

        <div className="flex  gap-1 items-center justify-between px-8 flex-wrap bg-accent-500 text-primary-800 h-fit py-3">
          <div className="flex items-baseline gap-6">
            <p className="flex gap-2 items-baseline">
              {discount > 0 ? (
                <>
                  <span className="md:text-2xl text-lg">
                    ${regularPrice - discount}
                  </span>
                  <span className="line-through font-semibold text-primary-700">
                    ${regularPrice}
                  </span>
                </>
              ) : (
                <span className="md:text-2xl text-lg">${regularPrice}</span>
              )}
              <span className="">/night</span>
            </p>
            {numNights ? (
              <>
                <p className="bg-accent-600 px-2 py-1 mb-2 text-nowrap text-sm md:text-2xl">
                  &times; {numNights}
                </p>
                <p>
                  <span className="md:text-lg text-sm font-bold uppercase">
                    Total
                  </span>

                  <span className="md:text-2xl text-sm font-semibold">
                    ${cabinPrice}
                  </span>
                </p>
              </>
            ) : null}
          </div>

          {range.from || range.to ? (
            <button
              className="border grow md:grow-0 border-primary-800 py-2 px-4 text-sm font-semibold"
              onClick={resetRange}
            >
              Clear
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default DateSelector;
