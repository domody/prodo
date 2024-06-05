"use client";

import { useEffect, useState } from "react";
import db from "../../../lib/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import DeleteItem from "./DeleteItem";

const ListItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "items"), (snapshot) => {
      const itemsData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItems(itemsData);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-96 border p-4 text-center">
      <h2>List of Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="border-t-2 p-2">
            <p>{item.name}</p>
            <DeleteItem id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
