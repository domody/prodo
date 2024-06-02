/* 

********************************************************

THIS IS WORK IN PROGRESS

IM TRYNA FIGURE OUT HOW TO MAKE IT LOOK GOOD

HAVE A GO IF YOU LIKE

FULL CAPS LOOKS COOL

********************************************************

*/

import SkinnySidebar from "../components/skinnySidebar";

import { PlusIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import { Plus } from "lucide-react";
import { Loader } from "lucide-react";
import { Clock } from "lucide-react";
import { CircleDashed } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { CircleSlash } from "lucide-react";
import { Search } from "lucide-react";
import { Users } from "lucide-react";
import { HomeIcon } from "lucide-react";
import { Folder } from "lucide-react";
import { ChevronDown } from "lucide-react";

import Task from "./components/task";

const tasks = [1, 2, 3, 4, 5, 6];
export default function Home() {
  return (
    <main className="flex h-screen w-screen items-start justify-start !overflow-hidden text-balance bg-dark-900">
      <SkinnySidebar />
      <div className="flex h-screen w-96 flex-col items-start justify-start border-r border-dark-500">
        <div className="h-20 w-full border-b border-dark-500"></div>
        <div className="h-[calc(100vw - 5rem)] flex w-full flex-col items-start justify-start px-6 py-4">
          {/* <h1 className="text-lg font-medium ">Tasks</h1> */}
          <div className="mt-4 w-full text-sm ">
            <ul className="w-full space-y-4">
              <li>
                <a
                  href=""
                  className="flex items-center justify-start text-sm font-semibold"
                >
                  <HomeIcon className="mr-3 h-5 w-5 " /> Home
                </a>
              </li>

              <li>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-full items-start justify-start">
        <div className="flex min-h-screen w-full flex-col items-start justify-start overflow-x-hidden">
          <div className="h-20 w-full border-b border-dark-500"></div>
          <div className="flex h-[calc(100vh-5rem)] w-full flex-col items-start justify-start overflow-x-hidden">
            <div className="flex w-full items-center justify-start space-x-2 px-12 py-4">
              <Search className="mr-2 h-4 w-4 text-dark-300" />
              <div className="ml-2 flex cursor-pointer items-center justify-center rounded-md border border-dashed border-[#2F2F2F] py-1 pl-2 pr-2.5 text-sm  transition-all hover:text-dark-50">
                <Plus className="mr-1.5 h-3 w-3" />
                Filters
              </div>
            </div>
            <div className="scrollbar-hidden h-full w-full overflow-x-hidden overflow-y-scroll">
              {/* <div className="sticky left-0 top-0 flex h-14 w-full items-center justify-start bg-dark-800 px-12 py-4 ">
                <CircleSlash className="mr-3 h-5 w-5 " />
                In Progress
                <Plus className="ml-auto h-6 w-6 " />
              </div> */}

              <div className="flex min-h-14 w-full flex-col items-start justify-start ">
                {/* {tasks.map(function (object, i) {
                return (
                  <Task
                    title="Create UI for Landing Page"
                    dateAssigned="Jun 12"
                    dateEnd="Oct 19"
                    team="Design"
                    state="InProgress"
                  />
                );
              })} */}
                <Task
                  title="Create UI for Landing Page"
                  dateAssigned="Jun 12"
                  dateEnd="Oct 19"
                  team="Design"
                  state="InProgress"
                />
              </div>

              {/* <div className="sticky left-0 top-0 flex w-full items-center justify-start bg-dark-800 px-12 py-4 ">
                <Loader className="mr-3 h-5 w-5 " />
                Assigned
                <Plus className="ml-auto h-6 w-6 " />
              </div> */}

              <div className="flex min-h-14 w-full flex-col items-start justify-start   ">
                <Task
                  title="Develop App Backend"
                  dateAssigned="Jun 12"
                  dateEnd="Oct 19"
                  team="Design"
                  state="Assigned"
                />
              </div>

              {/* <div className="sticky left-0 top-0 flex w-full items-center justify-start bg-dark-800 px-12 py-4 ">
                <CircleDashed className="mr-3 h-5 w-5 " />
                Pending Review
                <Plus className="ml-auto h-6 w-6 " />
              </div> */}

              <div className="flex min-h-14 w-full flex-col items-start justify-start   ">
                <Task
                  title="Create UI for App Frontend"
                  dateAssigned="Jun 12"
                  dateEnd="Oct 19"
                  team="Design"
                  state="PendingReview"
                />
              </div>

              {/* <div className="sticky left-0 top-0 flex w-full items-center justify-start bg-dark-800 px-12 py-4 ">
                <Clock className="mr-3 h-5 w-5 " />
                Overdue
                <Plus className="ml-auto h-6 w-6 " />
              </div> */}

              <div className="flex min-h-14 w-full flex-col items-start justify-start   ">
                <Task
                  title="Create UI for Pricing Page"
                  dateAssigned="Jun 12"
                  dateEnd="Oct 19"
                  team="Design"
                  state="Overdue"
                />
              </div>

              {/* <div className="sticky left-0 top-0 flex w-full items-center justify-start bg-dark-800 px-12 py-4 ">
                <CircleCheck className="mr-3 h-5 w-5 " />
                Completed
                <Plus className="ml-auto h-6 w-6 " />
              </div> */}

              <div className="flex min-h-14 w-full flex-col items-start justify-start   ">
                <Task
                  title="Create Wireframe for Dashboard Page"
                  dateAssigned="Apr 27"
                  dateEnd="May 25"
                  team="Design"
                  state="Completed"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="min-h-screen w-96 border-l border-dark-500 bg-black/5"></div> */}
      </div>
    </main>
  );
}
