import { useState } from "react";
import Task from "../../../../models/task";
import {
  X,
  Tag,
  CircleSlash,
  CalendarIcon,
  AlertCircle,
  Info,
} from "lucide-react";
import { Circle } from "react-feather";
import Calendar from "./Calendar";

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
        className={`flex w-[52rem] max-h-[52rem] flex-col items-center justify-center space-y-4 rounded-xl border border-dark-500 bg-dark-900 p-6 transition-all ${visible ? "mb-0" : "mb-32"}`}
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
            className={`flex items-center justify-center rounded-lg border bg-dark-800 px-3 py-1.5 ${infoPageActive ? "border-dark-500" : "border-dark-800"}`}
            onClick={() => changeSubPage("Info")}
          >
            <Info className="mr-1.5 h-4 w-4" /> Info
          </button>
          <button
            className={`flex items-center justify-center rounded-lg border bg-dark-800 px-3 py-1.5 ${statusPageActive ? "border-dark-500" : "border-dark-800"}`}
            onClick={() => changeSubPage("Status")}
          >
            <CircleSlash className="mr-1.5 h-4 w-4" /> Status
          </button>
          <button
            className={`flex items-center justify-center rounded-lg border bg-dark-800 px-3 py-1.5 ${dueDatePageActive ? "border-dark-500" : "border-dark-800"}`}
            onClick={() => changeSubPage("DueDate")}
          >
            <CalendarIcon className="mr-1.5 h-4 w-4" /> Due Date
          </button>
          <button
            className={`flex items-center justify-center rounded-lg border bg-dark-800 px-3 py-1.5 ${priorityPageActive ? "border-dark-500" : "border-dark-800"}`}
            onClick={() => changeSubPage("Priority")}
          >
            <AlertCircle className="mr-1.5 h-4 w-4" /> Priority
          </button>
          <button
            className={`flex items-center justify-center rounded-lg border bg-dark-800 px-3 py-1.5 ${tagsPageActive ? "border-dark-500" : "border-dark-800"}`}
            onClick={() => changeSubPage("Tags")}
          >
            <Tag className="mr-1.5 h-4 w-4" /> Tags
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full text-sm placeholder:text-sm"
        >
          <div
            className={`space-y-4 transition-all ${infoPageActive ? "" : "hidden"}`}
          >
            <input
              type="text"
              className={`h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 transition-all placeholder:text-dark-400 ${infoPageActive ? "" : "hidden"}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Name"
              required
            />
            <textarea
              type="text"
              className={`h-36 max-h-96 min-h-24 w-full rounded-lg border border-dark-500 bg-transparent px-2 py-4 text-light-50 transition-all placeholder:text-dark-400 ${infoPageActive ? "" : "hidden"}`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={infoPageActive ? "Description" : null}
              resiz
            />

            <p>Status</p>
            <div className="flex justify-start items-center space-x-4" > 
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
            <div className="flex justify-start items-center space-x-4" > 
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
            <div className="flex justify-start items-center space-x-4" > 
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
            <div className="flex justify-start items-center space-x-4" > 
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

          {/* <div
            className={`mb-2 flex items-start justify-start space-x-4 ${statusPageActive ? "" : "hidden"}`}
          >
            <button
              className={`rounded-lg border px-4 py-2 ${notStartedSelected ? "border-2 border-rose-200 bg-rose-900 " : "border-1 border-rose-800 bg-dark-800"}`}
              onClick={() => setStatusSelection("notStarted")}
            >
              Not Started
            </button>

            <button
              className={`rounded-lg border px-4 py-2 ${inProgressSelected ? "border-2 border-amber-200 bg-amber-900 " : "border-1 border-amber-800 bg-dark-800"}`}
              onClick={() => setStatusSelection("inProgress")}
            >
              In Progress
            </button>

            <button
              className={`rounded-lg border px-4 py-2 ${onHoldSelected ? "border-2 border-cyan-200 bg-cyan-900 " : "border-1 border-cyan-800 bg-dark-800"}`}
              onClick={() => setStatusSelection("onHold")}
            >
              On Hold
            </button>

            <button
              className={`rounded-lg border px-4 py-2 ${completedSelected ? "border-2 border-green-200 bg-green-900 " : "border-1 border-green-800 bg-dark-800"}`}
              onClick={() => setStatusSelection("completed")}
            >
              Completed
            </button>
          </div> */}
          <div
            className={`mb-2 flex items-start justify-start space-x-4 ${dueDatePageActive ? "" : "hidden"}`}
          >
            {/* <input
              type="date"
              className={`h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 placeholder:text-dark-400 transition-all ${dueDatePageActive ? "" : "hidden"}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Name"
              required
            /> */}
            <Calendar />
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
