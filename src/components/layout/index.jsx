import React from "react";
import { useState } from "react";
import Header from "../header";
import SideBar from "../sidebar";
import Mobilenavbar from "../header/MobileNavbar";

export default function Layout(props) {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("xs:hidden");
    setShowSidebar(true);
  };
  return (
    <>
      <div className="w-full h-screen flex bg-gray-50 overflow-hidden">
        <div className="hidden sm:block md:block xl:block" id="sidebar">
          <SideBar />
        </div>
        <div className="w-full bg-white overflow-auto pb-10">
          <Header sidebar={handleSidebar} showSidebar={showSidebar} />
          <Mobilenavbar />
          {props.children}
        </div>
      </div>
    </>
  );
}
