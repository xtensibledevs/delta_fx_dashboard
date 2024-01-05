import { useState } from "react";

export default function Navbar(props) {
  return (
    <nav className="flex border-b-2 border-blue-100 mx-5 rounded-sm ">
      <a
        href="#"
        className={`p-2 mx-5 text-lg font-medium ml-0 ${
          props.selectedTab === "projects" &&
          "border-b-2 border-blue-500 rounded-sm"
        }`}
        onClick={() => props.handleTabClick("projects")}
      >
        Projects
      </a>
      <a
        href="#"
        className={`p-2 mx-5 text-lg font-medium ${
          props.selectedTab === "domains" &&
          "border-b-2 border-blue-500 rounded-sm"
        }`}
        onClick={() => props.handleTabClick("domains")}
      >
        Domains
      </a>
      <a
        href="#"
        className={`p-2 mx-5 text-lg font-medium ${
          props.selectedTab === "your-apps" &&
          "border-b-2 border-blue-500 rounded-sm"
        }`}
        onClick={() => props.handleTabClick("your-apps")}
      >
        Your Apps
      </a>
    </nav>
  );
}
