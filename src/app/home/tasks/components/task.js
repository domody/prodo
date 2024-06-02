/* 

********************************************************

THIS IS WORK IN PROGRESS

IM TRYNA FIGURE OUT HOW TO MAKE IT LOOK GOOD

HAVE A GO IF YOU LIKE

FULL CAPS LOOKS COOL

********************************************************

*/

"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Ellipsis,
  Plus,
  Loader,
  CircleDashed,
  CircleSlash,
  Clock,
  CircleCheck,
  Calendar,
  Dot,
} from "lucide-react";

const Task = ({ title, dateAssigned, dateEnd, team, state }) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setIsOptionsVisible(!isOptionsVisible);
    console.log("open");
  };

  const handleClickOutside = (event) => {
    console.log("asdasd");
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOptionsVisible(false);
    }
  };

  useEffect(() => {
    console.log("asasda");
    if (isOptionsVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOptionsVisible]);

  var InProgress = state === "InProgress";
  var Assigned = state === "Assigned";
  var PendingReview = state === "PendingReview";
  var Overdue = state === "Overdue";
  var Completed = state === "Completed";

  return (
    <div className="relative flex !h-14 w-full items-center justify-between border-b border-dark-500 px-12">
      <div
        id="taskOptionsMenu"
        className={`absolute left-12 top-10 z-50 h-12 w-24 rounded-lg border border-dark-400 bg-dark-900 opacity-100 transition-all ${isOptionsVisible ? "" : "scale-50 !opacity-0"}`}
      ></div>
      <div className="flex h-full w-full items-center justify-start">
        <div
          className={`mr-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-all hover:bg-dark-700 ${isOptionsVisible ? "!cursor-default bg-dark-700" : ""}`}
          id="taskOptionsBtn"
          onClick={handleClick}
        >
          <Ellipsis className=" h-4 w-4" />
        </div>

        <div className="w-24 bg-red-500">
          <p className="line-clamp-1 max-w-full">TSK-109</p>
        </div>
        <div className="w-[62.5%] bg-blue-500">
          <p className="line-clamp-1 max-w-full">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;

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
