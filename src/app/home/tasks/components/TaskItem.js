"use client";
import React, { useState, useEffect, useRef } from "react";
import { Ellipsis } from "lucide-react";

import EditTask from "./EditTask";
import DuplicateTask from "./DuplicateTask";
import PinTask from "./PinTask";
import EditTags from "./EditTags";

const TaskItem = ({
  title,
  description,
  dueDate,
  priority,
  status,
  team,
  milestones,
  id,
  toggleDeleteTask,
  toggleEditTask,
}) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOptionsVisible(false);
    }
  };

  useEffect(() => {
    if (isOptionsVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOptionsVisible]);

  const handleEditTaskClick = (id) => {
    toggleEditTask(id);
    handleClick();
  };

  // var InProgress = state === "InProgress";
  // var Assigned = state === "Assigned";
  // var PendingReview = state === "PendingReview";
  // var Overdue = state === "Overdue";
  // var Completed = state === "Completed";

  return (
    <>
      <div className="relative flex !h-14 w-full items-center justify-between border-b border-dark-500 px-12">
        <div
          ref={menuRef}
          className={`absolute left-12 z-50 w-40 select-none rounded-md border border-dark-500 bg-dark-900 p-1 text-sm opacity-100 transition-all ${isOptionsVisible ? "top-12" : "pointer-events-none left-10 top-8 z-0 scale-90 !opacity-0"}`}
        >
          <button
            onClick={() => handleEditTaskClick(id)}
            className="flex h-full w-full cursor-pointer items-center justify-between rounded-[4px] px-2 py-1.5 transition-all hover:bg-dark-500"
          >
            Edit
          </button>
          <div
            className="flex h-full w-full items-center justify-start"
            onClick={handleClick}
          >
            <DuplicateTask id={id} />
          </div>
          <div
            className="flex h-full w-full items-center justify-start"
            onClick={handleClick}
          >
            <PinTask id={id} />
          </div>
          <div className="-mx-1 my-1 h-px bg-dark-500"></div>
          <div className="flex h-full w-full items-center justify-start">
            <EditTags id={id} />
          </div>
          <div className="-mx-1 my-1 h-px bg-dark-500"></div>
          <div
            className="mt-1 flex items-center justify-start"
            onClick={handleClick}
          >
            <button
              onClick={() => toggleDeleteTask(id)}
              className="flex h-full w-full cursor-pointer items-center justify-between rounded-[4px] px-2 py-1.5 transition-all hover:bg-dark-500"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-start">
          <div
            className={`mr-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-all hover:bg-dark-700 ${isOptionsVisible ? "!cursor-default bg-dark-700" : ""}`}
            ref={buttonRef}
            onClick={handleClick}
          >
            <Ellipsis className=" h-4 w-4" />
          </div>

          <div className="w-24 text-left">
            <p className="line-clamp-1 max-w-full">{team}-109</p>
          </div>
          <div className="w-[62.5%] text-left">
            <p className="line-clamp-1 max-w-full">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;

{
  /* <CircleSlash
          className={InProgress ? "mr-2 h-5 w-5 text-indigo-500" : "hidden"}
        />
        <Loader
          className={Assigned ? "mr-2 h-5 w-5 text-dark-200" : "hidden"}
        />
        <CircleDashed
          className={PendingReview ? "mr-2 h-5 w-5 text-orange-500" : "hidden"}
        />
        <Clock className={Overdue ? "mr-2 h-5 w-5 text-red-500" : "hidden"} />
        <CircleCheck
          className={Completed ? "mr-2 h-5 w-5 text-green-500" : "hidden"}
        /> */
}
