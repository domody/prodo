import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import db from "../../../../lib/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { Circle } from "react-feather";
import CalendarTask from "./CalendarTask";

const Calendar = () => {
  const dateToday = new Date();
  const [selectedDate, setDate] = useState(new Date());
  const [daysInCurrentMonth, setDaysInMonth] = useState(
    new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0,
    ).getDate(),
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

  const increaseMonth = () => {
    if (selectedDate.getMonth() === 11) {
      setDate(new Date(selectedDate.getFullYear() + 1, 0, 1));
      setWeekdayStartDay(
        new Date(selectedDate.getFullYear() + 1, 0, 1).getDay() - 1,
      );
    } else {
      setDate(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1),
      );
      let newWeekday =
        new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth() + 1,
          1,
        ).getDay() - 1;
      if (newWeekday < 0) {
        newWeekday += 7;
      }
      setWeekdayStartDay(newWeekday);
    }
    setDaysInMonth(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 2,
        0,
      ).getDate(),
    );
    console.log(weekdayStartDay);
  };

  const decreaseMonth = () => {
    if (selectedDate.getMonth() === 0) {
      setDate(new Date(selectedDate.getFullYear() - 1, 11, 1));
      setWeekdayStartDay(
        new Date(selectedDate.getFullYear() - 1, 11, 1).getDay() - 1,
      );
    } else {
      setDate(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1),
      );
      let newWeekday =
        new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth() - 1,
          1,
        ).getDay() - 1;
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
    console.log(weekdayStartDay);
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

    return () => unsubscribe();
  }, []);

  const getTasksForDay = (day) => {
    const taskDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return tasks.filter((task) => task.dueDate === taskDate);
  };

  const [modalTask, setModalTask] = useState([]);
  const [taskCellRef, setTaskCellRef] = useState(null);

  const showTaskModal = (taskIn, cellRef) => {
    setModalTask(taskIn);
    setTaskCellRef(cellRef);
  };

  const hideTaskModal = () => {
    setTaskCellRef(null);
  };

  return (
    <>
      <div className="h-20 w-full border-b border-dark-500">
        <div className="flex h-full items-center justify-between px-8">
          <div className="mx-2.5 text-left text-xl">
            {dateMonth}{" "}{dateYear}

          </div>
          <div className="flex">
            <button onClick={() => decreaseMonth()}>
              <ChevronLeft className="h-5 w-5 text-dark-100" />
            </button>
            {/* TP to today on calendar */}
            <button className="text-base mx-3 text-dark-100"> 
              Today
            </button>
            <button onClick={() => increaseMonth()}>
              <ChevronRight className="h-5 w-5 text-dark-100" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-[calc(100vh-5rem)] w-full flex-col items-start justify-start overflow-x-hidden">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="grid h-12 w-full grid-cols-7 text-dark-50">
            <div className="flex items-center justify-end border-r border-dark-800 px-6">
              Mon
            </div>
            <div className="flex items-center justify-end border-r border-dark-800 px-6">
              Tue
            </div>
            <div className="flex items-center justify-end border-r border-dark-800 px-6">
              Wed
            </div>
            <div className="flex items-center justify-end border-r border-dark-800 px-6">
              Thu
            </div>
            <div className="flex items-center justify-end border-r border-dark-800 px-6">
              Fri
            </div>
            <div className="flex items-center justify-end border-r border-dark-800 px-6">
              Sat
            </div>
            <div className="flex items-center justify-end border-r border-dark-800 px-6">
              Sun
            </div>
          </div>
          <div className="grid h-[calc((100vh-5rem-3rem))] w-full grid-cols-7">
            {[...Array(weekdayStartDay)].map((_, index) => (
              <div
                key={index}
                className={`h-full border-r border-t border-dark-800`}
              ></div>
            ))}

            {days.map((day) => {
              const tasksForDay = getTasksForDay(day);
              const cellRef = `cell-${day}`;

              return (
                <div className="relative">
                  <div
                    key={day}
                    className={`scrollbar-hidden relative z-0 h-[calc((100vh-5rem-3rem)/6)] cursor-pointer flex-col items-start justify-start overflow-y-auto border-r border-t border-dark-800 p-3 text-center text-sm transition-all`}
                  >
                    <div className="sticky left-0 top-0 w-full bg-dark-900">
                      <div
                        className={`ml-auto flex aspect-square w-8 items-center justify-center rounded-full ${checkDateCellIsCurrentDate(day) ? "bg-red-500" : ""}`}
                      >
                        <p className={``}>{day}</p>
                      </div>
                    </div>
                    <div className="flex h-full w-full flex-col items-start justify-start space-y-2 rounded pt-2">
                      {tasksForDay.length > 0 &&
                        tasksForDay.map((task) => (
                          <button
                            key={task.id}
                            className="flex w-full items-center justify-start rounded bg-blue-500/50 px-3 py-1 text-xs font-medium text-blue-300"
                            // href="/home/tasks"
                            onClick={() => showTaskModal(task, cellRef)}
                          >
                            <p className={`line-clamp-1 w-full text-start ${task.completed ? "line-through" : ""}`}>
                              {task.title}
                            </p>
                          </button>
                        ))}
                    </div>
                  </div>
                  {tasksForDay.length > 0 && (
                    <CalendarTask
                      task={modalTask}
                      taskCellRef={taskCellRef}
                      cellRef={cellRef}
                      hideTaskModal={hideTaskModal}
                    />
                  )}
                </div>
              );
            })}
            {/* <CalendarTask task={modalTask} /> */}
            {[...Array(42 - daysInCurrentMonth - weekdayStartDay)].map((_) => (
              <div className="h-[calc((100vh-5rem-3rem)/6)] border-r border-t border-dark-800"></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Calendar;
