import db from "../../../../lib/firestore";
import { doc, deleteDoc } from "firebase/firestore";

import { ChevronRight, Tag } from "lucide-react";

const DeleteItem = ({ id }) => {
  return (
    <button
      // onClick={}
      className="flex h-full w-full cursor-pointer items-center justify-between rounded-[4px] px-2 py-1.5 transition-all hover:bg-dark-500"
    >
      <div className="flex items-center justify-start">
        <Tag className="mr-3 h-4 w-4" />
        Tags
      </div>

      <ChevronRight className="h-4 w-4" />
    </button>
  );
};

export default DeleteItem;
