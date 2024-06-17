import { useState, useEffect } from "react";
import { X } from "lucide-react";
import db from "../../../../lib/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const EditTask = ({ id, visible, setEditTaskVisibility }) => {
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [team, setTeam] = useState("");
  const [milestonesCount, setMilestonesCount] = useState("");

  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      if (id) {
        try {
          const taskRef = doc(db, "tasks", id); // 'tasks' is the collection name
          const taskRef = doc(db, "tasks", id);
          const taskSnap = await getDoc(taskRef);
          if (taskSnap.exists()) {
            setTask(taskSnap.data());
            setInitialInputValues(taskSnap.data());
            const taskData = taskSnap.data();
            setTask(taskData);
            setTitle(taskData.title);
            setDescription(taskData.description);
            setDueDate(taskData.dueDate);
            setPriority(taskData.priority);
            setStatus(taskData.status);
            setTeam(taskData.team);
          } else {
            console.log("No such document!");
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document: ", error);
          console.error("Error fetching document: ", error);
        }
      }
    };
    fetchTask();
  }, [id]);

  const setInitialInputValues = (data) => {
    setTitle(data.title);
    setDescription(data.description);
    setDueDate(data.dueDate);
    setPriority(data.priority);
    setStatus(data.status);
    setTeam(data.team);
    setMilestonesCount(data.milestonesCount);
  };

  const toggleVisibility = () => {
    setEditTaskVisibility(!visible);
  };

  const handleSubmit = async (event) => {
    //console.log("Status:".status);
    event.preventDefault();
    try {
      const editedTask = new Task(
      const taskRef = doc(db, "tasks", id);
      await updateDoc(taskRef, {
        title,
        description,
        dueDate,
        priority,
        status,
        team,
        parseInt(milestonesCount),
      );
      await Task.updateTask(id, editedTask);
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
  };

  return (
    <div
      className={`absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/25 transition-all ${visible ? "" : "pointer-events-none opacity-0"}`}
    >
      <div
        className={`flex max-h-[52rem] w-[52rem] flex-col items-center justify-center space-y-4 rounded-xl border border-dark-500 bg-dark-900 p-6 transition-all ${visible ? "mb-0" : "mb-32"}`}
        className={`flex max-h-[52rem] w-[52rem] flex-col items-center justify-center space-y-4 rounded-xl border border-dark-500 bg-dark-900 p-6 transition-all ${visible ? "mb-0" : "mb-32"}`}
      >
        <div className="flex h-full w-full items-center justify-between">
          <div className="flex max-w-[30rem] flex-col items-start justify-start">
            <h1 className="font-semibold">
              Edit Task {task ? `${task.team}-109` : ""}
            </h1>
            <h1 className="font-semibold">
              Edit Task {task ? `${task.team}-109` : ""}
            </h1>
            <p className="mt-1 text-sm text-dark-300">
              Change the inputs to edit the task.
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
          <div className="space-y-4 transition-all">
            <input
              type="text"
              className="h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 transition-all placeholder:text-dark-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Name"
              required
            />
            <textarea
              className="h-36 max-h-96 min-h-24 w-full rounded-lg border border-dark-500 bg-transparent px-2 py-4 text-light-50 transition-all placeholder:text-dark-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />

            <p>Status</p>
            <div className="flex items-center justify-start space-x-4">
            <div className="flex items-center justify-start space-x-4">
              <input
                type="radio"
                id="notStarted"
                name="statusRadio"
                value="notStarted"
                checked={status === "notStarted"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="notStarted">Not Started</label>
              <input
                type="radio"
                id="inProgress"
                name="statusRadio"
                value="inProgress"
                checked={status === "inProgress"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="inProgress">In Progress</label>
              <input
                type="radio"
                id="onHold"
                name="statusRadio"
                value="onHold"
                checked={status === "onHold"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="onHold">On Hold</label>
              <input
                type="radio"
                id="completed"
                name="statusRadio"
                value="completed"
                checked={status === "completed"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="completed">Completed</label>
            </div>

            <p>Due Date</p>
            <div className="flex items-center justify-start space-x-4">
              <input
                type="date"
                className="h-12 w-full rounded-lg border border-dark-500 bg-transparent px-2 text-light-50 transition-all placeholder:text-dark-400"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder={task ? `${task.dueDate}` : ""}
                required
              />
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
            <div className="flex items-center justify-start space-x-4">
              <input
                type="radio"
                id="Low"
                name="priorityRadio"
                value="Low"
                checked={priority === "Low"}
                onChange={(e) => setPriority(e.target.value)}
              />
              <label htmlFor="Low">Low</label>
              <input
                type="radio"
                id="Medium"
                name="priorityRadio"
                value="Medium"
                checked={priority === "Medium"}
                onChange={(e) => setPriority(e.target.value)}
              />
              <label htmlFor="Medium">Medium</label>
              <input
                type="radio"
                id="High"
                name="priorityRadio"
                value="High"
                checked={priority === "High"}
                onChange={(e) => setPriority(e.target.value)}
              />
              <label htmlFor="High">High</label>
            </div>

            <p>Team</p>
            <div className="flex items-center justify-start space-x-4">
            <div className="flex items-center justify-start space-x-4">
              <input
                type="radio"
                id="DVLP"
                name="teamRadio"
                value="DVLP"
                checked={team === "DVLP"}
                onChange={(e) => setTeam(e.target.value)}
              />
              <label htmlFor="DVLP">Development</label>
              <input
                type="radio"
                id="DSGN"
                name="teamRadio"
                value="DSGN"
                checked={team === "DSGN"}
                onChange={(e) => setTeam(e.target.value)}
              />
              <label htmlFor="DSGN">Design</label>
              <input
                type="radio"
                id="HR"
                name="teamRadio"
                value="HR"
                checked={team === "HR"}
                onChange={(e) => setTeam(e.target.value)}
              />
              <label htmlFor="HR">HR</label>
            </div>
          </div>
          <div className="mt-2 flex w-full items-center justify-between text-sm font-medium">
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
              Edit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
