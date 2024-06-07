import { useState } from "react";
import {
  X,
  Tag,
  CircleSlash,
  CalendarIcon,
  AlertCircle,
  Info,
} from "lucide-react";
import { Circle } from "react-feather";

const Calendar = ({ visible, setCreateTaskVisibility }) => {
  const [date, setDate] = useState(new Date());
  const days = Array.from(
    { length: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() },
    (_, i) => i + 1,
  );

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
  const dateDay = date.getDate();
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg border border-dark-500 p-4">
      <div className="pb-2 text-2xl">{dateMonth}</div>
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
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Calendar;
