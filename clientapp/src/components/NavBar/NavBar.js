import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { SideMenuButton } from "../SideMenu/SideMenuButton";

const NavBar = (props) => {
  return (
    <div className="p-4 w-max bg-slate-500 rounded-xl">
      <div className="p-5 text-gray-900 bg-white rounded-xl shadow-lg font-semibold capitalize items-baseline">
        <Link to="/">
          <span className="px-2 ml-3 border-r border-gray-800">
            <img
              src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png"
              alt="Logo Here"
              className="w-8 h-8 -mt-1 inline mx-auto"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <SideMenuButton
          isExpanded={props.isExpanded}
          toogleExpanded={props.toogleExpanded}
          setIsExpanded={props.setIsExpanded}
        />
      </div>
    </div>
  );
};

export { NavBar };
