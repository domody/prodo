import { useState } from "react";
import db from "../../../lib/firestore";
import { collection, addDoc } from "firebase/firestore";

const AddTask = ({visible, setVisibility}) => {
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
      const docRef = await addDoc(collection(db, "tasks"), {
        name: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        status: status ? status : "Not Started",
        tags: tags,
        milestonesCount: milestonesCount,
        currentMilestone: 0,
      });
      console.log("Document written with ID: ", docRef.id);
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

    toggleVisibility()
  };


  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col p-8 z-50 bg-dark-800 rounded-xl items-center w-[62.5%] justify-center space-y-4 absolute top-1/4 left-1/2 -translate-y-1/4 -translate-x-1/2  ${visible ? '' : 'hidden'}`}
    >
      <input
        type="text"
        className="px-2 text-dark-800 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        className="px-2 text-dark-800 w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        className="px-2 text-dark-800 w-full"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="Due date"
      />
      <input
        type="number"
        className="px-2 text-dark-800 w-full"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        placeholder="Priority (1, 2, 3)"
      />
      <input
        type="text"
        className="px-2 text-dark-800 w-full"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Status"
      />
      <input
        type="text"
        className="px-2 text-dark-800 w-full"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags"
      />
      <input
        type="text"
        className="px-2 text-dark-800 w-full"
        value={milestonesCount}
        onChange={(e) => setMilestonesCount(e.target.value)}
        placeholder="Milestones Amount"
      />
      <button type="submit" className="rounded-lg bg-slate-800 p-2">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
