// components/AddItem.js
import { useState } from "react";
import db from "../../../lib/firestore";
import { collection, addDoc } from "firebase/firestore";

const AddItem = () => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "items"), {
        name: value.split(",")[0],
        milestones: parseInt(value.split(",")[1]),
      });
      console.log("Document written with ID: ", docRef.id);
      setValue(""); // Clear the form
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="text-dark-800"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add task (e.g 'Lol,3')"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
