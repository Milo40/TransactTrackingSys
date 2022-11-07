import React from "react";
import { PlusIcon } from "../Svgs/PlusIcon";

const AddTransactRow = (props) => {
  return (
    <div className="w-1/4 p-2 flex justify-end items-center">
      <button
        className="p-4 flex justify-between bg-emerald-400 w-1/2 h-max rounded-xl text-md font-bold text-white shadow-xl"
        onClick={props.toogleIsAddView}
      >
        <PlusIcon size={7} />
        Ajouter
      </button>
    </div>
  );
};

export { AddTransactRow };
