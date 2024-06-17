import { useState, useRef, useEffect } from "react";
import { X, Trash, Pencil } from "lucide-react";
import db from "../../../../lib/firestore";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

const CalendarTask = ({ task, taskCellRef, cellRef, hideTaskModal }) => {
  const calendarTaskModalRef = useRef(null);

  const visible = taskCellRef === cellRef;

  const handleClickOutside = (event) => {
    if (
      calendarTaskModalRef.current &&
      !calendarTaskModalRef.current.contains(event.target)
    ) {
      hideTaskModal();
    }
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  const completeTask = async () => {
    try {
      const taskRef = doc(db, "tasks", task.id);
      await updateDoc(taskRef, {
        completed: true,
      });
      console.log("Successfully updated document.");
      hideTaskModal();
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const uncompleteTask = async () => {
    try {
      const taskRef = doc(db, "tasks", task.id);
      await updateDoc(taskRef, {
        completed: false,
      });
      console.log("Successfully updated document.");
      hideTaskModal();
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleDelete = async () => {
    const taskRef = doc(db, "tasks", task.id);
    try {
      await deleteDoc(taskRef);
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Error deleting item");
    }
  };

  return (
    <div
      ref={calendarTaskModalRef}
      className={`absolute -left-4 top-1/2 z-50 flex min-w-[26rem] -translate-x-full -translate-y-1/2 flex-col items-start justify-start rounded-lg border border-dark-700 bg-dark-900 px-6 py-4 text-sm transition-all ${
        visible ? "" : "hidden"
      }`}
    >
      <div className="flex w-full items-center justify-end space-x-6 mb-4">
        <div
          className="rounded-full p-2 hover:bg-dark-800 focus:bg-dark-500"
          // onClick={}
        >
          <Pencil className="h-5 w-5 cursor-pointer" />
        </div>
        <div
          className="rounded-full p-2 hover:bg-dark-800 focus:bg-dark-500"
          onClick={handleDelete}
        >
          <Trash className="h-5 w-5 cursor-pointer" />
        </div>
        <div
          className="rounded-full p-2 hover:bg-dark-800 focus:bg-dark-500"
          onClick={() => hideTaskModal()}
        >
          <X className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <h1 className="mr-12 text-nowrap text-lg font-semibold">
          {task.title}
        </h1>
      </div>

      {/* <div>{task.priority}</div> */}
      <p className="mb-4 text-xs text-dark-300">{task.dueDate}</p>
      <p className="mb-4 line-clamp-3 leading-relaxed">{task.description}</p>
      <div className="flex items-center justify-start space-x-4 text-dark-300">
        <p>{task.priority}</p>
        <p>{task.team}</p>
      </div>
      <div className="text-ms mt-6 flex w-full items-center justify-end font-medium">
        <button
          type="submit"
          className={`{/*bg-light-50  text-dark-900*/} rounded-lg border border-dark-700 px-4 py-1.5 ${task.completed ? "hidden" : ""}`}
          onClick={completeTask}
        >
          Mark as Complete
        </button>
        <button
          type="submit"
          className={`{/*bg-light-50  text-dark-900*/} rounded-lg border border-dark-700 px-4 py-1.5 ${task.completed ? "" : "hidden"}`}
          onClick={uncompleteTask}
        >
          Uncomplete Task
        </button>
      </div>
    </div>
  );
};

export default CalendarTask;
