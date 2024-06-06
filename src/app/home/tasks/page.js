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

  const toggleAddTask = () => {
    setCreateTaskVisibility(true);
  };

  const toggleDeleteTask = () => {
    setDeleteTaskVisibility(true);
  };

  return (
    <main className="flex h-screen w-screen items-start justify-start !overflow-hidden text-balance bg-dark-900">
      <SkinnySidebar />
      <AddTask
        visible={createTaskVisiblity}
        setCreateTaskVisibility={setCreateTaskVisibility}
      />
      <DeleteTask
        id={2}
        visible={deleteTaskVisibility}
        setDeleteTaskVisibility={setDeleteTaskVisibility}
      />
      <div className="flex h-screen w-96 flex-col items-start justify-start border-r border-dark-500">
        <div className="h-20 w-full border-b border-dark-500"></div>
        <div className="h-[calc(100vw - 5rem)] flex w-full flex-col items-start justify-start px-6 py-4">
          {/* <h1 className="text-lg font-medium ">Tasks</h1> */}
          <div className="mt-4 w-full text-sm ">
            <ul className="w-full space-y-4">
              <li>
                <a
                  href=""
                  className="flex items-center justify-start text-sm font-semibold rounded-lg hover:bg-dark-500 p-2 transition-all"
                >
                  <HomeIcon className="mr-3 h-5 w-5 " /> Home
                </a>
              </li>

              {/* <li>
                <a
                  href="/home/tasks/team"
                  className="flex items-center justify-start text-sm font-semibold"
                >
                  <Folder className="mr-3 h-5 w-5 text-indigo-500" /> Design
                  <ChevronDown className="ml-auto h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center justify-start text-sm font-semibold"
                >
                  <Folder className="mr-3 h-5 w-5 text-red-500" /> Development
                  <ChevronDown className="ml-auto h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center justify-start text-sm font-semibold"
                >
                  <Folder className="mr-3 h-5 w-5 text-green-500" /> Marketing
                  <ChevronDown className="ml-auto h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center justify-start text-sm font-semibold"
                >
                  <Folder className="mr-3 h-5 w-5 text-pink-500" /> HR
                  <ChevronDown className="ml-auto h-5 w-5" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
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
              <ListTasks toggleAddTask={toggleAddTask} toggleDeleteTask={toggleDeleteTask}/>
            </div>
          </div>
        </div>
        {/* <div className="min-h-screen w-96 border-l border-dark-500 bg-black/5"></div> */}
      </div>
    </main>
  );
}
