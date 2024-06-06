import { useState } from "react";
import Task from "../../../../models/task";
import { X } from "lucide-react";

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
        className={`flex w-[36rem] flex-col items-center justify-center space-y-4 rounded-xl border border-dark-500 bg-dark-900 p-4`}
      >
        <div className="flex w-full items-center justify-between">
          <h1 className="text-base font-semibold">Create new Task</h1>
          <X className="h-5 w-5 cursor-pointer" onClick={toggleVisibility}/>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 placeholder:text-dark-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="text"
            className="h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 placeholder:text-dark-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <input
            type="text"
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
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Status"
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
          />
          <div className="flex w-full items-center justify-between font-medium text-sm">
            <button
              // type="submit"
              className="rounded-lg text-light-50 px-4 py-2 hover:bg-dark-500 transition-all"
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
