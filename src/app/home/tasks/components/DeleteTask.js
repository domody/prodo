// app/components/DeleteItem.js
import db from "../../../../lib/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { AlertTriangle } from "lucide-react";

const DeleteItem = ({ id, visible, setDeleteTaskVisibility }) => {
  const handleDelete = async () => {
    const itemRef = doc(db, "tasks", id);
    try {
      await deleteDoc(itemRef);
      //alert("Item deleted successfully"); annoying
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Error deleting item");
    }
  };

  const toggleVisibility = () => {
    setDeleteTaskVisibility(!visible);
  };

  return (
    <div
      className={`absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/25 transition-all ${visible ? "" : "pointer-events-none opacity-0"}`}
    >
      <div className="flex  flex-col items-center justify-center rounded-xl border border-dark-500 bg-dark-900 px-20 py-12">
        <div className="rounded-full bg-red-500/5 p-5">
          <AlertTriangle className="h-16 w-16 text-red-500" />
        </div>{" "}
        <h1 className="mt-8 font-semibold">Delete Task</h1>
        <p className="mt-1 text-sm text-dark-300">
          This action cannot be undone.
        </p>
        <div className="mt-8 flex items-center justify-between w-64">
          <button
            className="flex cursor-pointer items-center justify-start rounded-md border border-light-50 px-8 py-1.5 transition-all hover:bg-dark-800"
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
