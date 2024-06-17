import db from "../../../../lib/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { Pin } from "lucide-react";

const DeleteItem = ({ id }) => {
  return (
    <button
      // onClick={}
      className="flex h-full w-full cursor-pointer items-center justify-start rounded-[4px] px-2 py-1.5 transition-all hover:bg-dark-500"
    >
      <Pin className="mr-3 h-4 w-4" />
      Pin
    </button>
  );
};

export default DeleteItem;
