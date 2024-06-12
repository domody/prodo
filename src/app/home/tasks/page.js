/* 

********************************************************

THIS IS WORK IN PROGRESS

IM TRYNA FIGURE OUT HOW TO MAKE IT LOOK GOOD

HAVE A GO IF YOU LIKE

FULL CAPS LOOKS COOL

********************************************************

*/
"use client";

import React, { useState } from "react";
import SkinnySidebar from "../components/skinnySidebar";
import LargeSidebar from "../components/largeSidebar";
import { PlusIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  Plus,
  Loader,
  Clock,
  CircleDashed,
  CircleCheck,
  CircleSlash,
  Search,
  Users,
  HomeIcon,
  Folder,
  ChevronDown,
} from "lucide-react";

import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

import DeleteTask from "./components/DeleteTask";

export default function Home() {
  const [createTaskVisiblity, setCreateTaskVisibility] = useState(false);
  const [deleteTaskVisibility, setDeleteTaskVisibility] = useState(false);

  const [deleteID, setDeleteID] = useState("");

  const toggleAddTask = () => {
    setCreateTaskVisibility(true);
  };

  const toggleDeleteTask = (id) => {
    setDeleteTaskVisibility(true);
    setDeleteID(id);
  };


  return (
    <main className="flex h-screen w-screen items-start justify-start !overflow-hidden text-balance bg-dark-900">

      <AddTask
        visible={createTaskVisiblity}
        setCreateTaskVisibility={setCreateTaskVisibility}
      />
      <DeleteTask
        id={deleteID}
        visible={deleteTaskVisibility}
        setDeleteTaskVisibility={setDeleteTaskVisibility}
      />
      <SkinnySidebar active="tasks"/>
      <LargeSidebar />
      <div className="flex h-screen w-full items-start justify-start">
        <div className="flex min-h-screen w-full flex-col items-start justify-start overflow-x-hidden">
          <div className="h-20 w-full border-b border-dark-500"></div>
          <div className="flex h-[calc(100vh-5rem)] w-full flex-col items-start justify-start overflow-x-hidden">
            <div
              className={`flex w-full items-center justify-between space-x-2 border-b border-dark-500 px-12 py-4`}
            >
              <div className="flex items-center justify-start">
                <Search className="mr-2 h-4 w-4 text-dark-300" />
                <div className="ml-2 flex cursor-pointer items-center justify-center rounded-md border border-dashed border-[#2F2F2F] py-1 pl-2 pr-2.5 text-sm  transition-all">
                  <Plus className="mr-1.5 h-3 w-3" />
                  Filters
                </div>
              </div>
              <Plus
                className="ml-auto h-5 w-5 cursor-pointer text-dark-200"
                onClick={toggleAddTask}
              />
            </div>
            <div className="scrollbar-hidden h-full w-full overflow-x-hidden overflow-y-scroll">
              <ListTasks
                toggleAddTask={toggleAddTask}
                toggleDeleteTask={toggleDeleteTask}
              />
            </div>
          </div>
        </div>
        {/* <div className="min-h-screen w-96 border-l border-dark-500 bg-black/5"></div> */}
      </div>
    </main>
  );
}
