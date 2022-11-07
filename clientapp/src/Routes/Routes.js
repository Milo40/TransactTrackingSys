import React, { useState } from "react";
import Home from "../views/Home";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { SideMenu } from "../components/SideMenu/SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const WithMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toogleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <>
        <div className="w-full p-2 flex items-center justify-center fixed bg-slate-600">
          <NavBar
            isExpanded={isExpanded}
            toogleExpanded={toogleExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>
        <div className="">
          <SideMenu
            isExpanded={isExpanded}
            toogleExpanded={toogleExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>
      </>
      <Outlet />
    </>
  );
};

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route element={<WithMenu />}>
          <Route exact index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export { Routing };
