import homeIcon from "../../../assets/homeIcon.svg";
import arrowIcon from "../../../assets/arrowIcon.svg";
import textIcon from "../../../assets/Vector.svg";
import settingIcon from "../../../assets/settingIcon.svg";
import dashBoardIcon from "../../../assets/dashIcon.svg";

export default function Sidebar() {
  const name = "Akash Rajput";
  const myArr = name.split(" ");
  console.log(myArr);
  let shortHand = "";
  for (let i = 0; i < myArr.length; i++) {
    shortHand += myArr[i][0].toUpperCase();
  }
  return (
    <aside className="w-80 bg-slate-100 h-screen border-r-2 border-slate-300 ">
      <section className="flex py-3 justify-center font-semibold bg-white border-b-2 border-slate-300">
        <img src={dashBoardIcon}></img>
        <h2 className="text-lg text-center p-1">Delta Functions</h2>
      </section>
      <div className=" flex flex-col justify-between h-[86.5vh] mt-8">
        <section className="px-5 flex flex-col justify-evenly h-[55vh]">
          <a
            href="#"
            className="flex mx-1 py-1 hover:bg-white rounded-lg px-2 "
          >
            <img src={homeIcon}></img>
            <label className="mx-4 font-semibold cursor-pointer">
              Dashboard
            </label>
          </a>
          <a href="#" className="flex mx-1 py-1 hover:bg-white rounded-lg px-2">
            <img src={homeIcon}></img>
            <label className="mx-4 font-semibold cursor-pointer">
              Projects
            </label>
          </a>
          <a href="#" className="flex mx-1 hover:bg-white rounded-lg px-2 py-1">
            <img src={homeIcon}></img>
            <label className="mx-4 font-semibold cursor-pointer">
              Deployments
            </label>
          </a>
          <a href="#" className="flex mx-1 py-1 hover:bg-white rounded-lg px-2">
            <img src={homeIcon}></img>
            <label className="mx-4 font-semibold cursor-pointer">
              AnaLytics
            </label>
          </a>
          <a href="#" className="flex mx-1 py-1 hover:bg-white rounded-lg px-2">
            <img src={homeIcon}></img>
            <label className="mx-4 font-semibold cursor-pointer">App Kit</label>
          </a>
          <a href="#" className="flex mx-1 py-1 hover:bg-white rounded-lg px-2">
            <img src={textIcon}></img>
            <label className="mx-4 font-semibold cursor-pointer">
              API Integration
            </label>
          </a>
          <a href="#" className="flex mx-1 py-1 hover:bg-white rounded-lg px-2">
            <img src={textIcon}></img>
            <label className="mx-4 cursor-pointer font-semibold">Blog</label>
          </a>
        </section>
        <section className="">
          <a href="#" className="flex mx-1 py-2 hover:bg-white rounded-lg px-7">
            <img src={settingIcon}></img>
            <label className="mx-4 cursor-pointer font-semibold">Setting</label>
          </a>
          <a
            href="#"
            className="flex justify-between p-4 py-5 mt-1 w-full bg-white border-t-2 border-slate-300"
          >
            <div className="flex ">
              <div className="bg-blue-500 text-white w-8 h-7 text-center rounded-lg -ml-2">
                {shortHand}
              </div>
              <h1 className="mx-3">{name}</h1>
            </div>
            <img src={arrowIcon} className=""></img>
          </a>
        </section>
      </div>
    </aside>
  );
}
