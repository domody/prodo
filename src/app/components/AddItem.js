// components/AddItem.js
import { useState } from "react";
import db from "../../../lib/firestore";
import { collection, addDoc } from "firebase/firestore";

const AddItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState("");
  const [milestonesCount, setMilestonesCount] = useState("");

  const handleSubmit = async (event) => {
    console.log('Status:' . status)
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "items"), {
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
      setMilestone("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center space-y-4"
    >
      <input
        type="text"
        className="px-2 text-dark-800"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        className="px-2 text-dark-800"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        className="px-2 text-dark-800"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="Due date"
      />
      <input
        type="number"
        className="px-2 text-dark-800"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        placeholder="Priority (1, 2, 3)"
      />
      <input
        type="text"
        className="px-2 text-dark-800"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Status"
      />
      <input
        type="text"
        className="px-2 text-dark-800"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags"
      />
      <input
        type="text"
        className="px-2 text-dark-800"
        value={milestonesCount}
        onChange={(e) => setMilestonesCount(e.target.value)}
        placeholder="Milestones Amount"
      />
      <button type="submit" className="rounded-lg bg-slate-800 p-2">
        Add Item
      </button>
    </form>
  );
};

export default AddItem;
