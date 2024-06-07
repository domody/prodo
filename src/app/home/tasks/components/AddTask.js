import { useState } from "react";
import Task from "../../../../models/task";
import { X, Tag, CircleSlash, Calendar, AlertCircle, Info } from "lucide-react";
import { Circle } from "react-feather";

const AddTask = ({ visible, setCreateTaskVisibility }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState("");
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

  const [activeSubPage, setActiveSubPage] = useState("Info");

  var infoPageActive = activeSubPage === "Info";
  var statusPageActive = activeSubPage === "Status";
  var dueDatePageActive = activeSubPage === "DueDate";
  var priorityPageActive = activeSubPage === "Priority";
  var tagsPageActive = activeSubPage === "Tags";

  const changeSubPage = (page) => {
    setActiveSubPage(page);
  };
  
  const [selectedStatus, setStatusSelection] = useState("notStarted");

  var notStartedSelected = selectedStatus === "notStarted";
  var inProgressSelected = selectedStatus === "inProgress";
  var onHoldSelected = selectedStatus === "onHold";
  var completedSelected = selectedStatus === "completed";

  return (
    <div
      className={`absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/25 transition-all ${visible ? "" : "pointer-events-none opacity-0"}`}
    >
      <div
        className={`flex w-[52rem] flex-col items-center justify-center space-y-4 rounded-xl border border-dark-500 bg-dark-900 p-6 transition-all ${visible ? "mb-0" : "mb-32"}`}
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
        <div className="flex w-full items-center justify-start space-x-4 text-light-500">
          <button
            className={`flex items-center justify-center rounded-lg bg-dark-800 px-3 py-1.5 border ${infoPageActive ? "border-dark-500" : "border-dark-800"}`}
            onClick={() => changeSubPage("Info")}
          >
            <Info className="mr-1.5 h-4 w-4" /> Info
          </button>
          <button
            className={`flex items-center justify-center rounded-lg bg-dark-800 px-3 py-1.5 border ${statusPageActive ? "border-dark-500" : "border-dark-800"}`}
            onClick={() => changeSubPage("Status")}
          >
            <CircleSlash className="mr-1.5 h-4 w-4" /> Status
          </button>
          <button
            className={`flex items-center justify-center rounded-lg bg-dark-800 px-3 py-1.5 border ${dueDatePageActive ? "border-dark-500" : "border-dark-800"}`}
            onClick={() => changeSubPage("DueDate")}
          >
            <Calendar className="mr-1.5 h-4 w-4" /> Due Date
          </button>
          <button
            className={`flex items-center justify-center rounded-lg bg-dark-800 px-3 py-1.5 border ${priorityPageActive ? "border-dark-500" : "border-dark-800"}`}
            onClick={() => changeSubPage("Priority")}
          >
            <AlertCircle className="mr-1.5 h-4 w-4" /> Priority
          </button>
          <button
            className={`flex items-center justify-center rounded-lg bg-dark-800 px-3 py-1.5 border ${tagsPageActive ? "border-dark-500" : "border-dark-800"}`}
            onClick={() => changeSubPage("Tags")}
          >
            <Tag className="mr-1.5 h-4 w-4" /> Tags
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full text-sm placeholder:text-sm"
        >
          <div className={`transition-all space-y-4 ${infoPageActive ? "" : "hidden"}`}>
            <input
              type="text"
              className={`h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 placeholder:text-dark-400 transition-all ${infoPageActive ? "" : "hidden"}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Name"
              required
            />
            <textarea
              type="text"
              className={`h-36 max-h-96 min-h-24 w-full rounded-lg border border-dark-500 bg-transparent px-2 py-4 text-light-50 placeholder:text-dark-400 transition-all ${infoPageActive ? "" : "hidden"}`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder= {infoPageActive ? "Description" : null}
              resiz
            />
          </div>
          <div className={`flex justify-start items-start space-x-4 mb-2 ${statusPageActive ? "" : "hidden"}`}>
            <button className={`rounded-lg px-4 py-2 border border-rose-800 ${notStartedSelected ? "border-2 border-rose-200 bg-rose-900 " : "bg-dark-800 border-1 border-rose-800"}`} onClick={() => setStatusSelection('notStarted')}>
              Not Started
            </button>

            <button className={`rounded-lg px-4 py-2 border border-amber-800 ${inProgressSelected ? "border-2 border-amber-200 bg-amber-900 " : "bg-dark-800 border-1 border-amber-800"}`} onClick={() => setStatusSelection('inProgress')}>
              In Progress
            </button>

            <button className={`rounded-lg px-4 py-2 border border-cyan-700 ${onHoldSelected ? "border-2 border-cyan-100 bg-cyan-900 " : "bg-dark-800 border-1 border-cyan-800"}`} onClick={() => setStatusSelection('onHold')}>
              On Hold
            </button>

            <button className={`rounded-lg px-4 py-2 border border-green-800 ${completedSelected ? "border-2 border-green-200 bg-green-900 " : "bg-dark-800 border-1 border-green-800"}`} onClick={() => setStatusSelection('completed')}>
              Completed
            </button>
          </div>
          <div className={`flex justify-start items-start space-x-4 mb-2 ${dueDatePageActive ? "" : "hidden"}`}>

            <input
              type="date"
              className={`h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 placeholder:text-dark-400 transition-all ${dueDatePageActive ? "" : "hidden"}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Name"
              required
            />

          </div>
          <div className="flex w-full items-center justify-between text-sm font-medium">
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
