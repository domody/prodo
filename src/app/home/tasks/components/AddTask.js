import { useState } from "react";
import Task from "../../../../models/task";
import {
  X,
  Tag,
  CircleSlash,
  Calendar,
  AlertCircle,
  ChevronUp,
  Minus,
  ChevronDown,
} from "lucide-react";
import { Circle } from "react-feather";

const AddTask = ({ visible, setVisibility }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState("");
  const [milestonesCount, setMilestonesCount] = useState("");

  const toggleVisibility = () => {
    setVisibility(!visible);
  };

  const handleSubmit = async (event) => {
    console.log("Status:".status);
    event.preventDefault();
    try {
      const task = new Task(
        title,
        description,
        dueDate,
        parseInt(priority),
        status,
        tags.split(","),
        parseInt(milestonesCount),
      );
      await Task.createTask(task);
      console.log("Document written with ID: ", task.id);
      // Clear the form
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("");
      setStatus("");
      setTags("");
      setMilestonesCount("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    toggleVisibility();
  };

  return (
    <div
      className={`absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/25 transition-all ${visible ? "" : "pointer-events-none opacity-0"}`}
    >
      <div
        className={`flex w-[52rem] flex-col items-center justify-center space-y-4 rounded-xl border border-dark-500 bg-dark-900 p-6`}
      >
        <div className="flex h-full w-full items-center justify-between">
          <div className="flex max-w-[30rem] flex-col items-start justify-start">
            <h1 className="text-base font-semibold">Create new Task</h1>
            <p className="mt-1 text-sm text-dark-300">
              Sub text can go here maybe, dk if it is rlly worth it tho
            </p>
          </div>
          <div className="flex h-12 items-start justify-center">
            <X className="h-5 w-5 cursor-pointer" onClick={toggleVisibility} />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-4 text-sm placeholder:text-sm"
        >
          <input
            type="text"
            className="h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 placeholder:text-dark-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Name"
            required
          />
          <textarea
            type="text"
            className="h-36 max-h-96 min-h-24 w-full rounded-lg border border-dark-500 bg-transparent px-2 py-4 text-light-50 placeholder:text-dark-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            resiz
          />
          <div className="flex w-full items-center justify-start space-x-4 text-light-500">
            <button className="flex items-center justify-center rounded-lg bg-dark-800 px-3 py-1.5">
              <CircleSlash className="mr-1.5 h-4 w-4" /> Status
            </button>
            <button className="flex items-center justify-center rounded-lg bg-dark-800 px-3 py-1.5">
              <Calendar className="mr-1.5 h-4 w-4" /> Due Date
            </button>
            <button className="flex items-center justify-center rounded-lg bg-dark-800 px-3 py-1.5">
              <AlertCircle className="mr-1.5 h-4 w-4" />{" "}
              Priority
            </button>
            <button className="flex items-center justify-center rounded-lg bg-dark-800 px-3 py-1.5">
              <Tag className="mr-1.5 h-4 w-4" /> Tags
            </button>

            {/* <input
              type="date"
              className="h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 placeholder:text-dark-400"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              placeholder="Due date"
            />
            <input
              type="number"
              className="h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 placeholder:text-dark-400"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              placeholder="Priority (1, 2, 3)"
            />

            <input
              type="text"
              className="h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 placeholder:text-dark-400"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Tags"
            />
            <input
              type="text"
              className="h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 placeholder:text-dark-400"
              value={milestonesCount}
              onChange={(e) => setMilestonesCount(e.target.value)}
              placeholder="Milestones Amount"
            /> */}
          </div>
          <div className="flex w-full items-center justify-between text-sm font-medium">
            <button
              // type="submit"
              className="rounded-lg px-4 py-2 text-light-50 transition-all hover:bg-dark-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-light-50 px-4 py-2 text-dark-900"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
