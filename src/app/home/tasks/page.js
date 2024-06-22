"use client";
import React, { useState } from "react";
import SkinnySidebar from "../components/skinnySidebar";
import LargeSidebar from "../components/largeSidebar";
import {
  Plus,
  Search,
} from "lucide-react";


import AddTask from "./components/AddTask";
import DeleteTask from "./components/DeleteTask";
import EditTask from "./components/EditTask"
import TaskInfo from "./components/TaskInfo";
import ListTasks from "./components/ListTasks";

export default function Page() {
  const [createTaskVisiblity, setCreateTaskVisibility] = useState(false);
  const [deleteTaskVisibility, setDeleteTaskVisibility] = useState(false);
  const [editTaskVisibility, setEditTaskVisibility] = useState(false);
  const [taskInfoVisibility, setTaskInfoVisibility] = useState(false)

  const [infoID, setInfoID] = useState("")
  const [deleteID, setDeleteID] = useState("");
  const [editID, setEditID] = useState("");

  const toggleAddTask = () => {
    setCreateTaskVisibility(!createTaskVisiblity);
  };

  const toggleDeleteTask = (id) => {
    setDeleteTaskVisibility(!deleteTaskVisibility);
    setDeleteID(id);
  };
  
  const toggleEditTask = (id) => {
    setEditID(id);
    setTimeout(() => {
      setEditTaskVisibility(!editTaskVisibility);
    }, 100);
  };

  const toggleTaskInfo = (id) => {
    setInfoID(id)
    setTimeout(() => {
          setTaskInfoVisibility(!taskInfoVisibility)
    }, 100);
  }


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
      <EditTask
        id={editID}
        visible={editTaskVisibility}
        setEditTaskVisibility={setEditTaskVisibility}
        />
      <TaskInfo id={infoID} visible={taskInfoVisibility} setTaskInfoVisibility={setTaskInfoVisibility}/>
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
                toggleEditTask={toggleEditTask}
                toggleTaskInfo={toggleTaskInfo}
              />
            </div>
          </div>
        </div>
        {/* <div className="min-h-screen w-96 border-l border-dark-500 bg-black/5"></div> */}
      </div>
    </main>
  );
}
