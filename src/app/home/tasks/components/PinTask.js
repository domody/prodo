// app/components/DeleteItem.js
import db from "../../../../lib/firestore";
import { doc, deleteDoc } from "firebase/firestore";

const DeleteItem = ({ id }) => {
  return (
    <button
      // onClick={}
      className="flex h-full w-full cursor-pointer items-center justify-between rounded-md px-2 py-1.5 transition-all hover:bg-dark-500"
    >
      Pin
    </button>
  );
};

export default DeleteItem;
