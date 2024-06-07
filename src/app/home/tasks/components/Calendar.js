import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Circle } from "react-feather";

const Calendar = ({ visible, setCreateTaskVisibility }) => {
  const [date, setDate] = useState(new Date());
  const [daysInCurrentMonth, setDaysInMonth] = useState(
    new Date(date.getFullYear(), date.getMonth(), 0).getDate(),
  );
  const days = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);

  const [weekdayStartDay, setWeekdayStartDay] = useState(
    new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1,
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateMonth = months[date.getMonth()];
  const dateYear = date.getFullYear();
  const dateDay = date.getDate();

  const setDueDay = (day) => {
    setDate(new Date(date.getFullYear(), date.getMonth(), day));
  };

  const increaseMonth = () => {
    if (date.getMonth() == 13) {
      setDate(new Date(date.getFullYear() + 1, 1, date.getDay()));
    } else {
      setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    }
    setDaysInMonth(
      new Date(date.getFullYear(), date.getMonth() + 2, 0).getDate(),
    );
  };

  const decreaseMonth = () => {
    if (date.getMonth() == 0) {
      setDate(new Date(date.getFullYear() - 1, 11, date.getDay()));
    } else {
      setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    }
    setDaysInMonth(new Date(date.getFullYear(), date.getMonth(), 0).getDate());
  };

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg border border-dark-500 p-4">
      <div className="b-2 pb-1 font-semibold text-dark-300">{dateYear}</div>
      <div className="flex pb-4">
        <button onClick={() => decreaseMonth()}>
          <ChevronLeft className="mx-2.5 h-8 w-8" />
        </button>

        <div className="w-32 text-center text-2xl">{dateMonth}</div>

        <button onClick={() => increaseMonth()}>
          <ChevronRight className="mx-2.5 h-8 w-8" />
        </button>
      </div>
      <div className="grid w-full grid-cols-7 gap-2">
        <div className="rounded-lg bg-dark-800 py-2 text-center text-lg">
          Mon
        </div>
        <div className="rounded-lg bg-dark-800 py-2 text-center text-lg">
          Tue
        </div>
        <div className="rounded-lg bg-dark-800 py-2 text-center text-lg">
          Wed
        </div>
        <div className="rounded-lg bg-dark-800 py-2 text-center text-lg">
          Thu
        </div>
        <div className="rounded-lg bg-dark-800 py-2 text-center text-lg">
          Fri
        </div>
        <div className="rounded-lg bg-dark-800 py-2 text-center text-lg">
          Sat
        </div>
        <div className="rounded-lg bg-dark-800 py-2 text-center text-lg">
          Sun
        </div>

        {[...Array(weekdayStartDay)].map((_) => (
          <div></div>
        ))}

        {days.map((day) => (
          <div
            key={day}
            className={`cursor-pointer rounded-lg py-5 text-center transition-all hover:bg-dark-800 ${dateDay === day ? "border-2 border-red-950" : "border-2 border-dark-800"}`}
            onClick={() => setDueDay(day)}
          >
            {day}
          </div>
        ))}
        {[...Array(42 - daysInCurrentMonth - weekdayStartDay)].map((_) => (
          <div className="py-[32px]"></div>
        ))}
      </div>
    </div>
  );
};
export default Calendar;
