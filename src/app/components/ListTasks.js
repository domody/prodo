"use client";

import { useEffect, useState } from "react";
import db from "../lib/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import DeleteItem from "./DeleteTask";

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      const tasksData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTasks(tasksData);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-96 w-96 border p-4 text-center">
      <h2>List of tasks</h2>
      <ul>
        {tasks.map((item) => (
          <li key={item.id} className="border-t-2 p-2">
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Due Date: {item.dueDate}</p>
            <p>Priority: {item.priority}</p>
            <p>Type: {item.status}</p>
            <p>Tags: {item.tags}</p>
            <p>Milestones: {item.milestones}</p>
            <DeleteItem id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTasks;
