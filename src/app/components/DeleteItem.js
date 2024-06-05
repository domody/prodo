// app/components/DeleteItem.js
import db from "../../../lib/firestore";
import { doc, deleteDoc } from "firebase/firestore";

const DeleteItem = ({ id }) => {
  const handleDelete = async () => {
    const itemRef = doc(db, "items", id);
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
      className="rounded border bg-red-400 p-1 text-white"
    >
      Delete Item
    </button>
  );
};

export default DeleteItem;
