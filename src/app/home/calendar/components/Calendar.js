import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import db from "../../../../lib/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { Circle } from "react-feather";

const Calendar = () => {
  const dateToday = new Date();
  const [selectedDate, setDate] = useState(new Date());
  const [daysInCurrentMonth, setDaysInMonth] = useState(
    new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0).getDate(),
  );
  const days = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);

  const [weekdayStartDay, setWeekdayStartDay] = useState(
    new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay() -
      1,
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

  const dateMonth = months[selectedDate.getMonth()];
  const dateYear = selectedDate.getFullYear();
  const dateDay = selectedDate.getDate();

  const setDueDay = (day) => {
    setDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
  };

  const increaseMonth = () => {
    if (selectedDate.getMonth() == 13) {
      setDate(new Date(selectedDate.getFullYear() + 1, 1, 1));
      setWeekdayStartDay(
        new Date(selectedDate.getFullYear() + 1, 1, 1).getDay() - 1,
      );
    } else {
      setDate(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1),
      );
      var newWeekday =
        new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth() - 1,
          1,
        ).getDay() - 3;
      if (newWeekday < 0) {
        newWeekday += 7;
      }
      console.log(newWeekday);
      setWeekdayStartDay(newWeekday);
    }
    setDaysInMonth(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 2,
        0,
      ).getDate(),
    );
  };

  const decreaseMonth = () => {
    if (selectedDate.getMonth() == 0) {
      setDate(new Date(selectedDate.getFullYear() - 1, 11, 1));
      setWeekdayStartDay(
        new Date(selectedDate.getFullYear() - 1, 11, 1).getDay() - 1,
      );
    } else {
      setDate(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1),
      );
      var newWeekday =
        new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth() - 1,
          1,
        ).getDay() - 3;
      if (newWeekday < 0) {
        newWeekday += 7;
      }
      setWeekdayStartDay(newWeekday);
    }
    setDaysInMonth(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        0,
      ).getDate(),
    );
  };

  const checkDateCellIsCurrentDate = (day) => {
    if (selectedDate.getMonth() != dateToday.getMonth()) {
      return false;
    } else if (selectedDate.getFullYear() != dateToday.getFullYear()) {
      return false;
    } else if (day != dateToday.getDate()) {
      return false;
    } else {
      return true;
    }
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      const tasksData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTasks(tasksData);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const getTasksForDay = (day) => {
    const taskDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return tasks.filter((task) => task.dueDate === taskDate);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="b-2 hidden pb-1 font-semibold text-dark-300">
        {dateYear}
      </div>
      <div className="flex hidden pb-4">
        <button onClick={() => decreaseMonth()}>
          <ChevronLeft className="mx-2.5 h-8 w-8" />
        </button>

        <div className="w-32 text-center text-2xl">{dateMonth}</div>

        <button onClick={() => increaseMonth()}>
          <ChevronRight className="mx-2.5 h-8 w-8" />
        </button>
      </div>
      <div className="grid h-12 w-full grid-cols-7 divide-x divide-dark-800 text-dark-50">
        <div className="flex items-center justify-end px-6">Mon</div>
        <div className="flex items-center justify-end px-6">Tue</div>
        <div className="flex items-center justify-end px-6">Wed</div>
        <div className="flex items-center justify-end px-6">Thu</div>
        <div className="flex items-center justify-end px-6">Fri</div>
        <div className="flex items-center justify-end px-6">Sat</div>
        <div className="flex items-center justify-end px-6">Sun</div>
      </div>
      <div className="grid h-full w-full grid-cols-7 divide-x divide-y divide-dark-800">
        {[...Array(weekdayStartDay)].map((_, index) => (
          <div
            key={index}
            className={`h-full ${index === 0 ? "border-t border-dark-800" : ""}`}
          ></div>
        ))}

        {days.map((day) => (
          <div
            key={day}
            className={`scrollbar-hidden flex h-full cursor-pointer flex-col items-start justify-start overflow-y-auto p-3 text-center text-sm transition-all`}
          >
            <div className="sticky left-0 top-0 w-full bg-dark-900">
              <div
                className={`ml-auto flex aspect-square w-8 items-center justify-center rounded-full ${checkDateCellIsCurrentDate(day) ? "bg-red-500" : ""}`}
              >
                <p className={``}>{day}</p>
              </div>
            </div>
            <div className="flex h-0 w-full flex-col items-start justify-start space-y-2 rounded">
              {getTasksForDay(day).map((task) => (
                <a
                  key={task.id}
                  className="flex w-full items-center justify-start rounded bg-blue-500/50 px-3 py-1.5 text-xs font-medium text-blue-300"
                  href="/home/tasks"
                >
                  <p className="w-full line-clamp-1 text-start">{task.title}  </p>
                  
                </a>
              ))}
            </div>
          </div>
        ))}
        {[...Array(42 - daysInCurrentMonth - weekdayStartDay)].map((_) => (
          <div className=""></div>
        ))}
      </div>
    </div>
  );
};
export default Calendar;
