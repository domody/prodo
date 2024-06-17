import db from "../../../../lib/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { AlertTriangle } from "lucide-react";
import { useRef, useEffect } from "react";

const DeleteItem = ({ id, visible, setDeleteTaskVisibility }) => {
  const handleDelete = async () => {
    const taskRef = doc(db, "tasks", id);
    try {
      await deleteDoc(taskRef);
      toggleVisibility();
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Error deleting item");
    }
  };

  const toggleVisibility = () => {
    setDeleteTaskVisibility(!visible);
  };

  const deleteTaskRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      deleteTaskRef.current &&
      !deleteTaskRef.current.contains(event.target)
    ) {
      setDeleteTaskVisibility(false);
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
        ref={deleteTaskRef}
        className={`relative flex flex-col items-center justify-center rounded-xl border border-dark-500 bg-dark-900 px-20 py-12 transition-all ${visible ? "mb-0" : "mb-32"}`}
      >
        {/* <p className="absolute left-1/2 -translate-x-1/2 top-2 text-dark-700 text-xs">{id}</p> */}
        <div className="rounded-full bg-red-500/5 p-5">
          <AlertTriangle className="h-16 w-16 text-red-500" />
        </div>
        <h1 className="mt-8 font-semibold">Delete Task</h1>
        <p className="mt-1 text-sm text-dark-300">
          This action cannot be undone
        </p>
        <div className="mt-8 flex w-64 items-center justify-between">
          <button
            className="flex cursor-pointer items-center justify-start rounded-md border border-dark-500 px-8 py-1.5 transition-all hover:bg-dark-800"
            onClick={toggleVisibility}
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="flex cursor-pointer items-center justify-start rounded-md bg-red-500 px-8 py-1.5 transition-all hover:bg-red-400"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;

//
