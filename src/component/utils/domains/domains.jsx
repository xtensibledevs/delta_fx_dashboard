import { useState } from "react";
export default function Domains(props) {
  const [domainList, setDomainList] = useState([]);
  const handleAddDomainClick=()=>{
    
  }
  return (
    <div className="mx-5 my-5">
      <section className="flex justify-between">
        <h1 className="text-lg font-bold">Your Domains</h1>
        <button
          className=" px-5 py-2 text-white bg-blue-700 border-2 border-blue-700 rounded-lg hover:bg-white hover:text-blue-700"
          // onClick={handleAddDomainClick}
        >
          + Add Domain
        </button>
      </section>
      <section className="mt-5">
        <table className="w-full text-left rounded-xl">
          <tr className="bg-slate-200 p-5 ">
            <th>Domain</th>
            <th className="">Status</th>
            <th className="w-20">Actions</th>
          </tr>
        </table>
      </section>
    </div>
  );
}
