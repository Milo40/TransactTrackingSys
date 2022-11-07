import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const SideUserCard = (props) => {
  const [isMenuShowed, setIsMenuShowed] = React.useState(false);
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-slate-500 dark:border-gray-700">
      <div className="justify-end px-4 pt-4">
        <button
          onClick={() => {
            setIsMenuShowed(!isMenuShowed);
          }}
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        {isMenuShowed ? (
          <div className="w-max mt-2 rounded-lg p-1 bg-gray-100 flex flex-col justify-center absolute">
            <Link to="">
              <div className="w-full px-6 py-2 text-sm font-bold hover:bg-slate-500 hover:text-white">
                Settings
              </div>
            </Link>
            <Link to="">
              <div className="w-full px-6 py-2 text-sm font-bold hover:bg-slate-500 hover:text-white">
                Help ?
              </div>
            </Link>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-center pb-3">
        <img
          className="mb-3 w-28 h-28 rounded-full"
          src="https://i.pravatar.cc/300"
          alt="Profile Pic"
        />
        <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
          Test User
        </h5>
      </div>
    </div>
  );
};

export { SideUserCard };
