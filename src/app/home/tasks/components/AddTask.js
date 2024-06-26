import { useState, useEffect, useRef } from "react";
import Task from "../../../../models/task";
import { X } from "lucide-react";

const AddTask = ({ visible, setCreateTaskVisibility }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [team, setTeam] = useState("");
  const [milestonesCount, setMilestonesCount] = useState("");

  const toggleVisibility = () => {
    setCreateTaskVisibility(!visible);
  };

  const handleSubmit = async (event) => {
    console.log("Status:".status);
    event.preventDefault();
    try {
      const task = new Task(
        title,
        description,
        dueDate,
        priority,
        status,
        team,
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
      setTeam("");
      setMilestonesCount("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    toggleVisibility();
  };

  const addTaskRef = useRef(null);

  const handleClickOutside = (event) => {
    if (addTaskRef.current && !addTaskRef.current.contains(event.target)) {
      setCreateTaskVisibility(false);
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

  return (
    <div
      className={`absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/25 transition-all ${visible ? "" : "pointer-events-none opacity-0"}`}
    >
      <div
        ref={addTaskRef}
        className={`flex max-h-[52rem] w-[52rem] flex-col items-center justify-center space-y-4 rounded-xl border border-dark-500 bg-dark-900 p-6 transition-all ${visible ? "mb-0" : "mb-32"}`}
      >
        <div className="flex h-full w-full items-center justify-between">
          <div className="flex max-w-[30rem] flex-col items-start justify-start">
            <h1 className="font-semibold">Create new Task</h1>
            <p className="mt-1 text-sm text-dark-300">
              Fill in the inputs to create a new task.
            </p>
          </div>
          <div className="flex h-12 items-start justify-center">
            <X className="h-5 w-5 cursor-pointer" onClick={toggleVisibility} />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full text-sm placeholder:text-sm"
        >
          <div
            className={`space-y-4 transition-all`}
          >
            <input
              type="text"
              className={`h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 transition-all placeholder:text-dark-400`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <textarea
              type="text"
              className={`h-36 max-h-96 min-h-24 w-full rounded-lg border border-dark-500 bg-transparent px-2 py-4 text-light-50 transition-all placeholder:text-dark-400`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />

            <p>Status</p>
            <div className="flex items-center justify-start space-x-4">
              <input
                type="radio"
                name="statusRadio"
                value="notStarted"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="notStarted">Not Started</label>
              <input
                type="radio"
                name="statusRadio"
                value="inProgress"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="inProgress">In Progress</label>
              <input
                type="radio"
                name="statusRadio"
                value="onHold"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="onHold">On Hold</label>
              <input
                type="radio"
                name="statusRadio"
                value="Completed"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="Completed">Completed</label>
            </div>

            <p>Due Date</p>
            <div className="flex items-center justify-start space-x-4">
              <input
                type="date"
                className="h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 transition-all placeholder:text-dark-400"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder="Due Date"
                required
              />
            </div>

            <p>Priority</p>
            <div className="flex items-center justify-start space-x-4">
              <input
                type="radio"
                name="priorityRadio"
                value="Low"
                onChange={(e) => setPriority(e.target.value)}
              />
              <label htmlFor="Low">Low</label>
              <input
                type="radio"
                name="priorityRadio"
                value="Medium"
                onChange={(e) => setPriority(e.target.value)}
              />
              <label htmlFor="Medium">Medium</label>
              <input
                type="radio"
                name="priorityRadio"
                value="High"
                onChange={(e) => setPriority(e.target.value)}
              />
              <label htmlFor="High">High</label>
            </div>

            <p>Team</p>
            <div className="flex items-center justify-start space-x-4">
              <input
                type="radio"
                name="teamRadio"
                value="DVLP"
                onChange={(e) => setTeam(e.target.value)}
              />
              <label htmlFor="DVLP">Develpment</label>
              <input
                type="radio"
                name="teamRadio"
                value="DSGN"
                onChange={(e) => setTeam(e.target.value)}
              />
              <label htmlFor="DSGN">Design</label>
              <input
                type="radio"
                name="teamRadio"
                value="HR"
                onChange={(e) => setTeam(e.target.value)}
              />
              <label htmlFor="HR">HR</label>
            </div>
          </div>
          <div className="mt-2 flex w-full items-center justify-between text-sm font-medium">
            <div
              onClick={toggleVisibility}
              className="cursor-pointer rounded-lg px-4 py-2 text-light-50 transition-all hover:bg-dark-500"
            >
              Cancel
            </div>
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
