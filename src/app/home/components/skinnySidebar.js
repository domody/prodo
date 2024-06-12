import { Codesandbox } from "react-feather";

import { LayoutDashboard } from "lucide-react";
import { ListTodo } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { NotepadText } from "lucide-react";
import { UserCircle } from "lucide-react";
import { Settings } from "lucide-react";
import { Inbox } from "lucide-react";
import { Folder } from "lucide-react";
import { CalendarDays } from "lucide-react";

const SkinnySidebar = ({ active }) => {

  const dashboardActive = active === "dashboard";
  const calendarActive = active === "calendar";
  const tasksActive = active === "tasks";
  const notesActive = active === "notes";

  return (
    <div className="h-screen w-20 border-r border-dark-500 px-4 py-4">
      <div className="flex h-full w-full flex-col items-center justify-start">
        <div className="flex flex-col items-start justify-center">
          <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-400 to-orange-200 p-2">
            <Codesandbox className="h-8 w-8" />
          </div>
          <div className="mx-auto h-[1px] w-4/5 bg-dark-500"></div>
        </div>

        <div className="flex flex-col items-start justify-center space-y-1 pt-4">
          <a
            href="/home"
            className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-white/5 ${dashboardActive ? "bg-white/5" : ""}`}
          >
            <LayoutDashboard className="h-6 w-6 text-dark-100" />
          </a>

          {/* <a className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-white/5">
            <Inbox className="h-6 w-6 text-dark-100" />
          </a>

          <a className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-white/5">
            <MessageCircle className="h-6 w-6 text-dark-100" />
          </a> */}

          <a
            className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-white/5 ${calendarActive ? "bg-white/5" : ""}`}
            href="/home/calendar"
          >
            <CalendarDays className="h-6 w-6 text-dark-100" />
          </a>

          <a
            href="/home/tasks"
            className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-white/5 ${tasksActive ? "bg-white/5" : ""}`}
          >
            <ListTodo className="h-6 w-6 text-dark-100" />
          </a>

          <a
            href=""
            className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-white/5 ${notesActive ? "bg-white/5" : ""}`}
          >
            <NotepadText className="h-6 w-6 text-dark-100" />
          </a>

          {/* <a
            href=""
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-white/5"
          >
            <Folder className="h-6 w-6 text-dark-100" />
          </a> */}
        </div>
        <div className="mt-auto flex flex-col items-start justify-center space-y-1 pb-4">
          <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-white/5">
            <UserCircle className="h-6 w-6 text-dark-100" />
          </div>
          <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-white/5">
            <Settings className="h-6 w-6 text-dark-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinnySidebar;
