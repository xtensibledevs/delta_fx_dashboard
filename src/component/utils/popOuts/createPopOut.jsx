import nodeIcon from "../../../assets/nodeIcon.svg";
import pythonIcon from "../../../assets/python.svg";
import closeIcon from "../../../assets/closeIcon.svg";
import goLangIcon from "../../../assets/goLangIcon.svg";
import javaIcon from "../../../assets/javaIcon.svg";
import { useState } from "react";
export default function PopOut(props) {
  const [selectedRuntime, setSelectedRuntime] = useState(null);
  const [projectName, setProjectName] = useState("");
  const [techStackID, setTechStackID] = useState("");
  const [isProjectNameValid, setProjectNameValid] = useState(true);
  const [isTechStackIDValid, setTechStackIDValid] = useState(true);

  const handleRuntimeSelect = (runtime) => {
    setSelectedRuntime(runtime);
  };

  const handleProjectNameChange = (event) => {
    const inputValue = event.target.value;
    setProjectName(inputValue);
    setProjectNameValid(
      /^[a-zA-Z0-9](?:[a-zA-Z0-9\s]*[a-zA-Z0-9])?$/i.test(inputValue)
    );
  };

  const handleTechStackIDChange = (event) => {
    const inputValue = event.target.value;
    setTechStackID(inputValue);
    setTechStackIDValid(
      /^[a-zA-Z0-9](?:[a-zA-Z0-9\s]*[a-zA-Z0-9])?$/i.test(inputValue)
    );
  };

  const handleSave = () => {
    if (isProjectNameValid && isTechStackIDValid) {
      const newProject = {
        projectName: projectName,
        tech:techStackID,
        projectId: props.projectId,
      };
      props.onSave(newProject);
      props.onClose();
    }
  };

  return (
    <div>
      <div className="absolute inset-0 bg-blue-900 opacity-60 backdrop-blur-md w-screen h-screen"></div>
      <div className="absolute top-[15%] left-[30vw] bg-white p-5 rounded-xl ">
        <section className="flex justify-between p-2 pt-0 border-slate border-b-2">
          <header className="font-semibold text-lg">
            {" "}
            Create a new Project
          </header>
          <button className="close-button" onClick={props.onClose}>
            <img src={closeIcon}></img>
          </button>
        </section>

        <section>
          <h1 className="font-bold text-m p-2">
            Select a Runtime For Your App
          </h1>
          <ul className="flex">
            <li
              className={`cursor-pointer rounded-full h-15 w-15 flex justify-between items-center p-2 mx-3 ${
                selectedRuntime === "node" ? "bg-slate-300" : "bg-slate-100 "
              }`}
              onClick={() => handleRuntimeSelect("node")}
            >
              <img src={nodeIcon}></img>
            </li>
            <li
              className={`cursor-pointer rounded-full h-15 w-15 flex justify-between items-center p-2 mx-3 ${
                selectedRuntime === "python" ? "bg-slate-300" : "bg-slate-100 "
              }`}
              onClick={() => handleRuntimeSelect("python")}
            >
              <img src={pythonIcon}></img>
            </li>
            <li
              className={`cursor-pointer rounded-full h-15 w-15 flex justify-between items-center p-2 mx-3 ${
                selectedRuntime === "goLang" ? "bg-slate-300" : "bg-slate-100 "
              }`}
              onClick={() => handleRuntimeSelect("goLang")}
            >
              <img src={goLangIcon}></img>
            </li>
            <li
              className={`cursor-pointer rounded-full h-15 w-15 flex justify-between items-center p-2 mx-3 ${
                selectedRuntime === "java" ? "bg-slate-300" : "bg-slate-100 "
              }`}
              onClick={() => handleRuntimeSelect("java")}
            >
              <img src={javaIcon}></img>
            </li>
          </ul>
        </section>

        <section className="flex flex-col">
          <label className="p-2 text-m font-normal pb-1">Project Name</label>
          <input
            className="p-2 border-2 border-slate-200 rounded-lg outline-none"
            placeholder="Enter Project Name"
            type="text"
            maxLength={50}
            minLength={3}
            value={projectName}
            onChange={handleProjectNameChange}
          ></input>
          <div className="error-placeholder h-4">
            {!isProjectNameValid && (
              <h1 className="error px-2 text-sm font-normal text-red-500">
                Invalid Input
              </h1>
            )}
          </div>

          <label className="p-2 text-m font-normal pb-1">Tech Stack ID</label>
          <input
            className="p-2 border-2 border-slate-200 rounded-lg outline-none"
            placeholder="Enter Tech Stack ID"
            type="text"
            maxLength={50}
            minLength={3}
            value={techStackID}
            onChange={handleTechStackIDChange}
          />
          <div className="error-placeholder h-4">
            {!isTechStackIDValid && (
              <h1 className="error px-2 text-sm font-normal text-red-500">
                Invalid Input
              </h1>
            )}
          </div>
        </section>
        <section className="flex my-3">
          <h1 className="font-semi-bold">Project ID : </h1>
          <h1 className="font-bold">{props.projectId}</h1>
        </section>
        <section className=" flex justify-between  mt-12">
          <button
            className="close-button rounded-lg px-20 py-2 mx-5bg-white text-red-500 border-2 border-red-500 transition-colors hover:bg-slate-100"
            onClick={props.onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600  text-white rounded-lg px-20 py-2 mx-5 border-2 border-blue-600 hover:bg-blue-700 transition-colors"
            onClick={handleSave}
          >
            Create Project
          </button>
        </section>
      </div>
    </div>
  );
}
