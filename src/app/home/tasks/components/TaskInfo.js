import React from "react";

import db from "../../../../lib/firestore";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import {
  X,
  Ellipsis,
  Maximize2,
  Minimize2,
  Pencil,
  Share2,
} from "lucide-react";

const TaskInfo = ({ id, visible, setTaskInfoVisibility }) => {
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [team, setTeam] = useState("");
  const [milestonesCount, setMilestonesCount] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      if (id) {
        try {
          const taskRef = doc(db, "tasks", id);
          const taskSnap = await getDoc(taskRef);
          if (taskSnap.exists()) {
            setTask(taskSnap.data());
            setInfoValues(taskSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document: ", error);
        }
      }
    };
    fetchTask();
  }, [id]);

  const setInfoValues = (data) => {
    setTitle(data.title);
    setDescription(data.description);
    setDueDate(data.dueDate);
    setPriority(data.priority);
    setStatus(data.status);
    setTeam(data.team);
    setMilestonesCount(data.milestonesCount);
  };

  const toggleVisibility = () => {
    setTaskInfoVisibility(!visible);
  };

  return (
    <div
      className={`absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50 transition-all ${visible ? "" : "pointer-events-none opacity-0"}`}
    >
      <div
        className={`flex h-[54rem] w-[80rem] flex-col items-start justify-start rounded-2xl border border-dark-500 bg-dark-900 transition-all ${visible ? "mb-0" : "mb-32"}`}
      >
        <div className="flex h-16 w-full items-center justify-between rounded-t-2xl border-b border-dark-500 px-10 text-dark-200">
          <div className="flex items-center justify-end space-x-4">
            {/* <Maximize2 className="h-5 w-5 cursor-pointer transition-all hover:text-dark-50" /> */}
            {/* <div className="h-8 w-px rounded-full bg-dark-800"></div> */}
            {/* <p className="select-none text-sm">Task Details</p> */}
          </div>
          <div className="flex items-center justify-end space-x-4">
            <Pencil className="h-5 w-5 cursor-pointer transition-all hover:text-dark-50" />
            <Share2 className="h-5 w-5 cursor-pointer transition-all hover:text-dark-50" />
            <Maximize2 className="h-5 w-5 cursor-pointer transition-all hover:text-dark-50" />
            <Ellipsis className="h-5 w-5 cursor-pointer transition-all hover:text-dark-50" />
            <X
              className="h-5 w-5 cursor-pointer transition-all hover:text-dark-50"
              onClick={toggleVisibility}
            />
          </div>
        </div>
        <div className="noeffect-border-r flex h-full w-full flex-col items-start justify-start overflow-y-auto border-dark-500">
          <div className="noeffect-border-b w-full overflow-y-auto border-dark-500 px-10 py-8 text-dark-300">
            <h1 className="text-xl font-semibold text-light-50">{title}</h1>
            <p className="mt-2 text-wrap">{description}</p>
            <div className="mt-8 flex items-start justify-start">
              <div className="flex w-40 flex-col items-start justify-start">
                <p className="flex h-12 items-center justify-start">Status</p>
                <p className="flex h-12 items-center justify-start">Priority</p>
                <p className="flex h-12 items-center justify-start">Due Date</p>
              </div>
              <div className="w-40">
                <div className="flex h-12 items-center justify-start">
                  {status}
                </div>
                <div className="flex h-12 items-center justify-start">
                  {priority}
                </div>
                <div className="flex h-12 items-center justify-start">
                  {dueDate}
                </div>
              </div>
            </div>
          </div>
          <div className="h-24 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
