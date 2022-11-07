import React from "react";
import { TimesIcon } from "../Svgs/TimesIcon";
import { HomeIcon } from "../Svgs/HomeIcon";
import { SideUserCard } from "../SideUserCard/SideUserCard";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const SideMenu = (props) => {
  return props.isExpanded ? (
    <div className="w-1/4 h-max">
      {/* <!-- drawer component --> */}
      <div
        className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-1/4 dark:bg-slate-600 transition-transform left-0 top-0 transform-none shadow-2xl shadow-slate-900"
        tabIndex="-1"
        aria-labelledby="drawer-disable-body-scrolling-label"
        aria-modal="true"
        role="dialog"
      >
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={props.toogleExpanded}
        >
          <TimesIcon size={5} color={"white"} />
          <span className="sr-only">Close menu</span>
        </button>
        <SideUserCard />
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2">
            <Link to="/home">
              <li className="flex items-center px-5 py-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <HomeIcon size={6} color={"slate"} />
                <span className="ml-3">Home</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export { SideMenu };
