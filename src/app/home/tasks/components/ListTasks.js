"use client";

import { useEffect, useState } from "react";
import db from "../../../lib/firestore";
import { collection, onSnapshot } from "firebase/firestore";
// import DeleteItem from "./DeleteItem";
import Task from "./task";

const ListTasks = () => {
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

  return (
    <div className="h-full w-full text-center">
      {tasks.map((task) => (
        <Task title={task.name} description={task.description} dueDate={task.dueDate} priority={task.priority} status={task.status} tags={task.tags} milestones={task.milestonesCount} id={task.id}/>
      ))}
    </div>
  );
};

export default ListTasks;

// {tasks.map(function (object, i) {
//     return (
//       <Task
//         title="Create UI for Landing Page"
//         dateAssigned="Jun 12"
//         dateEnd="Oct 19"
//         team="Design"
//         state="InProgress"
//       />
//     );
//   })}
//   <div
//     className={`flex h-full w-full cursor-default select-none flex-col items-center justify-center ${tasksEmpty ? "" : "hidden"}`}
//   >
//     <Folder className="h-24 w-24 text-dark-300" strokeWidth={0.5} />
//     <p className="text-base font-light text-dark-300">
//       No active or iced tasks yet.
//     </p>
//     <p
//       className="mb-24 mt-2 cursor-pointer text-base font-light text-indigo-500"
//       onClick={handleCreateNewTask}
//     >
//       Create a new task
//     </p>
//   </div>

{
  /* <div className="sticky left-0 top-0 flex h-14 w-full items-center justify-start bg-dark-800 px-12 py-4 ">
    <CircleSlash className="mr-3 h-5 w-5 " />
    In Progress
    <Plus className="ml-auto h-6 w-6 " />
  </div>
  <div className="sticky left-0 top-0 flex w-full items-center justify-start bg-dark-800 px-12 py-4 ">
    <Loader className="mr-3 h-5 w-5 " />
    Assigned
    <Plus className="ml-auto h-6 w-6 " />
  </div>

  <div className="sticky left-0 top-0 flex w-full items-center justify-start bg-dark-800 px-12 py-4 ">
    <CircleDashed className="mr-3 h-5 w-5 " />
    Pending Review
    <Plus className="ml-auto h-6 w-6 " />
  </div>

  <div className="sticky left-0 top-0 flex w-full items-center justify-start bg-dark-800 px-12 py-4 ">
    <Clock className="mr-3 h-5 w-5 " />
    Overdue
    <Plus className="ml-auto h-6 w-6 " />
  </div>

  <div className="sticky left-0 top-0 flex w-full items-center justify-start bg-dark-800 px-12 py-4 ">
    <CircleCheck className="mr-3 h-5 w-5 " />
    Completed
    <Plus className="ml-auto h-6 w-6 " />
  </div> */
}
