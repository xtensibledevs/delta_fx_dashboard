import { useState } from "react";
import PopOut from "../popOuts/createPopOut";
import ProjectCard from "../cards/projectCard";

export default function Projects(props) {
  const [isPopOutVisible, setIsPopOutVisible] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const handleCreateProjectClick = () => {
    setIsPopOutVisible(true);
  };

  const handleClosePopOut = () => {
    setIsPopOutVisible(false);
  };

  const addProject = (newProject) => {
    const { projectName } = newProject;
    setProjectList([...projectList, projectName]);
    console.log(projectList);
  };

  console.log(projectList);
  return (
    <>
      {isPopOutVisible && (
        <PopOut onClose={handleClosePopOut} onSave={addProject} />
      )}

      {projectList.length === 0 ? (
        <div className="text-xl text-gray-400 flex flex-col justify-center items-center h-[79.5vh]">
          <h1 className="p-1">
            Get started with building a server-less application with just a few
            clicks.
          </h1>
          <h1 className="p-1"> Click `Create Project` to get started.</h1>
          <button
            className="my-10 px-5 py-2 text-white bg-blue-700 border-2 border-blue-700 rounded-lg hover:bg-white hover:text-blue-700"
            onClick={handleCreateProjectClick}
          >
            + Create Project
          </button>
        </div>
      ) : (
        <div className="h-[79.5vh] overflow-x-hidden overflow-y-auto ">
          <div className="flex justify-between m-5">
            <h1 className="text-lg font-bold">Projects</h1>
            <button
              className=" px-5 py-2 text-white bg-blue-700 outline-10 outline-blue-700 rounded-lg hover:bg-slate-300 hover:text-blue-700 transition-colors"
              onClick={handleCreateProjectClick}
            >
              + Create Project
            </button>
          </div>
          <div className="grid grid-cols-3 p-5">
            {projectList.map((project, index) => (
              <ProjectCard key={index} projectName={project} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
