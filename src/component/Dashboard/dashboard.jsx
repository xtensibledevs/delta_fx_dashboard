import Sidebar from "../utils/dashSidebar/sidebar";
import Domains from "../utils/domains/domains";
import Navbar from "../utils/navbar/dashNavbar";
import Projects from "../utils/projects/project";
import YourApp from "../utils/yourApp/yourApp";
import { useState } from "react";
export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState ("projects");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <section className="flex overflow-hidden">
      <Sidebar></Sidebar>
      <section className="w-screen">
        <header className="h-24 flex justify-left text-2xl font-bold items-center px-10">
          <h1>Dashboard</h1>
        </header>
        <Navbar
          selectedTab={selectedTab}
          handleTabClick={handleTabClick}
        ></Navbar>
        {selectedTab === "projects" && <Projects></Projects>}
        {selectedTab === "domains" && <Domains></Domains>}
        {selectedTab === "your-apps" && <YourApp></YourApp>}
      </section>
    </section>
  );
}
