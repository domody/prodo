// app/components/DeleteItem.js
import db from "../../../../lib/firestore";
import { doc, deleteDoc } from "firebase/firestore";

const DeleteItem = ({ id }) => {
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

  return (
    <button
      onClick={handleDelete}
      className="rounded-md w-full h-full flex justify-start items-center cursor-pointer py-1.5 px-2 hover:bg-dark-500 transition-all"
    >
      Delete
    </button>
  );
};

export default DeleteItem;
