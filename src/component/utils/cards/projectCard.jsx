import cloudImg from "../../../assets/cloud.svg";
export default function ProjectCard(props) {
  return (
    <div className="border-2 border-slate-300 p-5 rounded-lg w-96 m-5">
      <img src={cloudImg}></img>
      <h1 className="py-5 text-xl font-semibold">{props.projectName}</h1>
      <section className=" pt-5 border-t-2 border-slate-200 rounded-m">
        <button className="border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white px-5 py-3 rounded-lg ">
          Open Project
        </button>
      </section>
    </div>
  );
}
