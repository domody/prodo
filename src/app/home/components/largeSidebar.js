import React from "react";

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

const LargeSidebar = () => {
  return (      
  <div className="flex h-screen w-96 flex-col items-start justify-start border-r border-dark-500">
    <div className="h-20 w-full border-b border-dark-500"></div>
    <div className="h-[calc(100vw - 5rem)] flex w-full flex-col items-start justify-start px-4 py-4">
      {/* <h1 className="text-lg font-medium ">Tasks</h1> */}
      <div className="mt-4 w-full text-sm ">
        <ul className="w-full space-y-4">
          <li>
            <a
              href=""
              className="flex items-center justify-start rounded-lg p-2 text-sm font-semibold transition-all hover:bg-dark-500"
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
  </div>);
};

export default LargeSidebar;
